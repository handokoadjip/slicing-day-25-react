import { Article, Image } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    {
      image: "bg-image-2",
      title: "Deo Architect",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia voluptates modi esse doloremque ea a repellendus, officiis ipsam inventore.",
      href: "#",
    },
    {
      image: "bg-image-3",
      title: "IU Lorena",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia voluptates modi esse doloremque ea a repellendus, officiis ipsam inventore.",
      href: "#",
    },
    {
      image: "bg-image-4",
      title: "Blocks MIO",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia voluptates modi esse doloremque ea a repellendus, officiis ipsam inventore.",
      href: "#",
    },
    {
      image: "bg-image-5",
      title: "The Circle",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia voluptates modi esse doloremque ea a repellendus, officiis ipsam inventore.",
      href: "#",
    },
    {
      image: "bg-image-6",
      title: "Black & Gray",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia voluptates modi esse doloremque ea a repellendus, officiis ipsam inventore.",
      href: "#",
    },
    {
      image: "bg-image-7",
      title: "Arch But",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia voluptates modi esse doloremque ea a repellendus, officiis ipsam inventore.",
      href: "#",
    },
  ];

  return (
    <section>
      <div className="container-fluid">
        {lists ? (
          lists.map((list, index) => {
            return (
              <div className="row" key={`content-${index}`}>
                <Article
                  className={index % 2 === 0 ? "order-1" : "order-1 order-lg-0"}
                  title={list.title}
                  description={list.description}
                  href={list.href}
                />
                <Image
                  className={`${list.image} ${
                    index % 2 === 0 ? "order-0" : "order-0 order-lg-1"
                  }`}
                />
              </div>
            );
          })
        ) : (
          <h2 className="text-center">No List in this section</h2>
        )}
      </div>
    </section>
  );
};

export default index;
