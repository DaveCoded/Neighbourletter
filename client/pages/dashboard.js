import allData from '../dummy-data.json';
import SubmissionList from '../components/SubmissionList';
import styles from '../styles/Dashboard.module.css';
import NewsletterIssue from '../components/NewsletterIssue';

const getSubmissionCounts = (submissions) => {
    const counts = {
        event: 2,
        recommendation: 3,
    };

    submissions.forEach((sub) => {
        if (sub.status === 'approved') {
            counts[sub.category]++;
        }
    });

    return {
        numEvents: counts.event,
        numRecommendations: counts.recommendation,
    };
};

export default function Dashboard() {
    // fetch all submissions and filter to show pending submissions
    const { submissions, newsletter } = allData;
    const { numEvents, numRecommendations } = getSubmissionCounts(submissions);
    const pendingSubmissions = submissions.filter(
        (sub) => sub.status === 'pending'
    );

    const changeStatus = (submissionId, newStatus) => {
        console.log("changeStatus", submissionId, newStatus);
    }

    const postSubmission = async () => {
        await fetch('http://192.168.1.154:5000/submissions/create', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    content: {
                        "category": "event",
                        "title": "Village fete",
                        "time": "15:00, 01/03/22",
                        "location": "Taffeta Farmhouse (where the pig pen used to be)",
                        "description": "We're hiring a pizza van, some carnival games and setting up some hay bales round our beautiful fire pits. Family friendly. Mulled wine for adults, soft drinks for the kiddies!",
                        "submitter": "Farmer John"
                    },
                    submitter_email: "fake@fake.com",
                    status: 0,
                    newsletter_id: 1
                }
            )
        })
    }

    return (
        <main className={styles.main}>
            <section className={styles.mainSection}>
                <h2 className={styles.sectionHeader}>Community Submissions</h2>
                <SubmissionList submissions={pendingSubmissions} changeStatus={changeStatus} />
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.sectionHeader}>Upcoming Issue</h2>
                <NewsletterIssue newsletter={newsletter} />
            </section>
            <button onClick={postSubmission}>
                Post submission
            </button>
        </main>
    )
}
