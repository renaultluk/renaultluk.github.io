import Image from 'next/image';

import styles from '../styles/PostStyles.module.css';

const PostLayout = ({ children, title, slug, description, thumbnail, finishDate }) => {
    return (
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
    );
}

export default PostLayout;