import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.upper_footer}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio
          cumque aut. Nisi obcaecati repellendus perspiciatis pariatur qui!
          Fugiat ab eius, tempore saepe expedita nostrum. Debitis voluptate enim
          mollitia vel.
        </p>
      </div>
      <div className={styles.lower_footer}></div>
    </footer>
  );
}
