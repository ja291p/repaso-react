import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./estilo.css";

function App() {
  const [categories, setCategories] = useState<any>([]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      {categories.map((category: string) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
