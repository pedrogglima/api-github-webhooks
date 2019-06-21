# About

This project was asked as a job interview to work with Rails. Basically, I was asked to create a Rails API with two endpoints, the first one should save data from the [Github Webhook API](https://developer.github.com/webhooks/) and the second retrieve the saved data by id.

I found the project with an educational purpose and decided to reproduce it, but using a different Stack. For the interview I used Rails & Postgres, for this one I decided to go with Node & Mongodb.

# Requirements

The versions here was what I used on the project.

- Linux system
- Node 10.15
- npm 6.9
- Mongodb 4.0
- Ngrok (this software helps you making your localhost url public to the internet, so we can receive data from the Github Webhook API. I used the free version for this project)

# Usage

Install Mongodb and let it running on your machine.

Download the project, inside the project's folder type on console:

```
npm install
```

After installed the dependencies, you can started the server:

```
npm start
```

You should see the message "Listen on port 3000".
The file .env on the project's folder has the information necessary to create the database on mongodb, so it won't be necessary to set up it.

Now you should install & set up Ngrok to create a public url. Install Ngrok, you can find information on its [page](https://ngrok.com/). After installed, start it:

```
// for example, to start on port 3000.
./ngrok http 3000
```

Ngrok will generate a public url that points to your server (localhost:3000 for instance). You should use this url to set up your Github Webhook.

So, for example, on your github repository that was set up with webhooks ([How create Webhooks on your reposiory](https://developer.github.com/webhooks/creating/)), every time that a certain event happen on your repository, Github will send data about that event to our server.

# Observations

- This project has three endpoints:

  - http://localhost:3000/github/webhooks/payload

    This URL is used by the Github Webhook to POST data on our server using json format. The whole API use json format to exchange information.

  - http://localhost:3000/github/webhooks/events

    This URL is used to retrieve the IDs from the data saved on the database. With these IDs you can retrieve the whole information about the event with the next url.

  - http://localhost:3000/github/webhooks/:id/event

    This URL is used to retrieve the whole information about the event for the ID given. To see the data on your browser, you can install the Chrome extension "bro/q". This extension will help formatting the JSON data in a friendly and organized way.

- For run tests, you can type on console: `npm run test`
