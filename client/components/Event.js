import React from 'react';
import styles from '../styles/SubmissionList.module.css';

export default function Event({ title, description, submitter }) {
    return (
        <div className={styles.submission}>
            <h4 className={styles.category}>Event</h4>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
                <span className={styles.submitter}>Submitted by {submitter}</span>
                <button className="success">Approve</button>
                <button className="danger">Reject</button>
            </div>
        </div>
    )
}
