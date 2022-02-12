from .database import database_connection

# submissions
def createSubmission(submitter_email, content, status, newsletter_id):
    sql_conn = database_connection.getConnection()
    
    sql_query = 'INSERT INTO submissions (submitter_email, submission_content, submission_status, source_newsletter_id) VALUES (%s, %s, %s, %s)'
    sql_params = (submitter_email, content, status, newsletter_id)

    try:
        with sql_conn.cursor() as cursor:
            cursor.execute( sql_query, sql_params )
            cursor.commit()
    except Exception as e:
        print('Error in createSubmission:', e)
        return False

    return True

