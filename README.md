This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started And How To Run Locally

#### First Clone the project from Github with:

```bash
git clone https://github.com/DevYemi/mainstack-job-task
```

#### Now open the cloned project in vscode or any IDE of your choice and run:

```bash
npm install
```

#### Now you should be able to run the project locally on your computer, you need to run:

```bash
npm run dev
```

Open [http://localhost:(port)](<http://localhost:(port)>) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<br />
<br />
<br />
<br />

# Project Folder Architecture

The entry point for this project is in the `/src`. The project uses a **Feature Based Architecture** whereby you have all the files of a particular feature, component or page colocated together in the same folder.

> **Please Note:** Feature root folder mostly have a `index.ts` or `index.tsx` files that export the main components used by all other components.

> **Please Note:** Chakra-ui was used for styling

## app dir

This is a point of entry into NextJs route system [Read Docs](https://nextjs.org/docs/app). <br />

- `_local-components`: Each page design are broken down into logical sections (for proper optimization) represented as react components to enable RSC and Client Component data fetching seperately.

> --> **Please Note:** `_local-components` folder is local to a particular route folder and components in there are not shared with other route folder.
> <br/>
>
> --> **Please Note:** That `_local-components` is not included in nextJs route system. Chucks inside this folders are purely Server or Client React Components.

## global-components dir

Main key idea about this folder is **Reuseability**, folder contains chunks of components that are used all over the project route pages. In essence when you have a particular page section (React component) that is displayed or used in more than 1 page e.g Home Page and about Page then such a component needs to be extracted into this folder.

> E.g A Custom `InputBox` that's used in all forms through out the project should be placed in the `global-components`. Or a React `Testimonial.tsx` section that's used in the _HomePage_ route and _AboutUsPage_ route should be placed in the `global-components` .

## fetchEndpoints dir

This folder contains all the code that consumes the Backend Rest API.

> **Please Note:** All data fetching was done client side and `swr` was used for fetching data

1. `clientBaseApi.ts`: Contains all helper functions used with `swr` when fetching data.

2. `path.ts`: This is a file which store api paths shared between `clientBaseApi.ts` and `mockFetchApiHandlers.ts`.

> E.g Say we have a `/user/id` endpoint provided by the backend to get a user by their id, a variable `_user_id` will be created and exported.

3. `fetchMockedHandler.ts`: This is a file that contains codes that helps mock all requests when tests are running. it uses `msw` package to help in mocking the fetch request when tests are running. For more infomation on how this works please read up and look through [msw docs](https://mswjs.io/docs/).

4. `fetchMockedHandlerData.ts`: This is just a file containing dummyData that are used as response data for mocked fetch requests in `fetchMockedHandler.ts` file.  
   They can also be used in tests files

5. `types.d.ts`: stores types.

<br />
<br />

## libs dir

This folder mainly contain boilerplate of any external libabries used in the codebase.

> E.g Say we are using `chakara-ui` css framework package in our codebase for component styling and it requires some config for customizing it's theme. A folder called `chakara-ui` that will be placed in _libs dir_. This way they are logically kept together, and its export can be reused any where in the app.

## tests dir

I will say this contains config and set-up files for tests.  
Two major files to take note of in this folder are `vitest-setUpFile.ts` and `test-utils.tsx`.

1. `vitest-setUpFile.ts`: This is a vitest setup file that runs before any test files runs. For more info [check vitest docs](https://vitest.dev/config/#setupfiles).

2. `test-utils.tsx`: This is also a setup file but majorly for _React-Testing-Libary_ as it helps creates a wrapper around _React-Testing-Libary_ `render` func. Look in file for more understanding look through this info on _React-Testing-Libary_ [docs here](https://testing-library.com/docs/react-testing-library/setup#custom-render) .

> Packages set-up and their purpose
>
> - **_Reat-Testing-Libary:_** Used to react components.
> - **_Vitest:_** Used to for test assertions and mocking libaries and functions.
> - **_msw:_** Used to mock fetch requests

## utils dir

Contains reuseable chuncks of code that are used everywhere in the project.
<br />
<br />

# Side-Notes

> **_CI/CD Pipeline_** > <br />
> A mini ci/cd pipeline was also implemented
>
> - `prettier`: helps format files before they are committed. check docs [Here](https://prettier.io/docs/en/)
> - `lint-staged`: Helps make sure only files that have changed since the last commit are formatted by `prettier`. check doc [Here](https://nextjs.org/docs/app/building-your-application/configuring/eslint#lint-staged).
> - `husky`: Helps make to work with git hooks. E.g Running a script before a commit or push. So it helps run `lint-staged` before commit and runs tests before push.
