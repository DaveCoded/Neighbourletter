export const parseResponse = (subs) => {
    if (!subs) return;
    return subs.map(sub => ({
        submitter: sub.submitter_email,
        id: sub.id,
        status: sub.submission_status,
        newsletterId: sub.newsletter_id,
        ...JSON.parse(sub.submission_content)
    }))
}
