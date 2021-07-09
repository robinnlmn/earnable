import styles from '../styles/Card.module.css'
import Image from 'next/image'

import RepostIcon from '@material-ui/icons/Replay';
import LikeIcon from '@material-ui/icons/ThumbUp';

export default function Post({ title, img, author, likes, reposts }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                    <a>{author}</a>
                </div>
                <Image src={img} alt="post" width='100%' height='100%' layout='responsive' priority quality='100' />
                <div className={styles.feedback}>
                    <div className={styles.flex}>
                        <LikeIcon className={styles.icon} />
                        <h5>{likes}</h5>
                    </div>

                    <div className={styles.flex}>
                        <RepostIcon className={styles.icon} />
                        <h5>{reposts}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}