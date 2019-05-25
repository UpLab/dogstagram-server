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


### Samples


```
mutation signUp {
  signUp(
    username: "ihor"
    password: "1"
  ) {
    token
    expiresAt
  }
}
```


```
mutation login {
  login(
    username: "ihor"
    password: "1"
  ) {
    token
    expiresAt
  }
}
```

```
mutation createDog {
  createDog(
    name: "Johnny"
    breed: "Pug"
    dob: "2017-08-22"
    sex: male
    status: "I am super dog!"
  ) {
    _id
    name
    breed
    dob
    sex
    status
    image
  }
}
```

```
mutation updateDog {
  updateDog(
		_id: "5ce8070aca46c6444b007cae"
    dob: "2017-08-25"
  ) {
    _id
    name
    breed
    dob
    sex
    status
    image
  }
}
```

```
mutation removeDog {
  removeDog(
		_id: "5ce8070aca46c6444b007cae"
  )
}
```
