import { useState } from "react";
import { AddCategory } from "./components/AddCategoryPrac";

export const GiftExpertApp = () => {
  const [category, setCategory] = useState([]);
  const onAddCategory = (value) => {
    setCategory((cat) => [...cat, value]);
  };
  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ul>
        {category.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ul>
    </>
  );
};
