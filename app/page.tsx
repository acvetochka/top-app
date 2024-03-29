// "use client";

import { Button, Input, Paragraph, Tag, Textarea, Title } from "@/components";
import { Metadata } from "next";
import { meta } from "@/data/metadata";
// import { useState } from "react";
export const metadata: Metadata = meta;


export default async function Home() {
  // const [counter, setCounter] = useState<number>(0);
  // const [rating, setRating] = useState<number>(4);

  return (
    <main>
      <Title tag="h1">Title</Title>
      {/* <Title tag="h1">{counter}</Title> */}
      {/* <Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}> 
        Button
      </Button> */}
      <Button appearance="ghost" arrow="down">
        Button2
      </Button>
      <Paragraph size="small">Small text</Paragraph>
      <Paragraph>Large text</Paragraph>
      <Paragraph size="large">Large text</Paragraph>
      <Tag size="large">Large Tag</Tag>
      <Tag size="large" color="red">
        Large Tag Red
      </Tag>
      <Tag size="small" color="green">
        Small Tag Green
      </Tag>
      <Tag color="accent">Accent Tag</Tag>
      {/* <Rating rating={rating} isEditable setRating={setRating} /> */}

      <Input placeholder="Test" />
      <Textarea />
    </main>
  );
}
