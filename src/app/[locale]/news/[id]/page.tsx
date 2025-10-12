import React from "react";
import NewsComponent from "@/components/news-component/news-component";

export default async function NewsById({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <NewsComponent id={locale || ""} />
    </div>
  );
}
