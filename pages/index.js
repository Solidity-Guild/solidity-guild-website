import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>⚔️</p>
      <p className={styles.title}>Solidity Guild is a collective of web3 and crypto developers.</p>
      {/* <p className={styles.title}>Looking to build something cool?</p> */}
      <p className={styles.title}><a href="https://docs.google.com/forms/d/e/1FAIpQLScR27DuDC_fPAwZXWFDKpZ8RUN_vBJnzM1zku0F1gKgen-hJw/viewform?usp=sf_link" target="_blank" rel="noreferrer">Reach Out</a>.</p>

      <div className={styles.section}>
        <p className={styles.title}>We Can Write Contracts for...</p>
        <p className={styles.paragraph}>NFTs</p>
        <p className={styles.paragraph}>Tokens</p>
        <p className={styles.paragraph}>Staking and LP rewards</p>
        <p className={styles.paragraph}>NFT Marketplaces</p>
        <p className={styles.paragraph}>DEXs</p>
        <p className={styles.paragraph}>Token Vesting</p>
        <p className={styles.paragraph}>Whatever your heart desires</p>
      </div>
      
      <div className={styles.section}>
        <p className={styles.title}>And We Can Help You...</p>
        <p className={styles.paragraph}>Audit your contracts</p>
        <p className={styles.paragraph}>Plan your tokenomics</p>
        <p className={styles.paragraph}>Build your site</p>
        <p className={styles.paragraph}>Allocate your treasury</p>
        <p className={styles.paragraph}>Find NFT artists</p>
      </div>

      <div className={styles.members}>
        <p className={styles.title}>Active Members</p>
        <p className={styles.member}>@0xZakk</p>
        <p className={styles.member}>@NatEliason</p>
        <p className={styles.member}>@BrennerSpear</p>
        <p className={styles.member}>@AdilMajid</p>
        <p className={styles.member}>@jongold</p>
        <p className={styles.member}>@MitchellBWright</p>
        <p className={styles.member}>@mannynotfound</p>
        <p className={styles.member}>@ZachObront</p>
      </div>
    </div>
  )
}
