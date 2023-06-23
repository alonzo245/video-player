import styles from "./trimmer.module.css";

export default ({ type }: { type: "start" | "end" }) => {
  return (
    <div className={styles.trimmer}>
      <div className={styles.handle} />
    </div>
  );
};
