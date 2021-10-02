import React from 'react';

import './test.scss'

const Test = ({ children }) => {

   return (
      <div>
         <div className="myTest">
            Test
            {children}
         </div>
      </div>
   )
}

export default Test;