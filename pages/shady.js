import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Shady() {
  return (
    <>
      <Head>
        <title>Shady | Profile</title>
        <meta name="description" content="Play with my dingus please :))))" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"></link>
        inport the javascript to set the width of buttons
        <Script src="/setWidth.js" />
      </Head>
      <main className={styles.profileBackground}>
        <div>
          <div className={styles.main}>
          <img id="profile" className={styles.profile} src="https://feds.ventryshield.net/?url=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Furbanlegendsonline.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fthe_shadowy_hat.jpg" />
            <div className={styles.profileContainer}>
                <h1>Shady</h1>
                <h3 className={styles.quoteText}>“You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches.”</h3>
                <h3 className={styles.quoteAuthor}>― Dita Von Teese</h3>

            </div>
            <div id="buttons" className={styles.buttons}>
                <a href="https://discord.gg/freecrack" target="_blank"><img className={styles.icon} src="/discord-mark-blue.svg" />Discord</a>
                <a href="https://github.com/toki0179/" target="_blank"><img className={styles.icon} src="/github-mark-white.svg" />Github</a>
                <a href="https://www.youtube.com/@Toki-on9ju" target="_blank"><img className={styles.icon} src="/youtube.svg" />YouTube</a>
                <a href="https://twitter.com/toki0279" target="_blank"><img className={styles.icon} src="/twitterBlue.svg" />Twitter</a>
            </div>
          </div>
        </div>    
      </main>
    </>
  )
}
