import React, { useState } from 'react';

import s from './testSlide.module.scss'

const TestSlide = () => {
   const [pageState, setPageState] = useState("initial")

   let left = "initial_L"
   let right = "initial_R"

   if (pageState === "initial") {    // set classes here
      left = "initial_L"
      right = "initial_R"
   }
   else if (pageState === "collapsing") {
      left = "collapsing_L"
      right = "collapsing_R"
   }
   else { // pageState === "expanding"
      left = "expanding_L"
      right = "expanding_R"
   }

   return (
      <div className={s.bigContainer}>
         <div className={s.menuText}>HELLLLUUURRRRRRRR DURRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR PURRRRRRRRRRRRRRRRRRRR</div>
         <div className={s.containurrFlex}>
            <div className={s.test}></div>
            <div className={s.test2}></div>
         </div>
      </div>
   )
}

export default TestSlide;