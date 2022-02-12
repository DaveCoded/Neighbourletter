import React from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.main}>
            <p>NeighbourLetter</p>
            <div className={styles.profile}>
            <img src="http://via.placeholder.com/30x30" alt="profile" />
            <p>Gill Fisherman</p></div>
        </nav>
    );
}