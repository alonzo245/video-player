import Monitor from "./monitor/Monitor";
import Timeline from "./timeline/Timeline";
import styles from "./videoPlayer.module.css";

export default () => {
  return (
    <div className={styles.container}>
      <Monitor />
      <Timeline />
    </div>
  );
};
