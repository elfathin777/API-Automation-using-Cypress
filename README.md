# 📘 Reqres API Testing with Cypress

This project contains **API automation tests** for the public [Reqres](https://reqres.in/) API using **Cypress**.

---

## 🔧 Tech Stack

* [Cypress](https://www.cypress.io/) `v12+`
* JavaScript (ES6)
* Public API: [https://reqres.in](https://reqres.in)

---

## 🚀 Setup Project

1. **Clone the repo**

   ```bash
   git clone https://github.com/elfathin777/API-Automation-using-Cypress.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run tests**

   ```bash
   npx cypress open
   ```

---

## 🔑 API Key Usage

Reqres API now requires API key for protected endpoints.

**Your API Key (Example):**

```
reqres-free-v1
```

**Add API Key in headers on each request:**

```javascript
headers: {
    'x-api-key': 'reqres-free-v1',
    'Accept': 'application/json'
}
```

---

## 📄 Test Structure

### ✅ Example Test Case

```javascript
describe('Reqres API Testing - List Users', () => {
    const apiKey = 'reqres-free-v1';

    it('GET api/users?page=2 (should return 200)', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            headers: {
                'x-api-key': apiKey,
                'Accept': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
        });
    });
});
```

---

# ✅ Reqres API Test Scenarios

| No | Scenario                    | Method | Endpoint           | Expected Status | Description                                 |
| -- | --------------------------- | ------ | ------------------ | --------------- | ------------------------------------------- |
| 1  | List Users                  | GET    | /api/users?page=2  | 200             | Get list of users on page 2                 |
| 2  | Single User                 | GET    | /api/users/2       | 200             | Get details of a specific user              |
| 3  | Single User Not Found       | GET    | /api/users/23      | 404             | User not found                              |
| 4  | List <resource>             | GET    | /api/unknown       | 200             | Get list of resources                       |
| 5  | Single <resource>           | GET    | /api/unknown/2     | 200             | Get details of a specific resource          |
| 6  | Single <resource> Not Found | GET    | /api/unknown/23    | 404             | Resource not found                          |
| 7  | Create                      | POST   | /api/users         | 201             | Create a new user                           |
| 8  | Update (PUT)                | PUT    | /api/users/2       | 200             | Full update user                            |
| 9  | Update (PATCH)              | PATCH  | /api/users/2       | 200             | Partial update user                         |
| 10 | Delete                      | DELETE | /api/users/2       | 204             | Delete user                                 |
| 11 | Register - Successful       | POST   | /api/register      | 200             | Successful registration with token response |
| 12 | Register - Unsuccessful     | POST   | /api/register      | 400             | Missing password                            |
| 13 | Login - Successful          | POST   | /api/login         | 200             | Successful login with token response        |
| 14 | Login - Unsuccessful        | POST   | /api/login         | 400             | Missing password                            |
| 15 | Delayed Response            | GET    | /api/users?delay=3 | 200             | Get list of users with delay                |


---

## 🧪 Best Practices

* Use `cy.request` with API key on secured endpoints.
* Use `failOnStatusCode: false` when expecting non-2xx responses.
* Centralize API key and base URL for scalability.
* Use `beforeEach` or custom commands (`commands.js`) for DRY approach.

---

## 💡 Notes

* Always check [https://reqres.in](https://reqres.in) documentation for the latest API specs.
* This is a public dummy API, no actual data persistence occurs.

