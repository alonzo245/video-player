import styles from "./timeline.module.css";
import Trimmer from "./trimmer/Trimmer";

export default () => {
  return (
    <div className={styles.container}>
      <Trimmer type={"start"} />
      <Trimmer type={"end"} />
    </div>
  );
};
