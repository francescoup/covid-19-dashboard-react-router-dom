import React from "react";
import { sintomi } from "../Data/DataSintomi";
import Cards from "../Components/Card/Cards";
import { useTitle } from "../CustomHook";

const Sintomi = () => {
  useTitle("Possibili sintomi da contagio");

  return (
    <div className="mt-12">
      <section className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {sintomi.map((el, i) => {
          return (
            <Cards
              key={i}
              data={el.data}
              title={el.title}
              isTrue={true}
              iconClass={el.iconClass}
              icon={el.icon}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Sintomi;
