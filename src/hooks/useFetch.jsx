import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [result, setResult] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResult(data);
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.log(error)
      }
    })();
  }, [url]);

  return { result };
}
