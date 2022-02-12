import React from 'react';
import styles from '../styles/SubmissionList.module.css';
import { Calendar } from 'react-feather';
import { Check } from 'react-feather';

export default function Event({ title, description, submitter }) {
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
        <button className="danger">Reject</button>
        <button className="success">
          Approve <Check color="var(--quat-color-dark)" size={16} />
        </button>
      </div>
    </div>
  );
}
