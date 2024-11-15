"use server";

export const get = async (url: string) => {
  const domainUrl = process.env.DOMAIN_URL ?? "";
  const data = await fetch(`${domainUrl}/api/${url}`, {
    mode: "cors",
    cache: "force-cache",
  });
  return data.json();
};
