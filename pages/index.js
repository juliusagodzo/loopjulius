import Head from 'next/head'
import styles from '../styles/Home.module.css'
import loop from './api/loop.js'
import React, { useState } from 'react';
export default function Home() {

  const [number, setNumber] = useState(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Loop di Julius</title>
        <meta name="description" content="nothing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          loop di Julius
        </h1>

        <p className={styles.description}>
          inserisci un qualsiasi numero intero
        </p>

        <input className={styles.textbox} type="number" id="number" value={number} onInput={e => setNumber(e.target.value)}></input>
        <button className={styles.button} onClick={() => {loop.handleClick(number, false)}}>
            esegui
        </button>

        <div className={styles.subcontainer}>
          <textarea className={styles.textareacontainer} id="textArea" cols='60' rows='8'></textarea>
        </div>

        <button className={styles.button} onClick={() => {console.log("stop")}}>
            STOP
        </button>
      </main>

      <footer className={styles.footer}>
          Julius Agodzo
      </footer>
    </div>
  )
}
