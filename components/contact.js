import styles from 'styles/contact.module.css'
import Social from 'components/social'

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.headding}>Contact</h3>
            <Social  iconSize="40px"/>
        </div>
    )
}