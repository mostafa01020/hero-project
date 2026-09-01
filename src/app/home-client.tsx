"use client";

import { useTina } from "tinacms/dist/react";
import Hero from "@/components/Hero";

export default function HomeClient(props: {
  data: any;
  query: string;
  variables: any;
}) {
  
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Hero
      title={data.home.title}
      content={data.home.content}
      images={data.home.images || []}
    />
  );
}