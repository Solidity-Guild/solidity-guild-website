import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>⚔️</p>
      <p className={styles.title}>Solidity Guild is a collective of web3 and crypto developers.</p>
      <p className={styles.title}>Looking to build something cool?</p>
      <p className={styles.title}><a href="https://docs.google.com/forms/d/e/1FAIpQLScR27DuDC_fPAwZXWFDKpZ8RUN_vBJnzM1zku0F1gKgen-hJw/viewform?usp=sf_link" target="_blank" rel="noreferrer">Reach Out.</a></p>
    </div>
  )
}
