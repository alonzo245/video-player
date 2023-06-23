import styles from "./timeline.module.css";
import TimelineBar from "./timelineBar/TimelineBar";
import Trimmer from "./trimmer/Trimmer";

export default () => {
  return (
    <div className={styles.container}>
      <TimelineBar />
      <Trimmer type={"start"} />
      <Trimmer type={"end"} />
    </div>
  );
};
