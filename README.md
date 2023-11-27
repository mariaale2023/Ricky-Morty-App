# Ricky Morty App

![rick&morty](rick.jpg)
*image created by dall-e*

The Ricky Morty App is a web application that allows users to explore characters from the popular animated TV show "Rick and Morty". Users can view details about each character, search for specific characters, and access a shop for Ricky Morty merchandise. This App is connected with Ricky and Morty API and Higrogen Shopify framework.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a homepage with links to different sections of the app.
- Browse and search for Ricky Morty characters.
- Access detailed information about each character.
- Visit the Ricky Morty shop for merchandise and products.

![Home](/imagen-app/Home.png)
![Characters Cards](/imagen-app/Characters.png)
![Filters](/imagen-app/Filters.png)
![Shop](/imagen-app/Shop.png)

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- React Router: A library for routing and navigation in a React application.
- Shopify Hydrogen: A set of React components and utilities for building Shopify storefronts.
- Ricky and Morty API: An external API used to fetch data about characters and other details from the popular animated series "Rick and Morty." This API enhances the application by providing additional content and functionality related to the show.

## Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/Ricky-morty-app.git
cd Ricky-morty-app
```

2.  In your terminal, open folder App
    `cd my-app`
    `npm install`
    `npm start`.

3.  Crete a Shop Online in Shopify
    Check your Node version (you will need app v18 to run Hidrogen)
    `node -v`

    Create and Account in [Shopify](https://www.shopify.com/nz)

    Create your Store

4.  Install Higrogen.
    Check documentation on [Higrogen](https://shopify.dev/docs/custom-storefronts/hydrogen/getting-started/quickstart)

        ```cd my-app
        npm create @shopify/hydrogen@latest

        ? Choose a template
        Hello World
        > Demo Store

        ? Choose a language
        > JavaScript
        > TypeScript

        Where would you like to create your app?
        > Add a NAME

        ? Install dependencies with npm?
        > Yes
        > No

        cd ricky-morty-shop
        npm run dev```

5.  Update your public API token and Public domain with yours

6.  Update the link of the shop online in Home1.js
