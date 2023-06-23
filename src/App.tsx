import styles from "./app.module.css";
import Main from "./pages/main/Main";

export default () => {
  return (
    <div className={styles.container}>
      <Main />
    </div>
  );
};
