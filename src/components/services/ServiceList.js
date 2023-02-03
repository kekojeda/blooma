import React from "react";
import { Service } from "./Service";

function ServiceList({ items }) {
  return (
    <>
      {items.map(({ id, title, image, services }) => (
        <Service
          id={id}
          title={title}
          image={image}
          key={id}
          services={services}
        />
      ))}
    </>
  );
}

export { ServiceList };
