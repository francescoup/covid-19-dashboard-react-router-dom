export const Tables = ({ data, isTrue }) => {
  return (
    <>
      {data.map((el, i) => {
        return (
          <tr key={i}>
            <td key={`denominazione-regione-${i}`}>
              {isTrue ? el.denominazione_regione : el.reg}{" "}
            </td>
            <td key={`deceduti-e-dosi-${i}`}>
              {isTrue ? el.deceduti : el.dosi_consegnate}
            </td>
            <td key={`guariti-e-dosi-${i}`}>
              {isTrue ? el.dimessi_guariti : el.dosi_somministrate}
            </td>
            <td key={`totale-casi-${i}`}>
              {isTrue ? (
                el.totale_casi
              ) : (
                <span
                  className={`${
                    el.percentuale_somministrazione >= 89.9
                      ? "bg-blue-700 text-white"
                      : "bg-yellow-300 text-gray-800"
                  } rounded-xl p-1 px-2`}
                >
                  {`${el.percentuale_somministrazione}%`}
                </span>
              )}
            </td>
          </tr>
        );
      })}
    </>
  );
};
