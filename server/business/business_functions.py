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

def create_submission(request):
    """
    @params: 
    """