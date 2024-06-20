import styles from 'styles/about.module.css'


export default function Hero( {title, subtitle, sentence, isHomePage = false} ){
    return (
        <div className={isHomePage ? styles.flexHomeContainer : styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={isHomePage ? styles.Hometitle : styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.sentence}>{sentence}</p>
                
            </div>
        </div>
    )
}