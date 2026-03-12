import { useEffect, useState } from "react";

export function useLoading(time: number) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, time);
  }, [time]);

  return { loading }
}