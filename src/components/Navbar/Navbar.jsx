import React, {Fragment} from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
    <Fragment>
    <nav className={styles.navbar}>
    <Link to='/'><h1>Xchange</h1></Link>
    <li><Link to='/index'>Full Country Code List</Link></li>
    <li><Link to='/lookup'>Lookup Value</Link></li>
    <li><Link to='/compare'>Value Comparison</Link></li>
    <li><Link to='/convert'>Convert Value</Link></li>
    </nav>
    </Fragment>
)
}  

export default Navbar;