import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Earnable</title>
        <meta name="description" content="Earnable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        TEST
      </main>
    </div>
  )
}
