import React from 'react';
import Link from 'next/link';
import styles from '../styles/NewsletterIssue.module.css';
import { Eye } from 'react-feather';

export default function NewsletterIssue({
    numEvents,
    numRecommendations,
    scheduledTime
}) {
    return (
        <div className={styles.main}>
            <div className={styles.issueHeader}>
                <h3 className={styles.title}>Issue 4</h3>
                <button>
                    <Link href="/newsletter">
                        <a style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: 4 }}>Review</span>
                            <Eye size={16} />
                        </a>
                    </Link>
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
                <p><span>{numEvents}</span> Events</p>
                <p><span>{numRecommendations}</span> Recommendations</p>
            </div>
        </div >
    );
}
