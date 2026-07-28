# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project

Purpose: Frontend for an e-commerce storefront — product browsing, collections, cart and checkout UI, and basic authentication pages.

Languages & tools used:

- JavaScript (React) — primary application code using functional components and hooks.
- HTML & CSS — component styles and page markup; per-component `.css` files live alongside components.
- JSON — manifest and build metadata contained in `public/` and `build/`.
- Create React App tooling — development server, test runner, and production build pipeline.

Structure highlights:

- `src/Components/` — reusable UI components (e.g., `Navbar`, `Hero`, `Item`, `Footer`, `NewCollections`, `Popular`).
- `src/Pages/` — page-level components (`Home`, `ShopCategory`, `Product`, `Cart`, `LoginSignup`).
- `src/Context/ShopContext.jsx` — application state via React Context and hooks (cart, selected products, filters).
- `src/Components/Assests/` — local product/sample data files (`all_products.js`, `data.js`, `new_collections.js`).
- `public/` & `build/` — static assets and production output with hashed bundles in `build/static/`.

Key aspects:

- Component-driven UI with per-component CSS for modular styling.
- Lightweight state management using React Context for cart and product state.
- Local mock data allows UI development without a backend; intended to be replaced by API integration.
- Standard CRA scripts: `npm start`, `npm test`, `npm run build`, `npm run eject`.

- Suggested next steps: add TypeScript for strong typing, integrate a backend API for real product data and persistence, expand test coverage, and run accessibility audits.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Credits

- Project by Lesedi Molale
