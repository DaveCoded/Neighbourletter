import React from 'react'
import { capitalise } from '../utils/strings'
import styles from '../styles/SubmissionList.module.css'

export default function SubmissionList({ submissions }) {
    return submissions.map(sub => (
        <div key={sub.id} className={styles.submission}>
            <h4 className={styles.category}>{capitalise(sub.category)}</h4>
            <h3 className={styles.title}>{sub.title}</h3>
            <p className={styles.description}>{sub.description}</p>
            <div className={styles.actions}>
                <span className={styles.submitter}>Submitted by {sub.submitter}</span>
                <button className="success">Approve</button>
                <button className="danger">Reject</button>
            </div>
        </div>
    ))
}
