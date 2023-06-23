import { useEffect, useState } from "react";
import { usePlayerState } from "../../../../hooks/usePlayerState";
import styles from "./timelineBar.module.css";

export default () => {
  const [position, setposition] = useState<string>("0px");
  const { state, setState } = usePlayerState();
  console.log(state?.currentVideo?.currentTime);

  const niddlePosition = () => {
    console.log("sss");

    const timelineUnit = 480 / Number(state?.currentVideo?.duration);
    return state?.currentVideo?.currentTime * timelineUnit;
  };

  useEffect(() => {
    setposition(`${niddlePosition()}px`);
  }, [state?.player?.isPlaying]);

  return (
    <div className={styles.container} style={{ left: position }}>
      <div className={styles.niddle}></div>
    </div>
  );
};
