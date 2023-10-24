
# Language Learning Game

Assignment link: https://drive.google.com/file/d/1_m9NWF4iGFELh9apf0kxRY_7hjbdfuWh/view?usp=sharing

The objective of this assignment is to create a language learning game that
helps users improve their language proficiency through interactive exercises
and activities. The game should include frontend UI components, backend
logic for scoring, and a database to store user progress and language data.


## Implementation
I have implemented the following features -

Frontend :

    - Scoreboard for users to view and analyse their past scores
    - Leaderboard with all the scores of different users in descending order, so that you could compare with the top scorers.
    - User Authentication using firebase
    - Material UI design

Backend:

    - Routes for admin to create, read, update and delete
        - users 
        - questions.
        - results
    - Mongodb Database, with initially 3 sets of language questions - English, French, German with 5 questions each (already uploaded )
    - Any no of language sets with any no. of questions can be added to the database by using the API
    - Mongoose used to create schemas for users, questions and results.
    - Scoring system and result creation
    - Pushing the result to the database and updating the user scoreboard and leaderboard.
## Screenshots

- Login Screen
![Login](https://github.com/Revant202/LanguageQuiz/assets/76607683/c4e2e723-b5e6-4c4c-b3c2-4deaabc77ae8)
- Landing Screen
![landing](https://github.com/Revant202/LanguageQuiz/assets/76607683/3c43a9df-7d4c-4328-9448-369b0a571320)
- Scores screen
![leaderboard](https://github.com/Revant202/LanguageQuiz/assets/76607683/92fa554f-6770-40f5-ae94-0a02c900ec20)
- quiz screen
![quiz](https://github.com/Revant202/LanguageQuiz/assets/76607683/17d27970-e7f2-4129-ac90-0a6eb244c3ce)
- result screen
![result](https://github.com/Revant202/LanguageQuiz/assets/76607683/d18e35e1-4644-4782-8b89-d1939567836b)





## Run Locally

1) Clone the project

```bash
  git clone https://link-to-project
```

2) Go to the project directory

```bash
  cd my-project
```

3) Install dependencies for both client and sever

```bash
  npm install
```



4) Create an .env file with the following keys:

in client:

REACT_APP_SERVER_HOSTNAME = http://localhost:8080

in server:

ATLAS_URI = ... your mongodb uri...

JWT_SECREAT = ...your jwt secret..
 
5) start the server

```bash
  npm run start
```
6) send a post request to the route http://localhost:8080/api/questions to add question sets to your database. The body of this request should be a JSON of the given format - 

```
{
  "language": "german",
  "questionSet": [
    {
      "id": 1,
      "question": "Wo können Sie mit dem Ticket reisen? ",
      "options": [
        "In Deutschland und im Ausland.",
        "Nur in Deutschland.",
        "Nur in Ihrer Nähe."
      ]
    },
    {
      "id": 2,
      "question": "Bis wann können Sie reisen?",
      "options": [
        "Bis Mitte November.",
        "Bis Mitte Dezember.",
        "Bis Ende Dezember."
      ]
    },
    {
      "id": 3,
      "question": "Man bezahlt 29 Euro für … ",
      "options": [
        "eine Fahrt hin und zurück.",
        "eine Fahrt in der zweiten Klasse.",
        "viele Fahrten an einem Tag."
      ]
    },
    {
      "id": 4,
      "question": "Wo kann man noch parken?  ",
      "options": [
        "Am Bahnhof.",
        "Am Einkaufszentrum.",
        "Bei der Olympia-Halle."
      ]
    },
    {
      "id": 5,
      "question": "Wie wird das Wetter im Süden? Es wird… ",
      "options": [
        "kühl und trocken.",
        "warm und es gibt Gewitter",
        "warm und es regnet."
      ]
    }
  ],
  "answerSet": [
    2,
    1,
    2,
    0,
    0
  ]
}
```
7) you are good to go! Start the client using
```bash
  npm run start
```
and run the quiz app.

## Deployment

To deploy this project run

```bash
  npm run deploy
```

