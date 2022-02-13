from .data import data_functions, emails
from .utility.HttpException import HttpException, HttpErrorType, assertJSON, OK
import logging

logging.basicConfig(filename='example.log', level=logging.DEBUG)

def get_submissions(request):
    """
    @params: status
    """
    try:
        status_param = request.args.get('status')
        
        logging.info(status_param)
        if status_param is None or int(status_param) not in [0, 1, 2]:
            raise HttpException(HttpErrorType.BadJSON)

        submissions = data_functions.getSubmissions()
        return OK({'submissions': submissions})

    except HttpException as exc:
        return exc.GetResponse()
    except Exception as e:
        logging.error('HELLLLLLLLLLLLLLLLLLLLLLLLO' + e)
        return HttpException(HttpErrorType.GenericError).GetResponse()

def create_submission(request):
    """
    @params: submitter_email, content, status, newsletter_id
    """
    logging.error(request)
    logging.error(request.get_json())
    requestJSON = request.get_json(silent=False)
    try:
        assertJSON(requestJSON, ['submitter_email', 'content', 'status', 'newsletter_id'])
        submission_created = data_functions.createSubmission(
            requestJSON['submitter_email'], 
            requestJSON['content'], 
            requestJSON['status'], 
            requestJSON['newsletter_id']
        )

        if submission_created:
            return OK()
        else:
            return HttpException(HttpErrorType.GenericError, 'Creating a submission', 'Failed to create it my dood.').GetResponse()
    except HttpException as exc:
        return exc.GetResponse()
    except Exception as e:
        logging.error(e)
        return HttpException(HttpErrorType.GenericError).GetResponse()

def update_submission(request):
    """
    @params: submission_id, status
    """
    requestJSON = request.get_json(silent=True)

    try:
        assertJSON(requestJSON, ['submission_id', 'status'])
        submission_updated = data_functions.updateSubmissionStatus(
            requestJSON['submission_id'], 
            requestJSON['status']
        )

        if submission_updated:
            return OK()
        else:
            return HttpException(HttpErrorType.GenericError, 'Updating a submission', 'Failed to update it my dood.').GetResponse()
    except HttpException as http_e:
        return http_e.GetResponse()
    except Exception as e:
        logging.error(e)
        return HttpException(HttpErrorType.GenericError).GetResponse()

def send_email():
    submissions = data_functions.getSubmissions()
    accepted_submissions = []
    for sub in submissions:
        if sub['submission_status'] == 2:
            accepted_submissions.append(sub)
    emails.tryAndSendEmail(accepted_submissions)
    return OK()