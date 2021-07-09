import styles from '../styles/Recommend.module.css'
import Image from 'next/image'

import RepostIcon from '@material-ui/icons/Replay';
import LikeIcon from '@material-ui/icons/ThumbUp';

export default function Recommend({ name, profileimg }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <Image src={profileimg} alt="post" width='100%' height='100%' layout='responsive' priority />
                </div>
                <h1>{name}</h1>
            </div>
        </div>
    )
}