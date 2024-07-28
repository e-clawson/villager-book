 
# VillagerBook
 
VillagerBook is a react API that serves as a companion app to the Animal Crossing New Horizons game.
This app is designed to allow ACNH players a way to keep track of their interactions with the many villager characters in ACNH.
Villagers display on the homepage with some basic information including name, image, personality, birthday, gender, species, hobby, catch phrase, and saying. Users can search for Villagers by name, and add them to a favorites list, view the favorites list, and add now villagers using a New Villager form.
 
This App uses data from the ACNH API which can be found here: [http://acnhapi.com/](https://api.nookipedia.com/)
 
Enjoy a walkthrough of this project here: https://youtu.be/34rY1umorJ8

You can read a blog post I wrote about my experience creating this project here: https://medium.com/@emclawson1/structuring-components-my-first-react-project-b6eb0a5b1bca
 
## Installation and Available Scripts
 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 
To install : fork and clone the repo, and change directories into VillagerBook in your local envrionment.
Then run:  npm install
### `npm start`
 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
 
### `json-server --watch db.json -p 3001`
 
Runs the json server
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
 
*Please see additional documentation on available scripts provided by Create-React-App at the end of this README*
 
## Contributing
 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
 
Please make sure to update tests as appropriate.
 
## License
 
Please note - All the JSON data from the ACNH API is under CC BY 4.0 license; the images and assets are the sole property of Nintendo.
 
MIT License
 
Copyright (c) [2022] [Elizabeth Clawson]
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense,
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 
# Acknowledgements
 
A Special thank you to the ACNH API for compiling animal crossing data and making it available for projects such as this one.
Thank you to Matteo Piccini for helping me learn about React and coding in general, and for assisting me with this project
 
 
## Additional Available Scripts
 
In the project directory, you can run:
 
 
### `npm run build`
 
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
 
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
 
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
 
### `npm run eject`
 
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
 
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
 
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
 
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
 
## Learn More
 
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
 
To learn React, check out the [React documentation](https://reactjs.org/).
 
### Code Splitting
 
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
 
### Analyzing the Bundle Size
 
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
 
### Making a Progressive Web App
 
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
 
### Advanced Configuration
 
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
 
### Deployment
 
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
 
### `npm run build` fails to minify
 
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
