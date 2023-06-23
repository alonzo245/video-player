import { useEffect, useRef } from "react";
import { usePlayerState } from "../../../hooks/usePlayerState";
import MonitorControllers from "../monitorControllers/MonitorControllers";
import styles from "./monitor.module.css";

export default () => {
  const { state, setState } = usePlayerState();
  const videoRef = useRef<any>(null);

  const handleOnLoad = (event: any) => {
    setState({
      ...state,
      isLoaded: true,
      originalVideoDuration: event.duration,
      currentVideo: videoRef?.current,
    });
  };

  if (!state?.src) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {!state.isLoaded && (
        <div className={styles.loadingMonitor}>Loading...</div>
      )}
      <video
        onLoadedMetadata={handleOnLoad}
        ref={videoRef}
        className={styles.videoElement}
      >
        <source src={state.src} type={state.type} />
      </video>
      <MonitorControllers />
    </div>
  );
};
