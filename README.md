# ambioNode

Setup: 
    Clone the repository. 
    npm insall. 
    substitute API Key in src/handlers/json.js
    
    npm start
    
    
API Notes: 
GETS: 
    - /getAllAccounts Gets all accounts
    - /getAccountByUserName?userName=name Gets account with matching name
    
PUTS: 
    - /getBeyondVerbal Uploads and analyzes a file with BV
    - /createAccount Body must contain account info: 
    ```
        {
            userName: 'name01',
            email: 'someone@somewhere.com',
            firstName: 'first',
            lastName: 'last',
            dateOfBirth: '01/01/1901',
        }
    ```