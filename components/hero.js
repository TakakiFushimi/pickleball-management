import styles from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/cube.jpg'
import pickleball from 'images/image_pickleball.jpg'
import homeball from 'images/home1.webp'

export default function Hero( {title, subtitle, sentence, isHomePage = false} ){
    return (
        <div className={isHomePage ? styles.flexHomeContainer : styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.sentence}>{sentence}</p>
                
            </div>
        </div>
    )
}