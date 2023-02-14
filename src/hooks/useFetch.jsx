import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.hits);
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.log(error);
      }
    })();
  }, [url]);

  return { data };
};
