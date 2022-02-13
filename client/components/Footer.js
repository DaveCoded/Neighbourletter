import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            &copy; {year} Neighbourletter
        </footer>
    );
}