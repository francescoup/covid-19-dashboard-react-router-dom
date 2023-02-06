import React from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import ChartsCovid from "../Components/Charts/ChartsCovid";
import PieCharts from "../Components/PieCharts/PieCharts";
import Table from "../Components/Table/Table";
import MiniCard from "../Components/MiniCard/MiniCard";
import Cards from "../Components/Card/Cards";
import {
  useCovidFilter,
  useChartsCovid,
  useDataRicoveri,
  useTitle,
} from "../CustomHook";
import { lineData, DoughnutData } from "../Utilities/chartsData";
import {
  lineConfiguration,
  pieConfiguration,
} from "../Utilities/configurationsCharts";

const Home = () => {
  const { nazionali, latestNazionali, regionali, latestRegionali } =
    useLoaderData();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("regione");
  const [dataChart, dataPieChart] = useChartsCovid(
    latestRegionali,
    filter,
    nazionali,
    latestNazionali
  );
  const dataCovid = useCovidFilter(latestNazionali, regionali, filter);
  const dataRicoveri = useDataRicoveri(filter, latestNazionali, regionali);
  const dataLineChart = lineData(dataChart);
  const dataDoughnut = DoughnutData(dataPieChart);
  useTitle("Andamento contagi");

  return (
    <div className="mt-12">
      <section className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {dataCovid.map((el, i) => {
          return <Cards key={i} {...el} />;
        })}
      </section>

      <section className="mb-4 grid grid-cols-1 gap-x-6 gap-y-9 xl:grid-cols-3">
        <ChartsCovid dati={dataLineChart} options={lineConfiguration} />
        <PieCharts
          data={dataDoughnut}
          options={pieConfiguration}
          isTrue={true}
        />
      </section>
      <section className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Table data={regionali} isTrue={true} />
        <MiniCard data={dataRicoveri} />
      </section>
    </div>
  );
};

export default Home;
