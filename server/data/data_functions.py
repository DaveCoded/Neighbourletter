from .database import database_connection

# submissions


def createSubmission(submitter_email, content, status, newsletter_id):
    sql_conn = database_connection.getConnection()

    sql_query = 'INSERT INTO submissions (submitter_email, submission_content, submission_status, source_newsletter_id) VALUES (%s, %s, %s, %s)'
    sql_params = (submitter_email, content, status, newsletter_id)

    try:
        with sql_conn.cursor() as cursor:
            cursor.execute(sql_query, sql_params)
            cursor.commit()
    except Exception as e:
        print('Error in createSubmission:', e)
        return False

    return True


def getSubmissions():
    sql_conn = database_connection.getConnection()

    sql_query = 'SELECT submitter_email, submission_content, submission_status, source_newsletter_id FROM submissions'

    submissions = []
    try:
        with sql_conn.cursor() as cursor:
            cursor.execute(sql_query)
            for submission in cursor.fetchall():
                submissions.append({
                    'submitter_email': submission[0],
                    'submission_content': submission[1],
                    'submission_status': int(submission[2]),
                    'newsletter_id': int(submission[3])
                })

    except Exception as e:
        print('Error in getSubmissions:', e)

    return submissions


def getNewsletters():
    sql_conn = database_connection.getConnection()

    sql_query = 'SELECT submitter_email, submission_content, submission_status, source_newsletter_id FROM submissions'

    submissions = []
    try:
        with sql_conn.cursor() as cursor:
            cursor.execute(sql_query)
            for submission in cursor.fetchall():
                submissions.append({
                    'submitter_email': submission[0],
                    'submission_content': submission[1],
                    'submission_status': int(submission[2]),
                    'newsletter_id': int(submission[3])
                })

    except Exception as e:
        print('Error in getSubmissions:', e)

    return submissions

