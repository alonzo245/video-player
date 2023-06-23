import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";
import { usePlayerState } from "../../../hooks/usePlayerState";
import styles from "./monitorControllers.module.css";

export default () => {
  const { state, setState } = usePlayerState();

  const playPause = () => {
    console.log(!state.player.playing);

    setState({
      ...state,
      player: { ...state.player, playing: !state.player.playing },
    });
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
      <div className={styles.play} onClick={playPause}>
        {state?.player?.playing ? (
          <FaPause color="#fff" size={15} />
        ) : (
          <FaPlay color="#fff" size={15} />
        )}
      </div>

      <div className={styles.duration}>
        {state?.player?.originalStart} / {state?.player?.originalEnd}
      </div>
    </div>
  );
};
