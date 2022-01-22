import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/structure/Footer.js'
import styles from '../../styles/Home.module.scss'

const LogIn = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>

      <main className={styles.main}>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <h1>Log In</h1>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default LogIn
