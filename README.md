
`#react` `#assembler-institute-of-technology` `#master-in-software-engineering` `#ReactEcommerce` `#ReactJS` `#ReactHooks` `#TailwindCSS` `#ReactHookForm` `#CustomHooks` `#StyledComponents` `#TypeScript` `#CSSModules` `#Figma` `#memo` `#UseMemo` `#Memoization` `#UseCallback` `#LazyLoading` `#Suspense` `#SkeletonScreens` `#LoadingPerformance` `#ReactOptimization`

<div>
    <img src="/src/assets/img/fizz2.png" alt="fizz-project" width="150">
</div>

### Welcome to fizz-project by Ferran Cipres AIT
Fizz-project is an innovative e-commerce platform where you can explore a diverse range of products and make purchases with ease. Browse through an extensive collection of cutting-edge products and indulge in a seamless shopping experience.

### An Exciting Opportunity
This project has been an exciting challenge that has pushed me to my limits both in terms of personal involvement and knowledge in the Front-End and Back-End areas. 

Perfect opportunity to demonstrate and perfect my skills acquired so far, while building my own e-commerce platform implementing features, improving the user experience and optimizing performance.

## Table of Contents <!-- omit in toc -->

- [Overview](#-overview)
- [Objective](#-objective)
- [🗃️ Data Model](#️-data-model)
    - [📦 Products](#-products)
- [📝 Knowledge](#-knowledge-implementation)
- [👾 Installation Tips](#-installation-tips)
- [📃 Challenges](#-challenges)
- [Conclusion](#-conclusion)

## Overview ##
The main goal was to create an e-commerce platform, allowing to navigate through the different products (Home, ProducPage, Cart...) and  allows us to display information about the products, prices, description, categories and navegate throught all the pages in order to realized a completo process of purchase.

 This project has been built mainly with React & Vite, along with a set of libraries, hooks and tailwindcss: 
* react-router-dom, 
* react-icons, 
* swiper

Finally, the purpose was tperfect my skills acquired so far and to put into practice everything we have learned in the last three months at Assembler Institute of Techonology.

## Objective ##
The objective of the project had been separate in different fases:
* Phase 0: Figma & Click-up
* Phase 1: Prop-drilling, useState, useEffect, Conditionals, and Error Handling
* Phase 2: React Router, useContext, Inputs, and Forms
* Phase 3: Async/Await, React Router with dynamic and private Routes, and searchParams
* Phase 4: CSS Modules and Styled Components
* Phase 5: Memoization Techniques
* Phase 6: Custom Hooks, Lazy Loading, and startTransition
* Phase 7: Add-ons

## Data Model ##
One of the requirements of the project was to create your own database to upload to a server (json-server), and to be able to make calls to the server to render the products on the screen dynamically using a Javascript method called `map``.

As a personal decision and in order to focus directly with the functionalities I used an Api called FakeStore, which at the beginning worked correctly but was limited in the number of calls, and the waiting times to receive the data, so, finally I got for creating my own database located ./src/assets/db/db.json.

## 📦 Products

- The "products" array contains information about different products available in the e-commerce platform.
- Each product has an "id," "name," "price," "image" URLs, "description," "category,"
- The "filters" array provides additional categorization for the products.

```bash
{
    "products": [
        {
            "id": 1,
            "title": "Cempasuchil",
            "description": "Brillante y cítrica",
            "price": 7.50,
            "category": "Best Seller",
            "image": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/cempasuchil_bath_bomb_2023_6acf7ae5_thumbnail_256.png",
            "imagenback1": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/00808_3_9490822b_thumbnail_4096.jpg",
            "imagenback2": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/00808_2_94ed9c20_thumbnail_4096.jpg",
            "stock": 100
        },
        {
            "id": 2,
            "title": "Glitter Bomb",
            "description": "¡Un baño prefiesta!",
            "price": 9.50,
            "category": "New",
            "image": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/glitter_bomb_bath_bomb_2023_ab1d1672_thumbnail_256.png",
            "imagenback1": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/glitter_bomb_bath_bomb_2023_9x16_22c4ff48_thumbnail_4096.jpg",
            "imagenback2": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/glitterbox_hero_16x9_0c0be1b1_thumbnail_4096.jpg",
            "stock": 150
        },
        {
            "id": 3,
            "title": "Barbie Bath",
            "description": "El baño de tus sueños",
            "price": 7.50,
            "category": "New",
            "image": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/barbie_bath_bomb_2023_a1b04302_thumbnail_256.png",
            "imagenback1": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/Barbie_x_lush_barbie_bath_bomb_heros_2023-25_5bd6d196_thumbnail_4096.jpg",
            "imagenback2": "https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/Barbie_x_lush_barbie_bath_bomb_heros_2023-24_f42492ed_thumbnail_4096.jpg",
            "stock": 30
        },
    ]
}

```

## Konwledge Implementation ##
* **HTML:** Learn and implementation of semantinc & clean code
* **TAILWIND:** Learn form cero, how to code CSS inline with class
* **TYPESCRIPT:** Deep learning about how to type everything and avoid bugs, errors, undefined, null...
* **REACT:** Learn about everything, way to work, to understand, diferent architecture between components, pages, hooks, optimization
* **DOCUMENTATION:** How to read documentation, learn how to install new libreries..and how to work with them...


## 👾 Installation ## 
Before start de the project, make sure that you have all the implementation installed on your Visual Studio Code. 
Also, you need to decide what kind of webpack are you going to use to develop your proyecto, in my case I used Vite, because is a newer and faster alternative to webpack. Moreover, It leverages ES modules for rapid development and has gained popularity for React projects as well.

1. Create your own GitHub repository and create your own folder:
```bash
$ mkdir ait-ecommerce-vite-project
$ cd ait-ecommerce-vite-project
$ git clone https://yourgithubprojectrepository.com
```
2. Initialise your proyect with Vite, use the following commands:
```
npm create vite@latest
cd my-app
npm run dev
```

3. Install the dependencies:

- 3.1 react-router-dom
Client side routing allows your app to update the URL from a link click without making another request for another document from the server.
Use the following command to install:
```
npm install react-router-dom
```

- 3.2 react-icons
Library ES6 imports that allows you to include only the icons that your project is using. Use the following command to install:
```
npm install react-icons

Examle (to use);
import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```
- 3.3 react-hook-form
Hook Form offers us the ability to develop our forms in an uncontrolled way, making independent any change that may occur in each of the elements of the form. Use the following command to install:
```
npm install react-hook-form

```

- 3.4 swiper
JavaScript framework created and used for slideshow presentation in a modern, stylish and easy-to-implement way. Use the following command to install:

```
npm i swiper
```

4. Start running server (fake Api)
Once, you have created your db.json you should initialise,
use the following commands:
 ```
Install JSON Server

npm install -g json-server
Create a db.json file with some data

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
Start JSON Server

json-server --watch db.json
Now if you go to http://localhost:3000/, you'll get
 ```

## Challenges ## 
During all the project I suffered differents challenges (not just a technique level also personal), here attach a list of them: 

- **Vision:** During the project I felt that I haven't the global vision of all the steps to do. In many states of the projects I felt that I didn't know that I had to do or how to start or how to connect diferent sections to print information on the main display. Also, learn React, Tailwind..all the architecture and how it works has been to much to work in a period of less a month.

- **Practice:** It's a challenge to be able to do a project that includes different concepts like HTML, CSS, TS, REACT with only a few weeks of videos, quiz and just ONE pill. Because I understand all the concepts (or almost all), but  I stayed blocked before to start writing code or I have to much respect to made errors or I tried but I am not be able to understand the message of console and it's frustated.

- **Sintaxy error:** During the project I made a lot of sintaxy error in typescript. I realized that there are a lot of bugs, undefined, null that at the first time when I was writing the code I even thought it, this is why sometimes I felt sofocated because I was not able to understand where the problem was or why was not working. In this case I'd like to thank you to my collagues for all the help, calls, advice and supported all the project.

- **Work with functions:** As I said in the vision, one of the main problems (not in this project in general) was the vision to see the path of all the steps.  In addition, to this problem is added the completely different way of working with React, and it was quite difficult to start because I did not understand the relationship between components with the useContext, useReducer...

Consequently, I could not practically do anything during the first week, so I was anxious to start or directly to leave it, when I realized I had already started and tried to go step by step with simple things to move forward. However, I would like to point out that the amount of time available to implement was reduced, since most of the time I was with my colleagues doing 'edpuzzles, looms, quiz or code live'. 

- **Request API with Typescript (and structure async):** Use the structure of API (fetch) with Tyscript and async was a really challenge, because it was difficult with fetch structure simple but all together was sp difficul. Althought the most challenged part was implement all the components, functions, hooks.. in one site without a error.

## Conclusion ##
As I said really tough project but necessary to implement all the concepts of HTML, CSS, JS & TS & REACT that we have learned on Assembler. I don't feel full satisfied because I fell that there are a lot of concepts that I don't understand really weill, and if don't know if I'm able to implement in the futur and I really hope to continue learning, practising to understand. 