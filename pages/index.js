import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthropolo</title>
        <meta name="Anthropolo" content="Inspired with ❤️ by Anthropolo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Anthropolo</a>
        </h1>
        <h2>Building a new internet on Web3</h2>
        <br />
        <br />
        <br />

        <div className={styles.grid}>
          <a href="https://anthropolo.io" 
          className={styles.card}
          >
            <h2>Polo &rarr;</h2>
            <p>Web3 Browser</p>
          </a>

          <a href="https://anthropolo.io" 
          className={styles.card}
          >
            <h2>Replika &rarr;</h2>
            <p>Web3 Search Engine</p>
          </a>

          <a href="https://anthropolo.io" 
          className={styles.card}
          >
            <h2>Anthros &rarr;</h2>
            <p>Web3 DAO</p>
          </a>

          <a
            href="https://anthropolo.io"
            className={styles.card}
          >
            <h2>Metagraph &rarr;</h2>
            <p>Web3 DLT</p>
          </a>

          <a
            href="https://anthropolo.io"
            className={styles.card}
          >
            <h2>Myriad &rarr;</h2>
            <p>Web3 Applications</p>
          </a>

          <a
            href="https://anthropolo.io"
            className={styles.card}
          >
            <h2>Rostrum &rarr;</h2>
            <p>Web3 AI</p>
          </a>

          <br />
          <br />
          
          <p className={styles.description}>
          Get in touch with us at { }
          <a href='mailto:info@anthropolo.io'className={styles.link}><u>info@anthropolo.io</u></a>
        </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://anthropolo.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Inspired with ❤️ by {' '}
          <span className={styles.logo}>
            <img src="/footer.png" alt="Logo" width={80} height={20} />
          </span>
        </a>
      </footer>
    </div>
  )
}
