"use client";

import { useEffect, useState } from "react";
import InfoBlock from "@/components/InfoBlock/InfoBlock";
import Container from "@/components/container/Container";
import css from "./page.module.css";

const CentralBlock = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 959.9);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <Container>
          <div className={css.cablesWrapper}>
            <picture className={css.cables}>
              <source
                className={css.cables}
                media="(max-width: 479.5px)"
                srcSet="/img/howworks/cable-320.png"
              />
              <source
                className={css.cables}
                media="(max-width: 767.5px)"
                srcSet="/img/howworks/cable-480.png"
              />
              <source
                className={css.cables}
                media="(max-width: 959.5px)"
                srcSet="/img/howworks/cable-960.png"
              />
              <source
                className={css.cables}
                media="(max-width: 1199.5px)"
                srcSet="/img/howworks/cable-960.png"
              />
              <source
                className={css.cables}
                media="(min-width: 1201px)"
                srcSet="/img/howworks/cable-1920.png"
              />
              <img
                className={css.cables}
                src="/img/howworks/cable-1920.png"
                alt="cable"
              />
            </picture>

            <InfoBlock
              firstTitle="вартість"
              secondTitle="5 000 ₴"
              description="Starlink — наше найсучасніше обладнання, але має слабку ланку — вразливі конектори, що ламаються під час переміщення, призводячи до втрати зв'язку. Існує також фінансова складова — вартість заміни запчастин становить 5 000 гривень за кожен дріт."
              alignRight={true}
            />
          </div>

          <div className={css.connectorsWrapper}>
            <div>
              <picture className={css.connectors}>
                <source
                  className={css.connectors}
                  media="(max-width: 320px)"
                  srcSet="/img/howworks/connectors-320.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 480px)"
                  srcSet="/img/howworks/connectors-320.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 768px)"
                  srcSet="/img/howworks/connectors-480.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 960px)"
                  srcSet="/img/howworks/connectors-960.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 1200px)"
                  srcSet="/img/howworks/connectors-960.png"
                />
                <source
                  className={css.connectors}
                  media="(min-width: 1201px)"
                  srcSet="/img/howworks/connectors-1920.png"
                />
                <img
                  className={css.connectors}
                  src="/img/howworks/connectors-1920.png"
                  alt="connectors"
                />
              </picture>
            </div>

            <InfoBlock
              firstTitle="вартість"
              secondTitle="4,50 ₴"
              description="ДрукАрмія використовує 3D-принтери для вирішення проблеми вразливих дротів. Це рішення не тільки ефективне, але й економічно вигідне: за 350 гривень можна надрукувати 77 комплектів захисних ковпачків, потенційно зберігаючи до 385 000 гривень."
            />
          </div>
        </Container>
      ) : (
        <div className={css.centralBlock}>
          <div className={css.cablesWrapper}>
            <picture className={css.cables}>
              <source
                className={css.cables}
                media="(max-width: 479.5px)"
                srcSet="/img/howworks/cable-320.png"
              />
              <source
                className={css.cables}
                media="(max-width: 767.5px)"
                srcSet="/img/howworks/cable-480.png"
              />
              <source
                className={css.cables}
                media="(max-width: 959.5px)"
                srcSet="/img/howworks/cable-960.png"
              />
              <source
                className={css.cables}
                media="(max-width: 1199.5px)"
                srcSet="/img/howworks/cable-960.png"
              />
              <source
                className={css.cables}
                media="(min-width: 1201px)"
                srcSet="/img/howworks/cable-1920.png"
              />
              <img
                className={css.cables}
                src="/img/howworks/cable-1920.png"
                alt="cable"
              />
            </picture>

            <InfoBlock
              firstTitle="вартість"
              secondTitle="5 000 ₴"
              description="Starlink — наше найсучасніше обладнання, але має слабку ланку — вразливі конектори, що ламаються під час переміщення, призводячи до втрати зв'язку. Існує також фінансова складова — вартість заміни запчастин становить 5 000 гривень за кожен дріт."
              alignRight={true}
            />
          </div>

          <div className={css.connectorsWrapper}>
            <div className={css.connectorsContainer}>
              <picture className={css.connectors}>
                <source
                  className={css.connectors}
                  media="(max-width: 320px)"
                  srcSet="/img/howworks/connectors-320.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 480px)"
                  srcSet="/img/howworks/connectors-320.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 768px)"
                  srcSet="/img/howworks/connectors-480.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 960px)"
                  srcSet="/img/howworks/connectors-960.png"
                />
                <source
                  className={css.connectors}
                  media="(max-width: 1200px)"
                  srcSet="/img/howworks/connectors-960.png"
                />
                <source
                  className={css.connectors}
                  media="(min-width: 1201px)"
                  srcSet="/img/howworks/connectors-1920.png"
                />
                <img
                  className={css.connectors}
                  src="/img/howworks/connectors-1920.png"
                  alt="connectors"
                />
              </picture>
            </div>

            <InfoBlock
              firstTitle="вартість"
              secondTitle="4,50 ₴"
              description="ДрукАрмія використовує 3D-принтери для вирішення проблеми вразливих дротів. Це рішення не тільки ефективне, але й економічно вигідне: за 350 гривень можна надрукувати 77 комплектів захисних ковпачків, потенційно зберігаючи до 385 000 гривень."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CentralBlock;
