import styles from "./main.module.css";
import Card from "../Card/Card.jsx";
import { posts } from "../data/posts.jsx";

// let uniqueTags = [];
// posts.tags.foreach((tag) => !uniqueTags.includes(tag) && uniqueTags.push(tag));

export default function Main() {
  return (
    <main className={styles.main}>
      <h2>Il mio blog</h2>
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
