path to swagger :
https://internet-shop-api-production.up.railway.app/api-documentation#/product/ProductsController_create
path to API : https://internet-shop-api-production.up.railway.app path to repo :
https://github.com/yevhenii-sulim/marketplace

## libraries:

1. for building user interfaces used react via create react app (for instal: npx
   create-next-app@latest; documentation:https://react.dev/);
2. for predictable state management used redux-persist (npm: for instal: npm i
   redux; documentation: https://redux.js.org/ );
3. for create visually components used material UI (npm: for instal: npm install
   @mui/material @emotion/react @emotion/styled;
   https://www.npmjs.com/package/@mui/material; documentation:
   https://mui.com/);
4. for style of components used styled-components, that uses sass (npm: for
   instal: npm i styled-components;
   https://www.npmjs.com/package/styled-components;
   documentation:https://styled-components.com/);
5. to make HTTP requests used axios (npm: for instal: npm i axios;
   https://www.npmjs.com/package/axios);
6. for create form used formik (npm: for instal: npm i formik,
   https://www.npmjs.com/package/formik; documentation: https://formik.org/);
7. for create schema for form validate used Yup (npm: for instal: npm i yup,
   https://www.npmjs.com/package/yup);
8. for create unique id of object used nanoid (npm: for instal: npm i nanoid;
   https://www.npmjs.com/package/nanoid);
9. for menage type data used prop-types (npm: for instal: npm i prop-types;
   https://www.npmjs.com/package/prop-types?activeTab=readme);
10. for create carousels of pictures used pure-react-carousel (npm: for instal:
    npm i pure-react-carousel;
    https://www.npmjs.com/package/pure-react-carousel);
11. for create carousels of pictures used Swiper (npm: for instal: npm i swiper;
    https://www.npmjs.com/package/swiper;
    documentation:https://swiperjs.com/get-started);

## Preparing for coding

1. Make sure you have an LTS version of Node.js installed on your computer.
   [Download and install](https://nodejs.org/en/) if needed.
2. Install the project's base dependencies with the `npm install` command.
3. Start development mode by running the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in your browser. This
   page will automatically reload after saving changes to the project files.

## Deploy

The production version of the project will automatically be linted, built, and
deployed to GitHub Pages, in the `gh-pages` branch, every time the `main` branch
is updated. For example, after a direct push or an accepted pull request.

## to move repo in your github

To do this, you need to edit the `homepage` field in the `package.json` file,
replacing `your_username` and `your_repo_name` with your own, and submit the
changes to GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Next, you need to go to the settings of the GitHub repository (`Settings` >
`Pages`) and set the distribution of the production version of files from the
`/root` folder of the `gh-pages` branch, if this was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

## routing

application uses the `react-router-dom` library for routing

```jsx
<BrowserRouter basename="/marketplace">
  <App />
</BrowserRouter>
```

## responsive

The project is responsive to different devices;

Base breakpoints are sm: '380px', sx: '480px', mx: '576px', md: '768px', lg:
'1200px', xl: '1440px'

Developed first with the Mobile First methodology, then for desktop.

breakpoints and colors are in folder utils in file theme.js

## the location something

list team of this project are in folder data file team.js list for navigation
category and sub category of products is in folder data file navListData.js

## How deploy works

(./assets/how-it-works.png)

1. After each push to the `main` branch of the GitHub repository, a special
   script (GitHub Action) is launched from the `.github/workflows/deploy.yml`
   file.
2. All repository files are copied to the server, where the project is
   initialized and linted and built before deployment.
3. If all steps are successful, the built production version of the project
   files is sent to the `gh-pages` branch. Otherwise, the script execution log
   will indicate what the problem is.
