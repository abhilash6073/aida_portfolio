import Image from "next/image";
import styles from "./Hero.module.css";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className={`container ${styles.hero}`}>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Architecting AI-Driven Products. <br />
                    <span className={styles.accent}>Scaling Global Solutions.</span>
                </h1>
                <p className={styles.story}>
                    Great products don&apos;t just happen; they are engineered with precision and empathy.
                    From launching AI-powered loyalty platforms at <strong>IBS Software</strong> to enabling
                    multimillion-dollar transactions at <strong>Amadeus</strong>, I’ve spent over a decade building
                    scalable solutions that drive real business value.
                </p>
                <div className={styles.actions}>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=aidaannatom@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Email Me <ArrowRight size={18} style={{ marginLeft: 8 }} />
                    </a>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src="/headshot.jpg"
                    alt="Aida Anna Tom"
                    width={500}
                    height={600}
                    className={styles.image}
                    priority
                />
            </div>
        </section>
    );
}
