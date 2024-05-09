# WebBossModeller - Backend Base

The base of the App. 

Defines base routes using express and controls the basic functionality of the backend such as:
1. Logging
2. Authentication
3. Proxying to other services, after processing requests in the middleware

## Open ToDos:
1. Change the Databse to mongoDB from the local JSON-File Database (./src/util/db)
2. Configure Session Storage outside of RAM -> change to mongoDB
3. Create proxy gateways to other services (Frontend, Saves, + all other functions)
4. documentation.
