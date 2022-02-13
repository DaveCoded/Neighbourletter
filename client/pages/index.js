import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Mail } from 'react-feather';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Neighbourletter</title>
                <meta
                    name="description"
                    content="An amazing Hack the Press project for creating hyper-local newsletters"
                />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📮</text></svg>"
                ></link>
            </Head>

            <main className={styles.main}>
                <Mail size={82} color="var(--primary-color)" />
                <h1 className={styles.title}>Welcome to NeighbourLetter!</h1>
                <div className={styles.body}>
                    <p>
                        {' '}
                        A tool for local community leaders to create hyperlocal newsletters
                        using stories, events, and recommendations sourced from their
                        community members.
                    </p>

                    <p>
                        Anyone can setup a newsletter for their postcode. Community members
                        can email in submissions, or fill out an easy-to-use webform.
                    </p>
                    <p>
                        Newsletter managers recieve the submissions in a central dashboard,
                        and can approve, reject, edit, or flag them for revision.
                    </p>

                    <p>
                        Neighbourletter removes the technical challenges, moderation issues,
                        and organisational burden off community leaders who want to help
                        source and amplify news from their local neighbourhood – all using
                        the accessible medium of email.
                    </p>

                    <p>
                        Designed to be accessible to anyone, no matter their technical
                        literacy level.
                    </p>
                </div>
                <button
                    style={{
                        fontSize: 'var(--font-md',
                        borderRadius: '3rem',
                        border: '1px solid var(--primary-color)',
                        padding: '1rem 2rem',
                        color: 'var(--gray-800)',
                    }}
                >
                    <a href="/dashboard">Go to Example Dashboard</a>
                </button>
            </main>
        </div>
    );
}
