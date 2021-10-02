import React, { useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import './navBar_search.scss'

const NavBarSearch = () => {
   const [optionsStyle, setOptionsStyle] = useState({color: 'rgba(255, 255, 255, 0.6)'})
   const [optionsLabel, setOptionsLabel] = useState("LLNL")
   const [searchIcons, setSearchIcons] = useState([1,0,0,0,0]);
   const [searchText, setSearchText] = useState("");
   const inputEl = useRef(null)
   const [search, setSearch] = useState("");    //  change this later
   const menu = useRef(null);
   const items = [
      {
         items: [
            {
               label: 'LLNL',
               icon: searchIcons[0] ? 'pi pi-circle-on' : 'pi pi-circle-off',
               command: (e) => {
                  setSearchIcons([1,0,0,0,0]);
                  setOptionsLabel("LLNL")
               }
            },
            {
               label: 'Ask.com',
               icon: searchIcons[1] ? 'pi pi-circle-on' : 'pi pi-circle-off',
               command: (e) => {
                  setSearchIcons([0,1,0,0,0]);
                  setOptionsLabel("Ask.com")
               }
            },
            {
               label: 'Google.com',
               icon: searchIcons[2] ? 'pi pi-circle-on' : 'pi pi-circle-off',
               command: (e) => {
                  setSearchIcons([0,0,1,0,0]);
                  setOptionsLabel("Google")
               }
            },
            {
               label: 'Metacrawler',
               icon: searchIcons[3] ? 'pi pi-circle-on' : 'pi pi-circle-off',
               command: (e) => {
                  setSearchIcons([0,0,0,1,0]);
                  setOptionsLabel("Metacrawler")
               }
            },
            {
               label: 'Yahoo!',
               icon: searchIcons[4] ? 'pi pi-circle-on' : 'pi pi-circle-off',
               command: (e) => {
                  setSearchIcons([0,0,0,0,1]);
                  setOptionsLabel("Yahoo!")
               }
            },
            {
               label: 'Advanced Search',
               icon: 'pi pi-external-link',
               url: 'https://reactjs.org/',
            },
         ]
      },
   ];

   const highlight = () => {
      setOptionsStyle({color: 'rgba(255, 255, 255, 0.87)', marginRight: '.4rem'})
   }

   const noHighlight = () => {
      setOptionsStyle({color: 'rgba(255, 255, 255, 0.6)', marginRight: '.4rem'})
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(searchText);
      setSearchText("");
   }

   const clearSearch = (e) => {
      e.preventDefault();
      setSearchText("");
      inputEl.current.focus()
   }

   return (
      <div>
         <Menu model={items} popup ref={menu} id="popup_menu" />
         <span className="invisibleSm">
            <Button label={`Search ${optionsLabel}`} className="p-button-text p-button-plain" 
               icon="pi pi-fw pi-bars" style={optionsStyle}
               onClick={(e) => menu.current.toggle(e)} aria-controls="popup_menu" aria-haspopup 
               onMouseEnter={() => highlight()} onMouseLeave={() => noHighlight()}
            />
         </span>
         <span className="invisibleLg">
            <Button label="" className="p-button-text p-button-plain" icon="pi pi-fw pi-bars" style={optionsStyle}
               onClick={(e) => menu.current.toggle(e)} aria-controls="popup_menu" aria-haspopup 
               onMouseEnter={() => highlight()} onMouseLeave={() => noHighlight()}
            />
         </span>
         <form style={{display:'inline', position:'relative'}} onSubmit={(e) => handleSubmit(e)}>
            <InputText placeholder="Search" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} 
               ref={inputEl}
            />
            <button type="submit" style={{position:'absolute', zIndex:'-5', left:'0'}}></button>
            <span style={{position:'absolute', right:'0rem'}}>
               <Button icon="pi pi-times" className="p-button-rounded p-button-plain p-button-text" onClick={(e) => clearSearch(e)} />
            </span>
         </form>
      </div>
   );
}

export default NavBarSearch;