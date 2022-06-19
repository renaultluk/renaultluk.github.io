import styles from '../styles/PostStyles.module.css';

const PostLayout = ({ children }) => {
    return (
        <main className={styles.postMain}>
            {/* <img src={children.meta.thumbnail} alt={children.meta.title} className={styles.postThumbnail} /> */}
            {children}
        </main>
    );
}

export default PostLayout;