# Dogstagram server

## Setup

`npm i`

## Start

1. Start mongodb on localhost:27017
2. `npm run start`

## GraphQL Playground

It is enabled on the 400th port (localhost:4000)

### Authorization

To do authorized calls, please include Authorization header with token optained from signUp or login mutation.
For example, { "Authorization" : "s7Jh4n32kskJSuSY34-15293kaHso-SJJ" }

To check authorization, you can use 'me' query that returns currently logged in user if the token is valid
