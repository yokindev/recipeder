import { useEffect, useState } from "react";

export const Recipe = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(id);
        const json = await res.json();
        setData(json.recipe);
      } catch (error) {
        console.log(error);
      }

      return { data };
    };
    fetchData();
  }, [id]);

  if (data) {
    console.log(data);
  }
};
