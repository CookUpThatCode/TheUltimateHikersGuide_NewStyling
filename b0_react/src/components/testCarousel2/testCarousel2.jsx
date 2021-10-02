import React, { useState } from 'react';
import { Button } from 'primereact/button';

import Card from '../card2/card';

import s from './testCarousel2.module.scss'
import * as c from '../../colors'

const TestCarousel = () => {
   const [startIdx, setStartIdx] = useState(0);
   const [direction, setDirection] = useState("initial");

   let leftButStyle = {}
   if (startIdx === 0) {
      leftButStyle.color = 'rgb(187, 187, 83)'
   }
   let rightButStyle = {}
   if (startIdx === 12) {
      rightButStyle.color = 'rgb(187, 187, 83)'
   }

   let carContent = []
   let scrollClass = ""

   const dummyItem = (
      <div className={s.dummyCardContainer}>
         <div className={s.dummyWidthScaler}></div>
      </div>
   )

   let dummy = [dummyItem, dummyItem, dummyItem, dummyItem, dummyItem, dummyItem].map((item, idx) => {
      return (
         <div key={`dum${idx}`} className={s.carItem}>{item}</div>
      )
   })
   dummy = <div key="dummy" className={s.dummyFlex}>{dummy}</div>


   if (direction === "initial") {
      let flex1 = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />].map((item, idx) => {
         item = <Card trailNum={startIdx + idx + 1} />
         return (
            <div key={`con${idx}`} className={s.carItem}>{item}</div>
         )
      })
      flex1 = <div key="flex1" className={s.carFlex}>{flex1}</div>

      let flex2 = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />].map((item, idx) => {
         item = <Card trailNum={startIdx + idx + 1 + 6} />
         return (
            <div key={`con${idx+4}`} className={s.carItem}>{item}</div>
         )
      })
      flex2 = <div key="flex2" className={s.carFlex} style={{left: 'calc(100% + 1.2rem)'}}>{flex2}</div>
      // flex2 = <div key="flex2" className={s.carFlex} style={{left: '100%', marginLeft: '-1.2rem'}}>{flex2}</div>

      let flex3 = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />].map((item, idx) => {
         item = <Card trailNum={startIdx + idx + 1 + 12} />
         return (
            <div key={`con${idx+8}`} className={s.carItem}>{item}</div>
         )
      })
      flex3 = <div key="flex3" className={s.carFlex} style={{left: 'calc(200% + 2.4rem)'}}>{flex3}</div>
      // flex3 = <div key="flex3" className={s.carFlex} style={{left: '200%', marginLeft: '-2.4rem'}}>{flex3}</div>

      carContent = [].concat(flex1, flex2, flex3)
   }
   else if (direction === "right") {
      let flex1 = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />].map((item, idx) => {
         item = <Card trailNum={startIdx + idx + 1 - 6} />
         return (
            <div key={`con${idx}`} className={s.carItem}>{item}</div>
         )
      })
      flex1 = <div key="flex1" className={s.carFlex}>{flex1}</div>

      let flex2 = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />].map((item, idx) => {
         item = <Card trailNum={startIdx + idx + 1} />
         return (
            <div key={`con${idx+4}`} className={s.carItem}>{item}</div>
         )
      })
      flex2 = <div key="flex2" className={s.carFlex} style={{left: 'calc(100% + 1.2rem)'}}>{flex2}</div>
      // flex2 = <div key="flex2" className={s.carFlex} style={{left: '100%', marginLeft: '-1.2rem'}}>{flex2}</div>

      carContent = [].concat(flex1, flex2)
      scrollClass = s.scrollRight
   }
   else { // (direction === "left") 
      let flex1 = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />].map((item, idx) => {
         item = <Card trailNum={startIdx + idx + 1} />
         return (
            <div key={`con${idx}`} className={s.carItem}>{item}</div>
         )
      })
      flex1 = <div key="flex1" className={s.carFlex} style={{left: 'calc(-100% - 1.2rem)'}}>{flex1}</div>
      // flex1 = <div key="flex1" className={s.carFlex} style={{left: '-100%', marginLeft: '1.2rem'}}>{flex1}</div>

      let flex2 = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />].map((item, idx) => {
         item = <Card trailNum={startIdx + idx + 1 + 6} />
         return (
            <div key={`con${idx+4}`} className={s.carItem}>{item}</div>
         )
      })
      flex2 = <div key="flex2" className={s.carFlex}>{flex2}</div>

      carContent = [].concat(flex1, flex2)
      scrollClass = s.scrollLeft
   }

   const scrollLeft = () => {
      if (startIdx !== 0) {
         setStartIdx(startIdx - 6)
         setDirection("left")
      }
   }

   const scrollRight = () => {
      if (startIdx !== 12) {
         setStartIdx(startIdx + 6)
         setDirection("right")
      }
   }

   return (
      <div>
         {/* <div className={s.carouselBox}> */}
            <div key={Date.now()} className={`${s.scroller} ${scrollClass}`}>
               {carContent}
               {dummy}
            </div>
            <div className={`${s.button} ${s.buttonL}`} style={leftButStyle} onClick={scrollLeft}>&lt;</div>
            <div className={`${s.button} ${s.buttonR}`} style={rightButStyle} onClick={scrollRight}>&gt;</div>
            {/* <Button icon="pi pi-arrow-left" onClick={scrollLeft} className="p-mr-2" style={leftButStyle} />
            <Button icon="pi pi-arrow-right" onClick={scrollRight} className="p-mr-2" style={rightButStyle} /> */}
         {/* </div> */}
      </div>
   )
}

export default TestCarousel;