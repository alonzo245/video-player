import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import { usePlayerState } from "../../hooks/usePlayerState";

export default () => {
  const { setState } = usePlayerState();
  return <VideoPlayer />;
};
