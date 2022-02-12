import allData from '../dummy-data.json';
import SubmissionList from '../components/SubmissionList';
import styles from '../styles/Dashboard.module.css';

const getSubmissionCounts = (submissions) => {
    const counts = {
        event: 0,
        recommendation: 0
    };

    submissions.forEach(sub => {
        if (sub.status === 'approved') {
            counts[sub.category]++;
        }
    });

    return {
        numEvents: counts.event,
        numRecommendations: counts.recommendation
    };
}

export default function Dashboard() {
    const { submissions, newsletter } = allData;
    const { numEvents, numRecommendations } = getSubmissionCounts(submissions);
    // fetch all submissions and filter to show pending submissions

    return (
        <main className={styles.main}>
            <section className={styles.submissionsList}>
                <h2 className={styles.sectionHeader}>Community Submissions</h2>
                <SubmissionList submissions={submissions} />
            </section>
            <section>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ marginRight: '16px' }}>Upcoming Issue</h2>
                    <button style={{ height: 'max-content' }}>Review</button>
                </div>
                <div>
                    Status: {newsletter.status}
                </div>
                <div className={styles.upcomingIssue}>
                    {/* num of events */}
                    <p>{numEvents} Events</p>
                    {/* num of recommendations */}
                    <p>{numRecommendations} Recommendations</p>
                </div>
            </section>
        </main>
    )
}
