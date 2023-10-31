import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    setCategories((cat) => [...cat, onNewCategory]);
  };
  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory
        // onAddCategory={setCategories}
        onNewCategory={onAddCategory}
      />
      <ul>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};
