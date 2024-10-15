"use server";

import React from "react";

import Link from "next/link";
import Image from "next/image";

export const LastNews = ({ data }: { data: any }) => {
  return (
    <div>
      <div>{data.title}</div>
      {Object.keys(data.linked_sections).map((key) => (
        <React.Fragment key={key}>
          {data.linked_sections[key].items.map((section) => (
            <Link
              href={`${process.env.DOMAIN_URL}${section.url}`}
              key={section.title}
            >
              <span>{section.title}</span>

              <Image
                src={`${process.env.DOMAIN_URL}resources/catalog/images/${section.img}`}
                alt={section.title}
                width={200}
                height={200}
              />
            </Link>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
