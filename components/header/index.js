import Link from 'next/link';
import styles from './styles.css';

export default () => (
    <header className={styles.header}>
        <Link href="/" prefetch><a>Home</a></Link>&nbsp;
        <Link href="/about" prefetch><a>About</a></Link>&nbsp;
    </header>
);