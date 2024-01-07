This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is created to complete the MyWheels coding challenge.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Techstack
This project features the following packages:
- [Leaflet](https://react-leaflet.js.org/): For displaying cars on a map
- [classnames](https://www.npmjs.com/package/classnames): For easily joining classnames together.
- [tailwindcss](https://tailwindcss.com/): For styling components with a bare design system (best for rapid prototyping)

## Project Structure
The folder structure and component setup is based on the [Bulletproof React](https://github.com/alan2207/bulletproof-react) convention. [Here](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) you can checkout the folder structure guide lines.

It comes down to a feature-based approach that scales from small to bigger projects.

## Task list
### Assignment
This was the original assignment:
>Create a small application that displays a list of resources (cars) that are provided by the API. Use the useApi method provided in src/api.js to fetch the JSON containing the resources.

- [x] Display a list of resources, for each of the items in the list display at least the following information: `Brand`, `Model`, `Address`, `Fuel type`, `Availability`, `Rate per/hour`
- [x] Add an input field that searches for specific resource models.
- [x] Create a way to filter the list on fuel type, availability, winter tires and towbar.
- [x] Show the number of found resources.

### Optional tasks
>As a bonus one of the following additional features could be added to the application.

- [x] Add the option to toggle between a list view and a map view.
- [x] Convert the code to use TypeScript
- [x] Use Next.js instead of the Webpack setup.
- [x] Add a personal touch by styling the application.
- [ ] Pitch an idea for a great additional feature and show (in rough lines) how that could be implemented.
- [ ] Create automated tests for (a part) of the application.

## Preview
https://my-wheels-isgyhtu0s-leviodjiezimmerman.vercel.app/