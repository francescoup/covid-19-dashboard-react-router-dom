import { useEffect } from "react";

export const useTitle = (title) => {
  //custom hook for use the title of the page in the document

  useEffect(() => {
    document.title = `Covid 19 Dashboard - ${title}`;
  }, [title]);
};
