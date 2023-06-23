import { FaPause, FaPlay } from "react-icons/fa";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import styles from "./monitorControllers.module.css";

export default () => {
  const state = {
    player: {
      volume: "unmuted",
      status: "playing",
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.volume}>
        {state?.player?.volume === "unmuted" ? (
          <BsFillVolumeMuteFill color="#fff" size={30} />
        ) : (
          <BsFillVolumeDownFill color="#fff" size={30} />
        )}
      </div>
      <div className={styles.play}>
        {state?.player?.status === "playing" ? (
          <FaPause color="#fff" size={15} />
        ) : (
          <FaPlay color="#fff" size={15} />
        )}
      </div>

      <div className={styles.duration}></div>
    </div>
  );
};
