import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dingus</title>
        <meta name="description" content="Play with my dingus please :))))" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.navbarContainer}>
          <navbar className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/about">Nothing</a>
            <a href="/contact">Nothing</a>
            <a href="/removal">Nothing</a>
            <a href="/removal">Nothing</a>
            <a href="/api">Nothing</a>
            <a href="https://github.com/toki0179" target="_blank">Github</a>
          </navbar>
        </div>
        <div>
          <div className={styles.main}>
            <h1>Dingus.gay Nice</h1>
            <h3>This is very dingus.gay yesyes very nice website nice.</h3>
            <div className={styles.buttons}>
              <a href="/api">Documentation</a>
              <a href="https://github.com/toki0179" target="_blank">Source</a>
              <a href="/integrations">Nothing</a>
            </div>
          </div>
        </div>    
      </main>
    </>
  )
}
