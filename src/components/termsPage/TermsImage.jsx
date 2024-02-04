'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import css from "./TermsImage.module.css";

const TermsImage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <Image
        src={
          theme === "light"
            ? "/img/terms/terms-light.png"
            : "/img/terms/bg-img.png"
        }
        alt="Макет міської вулиці"
        width={442}
        height={328.69}
        className={css.termsImage}
      />
    </div>
  );
};

export default TermsImage;
