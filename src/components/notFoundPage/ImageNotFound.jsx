"use client";

import css from "./ImageNotFound.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "next-themes";

const ImageNotFound = () => {
  const isMobileStart = useMediaQuery({ minWidth: 480 });
  const isMobileEnd = useMediaQuery({ maxWidth: 767.98 });
  const isTabletStart = useMediaQuery({ minWidth: 768 });
  const isTabletEnd = useMediaQuery({ maxWidth: 959.98 });
  const isMediumTabletStart = useMediaQuery({ minWidth: 960 });
  const isMediumTabletEnd = useMediaQuery({ maxWidth: 1439.98 });
  const isDesktopStart = useMediaQuery({ minWidth: 1440 });

  const { theme } = useTheme();

  return (
    <div className={css.imageContainer}>
      <Image
        src={
          theme === "light"
            ? "/img/notfound/notfound.png"
            : "/img/notfound/notfound-dark.png"
        }
        alt="Error 404. This page not found"
        width={
          isMobileStart && isMobileEnd
            ? 442
            : isTabletStart && isTabletEnd
            ? 728
            : isMediumTabletStart && isMediumTabletEnd
            ? 924
            : isDesktopStart
            ? 1200
            : 310
        }
        height={
          isMobileStart && isMobileEnd
            ? 197
            : isTabletStart && isTabletEnd
            ? 325
            : isMediumTabletStart && isMediumTabletEnd
            ? 413
            : isDesktopStart
            ? 537
            : 139
        }
      />
    </div>
  );
};

export default ImageNotFound;
