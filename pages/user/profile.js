import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../components/structure/Footer.js'
import styles from '../../styles/Home.module.scss'

const Profile = () => {
  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>

      <main className={styles.main}>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <h1>This is my profile</h1>
          <p>
            <Image
              src='/images/profile.jpeg'
              height={144}
              width={144}
              alt='User Name'
            />
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Profile
