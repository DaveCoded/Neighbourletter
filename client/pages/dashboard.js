import allData from '../dummy-data.json';
import SubmissionList from '../components/SubmissionList';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
    // fetch all submissions and filter to show pending submissions

    return (
        <main className={styles.main}>
            <section className={styles.submissionsList}>
                <h2>Community Submissions</h2>
                <SubmissionList submissions={allData.submissions} />
            </section>
        </main>
    )
}