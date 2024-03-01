import ContentNotFound from "@/components/notFoundPage/ContentNotFound/ContentNotFound";
import ImageNotFound from "@/components/notFoundPage/ImageNotFound";
import css from "@/app/[locale]/not-found.module.css";

export default function notFound() {
  return (
    <div className={css.notFoundPageContainer}>
      <ImageNotFound />
      <ContentNotFound/>
    </div>
  );
}
