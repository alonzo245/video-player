import styles from "./timelineBar.module.css";

export default () => {
  return (
    <div className={styles.container} style={{ left: "20px" }}>
      <div className={styles.niddle}></div>
    </div>
  );
};
