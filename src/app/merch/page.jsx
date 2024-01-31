import MerchHero from "@/components/merchHero/MerchHero";
import MerchList from "@/components/merchList/merchList";
import MerchOrder from "@/components/merchOrder/merchOrder";
import { Suspense } from "react";

const MerchPage = () => {
  return (
    <div>
      <div>
        <div>
          <Suspense fallback={"Loading..."}>
            <MerchHero />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={"Loading..."}>
            <MerchList />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={"Loading..."}>
            <MerchOrder />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
