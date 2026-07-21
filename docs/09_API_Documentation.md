1. Employees -> http://localhost:8000/employees -> post
-> need token
->adding a employee
request
{
  "employeeId": "EMP001",
  "firstName": "Admin",
  "lastName": "Admin",
  "gender": "Male",
  "dob": "1990-01-01",
  "email": "admin@dmms.com",
  "mobileNumber": "1111111111",
  "address": "School Office, Ahmedabad",
  "qualification": "M.Ed",
  "experience": "10 Years",
  "joiningDate": "2026-07-15",
  "designation": "ADMIN",
  "department": "Administration",
  "salary": 100000,
  "status": true,
  "role": [1, 2, 3]
}
response
{
    "success": true,
    "data": {
        "message": "Employee created successfully",
        "employee": {
            "employeeId": "EMP001",
            "firstName": "Admin",
            "lastName": "Admin",
            "gender": "Male",
            "dob": "1990-01-01T00:00:00.000Z",
            "email": "admin@dmms.com",
            "mobileNumber": "1111111111",
            "address": "School Office, Ahmedabad",
            "qualification": "M.Ed",
            "experience": "10 Years",
            "joiningDate": "2026-07-15T00:00:00.000Z",
            "role": [
                1,
                2,
                3
            ],
            "designation": "ADMIN",
            "department": "Administration",
            "salary": 100000,
            "status": true,
            "_id": "6a5fa984635c40e70a81c434",
            "createdAt": "2026-07-21T17:16:52.522Z",
            "updatedAt": "2026-07-21T17:16:52.522Z",
            "__v": 0
        }
    }
}

-> http://localhost:8000/employees -> get
->authenticated(need token)
->return all employess

-> http://localhost:8000/employees/get/(EMP001) -> get
(EMP001)->will be id of the employee
->authenticated

->http://localhost:8000/employees/getByName/(Admin) -> get
(Admin)->name of the employee
->authenticated

->http://localhost:8000/employees/role/1 -> get
(1)->roles
->authenticated

2. login -> http://localhost:8000/login -> post

login if pass match and user is in user collection
-> if not in user collection password will be updated in employee collection
request
{
    "id":"dum01",
    "password":"admin",
    "cnfPass":"admin",
    "role":1
}
response
{
    "success": true,
    "message": "Login Successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZUlkIjoiZHVtMDEiLCJpZCI6IjZhNTdjN2ViM2E0MzRkYTE4MjZmNjZkYiIsInJvbGVJZHMiOlsxLDJdLCJpYXQiOjE3ODQ2NTQzNTUsImV4cCI6MTc4NDY4MzE1NX0.MhurBMpthLHlXXJfZPLb4tPK08Ga37Od9PfM2CycWdM",
    "user": {
        "id": "6a5fa8db3963caf7bd871c37",
        "userId": "dum01",
        "userName": "Admin",
        "role": "SUPER_ADMIN",
        "designation": "ADMIN",
        "department": "Administration",
        "status": "Active"
    }
}