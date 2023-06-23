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
      <video width="750" height="500" controls>
        <source src={data.src} type={data.type} />
      </video>
    </div>
  );
};
