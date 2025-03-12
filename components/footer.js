import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
import Social from 'components/social'
import Contact from 'components/contact';

export default function Fotter(){
    return (
    <footer className={styles.wrapper}>
        <Container>
            <div className={styles.flexContainer}>
                <Logo />
                
                <Contact />
            </div>
        </Container>
    </footer>
)
}