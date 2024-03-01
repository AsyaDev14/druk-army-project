import Image from 'next/image'
import React from 'react'

const PrintAllImage = () => {
  return (
    <div>
        <Image src={"/img/home/sticker.png"} alt='Мультяшний кіт військовий' width={200} height={200}/>
        <Image src={"/img/home/tweet.png"} alt='Повідомлення в Tweeter під ніком Майор Чорнобаєв' width={200} height={100}/>
    </div>
  )
}

export default PrintAllImage