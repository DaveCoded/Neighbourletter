import React from 'react';
import styles from '../styles/NewsletterIssue.module.css';
import { Eye } from 'react-feather';

export default function NewsletterIssue({
  status,
  numEvents,
  numRecommendations,
  scheduledTime,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.issueHeader}>
        <h3 className={styles.title}>Issue 4</h3>
        <button>
          Review
          <Eye size={16} />
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',
        }}
      >
        <p className={styles.status}>Status: pending</p>
        <p className={styles.scheduleTime}>{scheduledTime}</p>
      </div>
      <div
        style={{ width: '100%', background: 'var(--gray-400)', height: '1px' }}
      />
      <div className={styles.listings}>
        {/* num of events */}
        <p>{numEvents} Events</p>
        {/* num of recommendations */}
        <p>{numRecommendations} Recommendations</p>
      </div>
    </div>
  );
}
