import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import styles from "./styles/Home.module.scss";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.app}>
        <div className={styles.wrapper}>
          <Form />
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default Home;
