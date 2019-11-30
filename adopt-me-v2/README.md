# Section 1: Basic Hooks

- `Hook`: Special function that lets you `hook` into a React feature for example, `useState` is a `hook` that adds `React` state to your function component. Definition from the [react docs](https://reactjs.org/docs/hooks-state.html#whats-a-hook)
- `useState`: Allow you to have a state on your component. It declares a `state` variable, an `update state` function and an initial value.
  `[state, updateFunction] = useState(initialValue)`
- `useEffect`: Runs when after the component renders. It recives a function and array of dependencies.
  `useEffect(() => { code }, [your, dependecies])`
  The function will run depending de following conditions:
  - Run everytime the component render if you don't send the array of dependecies.
    `useEffect(() => { code })`
  - Run once if you send an empty array.
    `useEffect(() => { code }, [])`
  - Run everytime a dependency update.
    `useEffect(() => { code }, [your, dependecies])`
    If you return a function this will run after the component `unmount`.
    `useEffect(() => { code return () => code; })`
    If you're familiar with the `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` this will be the combination of it.
- `useContext`: You can control get access to a context of a component. It accepts a context object and returns the value.
  `const value = useContext(My context)`
  The value of the context is determined by the nearest `<MyContext.Provider>`. The component that is calling `useContext` will always re-render when the context value changes. Definition from the [react doc](https://reactjs.org/docs/hooks-reference.html#usecontext)

```js
const context = React.createContext(initialValue);
<ComponentContext.Provider value={context}>code</ComponentContext.Provider>;

function SomeFunction() {
  const value = useContext(context);
}
```

# Section 2: Hooks in-Depth

- `useRef`: Allow you to have the same clouser that you specify. It will return an object that has the `.current` property that is initialized to the passed argument. The returned object will persist for the full lifetime of the component. Part of the description on the [React docs](https://reactjs.org/docs/hooks-reference.html#useref)
  `const refContainer = useRef(initialValue);`
- `useReducer`: Allow you to update the state depending on the action. It will accept a reducer function and returns the state and a dispatch method.
  `const [state, dispatch] = useReducer(reducer, initialArg, init);`

Example of a `reducer`:

```js
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return code;
    case "decrement":
      return code;
    default:
      return code;
  }
}
```

It can be used alongside of `useContext` to update a global state.

- `useMemo`: Returns a memorize value; it will help you to prevent calculation every time you render. If an array is not provided it will compute a new value every time.
  `const value = useMemo(() => functionName(a, b), [a, b]);`

- `useCallback`: Help you to memorize a function; this will help you not to render every time a component unless it `props` change. Its uses in combination with `memo`(it not `useMemo`).
  `const memoizedCallback = useCallback(() => {doSomething(a, b);}, [a, b]);`

`memo` example:

```js
const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return code;
});
<ExpensiveComputationComponent compute={useCallback(functionName, [])} />;
```

- `useLayoutEffect`: It uses to measure some element on the `DOM`. It's like `useEffect` but fires synchronously after all `DOM` mutation.
  `useLayoutEffect(functionName, []);`

- `useImperativeHandle`: Customizes the instance value that is exposed to parent components when using ref. This is from the [React Docs](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
  `useImperativeHandle(ref, createHandle, [deps])`

  A resume of [Hooks](https://btholt.github.io/complete-intro-to-react-v5/hooks-in-depth)

Here some [Hooks examples](https://codesandbox.io/s/github/btholt/react-hooks-examples/tree/master/)

# Section 3: CSS in JS

In this section we will examine how to work with css on JS.

- [Add Emotion and a NavBar component](https://github.com/oscarpolanco/react-course/pull/15/commits/4a73a7d892f4a6445bf6da9ece116c606741fa1b)
- [Template literals and hooks](https://github.com/oscarpolanco/react-course/pull/15/commits/86c5ea58cf1731983c6cc01f9551720cec13c39a)
- [Desing system and compound selectors](https://github.com/oscarpolanco/react-course/pull/15/commits/d34709a56e44282b9d54e76c465cfc7bd562bc8c)
- [Animation](https://github.com/oscarpolanco/react-course/pull/15/commits/5de1d634ba89895aa9438d7088bfe48a5add0dc3)

To get auto-completion when you are using `vs-code` just need to install `vscode-styled-components`.

After installing `emotion` need to update your `.babelrc`:

```js
[
  "@emotion/babel-preset-css-prop",
  {
    sourceMap: false
  }
];
```

# Section 4: Code splitting:

In this section we will check how to separate the bundle and load it when it is necessary.

- [Remove the NavBar component and code split the details route](https://github.com/oscarpolanco/react-course/pull/16/commits/883464673afa4cef01f9629450d270103b66b535)
- [Code splitting libraries and child components](https://github.com/oscarpolanco/react-course/pull/16/commits/7bceb86c8976ceac2b886d3cf1a16fc14eb94f95)

Using `lazy` the `import` will be suspense the first time when it needs will be upload so this functionality can be used once.

The `suspense` component can be used on the top level or in the element itself that you wanna be `lazy` in other words all the child can be affected for a top-level `suspense`.

# Section 5: Server-Side Rendering

In this section we will covert the steps to do a `server-side render` of your app.

- [Add initial setup for sever side render](https://github.com/oscarpolanco/react-course/pull/17/commits/b29e542e7d3e2212ae44001b5c41005cfe2e1188)

- [Server side rendering to string](https://github.com/oscarpolanco/react-course/pull/17/commits/1afd9b7f4d5c58186f6570c30c8c93e02bb7777f)

- [Server side rendering to Node Stream](https://github.com/oscarpolanco/react-course/pull/17/commits/44fa5c299447efcad23bb882b5c0b1bf300cd96c)

Our initial example renders some `HTML` without any content then after our `js` file load it will re-render the page will all content so we add `server-side rendering` to load our app from the server then `React` can take over after loading.

The `ClientApp.js` is our new file that will run the things that run on the browser.

We use `hydrate` instead of `render` to take the markup that is already there and render. If we use render will destroy what is already there and re-render.

We need to remove all reference to the frontend from our code that runs on the server like `document` or `window`.

## Install:

- `babel-cli`: Node doesn't spake `jsx` so we need to transpile our `react` code.
- `express`: One of node frameworks.

## Update package.json scripts:

- `"build": "parcel build --public-url ./dist/ src/index.html"`: Build your code to the `dist` directory from the `src` index and be aware that we will serve the `dist` content.
- `"start": "npm run build && babel-node server/index.js"`: This will build your code. `babel-node` isn't recommended for production typically you pre-compile your `React` code so Node can read so we don't have any `JSX`.

## Server:

- `fs.readFileSync("dist/index.html").toString()`: This will read the output `html` so we can use it on our server.
- `html.split("not rendered")`: Split the html in this case on 2 parts on the `not rendered` section.
- `app.use("/dist", express.static("dist"))`: This will be serve everything server on the `dist` directory.
- Middleware on each request: `app.use((req, res) => {})`

### Render to string

- `res.send(parts[0] + renderToString(reactMarkup) + parts[1])`: Concat the 2 parts of the string.

### Render to node string

- Instead of having a big payload you send start to render pieces; you render piece by piece.
- `res.write(parts[0])`: Send the first file to render.
- `const stream = renderToNodeStream(reactMarkup)`: Create a `NodeStream` that will progressively render your app.
- `Pipe` all markup on the `response` but not end when you are done with it:

```js
stream.pipe(
  res,
  { end: false }
);
```

- When it end the first part; render the other and close the connection:

```js
stream.on("end", () => {
  res.write(parts[1]);
  res.end();
});
```

- Run the server with the command: `npm run start`
- Go to [localhost:3000](http://localhost:3000/)

# Section 6: TypeScript with React

In this section, we will migrate our app to a `typescript` application.

- [Add TypeScript confiiguration for React](https://github.com/oscarpolanco/react-course/pull/18/commits/255d8ae04657d82eb1ea08ee28112ac63741fdd2)
- [Typing the Modal component](https://github.com/oscarpolanco/react-course/pull/18/commits/f63318c9db835ac9def0f385c35ec231c8dd067c)
- [Migrating to tslint](https://github.com/oscarpolanco/react-course/pull/18/commits/dbf0246f24ee07fef0081006f2a80a1283c5547f)
- [Typing the context component](https://github.com/oscarpolanco/react-course/pull/18/commits/eb2e713eb51dbb99899b92dc99913bb64292bc4c)
- [Typing a Class component](https://github.com/oscarpolanco/react-course/pull/18/commits/157f4d61b3b4c6476d10a864d2695fb3319501f0)
- [Typing ErrorBoundry and fix tslint issue](https://github.com/oscarpolanco/react-course/pull/18/commits/0da021b30d0269b7825b9d6224846ff102395d3d)
- [Use props and state interfaces](https://github.com/oscarpolanco/react-course/pull/18/commits/909eac79e55b90eec5b565982fe38b98ebdc1c55)
- [Heterogeneous Arrays and Hooks](https://github.com/oscarpolanco/react-course/pull/18/commits/7a632345af3c21afd260e634346dc5b495bab396)
- [Typing App.js and add typecheck script](https://github.com/oscarpolanco/react-course/pull/18/commits/5bb10c31e22a8cf2b5e3dd51af9f045a238772f2)

## Initiate your typescript project

To begin the migration process you need to install `typeScript` using `npm install typescript` then run the binaries of `typescript` using `npx tsc --init`(`tsc` is the `typescript` compiler).

After the installetion a `tsconfig.json` file will be create and you need to update the following parts:

- `target` => from `ES2019` to `ES2018`
- uncomment `jsx` and put `react`. `"jsx": "react"`

### Note:

- You can put `strict` mode to `false` but you don't get all benefice of `typescript`; you can use it to begin the project but your main objective will be to habilitate `strict` mode to `true`.

- `React` is not write on `typescript` but there are teams that build libraries with `types` that can be used on our project. `Definitely type` write those `type` for this kind of library.

## Add types

After initiate, your project installs the following packages that will add `types` to our current stack of libraries.
`npm install -D @types/react @types/react-dom @types/reach__router`

By default `typescript` will not check the file with the `js` extension. This will help us to migrate piece by piece. To begin the migration just update the extension from `js` to `tsx`.

## Migrate from eslint to tslint

We need to migrate to `tslint` because `eslint` is not ready to handle `typescript` but the plan is to manage all users with `eslint`.

Unistall the following packages:
`npm uninstall eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

Now install the following `tslint` packages:
`npm install -D tslint tslint-react tslint-config-prettier`

Then delete your `eslintrc.json` then go to `package.json` and update the `lint` config
`"lint": "tslint --project"`

Create a new file call `tslint.json` and add the following configuration.

```js
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rules": {
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "member-ordering": false,
    "no-console": false,
    "jsx-no-lambda": false
  }
}
```

### Note

- `--project` means that the command will use the `tsconfig` of the project.
- For `vscode` you can add the `TSLint` extension to see your errors directly on the editor.

# Section 7: Redux

In this section we gonna implement `redux` instead of the `context` API from `react`.

- [Rollback typescript](https://github.com/oscarpolanco/react-course/pull/19/commits/076faee0f158ce43a823c86a07d72d08f5a18958)
- [Add redux and create the store file](https://github.com/oscarpolanco/react-course/pull/19/commits/ae5c1006ca573718761d7b2c0c465e418fc0f2ae)
- [Create reducers](https://github.com/oscarpolanco/react-course/pull/19/commits/7db932bf225adfd02b64731d8ab10a51b50e9cf2)
- [Create actions](https://github.com/oscarpolanco/react-course/pull/19/commits/337f9ac04ec474b72294569ef567173428982c9c)
- [Connect Redux with the app, fix a babel error and redux extension error](https://github.com/oscarpolanco/react-course/pull/19/commits/67e6bf7808871b2ad5bdb78b41ea7cab09a17618)
- [Fix some errors on the theme reducer and the SearchParams component](https://github.com/oscarpolanco/react-course/pull/19/commits/a959863d49681380003e003466d207688a2a884f)

## Why we still use redux?

If you have a lot of async request to different API that need to be on a specific order but we need `Sagas` to help `redux` also every step of the `state` will be testable so it can guarantee that you can see what happened to the `state` every step of the way.

## Cycle of the state on redux

React state management is pretty simple: call setState and let React re-render. That's it! Now there are a few steps involved.

1. User types in input box
2. Call action creator to get an action
3. Dispatch action to Redux
4. Redux inserts the action into the root reducer
5. The root reducer delegates that action to the correct reducer
6. The reducer returns a new state given the old state and the action object
7. That new state becomes the store's state
8. React is then called by Redux and told to update

## Use redux on your app

### Install redux

Use the following commands:
`npm install redux`
`npm install react-redux`

### Store

Create a `store` file and use `createStore` to create a store that will have your states. The `reducer` is a function that takes a `state` and gets back another `state`.

```js
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

export default store;
```

If you wanna add the `redux` dev tools you need to add it on this file.

```js
import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default store;
```

Here are the `redux` dev tools exist it will use it; if not we just send a function.

### Reducer

Create a directory called `reducer` with an `index.js` that will help us to send all our `reducer` functions.

```js
import { combineReducers } from "redux";
import reducerFunction from "./reducerFunction";
import anotherReducerFunction from "./anotherReducerFunction";

export default combineReducers({
  reducerFunction,
  anotherReducerFunction
});
```

Create all the reducer functions that you need on it own file following the next structure:

```js
export default function reducerFunction(state = "Example", action) {
  if (action.type === "CHANGE_STATE") {
    return action.payload;
  } else {
    return state;
  }
}
```

The `action`: If an object that you will get from wherever redux dispatch the action and only will respond on a particular type. Always return the `state` it always specs that you return some sore of `state`. On this example we use the [flux-standard-action](https://github.com/redux-utilities/flux-standard-action) to define the `action` structure.

## Action creators

The `action creators` are functions that receive some kind of data and return an action. You can follow the next code to build your own.

```js
export default function changeData(data) {
  return { type: "CHANGE_DATA", payload: data };
}
```

## Add the Provider

On your `app` file import the following:
`import { Provider } from "react-redux";`

Then wrap the code that you want that `redux` is available

```js
<Provider store={store}>// your code</Provider>
```

On the child of the provider you need the following:

- Import `connect` from `redux`
  `import { connect } from "react-redux";`
- Your component will receive `props` and all those `states` that `redux` handle will be received on those `props`.
- Now write the code to inject the data from `redux`:

  - First, the function that pulls things from `redux` and handles to the component

  ```js
  const mapStateToProps = ({ state1, state2 }) => ({
    state1,
    state2
  });
  ```

  - Then create a function that updates the data to redux from the component

  ```js
  import actionCreatorName1 from "./actionCreator/actionCreatorName1";
  import actionCreatorName2 from "./actionCreator/actionCreatorName2";

  const mapDispatchToProps = dispatch => ({
    setState1: state1 => dispatch(actionCreatorName1(state1)),
    updateState2: state2 => dispatch(actionCreatorName2(state2))
  });
  ```

  - Finally, connect with `redux`. On the `export` of your component add the `connect` function. `connect` returns a function that you gonna invoke on your component(decorators).

  ```js
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MyComponent);
  ```

  ## Notes

  - [redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
