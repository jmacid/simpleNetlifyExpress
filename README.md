# Simple Netlify function using Express in the backend

## To test locally
First run `npx netlify-cli dev`, and then open `dist/index.html` and see the console.

## Deploy
You can drag and drop the content of the folder in netlify. But, the function apps won't work.

You can deploy your functions using the netlify command:
`npm install netlify-cli -g`
`netlify functions:create`
Deploy using `netlify deploy --prod`

However, your site won't be deployed. Yo can make your life much **easier** by bounding your github repo to netlify.


## References
[Netlify](https://docs.netlify.com/)
[Repo](https://github.com/jmacid/simpleNetlifyExpress)
[Video](https://www.youtube.com/watch?v=q1TrsvKdpcU)
[netlify-dev](https://cli.netlify.com/netlify-dev/)
[Video 2](https://www.youtube.com/watch?v=vEFJZ9rSSNM)
[Video 3](https://www.youtube.com/watch?v=9iZCLODSq6k)