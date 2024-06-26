"use client"
import { Separador } from "@/(pages)/separador/Separador";
import { TProductVariant } from "@/components/titulos/TProductVariant";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AccesoriosPage } from "@/lib/graphQLRequest";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CarruselAccesorios = () => {
  const [accesorios, setAccesorios] = useState([]);

  useEffect(() => {
    const fetchAccesorios = async () => {
      const data = await AccesoriosPage();
      setAccesorios(data.products.nodes);
    };
    fetchAccesorios();
  }, []);

  const separadorDeMiles = (numero) => {
    let partesNumero = numero?.toString().split(',');
    partesNumero[0] = partesNumero[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return partesNumero.join('.');
  }

  const paths = [
    "Casco Integral Minca",
    "Poncho Minca",
    "Gafas‎ Minca",
    "On Guard U-look",
    "Baúl Minca",
    "On Guard Guaya",
  ];

  accesorios.map((accesorio, index) => {
    if (accesorio.name === paths[0]) {
      accesorio.name = "Casco_Integral_Minca";
    }
  
    if (accesorio.name === paths[1]) {
      accesorio.name = "Poncho_Minca";
    }
  
    if (accesorio.name === paths[2]) {
      accesorio.name = "Gafas_Minca"; 
    }
  
    if (accesorio.name === paths[3]) {
      accesorio.name = "On_Guard_U-look";
    }
  
    if (accesorio.name === paths[4] || accesorio.name === "Ba%C3%BAl_Minca") {
      accesorio.name = "Baúl_Minca";
    }
  
    if (accesorio.name === paths[5]) {
      accesorio.name = "On_Guard_Guaya";
    }
  })

  return (
    <div className="MincaAccesorios mb-[65] h-auto w-full overflow-x-hidden bg-white pl-4 lg:mb-0 lg:mt-[80px] lg:pl-[100px] 2xl:mt-[100px]">
      <div className="py-4  lg:h-[710px] lg:w-auto">
        <div className="h-auto w-full">
          <div className="flex w-full items-center justify-between px-4 leading-[42px] lg:px-0">
            <TProductVariant
              titulo="Accesorios MINCA,"
              subtitulo="estilo y seguridad..."
              flexion="lg:flex"
            />
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="marcador -mt-[50px] w-full pt-[120px]"
          >
            <CarouselContent className=" marcador 2">
              {accesorios.map((accesorio, index) => (
                <CarouselItem
                  key={`carrousel-accesorios-${index}`}
                  className={` h-auto w-full basis-1/2 md:basis-1/2 lg:basis-1/4 2xl:basis-1/6 ${index === 0 ? "2xl:mr-20" : "2xl:mx-20"}`}
                >
                  <Link href={`/accesorios/${accesorio.name}`}>
                    <div className="h-[430px]] card-height w-full p-1  ">
                      <Card className="h-auto w-auto rounded-[13px] bg-[#F0EEED] lg:h-[298px] lg:w-[295px] 2xl:h-auto 2xl:w-[400px]">
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <img
                            className="h-auto w-[350px]"
                            src={accesorio.image.mediaItemUrl}
                            alt={accesorio.name.replace(/_/g, " ")}
                          />
                        </CardContent>
                      </Card>
                      <p className="mt-[10px] text-base font-bold lg:text-[20px] 2xl:text-[28px]">
                        {accesorio.name.replace(/_/g, " ")}
                      </p>
                      <div className="btnCardAccesorios h-[100px] w-full">
                        <p className="mb-[10px] text-[20px] font-bold leading-[40px] 2xl:text-[24px]">
                          $ {separadorDeMiles(accesorio?.price.slice(0, 6))}
                        </p>
                        <Link
                          href={`/accesorios/${accesorio.name}`}
                          className="mt-4 rounded-[52px] bg-[#111] px-[20px] py-[10px] text-white"
                        >
                          Ver accesorio
                        </Link>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious izquierda=" lg:top-[6%] lg:left-[85%] 2xl:left-[87%]" />
            <CarouselNext derecha=" lg:top-[6%] lg:right-[7%] 2xl:right-[5%]" />
          </Carousel>
        </div>
      </div>
      <Separador clases="hidden" />
    </div>
  );
};
