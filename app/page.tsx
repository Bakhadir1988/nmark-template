import { LastNews } from "@/shared/components/last-news";
import { get } from "@/shared/tools/api";

interface Block {
  manual_url: string;
  item_id: number;
}

function blockRenderer(block: Block) {
  switch (block.manual_url) {
    case "poslednie-novosti":
      return <LastNews key={block.item_id} data={block} />;
    default:
      return null;
  }
}

const Home = async () => {
  const data = await get("/?json=1");

  if (!data.blocks) return <div>Блоки не найдены</div>;

  return <main>{data.blocks.map((block: Block) => blockRenderer(block))}</main>;
};

export default Home;
