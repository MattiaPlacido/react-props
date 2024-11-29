import styles from "./main.module.css";
import Card from "../Card/Card.jsx";
import { posts } from "../data/posts.jsx";

function getUniqueTags(posts) {
  let uniqueTags = [];
  posts.forEach((post) => {
    post.tags.forEach(
      (tag) => !uniqueTags.includes(tag) && uniqueTags.push(tag)
    );
  });
  return uniqueTags.join(" - ");
}

export default function Main() {
  return (
    <main className={styles.main}>
      <h2>Il mio blog</h2>
      <p className={styles.transparent}>
        Le tag utilizzate in questa pagina sono : {getUniqueTags(posts)}
      </p>
      <div className={styles.card_container}>
        {posts.map((post) => (
          <Card
            id={post.id}
            title={post.title}
            image={post.image}
            content={post.content}
            tags={post.tags}
            published={post.published}
          />
        ))}
      </div>
    </main>
  );
}
