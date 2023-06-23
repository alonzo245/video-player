import { useEffect, useRef } from "react";
import { usePlayerState } from "../../../hooks/usePlayerState";
import MonitorControllers from "../monitorControllers/MonitorControllers";
import styles from "./monitor.module.css";

export default () => {
  const { state, setState } = usePlayerState();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef?.current) {
      setState({ ...state, currentVideo: videoRef?.current });
    }
  }, [state?.src]);

  if (!state?.src) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <video ref={videoRef} className={styles.videoElement}>
        <source src={state.src} type={state.type} />
      </video>
      <MonitorControllers />
    </div>
  );
};
