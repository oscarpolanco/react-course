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
