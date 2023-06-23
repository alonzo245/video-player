import { useEffect } from "react";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import { usePlayerState } from "../../hooks/usePlayerState";

type videoType = {
  type: string;
  src: string;
};

export default () => {
  const { setState } = usePlayerState();

  useEffect(() => {
    setState({
      type: "video/mp4",
      src: "http://localhost:3000/assets/mock.mp4",
      player: {
        isLoaded: false,
        isMute: false,
        isPlaying: false,
        originalVideoDuration: 0,
        originalEnd: 50,
      },
    });
  }, []);

  return <VideoPlayer />;
};
