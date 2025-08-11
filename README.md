## About

A basic [Nextjs](https://nextjs.org/) app to track a task list, supporting multiple users. 
Using [Json-Server](https://github.com/typicode/json-server/tree/v0) for mock api and login flow.

## Getting Started

The webapp can be run in your terminal by navigating to the root directory and running: 

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

JSON-Server is used to mock out the backend.  This can be run by navigating to the same root directory 
in a new terminal window and run: 

```bash
npm run json-server
# or 
yarn json-server
# or
pnpm json-server
# or
bun json-server
```
Onceboth the webapp and server are running, open [http://localhost:3000](http://localhost:3000) with your browser to see the app running.

There are two registered users that can login with email and password combinations:

```
  { 
    "email": "test@test.com",
    "password": "test123!",
  },
  {
    "email": "jane@example.com",
    "password": "OMG123!",
  }
```

Each should show their unique list of tasks.

### Supported Functions

Currently there is no signup function, but the two registered users can login to see their tasks and then logout.  

While logged in, verified users can mark their tasks as Done or Undo that action, they can update the title and description of each task, they can add new tasks and they can delete tasks.

### Secret Key

A secret key is needed in order to encrypt and decrypt session information, which is handled [in the session.js file](./src/app/lib/session.js)
In order to provide this secret key, you can create a .env file in the root app & generate a 32-character random string that can be used as a secret key
per the [Next.js docs](https://nextjs.org/docs/app/guides/authentication#1-generating-a-secret-key); 
You can then use `const secretKey = process.env.SESSION_SECRET`;

However for ease in getting the app running, a random smaller string is hard coded into the session file.  This should never be used in a production environment.
