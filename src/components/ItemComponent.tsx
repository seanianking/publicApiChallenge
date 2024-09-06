import React from "react";

interface ItemProps {
  item: any;
}

const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="container flex items-center">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <img src={item.sprites.front_default} alt={item.name} />
      </div>

      <p>Type: {item.types.map((type: any) => type.type.name).join(", ")}</p>
      <p>Height: {item.height}</p>
      <p>Weight: {item.weight}</p>
    </div>
  );
};

export default ItemComponent;
