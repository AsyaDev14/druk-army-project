import styles from "./merchHero.module.css";
import Image from "next/image";
const MerchHero = () => {
  return (
    <div>
      {/* <div><Image src={ } alt="Two shirts with text 'Друк Армія, Друкую Перемогу'" width={ 848} height={772}/></div> */}
      <div>
        <h1>
          Ласкаво просимо до<span>&quot;ДрукАрмія&quot;</span>
        </h1>
        <p>
          – серця та душі спільноти, яка служить нашій країні з найглибшим
          покликанням. Ми – це не просто магазин мерчу, ми – рушійна сила, що
          надає підтримку та ресурси нашим військовим, щоб захистити Україну від
          будь-яких викликів. Разом ми змінюємо реальність та будуємо майбутнє
          нашої країни.
        </p>
        <button>Обрати мерч</button>
      </div>
    </div>
  );
};

export default MerchHero;
