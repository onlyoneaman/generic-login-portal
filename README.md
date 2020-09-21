<h1 align="center">
    Generic Login Portal
</h1>

<h4 align="center">
  An ReactJS Starter for building User and Admin Portals using Antd Components.
</h4>

### 

### Author [Aman Kumar](https://github.com/amank1647)

#### Motivation

While working on different products and services, we need to make changes to pre existing code or create something from scratch. 
<br />
While Working on Several Projects, I realized that I my initial time was getting wasted in creating a Portal with features like login, sign up everytime.
<br />
So, I felt a need to create a very generic login portal which can be installed and started pretty easily and also it should be easily iterable so that anyone using this project could easily change this as per their project.

## Table of Contents
+ [Features](#features)
+ [Quick Start](#quick-start)
+ [Folder Structure](#folder-structure)
+ [How To Use](#how-to-use)
+ [License](#license)

## Features
+ [Antd](https://ant.design)
+ Mobile Friendly (Portal Best Viewed in Desktop/Tablet)
+ Google Analytics
+ Login, Register and Forgot Password Pages
+ Integrate with your backend by just changing the API URLs and Requests.

## Quick Start

#### Create a Login Portal

Use the Gatsby CLI to create a new site, specifying the Generic Login Portal

```sh
# Create a new portal using generic login portal
git clone https://github.com/alxshelepenok/gatsby-starter-lumen
```

#### Start Developing

Navigate into your new site's directory and start it up.

```sh
cd generic-login-portal
yarn start
```

#### Open the source code and start editing!

You site is now running at `http://localhost:3000`!

#### Access Locally
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
```
To test the CMS locally, you'll need run a production build of the site:
```
$ npm run build
$ gatsby serve
```

## How to Use

The Project categorizes webpages into 3 types:
1. Auth Pages:- These are pages which a user visits to get authenticated and visit the portal. If a user isn't logged in, the portal homepage will redirect them to sign in page. Like Sign Up, Sign In
2. Private Pages:- These are pages within a web portal which can only be viewed if the user is logged in or authenticated. Like homepage of your portal
3. General Pages:- These are pages within a website which can be viewed by anyone irrespective of if the user is logged in or not. Like FAQs

-> A logged in user can view a general Page but not the auth page.

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── public
└── build
└── src
    ├── Auth
    ├── Common
    │   ├── ApiCAll
    │   ├── Models
    │   ├── Images
    │   ├── Component
    │   ├── Utils
    ├── Components
    │   ├── AuthRoute
    │   ├── ContentWrapper
    │   ├── GeneralRoute
    │   ├── IFrameComponent
    ├── Components
    │   ├── AuthRoute
    │   ├── ContentWrapper
    │   ├── GeneralRoute
    │   ├── IFrameComponent
    │   ├── PlainContentWrapper
    │   ├── UserLogWrapper
    ├── Dashboard
    │   ├── FAQ
    │   ├── HomePage
    ├── home
    │   ├── ForgotPassword
    │   ├── NotFound
    └── WelcomePage

```

## License
The MIT License (MIT)

Copyright (c) 2016-2020 Aman Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.