import styles from "./card.module.css";

function getTagColor(tag) {
  switch (tag.toLowerCase()) {
    case "css":
      return styles.bg_red;
    case "js":
      return styles.bg_brown;
    case "html":
      return styles.bg_blue;
    case "php":
      return styles.bg_violet;
    default:
      return "";
  }
}
export default function Card({ id, title, image, content, tags, published }) {
  return (
    <div
      className={`${styles.card} ${!published ? styles.inactive : ""}`}
      id={id}
    >
      <img src={image || "https://placehold.co/600x400"} />
      <div className={styles.container}>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{content}</p>
        <div class={styles.container}>
          <button className={styles.button}>LEGGI DI PIU</button>
          {tags.length > 0 &&
            tags.map((tag) => (
              <span className={`${styles.badge} ${getTagColor(tag)}`}>
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
