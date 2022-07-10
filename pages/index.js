import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'

export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Projektelis</title>
      </Head>
      <Header />
      <div className='body'>
      <Content />
    </div>
    </div>
  )
}
