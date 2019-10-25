# Section 1: Pure React

On this section we use a simple react component to make an example of a pure react component and target the following topics.

- [Add pure react component](https://github.com/oscarpolanco/react-course/pull/1/commits/8f8e3c603c6f0b46a61e60ebec359ace690e34c2)
- [createElements and its arguments](https://github.com/oscarpolanco/react-course/pull/1/commits/8c4324b95df923d8a5752a4bcfdbf3e9ebd9d901)
- [Reusable components](https://github.com/oscarpolanco/react-course/pull/1/commits/4058b9ecc7e8ac069ed7b2d6d254bd7f3167d99a)
- [Passing props to a component](https://github.com/oscarpolanco/react-course/pull/1/commits/4f6b9728262e2a25a2d9fbe1614e707dd357a3d7)
- [Destructuring](https://github.com/oscarpolanco/react-course/pull/1/commits/1479e1f252171d845b79f0512e88e7a40344a372)

## To run the example:

1. Go to the [src](https://github.com/oscarpolanco/react-course/tree/project_setup/adopt-me/scr) directory
2. Open the index.html file in your favorite browser

# Section 2: Tools

On this section we introduce some of the tools that will help us on our project and target the following topics.

- [Add package.json](https://github.com/oscarpolanco/react-course/pull/2/commits/95716d9679ce97880798ca5349bc84383d9185fd) -[Add prettier with a default configuration](https://github.com/oscarpolanco/react-course/pull/2/commits/fcaab1122793eaa5f8bd237a200b846933c5c95f)
- [Add eslint with a it configuration](https://github.com/oscarpolanco/react-course/pull/2/commits/da1932f82967fe841417904eec33b83b5e7819ef)
- [Ignore some file that we will use on the course](https://github.com/oscarpolanco/react-course/pull/2/commits/28d92b8d25065228641ae7fa010fe34e2f78ae80)
- [Add parcer](https://github.com/oscarpolanco/react-course/pull/2/commits/9308946f46be4a4b573dd2af0814859d50938e2e)
- [Install react module](https://github.com/oscarpolanco/react-course/pull/2/commits/16a372ae693373ad12ef00c15272cc055a089685)
- [Separate components](https://github.com/oscarpolanco/react-course/pull/2/commits/16a372ae693373ad12ef00c15272cc055a089685)

## Config prettier vs-code

- Code
- Preferences
- Settings
- format on save (check)
- Require config
- Prettier:Require config(check)

## To run the example

- npm `install`
- npm run dev
- Go to [localhost:1234](http://localhost:1234/)

# Section 3: JSX

On this section we use jsx on our components and configure `eslint` to recognize jsx.

- [Convert my components to jsx](https://github.com/oscarpolanco/react-course/pull/3/commits/058d47518635665452cbca3fbad3e64550a8a27d)
- [Configure eslint for react](https://github.com/oscarpolanco/react-course/pull/3/commits/92988fc32ac59cf84db18fdbcab892b91783b563)
- [Use jsx on App.js and use js expression](https://github.com/oscarpolanco/react-course/pull/3/commits/af85b7c263c8bf96c57156a89f5a994eeb5aa93e)

## Eslint configuration for react

- Install the following packages:
  - `babel-eslint`: Permit that eslint will argument by babel
  - `eslint-plugin-import`: Add new rules for import/export
  - `eslint-plugin-jsx-a11y`: Some rules for accessibility
  - `eslint-plugin-react`: Additional react rules
- Go to `eslintrc.json`
- On the `extends` (new Rules) array add the following (If you have `prettier` is better that is last)
  - plugin:import/errors
  - plugin:react/recommended
  - plugin:jsx-a11y/recommended
- Go to `plugins` (new abilities) array and add:
  - react
  - import
  - jsx-a11y
- Add `rules` and add (Just activating/deactivating some rules)
  - "react/prop-types": 0
  - "no-console': 1
- Add settings and add the following on the object
  - react => version: "detect"

# Section 4: Hooks

On this section we use hooks to manage the states like you can see on the following topics:

- [Add the searchParams component](https://github.com/oscarpolanco/react-course/pull/4/commits/7467ad08dfe8859ed0360dea5a3dfc9eb681b3e0)
- [Set a state using hooks](https://github.com/oscarpolanco/react-course/pull/4/commits/1c9c1b55627bc268e1dbf2843c27010ee8c4ca20)
- [Configure eslint for hooks](https://github.com/oscarpolanco/react-course/pull/4/commits/97ca602a93ba4a338c3bb330b6e44f3d56f58453)
- [Add the animals api and create a select using hooks for it state](https://github.com/oscarpolanco/react-course/pull/4/commits/b144c82b3365efe4aa2315e508a9ba314d48521b)
- [Create a breed dropdown](https://github.com/oscarpolanco/react-course/pull/4/commits/b7c4bd1713fb0b7028ac5d676287322dc53fdd96)
- [Add a custom hooks and reusable dropdown](https://github.com/oscarpolanco/react-course/pull/4/commits/92fd38bc7bcb1a0fb78b9c5a3e321f0c1fdd4767)

# Section 5: useEffect

On this section we will implement the useEffect hook to update the data of the dropdowns on the example project.

- [Add useEffect to update the dropdown](https://github.com/oscarpolanco/react-course/pull/5/commits/2210e95ba485dd235827087d34d5e072e06d5104)
- [Update breeds name on the useEffect function](https://github.com/oscarpolanco/react-course/pull/5/commits/b6c35d3d674dae64dc348063cc09f4884623006c)

## Notes:

- `useEffect` substitute some of the lifecycle methods of react. Think on that you have `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` combined.
- If you don't send the array of dependencies it will run every time the components re-render.
- If you put an empty array of dependencies will run once.

# Section 6: DevTools

On this section we have a brief resume of the dev tools that will help use when we use react.

- [Add React.strict mode](https://github.com/oscarpolanco/react-course/pull/5/commits/b6c35d3d674dae64dc348063cc09f4884623006c)

## Notes:

- When you compile you code you will need a `NODE_ENV`; `parcer`, `webpack`, etc will help you with this. You need this to have more explicit error and tools that will help you on development mode and in production mode this tools will we cut to have a smaller size of the code.
- Strict mode will help you to check if your are using legacy code that is deprecated.

# Section 7 Async and routing:

On this section we begin to use async calls to the api and use the data that we get back from it also did a little routing example.

- [Add a async function to the form and list of browser that babel will handle](https://github.com/oscarpolanco/react-course/pull/7/commits/ead16c88bc718724c3cb93172d8d81995763cbc2)
- [Add a mock api for the example](https://github.com/oscarpolanco/react-course/pull/7/commits/3b1d926a82979de55142a7e4fd0606dda5d9123e)
- [Add a Result component to render the data of the api](https://github.com/oscarpolanco/react-course/pull/7/commits/f7087a47f7ee666c887cfb68444d4946b72253e0)
- [Refactor the pet component](https://github.com/oscarpolanco/react-course/pull/7/commits/d4cd75c96b08fa1e5d015700c3676db2e21ad8c0)
- [Add reach router](https://github.com/oscarpolanco/react-course/pull/7/commits/f5a1ee16f98da032f31ab8173b9d699e24894c9c)
- [Print the react router info object on the details page and use link](https://github.com/oscarpolanco/react-course/pull/7/commits/df484caf95f2315b4fb25dd47b97a1406e1bb6ad)

## Note:

- We import `regenerator-runtime/runtime` on `App.js` because we have a `parcer` error.
- `cross-env` allows you to have consistency between the operating system of your environment variables.

## Section 8: Class component

On this section we will do a class component to learn insides about it.

- [Update Details component to a class component](https://github.com/oscarpolanco/react-course/pull/8/commits/3a2f1581285ccf0d07ecc71e06de67ba62c32f54)
- [Complete the render function](https://github.com/oscarpolanco/react-course/pull/8/commits/e9f49bc74db92bdbb5c4feebf454d682c7194840)
- [Configuring babel to parcel](https://github.com/oscarpolanco/react-course/pull/8/commits/e30a90eab9a317c05aa2f1936f5941ebf3c6cd83)
- [Add a carousel component](https://github.com/oscarpolanco/react-course/pull/8/commits/6103ef3c39020506418bd50ebfc06470c25e4778)
- [Add the handleClick function on the correct context](https://github.com/oscarpolanco/react-course/pull/8/commits/8df43e6a81ac78209d9425adc840a780fb9dc0c4)
- [Implement the carousel component on the detail page and fix issues](https://github.com/oscarpolanco/react-course/pull/8/commits/c27915e96cc21e1ace33a10dee8c73b746669e6e)

## Notes:

- Parcel doesn't recognize the experimental syntax (modern js) like `state ={}`
- Configure babel for parcel:

  - npm install:
    - babel-eslint
    - @babel/core
    - @babel/preset-env
    - @babel/plugin-proposal-class-properties
    - @babel/preset-react
  - Create a file `.babelrc` on the root of the project
  - Add the following config:
    ```
    {
        "presets": ["@babel/preset-react", "@babel/preset-env"],
        "plugins": ["@babel/plugin-proposal-class-properties"]
    }
    ```
    - `preset`: A group of plugin
    - `preset-react`: Bring all the things to transpile react
    - `preset-env`: transpile the code on the environment that you specify. On this case, we use the `browserlist` that is on the `package.json`
    - `plugin-proposal-class-properties`: Transpile the modern js

- Go to `.eslintrc` and add:
  `"parser": "babel-eslint"`
  - This means that use babel to understand the code
- `getDrivedStateFromProps`: Special `react` function that receive a set of `props` and return a set `states`
