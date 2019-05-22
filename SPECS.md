# Dogstagram

The community of dog owners

Interactive Mockup link: https://app.moqups.com/uayWa4RFBw/view/page/aa9df7b72

## Actors

User - the user of the app
Guest - user that is not logged in

## Technical requirements

- Front-end framework: React
- Client-server interaction: GraphQL
- Routing: React Router
- No copy-paste = max reusability, your code should be DRY (don't repeat yourself)
- Files, folders, component, variables, function names & structure matter
- No deprecated/outdated lifecycle methods (componentWillReceiveProps and etc), libs and apis
- UX matters: form disabling while server response is in progress, loading states, empty states, error handling, validation
- UI matters: you are provided with the mockups. You can use any CSS library that you want (Bootstrap / Semantic UI / Materialize etc.) to achieve a modern and pleasant look for your app
- Your app should be deployed on any hosting provider. Netlify is recommended
- Your commit messages should be meaningful
- The user's session should be persisted in the local storage, so that he should not login every time he opens the app
- No credentials should be placed in the code or repo. They belong to .env files or similar configuration files. The configuration process should be explicitly described in the README.md file

### Bonus

- Usage of latest react api (hooks, context if needed)
- Unit tests
- Linted code
- Automatic deployment from git (CI/CD)
- Usage of branches and pull requests
- Usage of task management (trello / github issues / gitlab issues)
- Support of localization (i18n) in 2 languages (English and Ukrainian)

## Pages

### Login

Path: `/login`

Page only for guests. Here they can login to the app using their username and password. After a successful login the user is redirected to the "Dogs" page.
Users cannot access this page, they are redirected to the "Dogs" page.

### Sign up

Path: `/sign-up`

Page only for guests. Here they can create an account to the app using their username and password. After a successful sign up the user is redirected to the "My Dogs" page.
Users cannot access this page, they are redirected to the "Dogs" page.

### My Dogs

Path: `/my-dogs`

This page displays a list of user's dogs. It is possible to create, edit and remove a dog.

### New dog

Path: `/my-dogs/new`

Dog form for the new dog creation. Note about mock up: the fields should be empty for the "New dog" page.

Form restrictions:

- Name. required. max 20 chars, only letters and spaces
- Breed. required. max 20 chars, only letters and spaces
- Date of birth. required. display format DD.MM.YYYY (i.e. 20.08.2011)
- Sex. required.
- Status. optional. max 120 chars, any characters
- Image. optional. image is uploaded to a hosting using their api (imgur or similar)

### Edit dog

Path: `/my-dogs/:id`

Same as "New dog", but all the fields are pre-filled with the editing dog information.


### Dogs

Path: `/dogs`

List of dogs nearby sorted by their distance. The application should have a user's location access and the app should send the location coordinates (latitude and longitude) while fetching the list of the dogs. 
User can deny location tracking, in this case we should not display a list of dogs and display a message that the user should allow the location to have an access to this page.


