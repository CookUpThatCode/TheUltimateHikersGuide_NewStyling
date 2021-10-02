import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import NavBar from '../../components/navBar/navBar'
import TestSlide from '../../components/testSlide/testSlide'
import TestCarousel from '../../components/testCarousel/testCarousel'
import TestCarousel2 from '../../components/testCarousel2/testCarousel2'
import TestCard from '../../components/card/card'
import TestCard2 from '../../components/card2/card'
import Test from '../../components/test/test'
import Test2 from '../../components/test2/test2'
import Test3 from '../../components/test3/test3'

import 'primeflex/primeflex.css';
import './home.scss';

const Home = () => {
   const [visibleLeft, setVisibleLeft] = useState(false);

   const customIcons = (
      <React.Fragment>
         <button className="p-sidebar-icon p-link p-mr-1">
            <span className="pi pi-print" />
         </button>
         <button className="p-sidebar-icon p-link p-mr-1">
            <span className="pi pi-arrow-right" />
         </button>
      </React.Fragment>
   );

   return (
      <div>
         <NavBar></NavBar>
         {/* <div style={{whiteSpace:'pre', color:'white'}}>{"Testing      1 2 3    ...\n      this out."}<i className="fas fa-thumbs-up fa-1x" /></div> */}
         <div className="card">
            <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)} style={{position:'absolute', top:'4.3rem', height:'82vh'}}>
               <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
               <Button type="button" onClick={() => setVisibleLeft(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
               <Button type="button" onClick={() => setVisibleLeft(false)} label="Cancel" className="p-button-secondary" />
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="p-mr-2"
               style={{position:'absolute', top:'45vh'}} 
            />
         </div>
         <div className="homeGrid">
            <div className="purple">
               <Card title="Simple Card" style={{ width: '100%', marginBottom: '2em' }}>
                  <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                     quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
               </Card>
            </div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>

            <div className="gridItem"></div>
            <div className="gridItem"></div>

            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
         </div>

         {/* <TestSlide></TestSlide> */}
         {/* <TestCarousel2></TestCarousel2> */}
         {/* <div style={{height:'60rem', width:'100%', paddingTop:'5rem', paddingLeft:'76%', background:'lightgray'}}>
            <div className={{display:'flex',marginTop:'3rem',height:'50%',justifyContent:'flex-end'}}>
               <TestCard style={{flex:'1'}}></TestCard>
               <TestCard2 style={{flex:'1', marginRight:'3rem'}}></TestCard2>
            </div>
         </div> */}
      </div>
   )
}

export default Home;