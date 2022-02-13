import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Mail } from 'react-feather';

export default function Navbar() {
    return (
        <nav className={styles.main}>
            <p className={styles.logo}>
                <Mail size={16} color="var(--primary-color-dark)" />
                Neighbourletter
            </p>
            <p className={styles.newsletterName}>NW4 Newsletter</p>
            <div className={styles.profile}>
                <img
                    className={styles.profileImage}
                    src="/images/fish-profile.jpeg"
                    alt="profile"
                    width="30px"
                    height="30px"
                />
                <p>Gill Fisherman</p>
            </div>
        </nav>
    );
}
