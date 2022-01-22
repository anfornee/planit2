import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/structure/Footer.js'
import styles from '../../styles/Home.module.scss'

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>

      <main className={styles.main}>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <h1>Sign Up</h1>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignUp
