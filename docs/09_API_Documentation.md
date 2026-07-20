1. Employees -> http://localhost:8000/employees -> post

->adding a employee
request
{
  "employeeId": "EMP004",
  "firstName": "Rahul",
  "lastName": "Sharma",
  "gender": "Male",
  "dob": "1990-05-15",
  "email": "rahul.sharma@example.com",
  "mobileNumber": "9876543210",
  "address": "12 MG Road, Ahmedabad, Gujarat",
  "qualification": "M.Ed",
  "experience": "8 Years",
  "joiningDate": "2026-07-20",
  "role": "HEAD_TEACHER",
  "designation": "Principal",
  "department": "Administration",
  "salary": 75000,
  "status": true
}

response
{
    "success": true,
    "data": {
        "message": "Employee created successfully",
        "employee": {
            "employeeId": "EMP004",
            "firstName": "Rahul",
            "lastName": "Sharma",
            "gender": "Male",
            "dob": "1990-05-15T00:00:00.000Z",
            "email": "rahul.sharma@example.com",
            "mobileNumber": "9876543210",
            "address": "12 MG Road, Ahmedabad, Gujarat",
            "qualification": "M.Ed",
            "experience": "8 Years",
            "joiningDate": "2026-07-20T00:00:00.000Z",
            "role": "HEAD_TEACHER",
            "designation": "Principal",
            "department": "Administration",
            "salary": 75000,
            "status": true,
            "_id": "6a5e54ee18324d6f170d5a77",
            "password": "$2b$10$YjAHR5eBaElByqedWtgHCuIjgrxvzNOnZ5zp5mdpP77VgXuvmV242",
            "createdAt": "2026-07-20T17:03:42.251Z",
            "updatedAt": "2026-07-20T17:03:42.251Z",
            "__v": 0
        }
    }
}

2. login -> http://localhost:8000/login -> post

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