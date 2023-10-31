import React from "react";

export const GiftGridItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  );
};
