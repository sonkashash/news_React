import React, { useState } from "react"
import Menu_mobile from "./Menu_mobile"
import Menu_desktop from "./Menu_desktop"
import '../styles/Header.css'
import '../styles/Menu.css'
import Logo from '../assets/Logo.svg'
import Search from '../assets/Search.svg'
import Arrow from '../assets/Arrow.svg'
import Arrow_right from '../assets/Arrow_right.svg'

function Header({ searchText, onSearchInput }) {
    const items = [{ value: "Demos", href: "#", src: Arrow }, { value: "Post", href: "#", src: Arrow }, { value: "Features", href: "#", src: Arrow }, { value: "Categories", href: "#", src: Arrow }, { value: "Shop", href: "#", src: Arrow }, { value: "Buy now", href: "#" }]
    const items_submenu = [{ value: "Post header", href: "#", src: Arrow_right }, { value: "Post Layout", href: "#", src: Arrow_right }, { value: "Share buttons", href: "#", src: Arrow_right }, { value: "Gallery post", href: "#", src: Arrow_right }, { value: "Video Post", href: "#", src: Arrow_right }]

    const [menuActive, setMenuActive] = useState(false)
    const [searchInputVisible, setSearchInputVisible] = useState(false);

    const toggleSearchInput = () => {
        setSearchInputVisible(!searchInputVisible);
    };

    return (
        <>
            <header className="header">
                <div className={menuActive ? 'blur active' : 'blur'}></div>
                <div className="header-upper">
                    <div className="header-upper-block">
                        <div className="burger-menu-button" onClick={() => setMenuActive(!menuActive)} />
                        <img src={Logo} alt="Logo" className="logo-img" />
                        <img src={Search} alt="search_icon" onClick={toggleSearchInput} className={searchInputVisible ? 'search click' : 'search'} />
                        {searchInputVisible && (
                            <div className="search-modal">
                                <input
                                    type="text"
                                    value={searchText}
                                    onChange={onSearchInput}
                                    placeholder="Search news..."
                                />
                                <img src={Search} className="search" alt="search_icon" onClick={toggleSearchInput} />
                            </div>
                        )}
                    </div>
                </div>
                <Menu_desktop items_menu={items} items_submenu={items_submenu} />
                <Menu_mobile items={items} active={menuActive} setActive={setMenuActive} />
            </header>
        </>
    )
}

export default Header
