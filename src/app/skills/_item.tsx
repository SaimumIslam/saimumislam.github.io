import React from "react";

interface Props {
  title: string;
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const Item: React.FC<Props> = ({ title, items }) => {
  return (
    <div>
      <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
        {title}
      </h1>
      <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm text-center font-medium text-muted-foreground">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
