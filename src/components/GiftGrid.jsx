import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <li key={category + "Section"}>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GiftGridItem key={id} title={title} url={url} />
        ))}
      </div>
    </li>
  );
};
