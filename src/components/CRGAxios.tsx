import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export const CRGAxios = () => {
  const [productos, setProductos] = useState<productCRGAxios[]>([]);
  const [pagina, setPagina] = useState(1);
  useEffect(() => {
    const url = `https://peticiones.online/api/products?page=${pagina}`;
    axios
      .get(url)
      .then(({ data: { data } }) => {
        //console.log(data);
        setProductos(data);
      })
      .catch(console.log);
  }, [pagina]);

  return (
    <>
      <div style={{ padding: "10px" }}>
        <button
          onClick={() => setPagina(pagina - 1)}
          className="btn btn-outline-primary"
        >
          Anterior
        </button>
        &nbsp;
        <button
          onClick={() => setPagina(pagina + 1)}
          className="btn btn-outline-primary"
        >
          Siguiente
        </button>
        <p>
          <strong>Pagina: </strong>
          {pagina}
        </p>
      </div>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {productos.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </>
  );
};

interface productCRGAxios {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  active: boolean;
}
