import styles from 'styles/hero.module.css'


export default function Hero( {title, subtitle, sentence, isHomePage = false} ){
    return (
        <div className={isHomePage ? styles.flexHomeContainer : styles.flexContainer}>
            <div className={styles.text}>
                <p className={isHomePage ? styles.Hometitle : styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.sentence}>{sentence}</p>
                
            </div>
        </div>
    )
}