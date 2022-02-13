# MySQL database config
DATABASE_NAME = 'newsletter_db'
DATABASE_SERVER = 'localhost'
DATABASE_USER = 'root'
DATABASE_PASSWORD = ''

import mysql.connector
import logging

SQL_CONNECTION = None

def _setupConnection():
    global SQL_CONNECTION
    if SQL_CONNECTION is None:
        SQL_CONNECTION = mysql.connector.connect(
            host=DATABASE_SERVER,
            user=DATABASE_USER,
            password=DATABASE_PASSWORD,
            database=DATABASE_NAME
        )

def getConnection():
    if SQL_CONNECTION is None:
        _setupConnection()

    return SQL_CONNECTION

# submissions


def createSubmission(submitter_email, content, status, newsletter_id):
    sql_conn = getConnection()

    sql_query = 'INSERT INTO submissions (submitter_email, submission_content, submission_status, source_newsletter_id) VALUES (%s, %s, %s, %s)'
    sql_params = (submitter_email, content, status, newsletter_id)

    try:
        cursor = sql_conn.cursor()
        cursor.execute(sql_query, sql_params)
        sql_conn.commit()
    except Exception as e:
        logging.error('Error in createSubmission:', e)
        return False

    return True


def getSubmissions():
    sql_conn = getConnection()

    sql_query = 'SELECT submission_id, submitter_email, submission_content, submission_status, source_newsletter_id FROM submissions'

    submissions = []
    try:
        cursor = sql_conn.cursor()
        cursor.execute(sql_query)
        subs = cursor.fetchall()
        logging.info(subs)
        logging.info(subs[0][0])

        for submission in subs:
            submissions.append({
                'id': int(submission[0]),
                'submitter_email': submission[1],
                'submission_content': submission[2],
                'submission_status': int(submission[3]),
                'newsletter_id': int(submission[4])
            })

    except Exception as e:
        logging.error('Error in getSubmissions:', e)

    return submissions

def updateSubmissionStatus(submission_id, new_status):
    sql_conn = getConnection()
    sql_query = 'UPDATE submissions SET submission_status = %s WHERE submission_id = %s'
    sql_params = (new_status, submission_id)

    try:
        cursor = sql_conn.cursor()
        cursor.execute(sql_query, sql_params)
        sql_conn.commit()
    except Exception as e:
        logging.error('Error in updateSubmissionStatus:', e)
        return False

    return True

def getNewsletters():
    sql_conn = getConnection()

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

