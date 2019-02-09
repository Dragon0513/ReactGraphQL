![Advanced React & GraphQL](public/ReactGraphQL.png)

# Advanced React & GraphQL

# My Awesome Project
This Is An Application That Shows Famous Black Inventors History To Celebrate Black History Month


## How It's Made
## Frontend
React.js for Building the interface along with Next.js for server side rendering, routing and tooling.

Apollo Client for data management. Performing GraphQL mutations, fetching GraphQL Queries, caching GraphQL data, managing local state, error and loading UI states.

{// THIS REPLACES THE NED FIR REDUX AND DATA FETCHING}

## Backend
GraphQL Yoda is an express GraphQL Server for implementating Query and mutation resolvers, custom Serverside logic, charging credit cards, sending email, performing authentication, and as well checking permissions.


Prisma is a GraphQL Database interface that provides a set of GraphQLCRUD API's for MySQL or Postgres Database, schema Definition, Data Relationships, Queried directly from Yoga Server, and Self Hosted.

## Lessons Learned:
In this tutorial I learned how to do more inline style in React, I rarely do it but Wes Bos has showed me some cool way to bring style via `injectGlobal` or style the components individually from styled-components.

```
injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
```

or


## import styled, { ThemeProvider, injectGlobal } from 'styled-components';


```
const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 2rem;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };


```

I am getting better with running both servers and troubleshooting the errors I have been receiving in the terminal. Most of the beginning chapters up to nine I already knew about Next but for the most part, its been a while since I used `<router/>` by Next.

`import NProgress from 'nprogress';` was something cool and new I never heard of. NProgress.js is a nanoscopic progress bar, with this realistic trickle slim progress bars made perfect for Ajax'y applications, displays a animation of a loading bar to tell your users that something's happening, inspired by Google, YouTube, and Medium.

Easy Install and easy implementation:

```

import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

```


## Optimizations.
I have to get Prisma and GraphQL going on the client and server side. I would Like to add concurrently, which is a NPM package that allows you to run two scripts at once.

## Available Scripts

Once you clone this repo, `cd` In the project directory for the frontend and backend, you can run:

## Installation

2. run `npm install` and ` npm audit fix ` if any fixes needed.

## Usage

3. run `npm run dev`


## Learn More


## portfolio:

**WEBSITE:** https:johnfleurimond.com


## Happy Coding!!!!
