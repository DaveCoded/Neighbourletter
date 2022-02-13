import { useEffect, useState } from 'react'
import { dummyData } from '../dummydata.js';
import SubmissionList from '../components/SubmissionList';
import styles from '../styles/Dashboard.module.css';
import NewsletterIssue from '../components/NewsletterIssue';
import { parseResponse } from '../utils/parse.js';

export const BASE_URL = 'http://192.168.1.154:5000';

const getSubmissionCounts = (submissions) => {
    const counts = {
        event: 0,
        recommendation: 0,
    };

    submissions && submissions.forEach((sub) => {
        if (sub.status === 2) {
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
    const [submissions, setSubmissions] = useState([]);

    const changeStatus = async (subId, status) => {
        await fetch(`${BASE_URL}/submissions/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    submission_id: subId,
                    status: status
                }
            )
        })

        const getSubmissions = async () => {
            await fetch(`${BASE_URL}/submissions/list?status=1`)
                .then(data => data.json())
                .then(data => setSubmissions(parseResponse(data.submissions)));
        }
        getSubmissions();
    };

    useEffect(() => {
        const getSubmissions = async () => {
            await fetch(`${BASE_URL}/submissions/list?status=1`)
                .then(data => data.json())
                .then(data => {
                    console.log(data.submissions)
                    setSubmissions(parseResponse(data.submissions))
                });
        }
        getSubmissions();
    }, []);

    // await fetch(`${BASE_URL}/submissions/create`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(
    //         {
    //             content: content,
    //             submitter_email: "fake@fake.com",
    //             status: 0,
    //             newsletter_id: 1
    //         }
    //     )
    // })
    // }

    // Only show pending submissions (not approved, or rejected) in dashboard list
    const pendingSubmissions = submissions && submissions.filter(
        (sub) => sub.status === 0
    ) || [];

    const resetToPendingStatus = async () => {
        await changeStatus(4, 0);
    }

    const { numEvents, numRecommendations } = getSubmissionCounts(submissions);

    return (
        <main className={styles.main}>
            <section className={styles.mainSection}>
                <h2 className={styles.sectionHeader}>Community Submissions</h2>
                <SubmissionList submissions={pendingSubmissions} changeStatus={changeStatus} />
                {/* TODO: Button for resetting status */}
                <button onClick={resetToPendingStatus}>
                    Reset to pending status
                </button>
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.sectionHeader}>Upcoming Issue</h2>
                <NewsletterIssue newsletter={newsletter} numEvents={numEvents} numRecommendations={numRecommendations} />
            </section>
        </main>
    )
}
