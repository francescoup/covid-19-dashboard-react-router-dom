import React from "react";
import Cards from "../Components/Card/Cards";
import ChartsVaccini from "../Components/Charts/ChartsVaccini";
import PieCharts from "../Components/PieCharts/PieCharts";
import Table from "../Components/Table/Table";
import { useLoaderData } from "react-router-dom";
import { useVacciniFilter, useTitle } from "../CustomHook";
import { barData, pieDataCharts } from "../Utilities/chartsData";
import { barChart, pieConfiguration } from "../Utilities/configurationsCharts";

const Vaccines = () => {
  const { vaccini, dosiVaccini, anagraficaVaccini } = useLoaderData();
  const data = pieDataCharts(anagraficaVaccini);
  const dataVaccini = useVacciniFilter(vaccini);
  const dataBarChart = barData(anagraficaVaccini);
  useTitle("Andamento campagna vaccinale");

  return (
    <div className="mt-12">
      <section className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {dataVaccini.map((el, i) => {
          return <Cards key={i} {...el} />;
        })}
      </section>
      <section className="mb-4 grid grid-cols-1 gap-x-6 gap-y-9 xl:grid-cols-3">
        <ChartsVaccini dati={dataBarChart} options={barChart} />
        <PieCharts data={data} options={pieConfiguration} />
      </section>
      <section className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
        <Table data={dosiVaccini} />
      </section>
    </div>
  );
};

export default Vaccines;
