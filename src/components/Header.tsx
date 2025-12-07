import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    Aida Anna Tom <span className={styles.pronouns}>(She/Her)</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="/#experience" className={styles.link}>Experience</Link>
                    <Link href="/#work" className={styles.link}>Work</Link>
                    <Link href="/#adventures" className={styles.link}>Adventures</Link>
                    <Link href="/bookshelf" className={styles.link}>Bookshelf</Link>
                    <Link href="/#about" className={styles.link}>About</Link>
                    <Link href="/#contact" className={styles.link}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}

