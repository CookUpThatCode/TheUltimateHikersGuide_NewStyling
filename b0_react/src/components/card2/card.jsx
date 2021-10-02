import React, { useRef, useEffect, useState } from 'react';

import s from './card.module.scss';

const Card = ({ trailNum }) => {
   const [isOverflow, setIsOverflow] = useState(false)
   const description = useRef(null)

   useEffect(() => {
      if (description.current.scrollHeight > description.current.clientHeight) {
         setIsOverflow(true)
      }
   }, [])

   return (
      <div className={s.widthScaler}>
         <div className={s.contentContainer}>
            <div className={s.textContainer}>
               <div className={s.title}>Happy Trail {trailNum}</div>
               <div className={s.imageBorder}>
                  <div className={s.imageContainer}>
                     <div className={s.image}></div>
                  </div>
               </div>
               <div ref={description} className={s.description}>
                  This is such a happy place. You will enjoy the sunshine, and the squirrels, and the birds, and the trees.
                  Once you come here, you won't be able to stop. Hi there. MMMM MMMM MMMMM.
               </div>
               {isOverflow && <div className={s.ellipsis}>...</div>}
            </div>
            <div className={s.cardBackground}></div>
            <div className={s.tagsContainer}>
               <div className={s.tagsWidth}>
                  <div className={s.tag}>Sunny</div>
                  <div className={s.tag}>Sunny Day</div>
                  <div className={s.tag}>Sunny</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card;