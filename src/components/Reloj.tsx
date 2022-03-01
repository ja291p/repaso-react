import React, { useEffect, useState } from "react";

export const Reloj = () => {
  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setFecha(new Date()), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <>{fecha.toString()}</>;
};
