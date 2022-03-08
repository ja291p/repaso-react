import React, { useState } from "react";

export const AddCategory = ({ setCategories }: addCategoryProps) => {
  const [category, setCategory] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (category.trim().length > 2) {
      setCategories((preCategories) => [category, ...preCategories]);
      setCategory("");
    }
  };

  return (
    <div>
      <h2>GifExpert App</h2>
      <form method="post" onSubmit={handleForm}>
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleInput}
        />
      </form>
      <hr />
    </div>
  );
};

interface addCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}
