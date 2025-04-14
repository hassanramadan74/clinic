import React from "react";
import BeforeAfter from "@/components/BeforeAndAfter";

async function getBeforeAfterItems() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/beforeafter`,
      {
        next: { revalidate: Number(process.env.NEXT_PUBLIC_REVALIDATE_TIME) },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      description: item.description,
      procedureDetails: item.procedure_details,
    }));
  } catch (error) {
    console.error("Failed to fetch before after items:", error);
    return [];
  }
}

export default async function Transformation() {
  const items = await getBeforeAfterItems();

  return (
    <>
      <BeforeAfter items={items} />
    </>
  );
}
