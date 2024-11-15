import { LatestNews } from "@/components/last-news";
import { LatestNewsDto } from "@/components/last-news/types";
import { get } from "@/shared/tools/api";
import React from "react";

interface Block {
  manual_url: string;
  item_id: number;
}

function blockRenderer(block: Block) {
  switch (block.manual_url) {
    case "poslednie-novosti":
      return (
        <LatestNews
          key={block.item_id}
          data={block as unknown as LatestNewsDto}
        />
      );
    default:
      return null;
  }
}

const HomePage = async () => {
  const data = await get("home-page");

  if (!data.blocks) return <div>Блоки не найдены</div>;

  return <main>{data.blocks.map((block: Block) => blockRenderer(block))}</main>;
};

export default HomePage;
