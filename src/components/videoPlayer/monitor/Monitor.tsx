import MonitorControllers from "../monitorControllers/MonitorControllers";
import styles from "./monitor.module.css";

type videoType = {
  type: string;
  src: string;
};

export default () => {
  const data: videoType = {
    type: "video/mp4",
    src: "http://localhost:3000/assets/mock.mp4",
  };

  if (!data?.src) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <video className={styles.videoElement}>
        <source src={data.src} type={data.type} />
      </video>
      <MonitorControllers />
    </div>
  );
};
