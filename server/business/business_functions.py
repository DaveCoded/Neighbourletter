from ..data import data_functions
from utility.HttpException import HttpException, HttpErrorType, assertJSON

def get_submissions(request):
    """
    @params: status
    """
    try:
        status_param = request.args.get('status')
        
        if status_param is None or int(status_param) not in [0, 1, 2]:
            raise HttpException(HttpErrorType.BadJSON)

        # TODO: not getting function yet

    except HttpException as exc:
        return exc.GetResponse()

def Create(request):
    """
    @params: logintoken, name, short_desc
    """
    requestJSON = request.get_json(silent=True)
    try:
        assertJSON(requestJSON, ['logintoken', 'name', 'short_desc'])
        BlogPost.InputRuleSet.validateFromPropertyNames(['name', 'short_desc'], requestJSON)
        
        with SessionHandler.app_and_db_session_scope(requestJSON['logintoken'], SessionHandler.PermissionLevel.NONE) as session:
            addedPost = BlogPost.Create(
                db_session=session.db_session, 
                name=requestJSON['name'],
                short_desc=requestJSON['short_desc'],
                content=requestJSON['content']
            ) # TODO => finish assiging all properties to a blog post object
            return SessionHandler.OK(addedPost.toJSONObject())
    except HttpException as exc:
        return exc.GetResponse()

def create_submission(request):
    """
    @params: submitter_email, content, status, newsletter_id
    """
    requestJSON = request.get_json(silent=True)
    try:
        assertJSON(requestJSON, ['submitter_email', 'content', 'status', 'newsletter_id'])
        submission_created = data_functions.createSubmission(
            requestJSON['submitter_email'], 
            requestJSON['content'], 
            requestJSON['status'], 
            requestJSON['newsletter_id']
        )

        if submission_created:
            return HttpException.OK()
        else:
            return HttpException(HttpErrorType.GenericError, 'Creating a submission', 'Failed to create it my dood.')
    except HttpException as exc:
        return exc.GetResponse()