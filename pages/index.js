import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import Post from '../components/Post'
import Recommend from '../components/Recommend'

import HomeIcon from '@material-ui/icons/Home'
import AccountIcon from '@material-ui/icons/AccountCircle'
import LogoutIcon from '@material-ui/icons/ExitToApp'

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
            img="https://hugobeckhaus.de/wp-content/uploads/2020/11/landscape-mountains-sky-4843193.jpg"
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
          <div className={styles.search}>
            <Input className={styles.searchInput} placeholder="Username" />
          </div>

          <div className={styles.recommendation}>
            <Recommend name="earnable" profileimg="https://cdn.discordapp.com/attachments/843795547704786966/863082845257072643/pO3THdxA_400x400.jpg" />
          </div>
        </div>
      </main>
    </div>
  )
}
