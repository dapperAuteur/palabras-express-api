## fourLetterWords-express-api

## Purpose of app
I created this app to build an application that would help me grow in my personal life. It will be a tool for me to expand my English and Spanish vocabulary, track my expenses, and document my growth using a blog.
It contains three word lists: four letter words, prefix and suffix words, and Spanish verbs.

The client side repo is located at https://github.com/dapperAuteur/idnkhtw and hosted at www.idnkhtw.space .

### API Endpoints (Namespaced: '/api/ver0001/'):
default port: 8081
* comments (coming soon):
ALL keys are required EXCEPT 'tags'.
  `{
    tags: ['array', 'of', 'strings'],
    currentUserId: 'string',
    postId: 'string',
    timestamps: 'string'
    }`
* four-letter-words:
ONLY 'word' is required.
  `{
    word: 'string',
    definition: 'string',
    s_points: NUMBER,
    f_points: NUMBER,
    tier: NUMBER,
    in_game: Boolean,
    tongue: 'string',
    timestamps: ''
    }`
* games (coming soon):
'attempts', 'bulls', 'cows', 'currentUserId', 'score', 'winningWord', 'won' are required.
  `{
    attempts: NUMBER,
    bulls: NUMBER (max 4, min 0),
    cows: NUMBER (max 4, min 0),
    guesses: ['array', 'of', 'strings'],
    currentUserId: 'string',
    score: NUMBER,
    winningWordId: 'string',
    won: Boolean (default: false),
    wordsToConsiderForLibrary: ['array', 'of', 'strings'],
    timestamps: ''
    }`
* posts:
'title', 'text', 'currentUserId' are required
`{
  title: string,
  text: string,
  password: string,
  comments: ['array', 'of', 'ids'],
  tags: ['array', 'of', 'ids'],
  currentUserId: 'string'
  timestamps: ''
  }`
* prefix-suffix-roots:
ONLY 'word' is required.
  `{
    word: 'string',
    meaning: 'string',
    examples: 'string',
    type: 'string',
    tongue: 'string',
    timestamps: ''
    }`
* tags (coming soon):
ONLY 'text' is required.
`{
  text: 'string',
  comments: ['array', 'of', 'ids'],
  posts: ['array', 'of', 'ids'],
  timestamps: ''
  }`
* transactions (protected):
'transactionEvent', 'account', 'amount', 'currency', 'currentUserId' are required.
`{
  transactionEvent: 'string',
  account: 'string',
  dateTime: 'string',
  password: 'string',
  details: 'string',
  amount: 'string',
  currency: 'string',
  tags: ['array', 'of', 'ids'],
  currentUserId: 'string',
  timestamps: ''
  }`
* users (protected):
'email', 'role', 'username', 'password', are required.
`{
  email: 'string',
  role: NUMBER,
  username: 'string',
  password: 'string',
  profileImageUrl: 'string',
  translationScore: 'string',
  comments: ['array', 'of', 'ids'],
  games: ['array', 'of', 'ids'],
  guesses: ['array', 'of', 'ids'],
  posts: ['array', 'of', 'ids'],
  transactions: ['array', 'of', 'ids'],
  timestamps: ''
  }`
* verbos:
ONLY 'spanish' is required.
  `{
    spanish: 'string',
    english: 'string',
    reflexive: Boolean,
    irregular: Boolean,
    categoría_de_irregular: 'string',
    cambiar_de_irregular: 'string',
    terminación: 'string',
    grupo: NUMBER,
    timestamps: ''
    }`

### Road Map:
* more slugs for endpoints
* more roles for users with various authorizations levels/abilities
* store game status

### HTTP Status Code Summary
* 200 - ok
* 401 - Unauthorized ({ message: "Please login." })
* 404 - Not Found

## Tools used:
* bcrypt
* body-parser
* cors
* dotenv
* express
* jsonwebtoken
* mongoose

## To start using this repo:
* clone the repo
* cd palabras-express-api/
* npm install
* node index.js or nodemon index.js (I prefer nodemon index.js because it will reload the app after files have changed.)

## This api is hosted on Heroku at 'peaceful-waters-22726.herokuapp.com/'.
### Namespaced:
api/ver0001/ (I like to put the three 0's in the version of my apps to allow for growth.
### Routes:
* comments/
* four-letter-words/ (It's a large list, about 4000 words.)
* games/
* posts/
* prefix-suffix-roots/ (List of 448 words.)
* tags/
* transactions/
* users/
* verbos/ (List of 346 Spanish verbs.)
