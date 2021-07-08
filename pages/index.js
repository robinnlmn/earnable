import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'

import Post from '../components/Post'

import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/ExitToApp';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Earnable</title>
        <meta name="description" content="Earnable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.left}>
          <div className={styles.button}>
            <HomeIcon className={styles.icon} />
            <h3>HOME</h3>
          </div>

          <div className={styles.button}>
            <AccountIcon className={styles.icon} />
            <h3>PROFILE</h3>
          </div>

          <div className={styles.button}>
            <LogoutIcon className={styles.icon} />
            <h3>LOGOUT</h3>
          </div>
        </div>

        <div className={styles.middle}>
          <Post
            title="TEST"
            author="EARNABLE"
            desc="This is a description This is a description This is a description This is a description This is a description This is a description"
            likes="1512"
            reposts="45"
            img="https://i.pinimg.com/564x/8e/d9/b2/8ed9b2fbc6f2135fbbb844cc0604f721.jpg"
          />

          <Post
            title="TEST"
            author="EARNABLE"
            desc="This is a description This is a description This is a description This is a description This is a description This is a description"
            likes="1512"
            reposts="45"
            img="https://i.pinimg.com/564x/8e/d9/b2/8ed9b2fbc6f2135fbbb844cc0604f721.jpg"
          />

          <Post
            title="TEST"
            author="EARNABLE"
            desc="This is a description This is a description This is a description This is a description This is a description This is a description"
            likes="1512"
            reposts="45"
            img="https://i.pinimg.com/564x/8e/d9/b2/8ed9b2fbc6f2135fbbb844cc0604f721.jpg"
          />
        </div>

        <div className={styles.right}>
          YOU CAN SEE WHO YOU ARE FOLLOWING
        </div>
      </main>
    </div>
  )
}
