import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <><p>welcome awp selamat siang</p><header>
      <ul>
        <li>
         <Link href='/'>Home</Link>
        </li>
        <li>
         <Link href='/awan'>Awan</Link>
        </li>
        <li>
          <Link href='/users'>Users</Link>         
        </li>
      </ul>
    </header></>
  )
}
