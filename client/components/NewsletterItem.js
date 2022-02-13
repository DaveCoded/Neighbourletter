import styles from '../styles/NewsletterItem.module.css'

export default function NewsletterItem({ submission }) {
    console.log({ submission });

    if (submission.category === 'recommendation') {
        return (
            <article className={styles.article}>
                <h3 className={styles.articleTitle} style={{ marginBottom: '0px' }}>{submission.title}</h3>
                <p style={{ color: 'var(--gray-600)' }}>{submission.location}</p>
                <p style={{ color: 'var(--gray-800)' }}>{submission.description}</p>
            </article>
        )
    } else {
        return (
            <article className={styles.article}>
                <h3 className={styles.articleTitle}>{submission.title}</h3>
                <p style={{ color: 'var(--gray-800)' }}>{submission.description}</p>
                <div>
                    <p style={{ color: 'var(--gray-600)' }}><strong>Where?</strong> {submission.location}</p>
                </div>
            </article>
        );
    }
}
