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
    // const data = parse(allData);
    // const submission = data.submissions.find(sub => sub.id === submissionId);
    // submission.status = newStatus;
    allData.submissions.find((sub) => sub.id === submissionId).status =
      newStatus;
  };

  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <h2 className={styles.sectionHeader}>Community Submissions</h2>
        <SubmissionList
          submissions={pendingSubmissions}
          changeStatus={changeStatus}
        />
      </section>
      <section className={styles.mainSection}>
        <h2 className={styles.sectionHeader}>Upcoming Issue</h2>
        <NewsletterIssue newsletter={newsletter} />
      </section>
    </main>
  );
}
