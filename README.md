# Pokemon API

## Project status
This project shows the frontend of a web application, which consumes a public API and obtains results, once they are obtained they are rendered in the form of a list, clicking on one of these elements changes an image shown on the left side and Giving 2 clicks redirects to another page where you can see details of the pokemon. It also has pagination, which shows only 20 Pokémon, reaching a total of 150 Pokémon.
It uses redux to store the information of:
*All pokemons
*Details of a pokemon
*The current pokemon
*The page number
*isLoading


## steps development

1.- Change node version to 19.5.0
2.- Run "npm i" in the terminal to get all.
3.- Rename file .env.template to .env
4.- Do the respective changes in environment variables (if necessary).


```
REACT_APP_POKEMON_API_URL=https://pokeapi.co/api/v2/

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Description project`
For this exercise you will need to complete a series of tasks to demonstrate your logical and creative skills. You will have to make a proposal with a good presentation that is attractive to users.

1.- Use the PokeAPI
2.- User Redux
3.- Add pagination
4.- Load 20 Pokemons per page
5.- Limit to show only 150
6.- One click should change the image
7.- Double click should change the list for a details page


### `List of technologies used within the project:`
      "@reduxjs/toolkit": "^1.9.7",
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "@types/jest": "^27.5.2",
        "@types/node": "^16.18.58",
        "@types/react": "^18.2.28",
        "@types/react-dom": "^18.2.13",
        "axios": "^1.5.1",
        "dotenv": "^16.3.1",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-redux": "^8.1.3",
        "react-router-dom": "^6.17.0",
        "react-scripts": "5.0.1",
        "styled-components": "^6.1.0",
        "typescript": "^4.9.5"

### `The development environment requirements for integration`
This project was developed with:
Node: v19.5.0

