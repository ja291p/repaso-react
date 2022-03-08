import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./estilo.css";

function App() {
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <>
      <AddCategory setCategories={setCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
