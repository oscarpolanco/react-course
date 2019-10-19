# Section 1: Pure React

On this section we use a simple react component to make an example of a pure react component and target the following topics.

- [Add pure react component](https://github.com/oscarpolanco/react-course/pull/1/commits/8f8e3c603c6f0b46a61e60ebec359ace690e34c2)
- [createElements and its arguments](https://github.com/oscarpolanco/react-course/pull/1/commits/8c4324b95df923d8a5752a4bcfdbf3e9ebd9d901)
- [Reusable components](https://github.com/oscarpolanco/react-course/pull/1/commits/4058b9ecc7e8ac069ed7b2d6d254bd7f3167d99a)
- [Passing props to a component](https://github.com/oscarpolanco/react-course/pull/1/commits/4f6b9728262e2a25a2d9fbe1614e707dd357a3d7)
- [Destructuring](https://github.com/oscarpolanco/react-course/pull/1/commits/1479e1f252171d845b79f0512e88e7a40344a372)

To run the example:

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

# Section 3: JSX

On this section we use jsx on our components and configure `eslint` to recognize jsx.

- [Convert my components to jsx](https://github.com/oscarpolanco/react-course/pull/3/commits/058d47518635665452cbca3fbad3e64550a8a27d)
- [Configure eslint for react](https://github.com/oscarpolanco/react-course/pull/3/commits/92988fc32ac59cf84db18fdbcab892b91783b563) -[Use jsx on App.js and use js expression](https://github.com/oscarpolanco/react-course/pull/3/commits/af85b7c263c8bf96c57156a89f5a994eeb5aa93e)

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
