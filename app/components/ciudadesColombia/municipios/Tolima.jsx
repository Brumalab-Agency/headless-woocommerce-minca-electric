import React from 'react';

const Tolima = ({ onChange }) => {
  const municipios = [
    "Alpujarra",
    "Alvarado",
    "Ambalema",
    "Anzoategui",
    "Armero guayabal",
    "Ataco",
    "Boqueron",
    "Buenos aires",
    "Cajamarca",
    "Caldas viejo",
    "Carmen de apicala",
    "Casabianca",
    "Castilla",
    "Chaparral",
    "Chenche asoleado",
    "Chicoral",
    "Coello - cocora",
    "Coello",
    "Convenio",
    "Coyaima",
    "Cunday",
    "Doima",
    "Dolores",
    "El limon",
    "El tablazo",
    "El totumo",
    "Espinal",
    "Falan",
    "Flandes",
    "Fresno",
    "Gaitania",
    "Gualanday",
    "Guamo",
    "Herbeo",
    "Herrera",
    "Honda",
    "Ibague",
    "Icononzo",
    "Junín",
    "Juntas",
    "La arada",
    "La chamba",
    "La palmita",
    "La sierra",
    "Lerida",
    "Libano",
    "Mariquita",
    "Melgar",
    "Murillo",
    "Natagaima",
    "Olaya herrera",
    "Ortega",
    "Padua",
    "Palocabildo",
    "Pastales nuevo",
    "Pastales viejo",
    "Payande",
    "Piedras",
    "Planadas",
    "Playarrica",
    "Prado",
    "Purificacion",
    "Rioblanco",
    "Roncesvalles",
    "Rovira",
    "Saldana",
    "San antonio",
    "San felipe",
    "San luis",
    "Santa isabel",
    "Santa teresa",
    "Santiago perez",
    "Suarez",
    "Tres esquinas",
    "Valle de san juan",
    "Velu",
    "Venadillo",
    "Villahermosa",
    "Villarestrepo",
    "Villa rica"
  ];

  return (
    <select
      name="Direccion1"
      id="Tolima"
      className="city_select select2-hidden-accessible inline-block w-full appearance-none rounded border border-gray-400 bg-gray-100 bg-opacity-50 py-3 pl-3 pr-8 leading-tight text-gray-500"

    >
      <option value="">Elige una opción…</option>
      {municipios.map((municipio, index) => (
        <option key={index} value={municipio}>
          {municipio}
        </option>
      ))}
    </select>
  );
};

export default Tolima;