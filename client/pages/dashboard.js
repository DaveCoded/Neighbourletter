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
    // fetch all submissions and filter to show pending submissions
    const { submissions, newsletter } = allData;
    const { numEvents, numRecommendations } = getSubmissionCounts(submissions);
    const pendingSubmissions = submissions.filter(sub => sub.status === 'pending');

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
            <section className={styles.submissionsList}>
                <h2 className={styles.sectionHeader}>Community Submissions</h2>
                <SubmissionList submissions={pendingSubmissions} changeStatus={changeStatus} />
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
            <button onClick={postSubmission}>
                Post submission
            </button>
        </main>
    )
}
