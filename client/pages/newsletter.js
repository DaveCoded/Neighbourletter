import Link from 'next/link';
import styles from '../styles/Newsletter.module.css'
import { useState, useEffect } from 'react'
import { parseResponse } from '../utils/parse.js'
import { BASE_URL } from './dashboard'
import NewsletterItem from '../components/NewsletterItem'

export default function Newsletter() {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const getSubmissions = async () => {
            await fetch(`${BASE_URL}/submissions/list?status=1`)
                .then(data => data.json())
                .then(data => {
                    setSubmissions(parseResponse(data.submissions).filter(sub => sub.status === 2))
                    console.log(parseResponse(data.submissions))
                });
        }
        getSubmissions();
    }, []);

    const sortSubmissions = () => {
        const recommendations = [];
        const events = [];
        submissions.forEach(sub => {
            if (sub.category === 'recommendation') {
                recommendations.push(sub);
            } else {
                events.push(sub);
            }
        })
        return [recommendations, events];
    }

    return (
        <main className={styles.main}>
            <nav className={styles.navbar}>
                <Link href="/dashboard">
                    <a>
                        &#8592; Back to dashboard
                    </a>
                </Link>
                <h2>Current issue</h2>
            </nav>
            <header>
                <p className={styles.status}>pending</p>
                <h1>Review issue 4</h1>
            </header>
            <section className={styles.newsletter}>
                <p>Welcome to the NW4 Newsletter! We've had plenty of great submissions over the past two weeks. Keep them coming! It's great to hear your news and to connect with our lovely neighbours.</p>
                <hr style={{ marginTop: '3rem' }}></hr>
                {sortSubmissions(submissions).map((category) => (
                    <>
                        <h2 key={category[0] && category[0].category}>
                            {category[0] && category[0].category === 'recommendation' ? 'Recommendations' : 'Events'}
                        </h2>
                        {
                            category.map((submission) => (
                                <NewsletterItem key={submission.id} submission={submission} />
                            ))
                        }
                    </>
                ))}
            </section>
        </main >
    );
}
