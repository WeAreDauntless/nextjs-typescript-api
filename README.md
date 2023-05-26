# 🚀 Dauntless Crypto Market: NextJS, React & TypeScript Fun! 🎉

Welcome to the Dauntless Crypto Market app! This project is built using NextJS 13, React, and TypeScript to showcase the functionalities of fetching crypto currency data and displaying it in a user-friendly manner. 🌐💰

The app is a simple yet powerful example of how React and NextJS can be combined to create an amazing user experience. The app makes use of the **FREE** [CoinGecko API](https://www.coingecko.com/en/api/documentation) to display information about various crypto currencies traded against the US dollar (USD). 🦎

## 🏃‍♂️ How to Run the App

Get started in no time! Follow the steps below to run the Dauntless Crypto Market app on your local machine.

### 1. Clone and Set Up

First, clone the repo to your local machine:

```bash
git clone https://github.com/edoardo-bluframe/nextjs-typescript-api
```

Navigate to the project directory:

```bash
cd nextjs-typescript-api
```

### 2. Create an `.env.local` file

Create a new file in the project root directory named `.env.local` and add the following line. This allows the app to know where to fetch the API data from.

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 4. Run the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result! 🎉

The page will auto-update as you edit the files, making it easier for you to develop and preview your changes.

### 5. Explore and Enjoy!

That's it! You're all set to start exploring the amazing features of the Dauntless Crypto Market app. Have fun and happy coding! 💻🌟

## 🧪 How to Test the App

Testing the Dauntless Crypto Market app is a breeze. Make sure all components and functionalities are working as intended by following these steps:

1. Make sure you're in the project's root directory:

```bash
cd nextjs-typescript-api
```

2. Run the following command to execute the test suite:

```bash
npm test
```

The command will run all test files in the project, ensuring that the app works as expected. You'll see a summary of the test results, including passed and failed tests, if any.

Keep the test runner running while you develop features or modify the code. It will automatically re-run the tests after detecting any changes, helping you catch any bugs or issues throughout the development process.

That's all! Now you can test the Dauntless Crypto Market app. Happy testing! 🚀👩‍💻

## 🎯 Main Features

1. Dynamic content generated from the CoinGecko API
2. Display of the top 45 crypto currencies traded against the USD
3. Detailed information of each currency available upon clicking "MORE"
4. Responsive design and navigation
5. Proven best practices and modern coding techniques with React and NextJS

## 🧪 High-Level Thought Process

While building the app, I put emphasis on the following concepts:

- Use of hooks to make the code more modular and reusable
- Implementing accurate test coverage
- Ensuring the app is accessible, responsive and user-centric
- Showcasing modern techniques and libraries in the React ecosystem
- Ensuring the usage of API calls is efficient, error-free and user-friendly

## 🛠️ Application Components

- `api`: Functions to fetch data from CoinGecko API
- `hooks`: Custom hooks for fetching coins and coin details
- `pages`: NextJS pages for the home route and currency specific routes
- `mocks`: Mock data for tests
- `types`: Global type definitions
- `styles`: Global CSS

## 🌟 Conclusion

The Dauntless Crypto Market app demonstrates the capabilities and flexibility of NextJS, React, and TypeScript. The project is built with a focus on optimal user experience, reliability, and modern development practices. This app is a prime example of how simple and dynamic React applications can be with the right combination of technologies.

Feel free to dive in, explore the code, and get inspired to build your own amazing applications with the power of NextJS, React, and TypeScript! 💪 And remember, stay Dauntless! 🔥
