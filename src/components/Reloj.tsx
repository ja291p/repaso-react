import React, { useEffect, useState } from "react";

export const Reloj = () => {
  const [fecha, setFecha] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <p>${fecha.toString()}</p>;
};
