"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {

  const [isClient, setIsCLient] = useState(false)

  useEffect(() => setIsCLient(true), [])
  const a = Math.random()
  console.log(a)
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h2>Card title</h2>
        {isClient && a}
        <div className={styles.imgWrapper}>
          <Image
            src={
              "https://media.istockphoto.com/id/491523503/photo/belgrade.jpg?s=612x612&w=0&k=20&c=3-r7kKJW6eExPkz5--0_O3sRXRG3-4NDpdOk50o-8oY="
            }
            alt="home image"
            fill
          />
        </div>
      </div>
    </main>
  );
}
