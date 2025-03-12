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
        <ul>
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://www.instagram.com/zen.y14?igsh=MWx1c2U3d2Y1Y2t4cw==/">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="sr-only">Instagram</span>
                    
                </a>
            </li>
            
        </ul>
        <address className={styles.address} style={{ '--font-size': "15px" }}>
            tokyo.pickleball.management@gmail.com
        </address>
        </ul>
    )
}
/*
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
*/