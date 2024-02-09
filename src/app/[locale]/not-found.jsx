import ContentNotFound from "@/components/notFoundPage/ContentNotFound/ContentNotFound";
import ImageNotFound from "@/components/notFoundPage/ImageNotFound";
import css from "./not-found.module.css";

export default function notFound() {
  return (
    <div className={css.notFoundPageContainer}>
      <ImageNotFound />
      <ContentNotFound/>
    </div>
  );
}
