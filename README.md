<h3 align="center" >
	    <img alt="Logo" title="#logo" width="300px" src="web/src/assets/images/landing.svg">
    	<br><br>
  	Proffy is an application that connects people who wants to learn with people who can teach. You can find teachers from different subjects and contact them for classes.
</h3>
<p align="center">
	You can find the layout of the aplication at <a href="https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web" target="_blank">Figma</a>
</p>

<p align="center">
  <img alt="Languagues" src="https://img.shields.io/github/languages/count/gabyrodrigues/proffy">
  <img alt="Top Languague" src="https://img.shields.io/github/languages/top/gabyrodrigues/proffy">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gabyrodrigues/proffy">
  <a href="https://github.com/gabyrodrigues/proffy/commits/master">
    <img alt="Last commit date" src="https://img.shields.io/github/last-commit/gabyrodrigues/proffy">
  </a>
  <a href="https://github.com/gabyrodrigues" target="_blank">
    <img alt="Developed by Gabriely Rodrigues" src="https://img.shields.io/badge/developed%20by-Gabriely_Rodrigues-informational">
  </a>
</p>

## :computer: Languages

- **Typescript**
- **NodeJS**
- **HTML**
- **CSS**
- **SQL**

## :rocket: Running the application

- ### **Prerequisites**

  - It's **necessary** to install **[Node.js](https://nodejs.org/en/)** on your machine
  - Also, it's **necessary** to have a package manager, either **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**.
  - It's also necessary having **[Expo](https://expo.io/)** globally installed on your machine

1. Clone Proffy:

```
git@github.com:gabyrodrigues/proffy.git
```

2. Running the application:

```
  # Install the dependencies
  $ npm install

  ## Create the database
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed
 
  # Run the API server
  $ npm run dev

  # Run the web application
  $ cd web
  $ npm start

  # Run the web application
  $ cd mobile
  $ npm start
```

## :books: Technologies
- ### Backend 
	* **celebrate**:  ^12.1.1
	* **cors**:  ^2.8.5
	* **express**:  ^4.17.1
	* **knex**:  ^0.21.2
	* **sqlite3**:  ^5.0.0
  * **ts-node**:  ^8.10.2
  * **ts-node-dev**:  ^1.0.0-pre.56
  * **typescript**:  ^3.9.7


- ### Web
	* **@testing-library/jest-dom**:  ^4.2.4
	* **@testing-library/react**:  ^9.3.2
	* **@testing-library/user-event**:  ^7.1.2
	* **axios**:  ^0.19.2
	* **react**:  ^16.13.1
	* **react-dom**:  ^16.13.1
	* **react-router-dom**:  ^5.2.0
	* **react-scripts**:  3.4.1
  	* **typescript**:  ~3.7.2

- ### Mobile
	- #### React navigation
    * **@react-native-community/async-storage**: ~1.11.0
		* **@react-native-community/masked-view**: 0.1.10
		* **@react-navigation/native**:  ^5.7.3
		* **@react-navigation/stack**:  ^5.9.0
    * **@react-navigation/bottom-tabs**:  ^5.8.0
		* **axios**: ^0.19.2
		* **expo**:  ~38.0.8
		* **expo-constants**:  ~9.0.0
  	* **expo-font**:  ~8.2.1
    * **expo-status-bar**:  ^1.0.2
	- #### React
		* **react**:  ~16.11.0
		* **react-dom**:  ~16.11.0
		* **react-native**:  https://github.com/expo/react-native/archive/sdk-38.0.2.tar.gz
		* **react-native-gesture-handler**:  ~1.6.0
		* **react-native-reanimated**:  ~1.9.0
		* **react-native-safe-area-contex**:  ~3.0.7
		* **react-native-screens**: ~2.9.0
		* **react-native-web**:  ~0.11.7
	- #### Typescript  
		* **typescript**:  ~3.9.5


Developed by [Gabriely Rodrigues](https://github.com/gabyrodrigues)
