import ROLES from "../constants/roles";

const mockAuthUsers = [
  {
    userId: "1234-5678-4321-0000",
    userType: ROLES.admin,
    userName: "admin",
    password: "admin123",
    email: " admin@gmail.com",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0LTU2NzgtNDMyMS0wMDAwIiwidXNlclR5cGUiOiJhZG1pbiIsInVzZXJOYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.OljafJs22EJhrnkfEP-Erko4-sOaW-4MzBRfbqZmDkE",
  },
  {
    userId: "1234-5678-4321-1111",
    userType: ROLES.club,
    userName: "club",
    password: "club123",
    email: "club@gmail.com",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0LTU2NzgtNDMyMS0xMTExIiwidXNlclR5cGUiOiJjbHViIiwidXNlck5hbWUiOiJjbHViIiwiZW1haWwiOiJjbHViQGdtYWlsLmNvbSJ9.NtQ7Lw8hdq9LfvogTiaJS8lHvul5wiCCFet1lO2MQ3Y",
  },
];

export default mockAuthUsers;
