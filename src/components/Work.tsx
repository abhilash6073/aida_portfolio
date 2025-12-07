import styles from "./Work.module.css";
import projectsData from "@/data/projects.json";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
    return (
        <section id="work" className={`container section ${styles.work}`}>
            <h2 className={styles.title}>Selected Work</h2>
            <div className="grid-3">
                {projectsData.map((project, index) => (
                    <div key={index} className="card">
                        <div className={styles.header}>
                            <span className={styles.category}>{project.category}</span>
                            <ArrowUpRight size={20} className={styles.icon} />
                        </div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <h4 className={styles.company}>{project.company}</h4>
                        <p className={styles.description}>{project.description}</p>
                        <div className={styles.metrics}>
                            <span className={styles.metricLabel}>Impact</span>
                            <span className={styles.metricValue}>{project.metrics}</span>
                        </div>
                        <div className={styles.tags}>
                            {project.stack.map((tech, i) => (
                                <span key={i} className={styles.tag}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
