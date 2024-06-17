"use client";
import useEmailData from "@/store/dataorder.store";
import { useState } from "react";


export const BtnAddi = ({ preciopagar, idOrder }) => {
  const [totalPrice, setDefinitivePrice] = useState(sessionStorage.getItem("price"));
  const [input, setInput] = useState(JSON.parse(sessionStorage.getItem("data")));
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart")));
  const [status, setStatus] = useState("pending");
  const shiipinPrice = sessionStorage.getItem("shippingPrice")
  const url = `/api/get-order-status?orderId=${idOrder}`

  const setProducts = useEmailData((state) => state.setProducts);
  setProducts(cart);

  const setClientData = useEmailData((state) => state.setClientData);
  setClientData(input);


  fetch(url)
    .then(
      response => response.json(),
      error => {
        console.log("No! error occured.", error);
        throw error;
      }
    )
    .then(status => {
      console.log("speakers success", status);
      setStatus(status)
    })
    .catch(error => {
      console.log("Return Error by throwing", error);
      throw error;
    });

  const handlePayment = async () => {
    const paymentData = {
      orderId: idOrder,
      totalAmount: totalPrice,
      shippingAmount: shiipinPrice,
      currency: "COP",
      items: cart.map(item => ({
        sku: item.sku,
        name: item.name,
        quantity: item.quantity.toString(),
      })),
      client: {
        idType: "CC",
        idNumber: input.shipping.NumeroIdentificacion || input.billing.NumeroIdentificacion, 
        firstName: input.shipping.Nombre || input.billing.Nombre, 
        lastName: input.shipping.Apellido || input.billing.Apellido,
        email: input.shipping.Email || input.billing.Email,
        cellphone: input.shipping.Telefono || input.billing.Telefono,
        cellphoneCountryCode: "+57",
        address: {
          lineOne: input.shipping.Direccion1 || input.billing.Direccion1,
          city: input.shipping.Ciudad || input.billing.Ciudad,
          country: "CO",
        },
      },
      allyUrlRedirection: {
        callbackUrl: "https://e33c-2800-e2-57f-f643-6008-798b-1b9e-19ee.ngrok-free.app/api/webhook-addi",
        redirectionUrl: `https://e33c-2800-e2-57f-f643-6008-798b-1b9e-19ee.ngrok-free.app/pagoaddi/${status}`,
      },
      geoLocation: {
        latitude: "0",
        longitude: "0"
      }
    };

    console.log(paymentData)

    const response = await fetch('/api/addi', {
      method: 'POST',
      headers: {
        "Content-Type": "text/html"
      },
      body: JSON.stringify(paymentData),
    });
    
    const data = await response.json();
    if (data.url) {
        window.location.href = data.url;
    } else {
        console.error('Redirection URL not provided');
    }
  };

  return (
    <div className="m-auto h-auto w-full lg:w-[300px] ">
      <button onClick={handlePayment}>
      <img
          className="h-auto w-[50px] mt-2 -ml-3 pr-3"
          src="/pagoPage/addi_checkout.png"
          alt="store"
        />
        Pagar con Addi
      </button>
    </div>
  );
};

export default BtnAddi;
