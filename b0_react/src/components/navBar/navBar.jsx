import React from 'react';
import { Menubar } from 'primereact/menubar';

import NavBarSearch from '../navBar_search/navBar_search'

import 'primereact/resources/themes/arya-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import './navBar.scss'

import * as c from '../../colors';

const NavBar = () => {
   const items = [
      {
         label: 'Home',
         icon: 'pi pi-fw pi-home',
         style: { marginLeft: '.4rem' },
      },
      {
         label: 'Applications',
         icon: 'pi pi-fw pi-chart-line',
      },
      {
         label: 'Support',
         icon: 'pi pi-fw pi-ticket',
      },
      {
         label: 'Computer Security',
         icon: 'pi pi-fw pi-unlock',
      },
      {
         label: 'NIF Access',
         icon: 'pi pi-fw pi-key'
      }
   ];

   const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
   const end = <NavBarSearch />;

   return (
      <div>
         <div className='flex-container'>
            <Menubar model={items} start={start} end={end} style={{flex:'1'}} />
         </div>
      </div>
   );
}

export default NavBar;
