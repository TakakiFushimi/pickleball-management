import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.css'

export default function Nav() {
    const [navIsOpen, setNavISOpen] = useState(false)

    const toggleNav = () => {
        setNavISOpen((prev) => !prev)
    }

    const closeNav = () => {
        setNavISOpen(false)
    }

    return (
        <nav className={navIsOpen ? styles.open : styles.close}>
            {navIsOpen && (
                <style jsx global>{`
                @media (max-width:767px) {
                    body {
                        overflow: hidden;
                        position: fixed;
                        width: 100%;
                    }
                }
                `}</style>
            )}
            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={styles.list}>
                <li>
                    <Link href="/" onClick={closeNav}>
                        ホーム
                    </Link>
                </li>
                <li>
                    <Link href="/what-is-pickleball" onClick={closeNav}>
                        ピックルボールとは
                    </Link>
                </li>
                <li>
                    <Link href="https://reserva.be/pickle" onClick={closeNav}>
                        レッスンのご案内
                    </Link>
                </li>
                <li>
                    <Link href="/event" onClick={closeNav}>
                        イベント
                    </Link>
                </li>
                <li>
                    <Link href="/contact" onClick={closeNav}>
                        お問い合わせ
                    </Link>
                </li>
            </ul>
        </nav>
    )
}