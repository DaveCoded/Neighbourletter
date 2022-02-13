import Link from 'next/link';
import styles from '../styles/Newsletter.module.css'
import jsondata from '../dummy-data.json';

export default function Newsletter() {
    // get submissions
    const submissions = jsondata.submissions;
    // filter for approved status
    const approvedSubmissions = submissions.filter(
        (sub) => sub.status === 'approved'
    );
    // create an array of arrays, where each nested array has submissions of the same category
    const groupedSubmissions = approvedSubmissions.reduce((acc, sub) => {
        if (acc[sub.category]) {
            acc[sub.category].push(sub);
        } else {
            acc[sub.category] = [sub];
        }
        return acc;
    }, {});


    console.log({ groupedSubmissions });

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
                {/* Loop through outer array, and output status */}
                {/* Loop through submissions and output content */}
            </section>
        </main>
    );
}
