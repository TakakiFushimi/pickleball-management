import Link from 'next/link'
import styles from 'styles/logo.module.css'
import Image from 'next/image'
import logo from 'images/logo.svg'

export default function Logo({ boxOn = false }) {
    return (
        <Link href="/" className={boxOn ? styles.box2 : styles.basic}>
            <Image src={logo} className={styles.logo} alt="logo" layout="intrinsic" />
        </Link>
    )
}

/*
<img src={logo} alt="logo"></img>
<Image src={logo} alt="logo" />
*/