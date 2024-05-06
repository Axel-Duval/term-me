import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        duvalax:$ <span className={styles.hello}>hello👋</span>
      </h1>
      <p className={styles.help}>Try `help` command.</p>

      <Terminal />
    </div>
  );
}
