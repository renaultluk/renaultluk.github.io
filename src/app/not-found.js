import Container from 'react-bootstrap/Container'
import styles from './styles/four-oh-four.module.css'

const FourOhFour = () => {
    return (
        <Container className={styles.container}>
            <span className={styles.title}>404</span>
            <p>This is not the page you&apos;re looking for...</p>
        </Container>
    );
}

export default FourOhFour;