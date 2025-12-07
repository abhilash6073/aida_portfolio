import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={`container section ${styles.about}`}>
            <div className={styles.grid}>
                <div className={styles.bio}>
                    <h2 className={styles.title}>About Me</h2>
                    <p className={styles.text}>
                        I am a Product Strategist by trade and an explorer at heart. With over 12 years of experience at the forefront of AI and Fintech, I’ve built platforms that process millions in transactions and designed agentic AI systems that redefine efficiency. My work is grounded in the belief that technology should be as intuitive as it is powerful.
                    </p>
                    <p className={styles.text}>
                        But my education didn’t stop at engineering school. Whether I’m navigating the thin air of Everest Base Camp, swimming with sharks in the Maldives, or diving into the pages of <em>Sapiens</em> and <em>Deep Work</em>, I am constantly seeking new perspectives. These experiences fuel my approach to product management—teaching me resilience, the value of silence, and the importance of seeing the bigger picture.
                    </p>
                    <p className={styles.text}>
                        I thrive at the intersection of rigorous strategy and creative exploration, building products that don't just solve problems but expand possibilities.
                    </p>
                </div>
                <div className={styles.skills}>
                    <h3 className={styles.subtitle}>Skills</h3>
                    <div className={styles.skillGroup}>
                        <span className={styles.label}>Product</span>
                        <p>AI Product Management, Research, Roadmap Planning, Agile/Scrum</p>
                    </div>
                    <div className={styles.skillGroup}>
                        <span className={styles.label}>Tech</span>
                        <p>SQL, Python, JavaScript, Node.js, LangChain, Tableau</p>
                    </div>
                    <div className={styles.skillGroup}>
                        <span className={styles.label}>Tools</span>
                        <p>Jira, Confluence, LangSmith, Microsoft Power Apps</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
