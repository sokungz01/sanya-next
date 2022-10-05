import type { NextPage } from "next";
import Image from "next/image";
import Input from "../components/input";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Input type="email" name="asd" id="asdasd" placeholder="asdas" />
      </main>
    </div>
  );
};

export default Home;
