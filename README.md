# SameGames

Samagames is a web application that allows users to input their Steam usernames and find the common games they have with another user. The app is built using Next.js and utilizes the Steam API.

Made By [Nepcen](https://www.linkedin.com/in/yusufabacik/)

[Live](https://same-games.vercel.app/)

## Installation

To install and run the app locally, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install` in the terminal.
3. Rename `.env.example` file to `.env.local` in the root directory of the project and add your Steam API key to it as `NEXT_PUBLIC_STEAM_API_KEY=<YOUR_STEAM_API_KEY>`.
4. Start the development server with `npm run dev`.
5. Access the app at `http://localhost:3005`.

## Usage

To use the app, simply enter two Steam usernames into the input fields and click the "Find Common Games" button. The app will then display a list of games that both users own.

## Credits

This app was built by `Yusuf <Nepcen /> Abacık`. The Steam API was used to retrieve data about users' owned games.

## Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2023 Nepcen

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
