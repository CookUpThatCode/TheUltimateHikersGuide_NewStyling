import React, { useState } from 'react';
import { Button } from 'primereact/button';

import s from './testCarousel.module.scss'
import * as c from '../../colors'

const TestCarousel = () => {
   const [startIdx, setStartIdx] = useState(0);
   const [direction, setDirection] = useState("initial");

   let leftButStyle = {position:'absolute', top:'2.8rem', left: '.6rem'}
   if (startIdx === 0) {
      leftButStyle.background = c.bluegray200
   }
   let rightButStyle = {position:'absolute', top:'2.8rem', right: '0rem'}
   if (startIdx === 6) {
      rightButStyle.background = c.bluegray200
   }

   let carContent = []
   let scrollClass = ""

   if (direction === "initial") {
      let flex1 = [1,2,3].map((item, idx) => {
         return (
            <div key={`con${idx}`} className={s.carItem}>{item}</div>
         )
      })
      .reduce((accumulator, item, idx) => accumulator.concat(item, <div key={`spc${idx+1}`} className={s.carSpace}></div>),
         [<div key="spc0" className={s.carSpace}></div>]
      )
      flex1 = <div key="flex1" className={s.carFlex}>{flex1}</div>
      let flex2 = [4,5,6].map((item, idx) => {
         return (
            <div key={`con${idx+3}`} className={s.carItem}>{item}</div>
         )
      })
      .reduce((accumulator, item, idx) => accumulator.concat(item, <div key={`spc${idx+5}`} className={s.carSpace}></div>),
         [<div key="spc4" className={s.carSpace}></div>]
      )
      flex2 = <div key="flex2" className={s.carFlex} style={{left: '100%', marginLeft: '-4%'}}>{flex2}</div>
      let flex3 = [7,8,9].map((item, idx) => {
         return (
            <div key={`con${idx+6}`} className={s.carItem}>{item}</div>
         )
      })
      .reduce((accumulator, item, idx) => accumulator.concat(item, <div key={`spc${idx+9}`} className={s.carSpace}></div>),
         [<div key="spc8" className={s.carSpace}></div>]
      )
      flex3 = <div key="flex3" className={s.carFlex} style={{left: '200%', marginLeft: '-8%'}}>{flex3}</div>
      carContent = [].concat(flex1, flex2, flex3)
   }
   else if (direction === "right") {
      let flex1 = [startIdx-2, startIdx-1, startIdx].map((item, idx) => {
         return (
            <div key={`con${idx}`} className={s.carItem}>{item}</div>
         )
      })
      .reduce((accumulator, item, idx) => accumulator.concat(item, <div key={`spc${idx+1}`} className={s.carSpace}></div>),
         [<div key="spc0" className={s.carSpace}></div>]
      )
      flex1 = <div key="flex1" className={s.carFlex}>{flex1}</div>
      let flex2 = [startIdx+1, startIdx+2, startIdx+3].map((item, idx) => {
         return (
            <div key={`con${idx+3}`} className={s.carItem}>{item}</div>
         )
      })
      .reduce((accumulator, item, idx) => accumulator.concat(item, <div key={`spc${idx+5}`} className={s.carSpace}></div>),
         [<div key="spc4" className={s.carSpace}></div>]
      )
      flex2 = <div key="flex2" className={s.carFlex} style={{left: '100%', marginLeft: '-4%'}}>{flex2}</div>
      carContent = [].concat(flex1, flex2)
      scrollClass = s.scrollRight
   }
   else { // (direction === "left") 
      let flex1 = [startIdx+1, startIdx+2, startIdx+3].map((item, idx) => {
         return (
            <div key={`con${idx}`} className={s.carItem}>{item}</div>
         )
      })
      .reduce((accumulator, item, idx) => accumulator.concat(item, <div key={`spc${idx+1}`} className={s.carSpace}></div>),
         [<div key="spc0" className={s.carSpace}></div>]
      )
      flex1 = <div key="flex1" className={s.carFlex} style={{left: '-100%', marginLeft: '4%'}}>{flex1}</div>
      let flex2 = [startIdx+4, startIdx+5, startIdx+6].map((item, idx) => {
         return (
            <div key={`con${idx+3}`} className={s.carItem}>{item}</div>
         )
      })
      .reduce((accumulator, item, idx) => accumulator.concat(item, <div key={`spc${idx+5}`} className={s.carSpace}></div>),
         [<div key="spc4" className={s.carSpace}></div>]
      )
      flex2 = <div key="flex2" className={s.carFlex}>{flex2}</div>
      carContent = [].concat(flex1, flex2)
      scrollClass = s.scrollLeft
   }

   const scrollLeft = () => {
      if (startIdx !== 0) {
         setStartIdx(startIdx - 3)
         setDirection("left")
      }
   }

   const scrollRight = () => {
      if (startIdx !== 6) {
         setStartIdx(startIdx + 3)
         setDirection("right")
      }
   }

   return (
      <div>
         <div className={s.carouselBox}>
            <div key={Date.now()} className={`${s.scroller} ${scrollClass}`}>
               {carContent}
            </div>
            <Button icon="pi pi-arrow-left" onClick={scrollLeft} className="p-mr-2" style={leftButStyle} />
            <Button icon="pi pi-arrow-right" onClick={scrollRight} className="p-mr-2" style={rightButStyle} />
         </div>
         {/* <div className="container">
            <div className="outer">
               <div className="inner">Your content</div>
            </div>
         </div> */}
      </div>
   )
}

export default TestCarousel;