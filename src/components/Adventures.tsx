"use client";

import { useEffect, useRef } from "react";
import styles from "./Adventures.module.css";
import adventuresData from "@/data/adventures.json";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Adventures() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const cards = document.querySelectorAll(`.${styles.card}`);
        cards.forEach((card) => observerRef.current?.observe(card));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section id="adventures" className={`container section ${styles.adventures}`}>
            <h2 className={styles.title}>Life Adventures</h2>
            <div className={styles.timeline}>
                {/* Central Line */}
                <div className={styles.line}></div>

                {adventuresData.map((adventure, index) => (
                    <div key={adventure.id} className={`${styles.card} ${index % 2 === 0 ? styles.left : styles.right}`}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={adventure.image}
                                    alt={adventure.title}
                                    width={800}
                                    height={600}
                                    className={styles.image}
                                />
                                <div className={styles.dateBadge}>{adventure.date}</div>
                            </div>
                            <div className={styles.textContent}>
                                <div className={styles.location}>
                                    <MapPin size={16} /> {adventure.location}
                                </div>
                                <h3 className={styles.cardTitle}>{adventure.title}</h3>
                                <p className={styles.description}>{adventure.description}</p>
                                <div className={styles.takeaway}>
                                    <span className={styles.takeawayLabel}>Learned:</span> {adventure.takeaway}
                                </div>
                            </div>
                        </div>
                        {/* Timeline Dot */}
                        <div className={styles.dot}></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
