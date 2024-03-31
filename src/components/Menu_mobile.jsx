import React, { useEffect } from 'react'
import '../styles/Menu.css'
import Logo from '../assets/Logo.svg'
import Close from '../assets/Close.svg'

function Menu_mobile({ items, active, setActive }) {

    useEffect(() => {
        document.body.style.overflow = 'auto';
        active ?
            document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'auto';
    }, [active]);

    return (
        <>
            <div onClick={() => setActive(false)} className={active ? 'menu active' : 'menu'} >
                <div className="header-upper">
                    <div className="header-upper-block" >
                        <img src={Logo} alt="logo" className="logo-img" onClick={e => e.stopPropagation()} />
                        <img src={Close} alt="close-icon" onClick={() => setActive(!active)} />
                    </div>
                </div>
                <div className="menu-content" onClick={e => e.stopPropagation()}>
                    <ul>
                        {items.map(item =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                                <img className={!item.src ? 'not-icon-arrow' : ''} src={item.src} alt="icon_arrow" />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu_mobile
