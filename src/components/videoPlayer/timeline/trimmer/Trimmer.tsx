import styles from "./trimmer.module.css";

export default ({ type }: { type: "start" | "end" }) => {
  return (
    <div
      className={styles.trimmer}
      style={type === "end" ? { right: "2px" } : { left: "2px" }}
    >
      <div className={styles.handle} />
    </div>
  );
};
