    import Head from 'next/head';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

import styles from '../app/styles/PostStyles.module.css';
import Header from './Header';

const PostLayout = ({ children, title, slug, description, thumbnail, finishDate }) => {
    return (
        <>
            <Head>
                <title>{title} | Renault Luk</title>
            </Head>
            
            <Header />
            <Container sm={5}>
                <main className={styles.postMain}>
                    <h1 className={styles.postTitle}>{title}</h1>
                    <h2 className={styles.postDes}>{description}</h2>
                    <p className={styles.finishDate}>{finishDate}</p>
                    <img 
                        width="100%"
                        height={300}
                        src={`/projects/${slug}/${thumbnail}`} 
                        alt={thumbnail} 
                        className={styles.postThumbnail} 
                    />
                    {children}
                </main>
            </Container>
        </>
    );
}

export default PostLayout;