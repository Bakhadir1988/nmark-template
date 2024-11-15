"use server";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { LatestNewsDto } from "./types";

import styles from "./last-news.module.scss";

import noPhoto from "../../app/assets/images/no-photo.jpg";

export const LatestNews = ({ data }: { data: LatestNewsDto }) => {
  return (
    <section className={styles.root}>
      <div className="container">
        <h2>{data.title}</h2>
        <div className={styles.items}>
          {data.linked_sections.map((section) =>
            section.items.map((item) => (
              <Link href={`${process.env.DOMAIN_URL}${item.url}`} key={item.id}>
                <Image
                  src={
                    item.img
                      ? `${process.env.DOMAIN_URL}/resources/catalog/images/${item.img}`
                      : noPhoto
                  }
                  alt={item.title}
                  width={300}
                  height={200}
                />
                <span>{item.title}</span>
                {item.announce && (
                  <div dangerouslySetInnerHTML={{ __html: item.announce }} />
                )}
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
