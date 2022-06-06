import logoImage from "./../../assets/logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerWrapper}>
      <img src={logoImage} alt="Logo image" />
    </header>
  );
}
