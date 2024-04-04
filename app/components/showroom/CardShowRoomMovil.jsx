import Link from "next/link";
import { manrope, ubuntu } from "../../ui/fonts";
import { BotonRelativo } from "../botones/BotonRelativo";

export const CardShowRoomMovil = ({clase, icono, titulo, direccion, ciudad, entreSemana, sabado, domingo, url}) => {
  return (
    <div>
        <section className={`${clase} p-4 h-[400px] lg:hidden`}>
            <div className="p-1">
                <img className="w-[41px] h-[41px]" src={icono} alt="icon scooter"/>
                <h1 className={`${manrope.className} font-bold text-[40px]`}>TALLER</h1>
                <h2 className={`${manrope.className} font-semibold text-[24px] uppercase`}>{titulo}</h2>
                <div className={`${ubuntu.className} text-[14px] leading-[25px]`}>
                    <p>Cra. 11a #94a-56</p>
                    <p>Bogotá, Colombia</p>
                    <br></br>
                    <span>
                       <p>Lunes a viernes: 10:00 a.m. - 7:00 p.m.</p>
                       <p>Sábados: 10:00 a.m. - 6:00 p.m.</p>
                       <p>Domingos: 11:00 a.m. - 5:00 p.m.</p>
                    </span>
                </div>
            </div>
            <div className="mt-4 grid place-items-center">
              <Link href={url} className="bg-[#111] text-white py-[15px] px-[55px] rounded-[52px] ">Agendar Mantenimiento</Link>
            </div>
        </section>
    </div>
  )
}
