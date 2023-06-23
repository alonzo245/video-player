import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { FaPause, FaPlay } from "react-icons/fa";
import { usePlayerState } from "../../../hooks/usePlayerState";
import styles from "./monitorControllers.module.css";

export default () => {
  const { state, setState } = usePlayerState();

  const togglePlaying = () => {
    const isPlaying = state.player.isPlaying;

    if (!isPlaying) {
      state?.currentVideo.play();
    } else {
      state?.currentVideo.pause();
    }

    setState({
      ...state,
      player: { ...state.player, isPlaying: !isPlaying },
    });
  };

  const toggleMute = () => {
    const isMute = state.player.isMute;

    if (isMute) {
      state.currentVideo.volume = 1;
    } else {
      state.currentVideo.volume = 0;
    }

    setState({
      ...state,
      player: { ...state.player, isMute: !isMute },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.volume} onClick={toggleMute}>
        {state?.player?.isMute ? (
          <BsFillVolumeMuteFill color="#fff" size={30} />
        ) : (
          <BsFillVolumeDownFill color="#fff" size={30} />
        )}
      </div>
      <div className={styles.play} onClick={togglePlaying}>
        {state?.player?.isPlaying ? (
          <FaPause color="#fff" size={15} />
        ) : (
          <FaPlay color="#fff" size={15} />
        )}
      </div>

      <div className={styles.duration}>
        {(state?.currentVideo?.currentTime || 0).toFixed(2)} /
        {state?.currentVideo?.duration}
      </div>
    </div>
  );
};
