import React, { useState } from 'react'

import Toast from '../../components/Toast/Toast'

import s from './Toaster.module.scss'

const Toaster = () => {
   const [toast, setToast] = useState([])

   const addToast = () => {
      setToast(toast.concat(<Toast key={toast.length} message="Error. Here is the error message. Try again." />))
   }

   return (
      <div className={s.toasterContainer}>
         <div className={s.addToast} onClick={addToast}></div>
         {toast}
      </div>
   )
}

export default Toaster