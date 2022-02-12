import React from 'react';
import styles from '../styles/SubmissionList.module.css';
import { Calendar } from 'react-feather';
import { Check } from 'react-feather';

export default function Event({ title, description, submitter, changeStatus, id }) {
    return (
        <div className={styles.submission}>
            <h4 className={styles.category}>
                <Calendar color="var(--gray-600)" size={14} />
                Event
            </h4>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
                <span className={styles.submitter}>Submitted by {submitter}</span>
                <button className="danger" onClick={() => changeStatus(id, 'rejected')}>Reject</button>
                <button className="success" onClick={() => changeStatus(id, 'approved')}>
                    Approve <Check color="var(--quat-color-dark)" size={16} />
                </button>
            </div>
        </div>
    );
}
