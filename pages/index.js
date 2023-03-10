import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.body}>

        <main className={styles.main}>
          <Link className={styles.links} href="/useEffectOne">useEffectOne</Link>
          <Link className={styles.links} href="/useEffectTwo">useEffectTwo</Link>
          <Link className={styles.links} href="/useEffectThree">useEffectThree</Link>
          <Link className={styles.links} href="/carouselPage">Carousel Page</Link>
        </main>

      </div>
    </>
  )
}
