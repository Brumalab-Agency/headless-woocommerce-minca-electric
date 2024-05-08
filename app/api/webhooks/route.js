import axios from 'axios';
import { NextResponse } from 'next/server';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { sendEmail } from '@/utils/email/sendEmail';

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: 'wc/v3',
});

export async function GET(request) {
  return NextResponse.json({ message: 'Soy el servidor webhook' });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { inputData, cartData } = body;

    // Log the input and cart data received from the CheckoutForm
    console.log("Input data:", inputData);
    console.log("Cart data:", cartData);

    // Your payment webhook logic here...
    const url = new URL(request.url);
    const topic = url.searchParams.get('topic');
    const id = url.searchParams.get('id');
    if (topic === 'payment' && id) {
      const response = await axios.get(`https://api.mercadopago.com/v1/payments/${id}`, {
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${process.env.MERCADOPAGO_SECRET_KEY}`,
        },
      });
      const payment = response.data;

      if(payment.status === 'approved') {
        const data = {
          status: "completed"
        };
        const idOrderWoocomerce = payment.metadata.id_complete;
        await api.put(`orders/${idOrderWoocomerce}`, data);
        await sendEmail(inputData, cartData); // Pass inputData and cartData to the sendEmail function
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error in webhook route:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}
