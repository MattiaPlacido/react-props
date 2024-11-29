import styles from "./main.module.css";
import Card from "../Card/Card.jsx";


export default function Main() {
  return (
    <main className={styles.main}>
      <h2>Il mio blog</h2>
      <Card />
    </main>
  );
}
