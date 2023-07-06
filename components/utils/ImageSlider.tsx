"use client"
import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {

  const slides = [
    {
      url: '/assets/img/20230301_144951.jpg',
    },
    {
      url: '/assets/img/BOwusuNyantekyi_turntabl_pre-edits_20220602_022_V2.jpg',
    },
    {
      url: '/assets/img/IMG_9005.jpg',
    },

    {
      url: '/assets/img/_MG_3880.jpg',
    },
    {
      url: '/assets/img/IMG_9383.jpg',
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === slides.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }

      })
    }, 10000)

    return () => clearInterval(changeImage)
  }, [currentIndex, slides.length])

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };



  return (
    <div className="relative w-full h-full">
      <div className='w-full h-full duration-500 bg-center bg-cover rounded-2xl' style={{ backgroundImage: `url(${slides[currentIndex].url})` }} />
      {/* Left Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=' group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex justify-center py-2 top-4'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer duration-400 ease-in-out ${slideIndex === currentIndex && "border-2 rounded-full border-inspiration"}`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider