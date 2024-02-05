'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import css from "./TermsImage.module.css";

const TermsImage = () => {
  const isMobileStart = useMediaQuery({ minWidth: 480 });
  const isMobileEnd = useMediaQuery({ maxWidth: 767.98 });

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={css.imageContainer}>
      <Image
        src={
          theme === "light"
            ? "/img/terms/terms-light.png"
            : "/img/terms/bg-img.png"
        }
        alt="Макет міської вулиці"
        width={isMobileStart && isMobileEnd ? 690 : 442}
        height={isMobileStart && isMobileEnd ? 530.67 : 328.69}
        className={css.termsImage}
      />
    </div>
  );
};

export default TermsImage;
