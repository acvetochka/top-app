// import Image from "next/image";
// import styles from "./page.module.css";
import { Button, Paragraph, Tag, Title } from "@/components";

export default function Home(): JSX.Element {
  return (
    <main>
      <Title tag="h1">Title</Title>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
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
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
          <h2>
            Deploy {a} <span>-&gt;</span>
          </h2>
          <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
        </a>
      </div> */}
    </main>
  );
}
