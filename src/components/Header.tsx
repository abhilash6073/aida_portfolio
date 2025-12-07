"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
                    Aida Anna Tom <span className={styles.pronouns}>(She/Her)</span>
                </Link>

                <button
                    className={styles.mobileToggle}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <Link href="/#experience" className={styles.link} onClick={() => setIsMenuOpen(false)}>Experience</Link>
                    <Link href="/#work" className={styles.link} onClick={() => setIsMenuOpen(false)}>Work</Link>
                    <Link href="/#adventures" className={styles.link} onClick={() => setIsMenuOpen(false)}>Adventures</Link>
                    <Link href="/bookshelf" className={styles.link} onClick={() => setIsMenuOpen(false)}>Bookshelf</Link>
                    <Link href="/#about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About</Link>
                    <Link href="/#contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}

