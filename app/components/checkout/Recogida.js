import Error from "./Error";
import Abbr from "./fomr-elements/Abbr";
import ArrowDown from "./iconCheckOut/ArrowDown";

const RecogidaSelection = ({ input, handleOnChange }) => {
  const { RetirarEn, errors } = input || {};

  const inputId = "RetirarEn";

  
  
  return (
    <div className="mb-3">
      <label className="text-sm leading-7 text-[#111] font-bold" htmlFor={inputId}>
        Envío
        <Abbr required />
      </label>
      <div className="relative w-full border-none">
        <select
          onChange={handleOnChange}
          value={RetirarEn}
          name="RetirarEn"
          className="inline-block w-full appearance-none rounded border border-[#F0F1EB] bg-white bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"
          id={inputId}
        >
          <option value="">Seleccione un sitio de recogida...</option>
          <option value="Bogotá: $45.000">
            Bogotá: $45.000
          </option>
          <option value="Javeriana Cra. 7 #45-10">Javeriana Cra. 7 #45-10</option>
          <option value="Chico Cra. 11a #94a-56">Chico Cra. 11a #94a-56</option>
          <option value="Cedritos Av. Cra 19 #143a-8">Cedritos Av. Cra 19 #143a-8</option>
        </select>
        <span className="absolute right-0 mr-1 text-[#111]" style={{ top: "25%" }}>
          <ArrowDown width={24} height={24} className="fill-current" />
        </span>
      </div>
      <Error errors={errors} fieldName="RetirarEn" />
    </div>
  );
};

export default RecogidaSelection;
