import Container from "@/components/container/Container";
import MerchHero from "@/components/merchHero/MerchHero";
import MerchList from "@/components/merchList/merchList";
import MerchOrder from "@/components/merchOrder/merchOrder";
import { Suspense } from "react";
import styles from "./merch.module.css";
const MerchPage = () => {
  return (
    <Container>
      <div className={styles.merchHero}>
        <Suspense fallback={"Loading..."}>
          <MerchHero />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={"Loading..."}>
          <MerchList />
        </Suspense>
      </div>
      <div className={styles.merchOrder}>
        <Suspense fallback={"Loading..."}>
          <MerchOrder />
        </Suspense>
      </div>
    </Container>
  );
};

export default MerchPage;
