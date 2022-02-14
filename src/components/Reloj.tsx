import React, { useEffect, useState } from "react";

export const Reloj = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <div>{date.toString()}</div>;
};
