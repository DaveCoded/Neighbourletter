import styles from '../styles/SubmissionList.module.css';

export default function Recommendation({ name, description, location, submitter }) {
    return (
        <div className={styles.submission}>
            <h4 className={styles.category}>Recommendation</h4>
            <h3 className={styles.title}>{name}</h3>
            <p>{location}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.actions}>
                <span className={styles.submitter}>Submitted by {submitter}</span>
                <button className="success">Approve</button>
                <button className="danger">Reject</button>
            </div>
        </div>
    )
}