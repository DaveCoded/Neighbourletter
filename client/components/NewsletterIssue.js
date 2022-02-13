import React from 'react';
import Link from 'next/link';
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
                    <Link href="/newsletter">
                        <a>
                            Review
                            <Eye size={16} />
                        </a>
                    </Link>
                </button>
            </div>
            <p className={styles.scheduleTime}>
                {scheduledTime ? scheduledTime : 'Not yet scheduled'}
            </p>
            <p className={styles.status}>{status}</p>
            <div className={styles.upcomingIssue}>
                {/* num of events */}
                <p>{numEvents} Events</p>
                {/* num of recommendations */}
                <p>{numRecommendations} Recommendations</p>
            </div>
        </div>
    );
}
