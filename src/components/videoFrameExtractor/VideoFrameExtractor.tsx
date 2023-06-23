import { useEffect, useRef } from "react";
import { usePlayerState } from "../../hooks/usePlayerState";
import styles from "./videoFrameCanvas.module.css";

const VideoFrameExtractor = () => {
  const { state } = usePlayerState();

  const canvasRef = useRef<any>(null);

  useEffect(() => {
    if (!state?.currentVideo) {
      return;
    }
    const video = state?.currentVideo;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const extractFrames = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(extractFrames);
    };

    extractFrames();
  }, [state?.currentVideo]);

  return <canvas className={styles.container} ref={canvasRef} />;
};

export default VideoFrameExtractor;
