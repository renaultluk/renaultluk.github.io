import styles from '../styles/PostStyles.module.css';

const PostLayout = ({ children, title, slug, description, thumbnail, finishDate }) => {
    return (
        <main className={styles.postMain}>
            <h1 className={styles.postTitle}>{title}</h1>
            <h2 className={styles.postDes}>{description}</h2>
            <span className={styles.finishDate}>{finishDate}</span>
            {/* <img src={``} alt={postMeta.title} className={styles.postThumbnail} /> */}
            {children}
        </main>
    );
}

export default PostLayout;