import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          content="Generated by create next app"
          name="description"
        />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
        <link
          href="/favicon.ico"
          rel="icon"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              rel="noopener noreferrer"
              target="_blank"
            >
              By{' '}
              <Image
                priority
                alt="Vercel Logo"
                className={styles.vercelLogo}
                height={24}
                src="/vercel.svg"
                width={100}
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            priority
            alt="Next.js Logo"
            className={styles.logo}
            height={37}
            src="/next.svg"
            width={180}
          />
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            className={styles.card}
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
