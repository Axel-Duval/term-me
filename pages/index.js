import { useEffect } from "react";
import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";
import { play } from "../utils/audio";

export default function Home() {
  useEffect(() => {
    document.onkeydown = play;
  }, []);

  return (
    <>
      <audio id="key0" src="/audio/key0.mp3" />
      <audio id="key1" src="/audio/key1.mp3" />
      <audio id="key2" src="/audio/key2.mp3" />
      <audio id="key3" src="/audio/key3.mp3" />
      <audio id="key4" src="/audio/key4.mp3" />
      <audio id="key5" src="/audio/key5.mp3" />
      <audio id="key6" src="/audio/key6.mp3" />
      <div className={styles.container}>
        <h1>
          duvalax:$ <span className={styles.hello}>hello👋</span>
        </h1>
        <p className={styles.help}>Try `help` command.</p>

        <Terminal />
      </div>
    </>
  );
}
