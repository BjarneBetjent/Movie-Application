# Movie Buffs

Simple web-application to search for movies and view a short summary.
Created with React, HTML and CSS. 

## Screenshots

Mobile view

![Search bar](./screenshots/mob1.PNG)
![](./screenshot.jpg)
![Search page](./screenshots/mob2.PNG)
![Summary page](./screenshots/mob3.PNG)

Desktop view

![Search page](./screenshots/desk1.PNG)
![Summary page](./screenshots/desk2.PNG)

## Installation 

This application is using a backend in order to hide the API key used to fetch movie information from [Themoviedb.org](https://www.themoviedb.org/).
Server repository can be found [here].(https://www.themoviedb.org/)

Once this repo is cloned, run install with the command
```
npm install
```

To run the project
```
npm start
```

Running this project alone will not yield any search results, as the server needs to run as well. 

Remove the comments around the baseURL config in the index.js file to send requests to your local server
once you've got it up and running. 

If you wish to build and deploy the project, remove the baseURL config, build the project using
```
npm build
```
and replace the build folder in your server project with the new one. 

## API

All information about the movies are fetched from [Themoviedb.org](https://www.themoviedb.org/).