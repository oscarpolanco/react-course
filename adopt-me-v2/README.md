## Section 1: Basic Hooks

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

A resume of [Hooks](https://btholt.github.io/complete-intro-to-react-v5/hooks-in-depth)

Here some [Hooks examples](https://codesandbox.io/s/github/btholt/react-hooks-examples/tree/master/)
