import { usePlayerState } from "../../../hooks/usePlayerState";
import MonitorControllers from "../monitorControllers/MonitorControllers";
import styles from "./monitor.module.css";

export default () => {
  const { state } = usePlayerState();

  if (!state?.src) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <video className={styles.videoElement}>
        <source src={state.src} type={state.type} />
      </video>
      <MonitorControllers />
    </div>
  );
};
