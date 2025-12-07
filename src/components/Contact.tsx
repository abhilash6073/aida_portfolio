import styles from "./Contact.module.css";
import { ArrowUpRight, Mail, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className={`container section ${styles.contact}`}>
            <h2 className={styles.headline}>Let&apos;s Create Together.</h2>
            <div className={styles.links}>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=aidaannatom@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    <Mail size={24} /> Email <ArrowUpRight size={20} />
                </a>
                <a href="https://www.linkedin.com/in/aida-anna/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Linkedin size={24} /> LinkedIn <ArrowUpRight size={20} />
                </a>
                <a href="https://www.instagram.com/aida__tom/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <Instagram size={24} /> Instagram <ArrowUpRight size={20} />
                </a>
            </div>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} Aida Anna Tom. All rights reserved.
            </div>
        </footer>
    );
}
