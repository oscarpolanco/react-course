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
- `useReducer`: Allow you to update the state depending on an action. It will accept a reducer function and returns the state and a dispatch method.
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
