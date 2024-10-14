"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axiosInstance from "@/shared/tools/api";

interface DataItem {
  title: string;
  items: {
    content: string;
  }[];
}

export default function Home() {
  const [data, setData] = useState<DataItem[] | null>(null);

  useEffect(() => {
    axiosInstance
      .get("/?json=1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data", data);

  return (
    <div>
      {data?.map((item: DataItem, index: number) => (
        <div key={index} className={styles.main}>
          <h1>{item.title}</h1>
          {item.items.map((item: { content: string }, index: number) => (
            <div key={index}>
              <h2 />
              <p dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
