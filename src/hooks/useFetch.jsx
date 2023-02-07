import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setResult(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [url, options]);

  return {result, loading}
}
