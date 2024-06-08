import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXTwitter,
    faFacebookF,
    faGithub,
    faInstagram,
    faYoutube,
    faTiktok
} from '@fortawesome/free-brands-svg-icons'

export default function Social({ iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="sr-only">Instagram</span>
                </a>
            </li>
            <li>
                <a href="https://x.com/">
                    <FontAwesomeIcon icon={faXTwitter} />
                    <span className="sr-only">X</span>
                </a>
            </li>
            <li>
                <a href="https://youtube.com/">
                    <FontAwesomeIcon icon={faYoutube} />
                    <span className="sr-only">Youtube</span>
                </a>
            </li>
        </ul>
    )
}