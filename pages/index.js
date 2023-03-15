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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <div className={styles.navbarContainer}>
          <navbar className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/shady">About</a>
            <a href="/contact">Contact</a>
            <a href="/api">API Soon</a>
            <a href="https://github.com/toki0179" target="_blank">Github</a>
          </navbar>
        </div>
        <div>
          <div className={styles.main}>
            <h1>Dingus.gay Nice</h1>
            <h3>This is very dingus.gay yesyes very nice website nice.</h3>
            <div className={styles.buttons}>
              <a href="#"><img className={styles.icon} src="/documentation.svg" />Documentation</a>
              <a href="https://github.com/toki0179/dingus.gay-new" target="_blank"><img className={styles.icon} src="/github-mark-white.svg" />Source</a>
            </div>
          </div>
        </div>    
      </main>
    </>
  )
}
