import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthropolo</title>
        <meta name="Anthropolo" content="Built with ❤️ by Anthropolo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Anthropolo</a>
        </h1>
        <h2>Enter the new age of Web3</h2>
        <br />
        <br />
        <br />

        <div className={styles.grid}>
          <a href="https://construkt.anthropolo.io" 
          className={styles.card}
          target="_blank"
          >
            <h2>Construkt &rarr;</h2>
            <p>Native Web3 CMS</p>
          </a>

          <a
            href="https://myriad.anthropolo.io"
            className={styles.card}
            target="_blank"
          >
            <h2>Myriad &rarr;</h2>
            <p>Native Web3 Platform</p>
          </a>

          <a
            href="https://imaginarium.anthropolo.io"
            className={styles.card}
            target="_blank"
          >
            <h2>Imaginarium &rarr;</h2>
            <p>Native Web3 Apps</p>
          </a>

          <a href="https://polo.anthropolo.io" 
          className={styles.card}
          target="_blank"
          >
            <h2>Polo &rarr;</h2>
            <p>Native Web3 Browser</p>
          </a>

          <a href="https://replika.anthropolo.io" 
          className={styles.card}
          target="_blank"
          >
            <h2>Replika &rarr;</h2>
            <p>Native Web3 Search</p>
          </a>

          <a href="https://anthros.anthropolo.io" 
          className={styles.card}
          target="_blank"
          >
            <h2>Anthros &rarr;</h2>
            <p>Native Web3 DAO</p>
          </a>

          <a
            href="https://metagraph.anthropolo.io"
            className={styles.card}
            target="_blank"
          >
            <h2>Metagraph &rarr;</h2>
            <p>Native Web3 Graphs</p>
          </a>

          <a
            href="https://rostrum.anthropolo.io"
            className={styles.card}
            target="_blank"
          >
            <h2>Rostrum &rarr;</h2>
            <p>Native Web3 Gen AI</p>
          </a>

          <br />
          <br />
        </div>
        <p className={styles.description}>
          Get in touch with us at { }
          <a href='mailto:info@anthropolo.io'className={styles.link}><u>info@anthropolo.io</u></a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://anthropolo.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with ❤️ by {' '}
          <span className={styles.logo}>
            <img src="/footer.png" alt="Logo" width={80} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
