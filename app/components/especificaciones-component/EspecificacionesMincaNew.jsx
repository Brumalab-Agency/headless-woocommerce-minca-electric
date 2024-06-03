"use client";
import { manrope, ubuntu } from "@/ui/fonts";
import AddToCart from "../cart/AddToCart";
import ReactImagenGalleryLupaEspecificaciones from "../react-image-gallery/ReactImagenGalleryLupaEspecificaciones";
import { TablaEspecificaciones } from "./TablaEspecificaciones";
import Link from "next/link";
import DonwLoadManual from "../manuales/DonwLoadManual";
import { Acordion } from "../reusable/Acordion";
import { Testimonios } from "../testimonio/Testimonios";
import { useState, useEffect } from "react";
import TooltipEspecificaciones from "./TooltipEspecificaciones";
import PoliticaGarantia from "../manuales/politicaGarantia";
import { getOrderStatus } from "@/utils/checkout/utilsCheckout";

export const EspecificacionesMincaNew = (scooters) => {
  const [codigoOC, setCodigoOC] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [currentItem, setCurrentItem] = useState(scooters.scooters.productTypes.nodes[0].products.nodes[0]);

  const garantiaUrl = "https://test.mincaelectric.com/wp-content/uploads/2024/05/POLITICAS-DE-GARANTIA.pdf";
  const manualMinca = currentItem.sliderProductos.manualMinca.mediaItemUrl;

  useEffect(() => {
    const items = scooters.scooters.productTypes.nodes[0].products.nodes[0];
    setCurrentItem(items);
  }, [scooters]);

  const handleCodigoOCChange = async (e) => {
    setCodigoOC(e.target.value);
    if (e.target.value) {
      const status = await getOrderStatus(e.target.value);
      console.log(status);
      if (status && status === "completed") {
        console.log(e.target.value);
        setCurrentItem({
          ...currentItem,
          sliderProductos: {
            ...currentItem.sliderProductos,
            precioActual: selectedPaymentOption,
          },
        });
      }
    }
  };

  const handlePaymentOptionChange = (e) => {
    setSelectedPaymentOption(e.target.value);
    setCurrentItem({
      ...currentItem,
      sliderProductos: {
        ...currentItem.sliderProductos,
        precioActual: e.target.value,
      },
      stockStatus: "IN_STOCK",
    });
  };

  return (
    <div className="EspecificacionesAccesorios Productos-SIMPLES">
      <div className="justify-between p-4 lg:flex lg:justify-start lg:px-[100px] lg:py-[50px]">
        {/* Accesorios */}
        <ReactImagenGalleryLupaEspecificaciones items={currentItem} />
        <div className="lg:w-[50%]">
          {/* Título y descripción */}
          <div className="flex justify-between lg:ml-7">
            <div className="flex flex-col justify-center">
              <h2
                className={`${manrope.className} mb-1 text-[24px] font-bold uppercase text-[#111111] lg:text-[32px] lg:leading-[28px]`}
              >
                {currentItem?.title}
              </h2>
              <p
                className={`${manrope.className} mb-1 text-[12px] font-normal uppercase text-[#111111] lg:mt-4 lg:text-[26px] lg:font-medium`}
              >
                {currentItem?.sliderProductos.subtitulo}
              </p>
              <div className="flex items-center gap-3 lg:mt-6 lg:gap-4">
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111]/60 lg:text-[26px]`}
                >
                  <p className="text-[14px]">Antes</p>
                  <del>{currentItem?.sliderProductos.precioRebajado}</del>
                </div>
                <div
                  className={`${manrope.className} text-[24px] font-bold text-[#111111] lg:text-[26px]`}
                >
                  <p className="text-[14px]">Ahora</p>
                  {currentItem?.sliderProductos.precioActual}
                </div>
                <span className="items-center justify-center rounded-full bg-[#FF3333] bg-opacity-10 px-2.5 py-0.5 text-[#FF3333] lg:inline-flex lg:h-8 lg:px-[14px] lg:py-[6px]">
                  <p
                    className={`${manrope.className} whitespace-nowrap text-sm`}
                  >
                    {currentItem?.sliderProductos.descuento}
                  </p>
                </span>
              </div>
              <p
                className={`${ubuntu.className} text-[14px] font-normal leading-[15px] text-[#42454A] lg:mt-5 lg:w-[90%] lg:text-[16px] lg:leading-[25px]`}
              >
                {currentItem?.sliderProductos.description}
              </p>

              <hr className="my-4 border-[#464646]" />

              {currentItem?.title === "Scooter Eléctrico Minca 350W" && (
                <form>
                  <div className="mb-4 flex items-center space-x-2">
                    <h4 className="inline-block text-xl font-semibold">
                      Preventa
                    </h4>
                    <TooltipEspecificaciones tooltips={"si"} />
                  </div>

                  <div className="mb-3 h-auto w-full rounded-[10px] border-[1px] border-[#464646] bg-[#F0F1EB]">
                    <div className="flex flex-col items-start">
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <label className="radio-container mr-4">
                          <input
                            type="radio"
                            name="paymentOption"
                            value="$1.125.000"
                            checked={selectedPaymentOption === "$1.125.000"}
                            onChange={handlePaymentOptionChange}
                            className="radio-input mr-2"
                          />
                          <div className="flex items-center justify-start">
                            <span className="radio-custom"></span>
                            <p>Pago parcial $1.125.000</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 h-auto w-full rounded-[10px] border-[1px] border-[#464646] bg-[#F0F1EB]">
                    <div className="flex flex-col items-start">
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <label className="radio-container mr-4">
                          <input
                            type="radio"
                            name="paymentOption"
                            value="$1.125.000"
                            checked={selectedPaymentOption === "$1.125.000"}
                            onChange={handlePaymentOptionChange}
                            className="radio-input mr-2"
                          />
                          <div className="flex items-center justify-start">
                            <span className="radio-custom"></span>
                            <p>Segundo pago $1.125.000</p>
                          </div>
                        </label>
                      </div>
                      <hr className="w-full border-b-[1px] border-[#464646]" />
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <div className="flex items-center justify-start gap-5">
                          <p>Número de O/C:</p>
                          <input
                            type="text"
                            value={codigoOC}
                            onChange={handleCodigoOCChange}
                            className="w-[50%] rounded-[5px] border-[1px] border-[#464646] p-2 text-[12px]"
                            placeholder="Añádelo aquí."
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 h-auto w-full rounded-[10px] border-[1px] border-[#464646] bg-[#F0F1EB]">
                    <div className="flex flex-col items-start">
                      <div className="ml-3 grid h-[50px] w-full place-items-center justify-start">
                        <label className="radio-container mr-4">
                          <input
                            type="radio"
                            name="paymentOption"
                            value="$2.100.000"
                            checked={selectedPaymentOption === "$2.100.000"}
                            onChange={handlePaymentOptionChange}
                            className="radio-input mr-2"
                          />
                          <div className="flex items-center justify-start">
                            <span className="radio-custom"></span>
                            <p>Pago completo $2.100.000</p>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Botón y contador */}
          <div className="contador-btnAddCart mt-4 flex w-full items-center gap-4 lg:ml-7 lg:w-[85%] 2xl:w-[70%]">
            <div className="w-full flex-col justify-center lg:flex">
              <AddToCart
                key={currentItem?.databaseId}
                producto={currentItem}
                clases="lg:w-[80%] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 grid h-auto w-full grid-cols-1 lg:grid-cols-2 2xl:h-auto">
        <TablaEspecificaciones scooters={scooters} />
        <div className="h-auto w-full px-4 pb-10 lg:pl-[16px] lg:pr-[96px]">
          <div className="mt-16 flex items-center justify-between lg:mt-[80px]">
            <div className="lg:w-full">
              <h2 className="border-b-2 border-[#111]">Información adicional</h2>
            </div>
          </div>
          <video
            className="top-0 mt-8 h-[355px] w-auto object-cover lg:block lg:h-[78%]"
            src="https://test.mincaelectric.com/wp-content/uploads/2024/04/videoplayback_prueba.mp4"
            autoPlay
            controls
            muted
            loop
          />
          <div className="mb-4 flex items-center justify-around space-x-2">
            <DonwLoadManual manualMinca={manualMinca} item={currentItem} />
            <PoliticaGarantia garantia={garantiaUrl} item={currentItem} />
          </div>
        </div>
      </div>
      {/* Review */}
      <Testimonios />
      <Acordion clase="mx-0 mb-0" />
    </div>
  );
};
