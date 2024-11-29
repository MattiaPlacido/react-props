import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <img src="https://placehold.co/600x400" />
      <div className={styles.container}>
        <h4>
          <b>Titolo del post</b>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          doloremque culpa facilis quo, sequi quis nostrum voluptatem dolore
          corporis at tenetur corrupti ab, exercitationem animi fugit numquam
          consectetur perspiciatis impedit.
        </p>
        <button className={styles.button}>LEGGI DI PIU</button>
      </div>
    </div>
  );
}
