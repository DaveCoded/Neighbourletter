from .config import settings as conf
import mysql.connector

SQL_CONNECTION = None

def _setupConnection():
    global SQL_CONNECTION
    if SQL_CONNECTION is None:
        SQL_CONNECTION = mysql.connector.connect(
            host=conf.DATABASE_SERVER,
            user=conf.DATABASE_USER,
            password=conf.DATABASE_PASSWORD,
            database=conf.DATABASE_NAME
        )

def getConnection():
    if SQL_CONNECTION is None:
        _setupConnection()

    return SQL_CONNECTION