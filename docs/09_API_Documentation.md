Document every API.
Example:
POST

/login

Purpose

Authenticate user.

Request

{
employeeId,
password
}

Response

{
token,
user
}
Repeat for every endpoint


2. login 
login if pass match and user is in user collection
-> if not in user collection password will be updated in employee collection
request
{
    
    "id": "EMP004",
    "password": "123", // pass
    "cnfPass":"423423", // confirm pass only required for first login 
    "role":"HEAD_TEACHER"
}

response
{
    "success": true,
    "message": "Login Successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiRU1QMDA0IiwiaWQiOiI2YTVlNTRlZTE4MzI0ZDZmMTcwZDVhNzciLCJyb2xlIjoiSEVBRF9URUFDSEVSIiwiaWF0IjoxNzg0NTY3MTMxLCJleHAiOjE3ODQ1OTU5MzF9.Db4dKar1L4wd6e-9DydowJ6blnIAqBOPYFFsQ6wDJN0",
    "user": {
        "id": "6a5e553a18324d6f170d5a78",
        "userId": "EMP004",
        "userName": "Rahul",
        "role": "HEAD_TEACHER",
        "designation": "Principal",
        "department": "Administration",
        "status": "Active"
    }

}