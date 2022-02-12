import styles from '../styles/SubmissionList.module.css';
import { MapPin } from 'react-feather';
import { Gift } from 'react-feather';
import { Check } from 'react-feather';

export default function Recommendation({
  name,
  description,
  location,
  submitter,
}) {
  return (
    <div className={styles.submission}>
      <h4 className={styles.category}>
        <Gift color="var(--gray-600)" size={14} />
        Recommendation
      </h4>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.location}>
        <MapPin color="var(--gray-600)" size={16} />
        {location}
      </p>
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
