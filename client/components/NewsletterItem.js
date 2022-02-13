import styles from '../styles/NewsletterItem.module.css'

export default function NewsletterItem({ submission }) {
    console.log({ submission });

    if (submission.category === 'recommendation') {
        return (
            <article className={styles.article}>
                <h4>{submission.category}</h4>
                <h3>{submission.title}</h3>
                <p>{submission.location}</p>
                <p>{submission.description}</p>
            </article>
        )
    } else {
        return (
            <article className={styles.article}>
                <h4>{submission.category}</h4>
                <h3>{submission.title}</h3>
                <p>{submission.description}</p>
                <div>
                    <p><strong>Where?</strong> {submission.location}</p>
                </div>
            </article>
        );
    }
}
