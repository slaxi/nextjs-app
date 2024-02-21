"use client"
import Image from 'next/image'
import styles from './Card.module.css'
import Button from '../button/Button'
import { useRouter } from 'next/navigation'

const Card = ({title, desc, id}) => {
  const userId = id
  const router = useRouter()
  const handleRedirection = () => {
    router.push(`/blog/${userId}`)
  }

  return (
    <div className={styles.card}>
    <h2>{title}</h2>
    <div className={styles.imgWrapper}>
      <Image
        src={
          "https://media.istockphoto.com/id/491523503/photo/belgrade.jpg?s=612x612&w=0&k=20&c=3-r7kKJW6eExPkz5--0_O3sRXRG3-4NDpdOk50o-8oY="
        }
        alt="home image"
        fill
      />
    </div>
    <p>{desc}</p>
    <Button  handleClick={handleRedirection} className='btn-cta' text="More info..."/>
  </div>
  )
}

export default Card