import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../User'

class Navbar extends Component {
    render() {
        return (
                <header id="header">
                    <nav id="nav">
                        <ul>
                            <li><Link  to="/">
                                Главная
                            </Link></li>
                            <li>
                                <Link  to="/country">
                                    Страны Европы
                                </Link>
                            </li>
                            <li><Link  className="button special" to="/relax">
                                Авторизация
                            </Link></li>
                        </ul>
                    </nav>

                </header>


        );
    }
}

export default Navbar;
