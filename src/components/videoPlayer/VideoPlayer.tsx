import Monitor from "./monitor/Monitor";
import MonitorControllers from "./monitorControllers/MonitorControllers";
import Timeline from "./timeline/Timeline";
import styles from "./videoPlayer.module.css";

export default () => {
  return (
    <div className={styles.container}>
      <Monitor />
      <MonitorControllers />
      <Timeline />
    </div>
  );
};
