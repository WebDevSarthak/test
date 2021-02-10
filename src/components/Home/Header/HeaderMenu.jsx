import React from "react"
import './Header.css'

function HeaderMenu(props) {
    return (
        <ul id="menu">
            <li class="nav-item">
                <a href={props.href} class={props.class}>{props.text}</a>
            </li>
        </ul>
        
    )
}

export default HeaderMenu