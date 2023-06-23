import { useEffect, useState } from "react";
import { usePlayerState } from "../../../../hooks/usePlayerState";
import styles from "./timelineBar.module.css";
import VideoFrameExtractor from "../../../videoFrameExtractor/VideoFrameExtractor";

export default () => {
  const [position, setposition] = useState<string>("0px");
  const { state } = usePlayerState();

  const niddlePosition = () => {
    const timelineUnit = 480 / Number(state?.currentVideo?.duration);
    return state?.currentVideo?.currentTime * timelineUnit;
  };

  useEffect(() => {
    setposition(`${niddlePosition()}px`);
  }, [state?.player?.isPlaying]);

  return (
    <>
      <div className={styles.container} style={{ left: position }}>
        <div className={styles.niddle}></div>
      </div>
      {/* <VideoFrameExtractor /> */}
    </>
  );
};
