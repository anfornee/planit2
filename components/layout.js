import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Footer from './structure/Footer'

const name = 'User Name'
export const siteTitle = 'PlanIt2'

const loggedInHeaderHome = (
  <>
    <Image
      priority
      src='/images/profile.jpeg'
      className={utilStyles.borderCircle}
      height={144}
      width={144}
      alt={name}
    />
    <h1 className={utilStyles.heading2Xl}>{name}</h1>
  </>
)

const loggedInHeader = (
  <>
    <Link href='/'>
      <a>
        <Image
          priority
          src='/images/profile.jpg'
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt={name}
        />
      </a>
    </Link>
    <h2 className={utilStyles.headingLg}>
      <Link href='/'>
        <a className={utilStyles.colorInherit}>{name}</a>
      </Link>
    </h2>
  </>
)

const notLoggedInHeader = (
  <>
    <Link href='/user/log-in'>
      <a>Log In</a>
    </Link>
    <Link href='/user/sign-up'>
      <a>Sign Up</a>
    </Link>
  </>
)

export default function Layout ({ children, home, loggedIn }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Clear your mind and get things done.'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {
          loggedIn
            ? home
              ? loggedInHeader
              : loggedInHeaderHome
            : notLoggedInHeader
        }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}
