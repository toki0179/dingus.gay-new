import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>FrauDetector</title>
        <meta name="description" content="FrauDetector is a public fraud database to prevent scammers from using your services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.navbarContainer}>
          <navbar className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/removal">Report</a>
            <a href="/removal">Removal</a>
            <a href="/api">Documentation</a>
            <a href="https://github.com/Fraud-Prevention-Database" target="_blank">Github</a>
          </navbar>
        </div>
        <div>
          <div className={styles.main}>
            <h1>FrauDetector</h1>
            <h3>An open source, public, secure fraud detection database for fraud prevention in billing solutions</h3>
            <div className={styles.buttons}>
              <a href="/api">Documentation</a>
              <a href="https://github.com/orgs/Fraud-Prevention-Database/repositories" target="_blank">Source</a>
              <a href="/integrations">Integrations</a>
            </div>
          </div>
        </div>    
      </main>
    </>
  )
}
