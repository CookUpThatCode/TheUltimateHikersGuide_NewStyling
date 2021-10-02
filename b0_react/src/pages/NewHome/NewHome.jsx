import React from 'react'

import Carousel from '../../components/testCarousel2/testCarousel2'
import Toaster from '../../components/Toaster/Toaster'

import s from './NewHome.module.scss'

const NewHome = () => {

   return (
      <div>
         <div className={s.bg}>
            <div className={s.leftContainer}>
               <div className={s.leftCover}></div>
            </div>
            <div className={s.rightContainer}>
               <div className={s.rightCover}></div>
            </div>
            <div className={s.navBar}></div>
            <div className={s.carouselContainer}>
               <Carousel />
            </div>
         </div>
         <Toaster />
      </div>
   )
}

export default NewHome;