import styles from "./app.module.css";
import { PlayerStateProvider } from "./hooks/usePlayerState";
import Main from "./pages/main/Main";

export default () => {
  return (
    <div className={styles.container}>
      <PlayerStateProvider>
        <Main />
      </PlayerStateProvider>
    </div>
  );
};
