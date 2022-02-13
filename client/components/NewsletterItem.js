import styles from '../styles/NewsletterItem.module.css'

export default function NewsletterItem({ submission }) {
    console.log({ submission });

    if (submission.category === 'recommendation') {
        return (
            <article className={styles.article}>
                <h3>{submission.category}</h3>
                <h2>{submission.title}</h2>
                <p>{submission.location}</p>
                <p>{submission.description}</p>
            </article>
        )
    } else {
        return (
            <article className={styles.article}>
                <h3>{submission.category}</h3>
                <h2>{submission.title}</h2>
                <p>{submission.description}</p>
                <div>
                    <p><strong>Where?</strong> {submission.location}</p>
                </div>
            </article>
        );
    }
}
