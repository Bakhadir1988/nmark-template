"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axiosInstance from "@/shared/tools/api";

export default function Home() {
  const [data, setData] = useState<any>(null);

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
      {data?.map((item: any, index: number) => (
        <>
          <hr />
          <div key={index} className={styles.main}>
            <h1>{item.title}</h1>
            {item.items.map((item: any, index: number) => (
              <div key={index}>
                <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
