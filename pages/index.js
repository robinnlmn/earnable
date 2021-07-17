import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { useRouter } from 'next/router'

import Post from '../components/Post'
import Recommend from '../components/Recommend'

import Logo from '../public/favicon.png'
import HomeIcon from '@material-ui/icons/Home'
import AccountIcon from '@material-ui/icons/AccountCircle'
import LogoutIcon from '@material-ui/icons/ExitToApp'

export default function Home() {
  const router = useRouter()
  const [options, setOptions] = useState(false)

  const handleClick = (e, path) => {
    e.preventDefault()

    router.push(path)
  }

  const handleResize = () => {
    if (window.innerWidth >= 754) {
      document.getElementById("options").style.display = "none"
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  const openOptions = (e) => {
    if (options == false) {
      document.getElementById("options").style.display = "flex"
      setOptions(true)
    }
    else {
      document.getElementById("options").style.display = "none"
      setOptions(false)
    }
  }

  function openPopupPage(relativeUrl) {
    var param = {};
    OpenWindowWithPost(relativeUrl, "width=400, height=550, left=200, top=50, resizable=no, scrollbars=yes", "NewFile", param);
  }

  function OpenWindowWithPost(url, windowoption, name, params) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);
    form.setAttribute("target", name);
    for (var i in params) {
      if (params.hasOwnProperty(i)) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = i;
        input.value = params[i];
        form.appendChild(input);
      }
    }
    document.body.appendChild(form);
    //note I am using a post.htm page since I did not want to make double request to the page 
    //it might have some Page_Load call which might screw things up.
    window.open("post.htm", name, windowoption);
    form.submit();
    document.body.removeChild(form);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EARNABLE</title>
        <meta name="description" content="Earnable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header} id="header">
          <div className={styles.hamburger} onClick={openOptions}>
            <div className={styles.hamburgerRow1}></div>
            <div className={styles.hamburgerRow2}></div>
            <div className={styles.hamburgerRow3}></div>
          </div>

          <Image src={Logo} width="80%" height="80%" className={styles.logo} />
        </div>

        <div className={styles.options} id="options">
          <div className={styles.button1} onClick={(e) => handleClick(e, "/")}>
            <HomeIcon className={styles.icon} />
            <h3>HOME</h3>
          </div>

          <div className={styles.button1} onClick={(e) => handleClick(e, "/profile")}>
            <AccountIcon className={styles.icon} />
            <h3>PROFILE</h3>
          </div>

          <div className={styles.button1} onClick={(e) => handleClick(e, "/logout")}>
            <LogoutIcon className={styles.icon} />
            <h3>LOGOUT</h3>
          </div>
        </div>

        <div className={styles.left}>
          <div className={styles.button} onClick={(e) => handleClick(e, "/")}>
            <HomeIcon className={styles.icon} />
            <h3>HOME</h3>
          </div>

          <div className={styles.button} onClick={(e) => handleClick(e, "/profile")}>
            <AccountIcon className={styles.icon} />
            <h3>PROFILE</h3>
          </div>

          <div className={styles.button} onClick={(e) => handleClick(e, "/logout")}>
            <LogoutIcon className={styles.icon} />
            <h3>LOGOUT</h3>
          </div>
        </div>

        <div className={styles.middle} id="middle">
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
