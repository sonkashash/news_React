import React from "react";
import '../styles/Menu.css'



function Menu_desktop({items_menu, items_submenu }) {


    return (
        <>
            <div className="parent">
                <nav className='nav'>
                    <ul className="nav-list">
                        {items_menu.map(item =>
                            <li className="nav-item">
                                <a className="nav-link" href={item.href}>
                                    {item.value}
                                    {item.value !== "Buy now" &&
                                    (<div className="submenu">
                                        <div className="block">
                                            {items_submenu.map(item_submenu =>
                                                <a href={item_submenu.href} className="link-item">
                                                    <p>{item_submenu.value}</p>
                                                    <img src={item_submenu.src} alt="" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    )}
                                </a>
                                <img className={!item.src ? 'not-icon-arrow': ''} src={item.src} alt="icon_arrow" />
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu_desktop
