import React, { useState } from 'react';
import s from './TabMenu.module.scss'

const TabMenuCust = ({ menuItems, startIdx, darkBg }) => {
    const [activeIdx, setActiveIdx] = useState(startIdx !== undefined ? startIdx : 0);

    let containerClass = menuItems.length <= 5 ? s.container : `${s.container} ${s.container6P}`
    if (darkBg) {
        containerClass += ` ${s.containerDarkBg}`
    }

    const botMargClass = menuItems.length <= 5 ? s.botMargin : `${s.botMargin} ${s.botMargin6P}`

    const items = menuItems.map((item, idx) => {
        let itemClass = activeIdx === idx ? `${s.menuItem} ${s.activeItem}` : s.menuItem
        if (darkBg) {
            itemClass += activeIdx === idx ? ` ${s.menuItemDarkBg} ${s.activeItemDarkBg}` : ` ${s.menuItemDarkBg}`
        }
        if (menuItems.length > 5) {
            itemClass += ` ${s.menuItem6P}`
        }
        return (
            <div key={idx} className={itemClass} onClick={() => {item.command(); setActiveIdx(idx);}}>
                <i className={item.icon} style={{marginRight:'.4rem', fontWeight:'bold'}}></i>{item.label}
            </div>
        )
    })

    const smallLines = menuItems.map((item, idx) => {
        let smallClass = activeIdx === idx ? `${s.smallSpace} ${s.smallActive}` : s.smallSpace
        if (menuItems.length > 5) {
            smallClass += ` ${s.smallSpace6P}`
        }
        return (
            <div key={`sm${idx}`} className={smallClass}></div>
        )
    })

    return (
        <div className={botMargClass}>
            <div className={containerClass}>
                {items}
            </div>
            <div>
                {smallLines}
            </div>
        </div>
    )
}

export default TabMenuCust;