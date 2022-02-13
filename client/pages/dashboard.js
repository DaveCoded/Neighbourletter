// import allData from '../dummy-data.json';
import { useState } from 'react'
import { dummyData } from '../dummydata.js';
import SubmissionList from '../components/SubmissionList';
import styles from '../styles/Dashboard.module.css';
import NewsletterIssue from '../components/NewsletterIssue';

// Port 5000 on Filip's IP
export const BASE_URL = 'http://192.168.1.154:5000';

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
    const { newsletter } = dummyData;
    // Put dummy submissions in state for now. Fetch from database later
    const [submissions, setSubmissions] = useState(dummyData.submissions);
    const { numEvents, numRecommendations } = getSubmissionCounts(submissions);

    // Only show pending submissions (not approved, or rejected) in dashboard list
    const pendingSubmissions = submissions.filter(
        (sub) => sub.status === 'pending'
    );

    // Change status of a submission to approved or rejected
    const changeStatus = (submissionId, newStatus) => {
        let subs = [...submissions];
        const subIndex = dummyData.submissions.findIndex(
            (sub) => sub.id === submissionId
        );
        let subToChange = { ...subs[subIndex] };
        subToChange.status = newStatus;
        subs[subIndex] = subToChange;
        setSubmissions(subs);
    }

    // For testing that we can hit Filip's endpoint
    const postSubmission = async () => {
        await fetch(`${BASE_URL}/submissions/create`, {
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
                {/* TODO: Button for testing Filip's backend. Delete before demo */}
                <button onClick={postSubmission}>
                    Post submission
                </button>
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.sectionHeader}>Upcoming Issue</h2>
                <NewsletterIssue newsletter={newsletter} numEvents={numEvents} numRecommendations={numRecommendations} />
            </section>
        </main>
    )
}
