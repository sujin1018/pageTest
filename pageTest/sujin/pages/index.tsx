import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] }) 

export default function Home() {
  
  return (
    <>
      <div style={{marginTop:20, display:'flex', justifyContent:'center', fontWeight:'bold', fontSize:20}}>
        <p> 메인 페이지</p>
      </div>
    </>
  )
}
