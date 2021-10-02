import React, { useState } from 'react'

import s from './Toast.module.scss'

const Toast = ({ message }) => {
   const [isClosed, setIsClosed] = useState(false)
   
   const closeToast = () => {
      setIsClosed(true)
   }

   const toastContainerClass = isClosed ? `${s.toastContainer} ${s.toastContainerExit}` : `${s.toastContainer} ${s.toastContainerEnter}`
   const toastClass = isClosed ? `${s.toast} ${s.toastExit}` : `${s.toast} ${s.toastEnter}`
   const contentClass = isClosed ? `${s.content} ${s.contentExit}` : `${s.content} ${s.contentEnter}`
   
   return (
      <div className={toastContainerClass}>
         <div className={toastClass}>
            <div className={contentClass} onClick={closeToast}>{message}</div>
         </div>
      </div>
   )
}

export default Toast