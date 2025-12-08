import styles from "./Experience.module.css";
import experienceData from "@/data/experience.json";
import { calculateDuration, calculateTotalExperience } from "@/utils/dateUtils";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Experience() {
    // Assuming the last job in the array (or first in chronological order) is the start of career.
    // Since the array is reverse chronological, the last item is the oldest.
    const careerStartDate = experienceData[experienceData.length - 1].startDate;
    const totalExperience = calculateTotalExperience(careerStartDate);

    return (
        <section id="experience" className={`container section ${styles.experience}`}>
            <h2 className={styles.title}>
                Experience <span className={styles.totalExp}>({totalExperience})</span>
            </h2>
            <div className={styles.timeline}>
                {experienceData.map((role, index) => {
                    const duration = calculateDuration(role.startDate, role.endDate as string | "Present");

                    return (
                        <div key={index} className={styles.node}>
                            <div className={styles.marker} />
                            <div className={styles.content}>
                                <span className={styles.period}>
                                    {role.period} <span className={styles.duration}>• {duration}</span>
                                </span>
                                <h3 className={styles.role}>{role.role}</h3>
                                <div className={styles.companyWrapper}>
                                    {/* Using a generic fallback if image fails, but Next/Image requires configured domains. 
                      For simplicity in this demo, we'll use a standard img tag or configure next.config. 
                      Let's use a standard img for external URLs to avoid config hassle for now, 
                      or just text if it breaks. */}
                                    <img
                                        src={role.logo}
                                        alt={`${role.company} logo`}
                                        className={styles.logo}
                                        width={48}
                                        height={48}
                                    />
                                    <a
                                        href={role.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.companyLink}
                                    >
                                        {role.company} <ExternalLink size={14} className={styles.linkIcon} />
                                    </a>
                                </div>
                                <p className={styles.description}>{role.description}</p>
                                <ul className={styles.achievements}>
                                    {role.achievements.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
