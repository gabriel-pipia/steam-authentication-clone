# Steam Authentication Clone

A clone of the Steam authentication system that allows users to sign in using their Steam account. This project is designed to replicate the look and feel of the original Steam login interface while providing a secure and functional authentication process.

## Features

- **Steam-like UI**: Replicates the Steam login interface for a familiar user experience.
- **Secure Authentication**: Utilizes OAuth to securely authenticate users via Steam.
- **Responsive Design**: Ensures the login page looks great on all devices, including desktops, tablets, and mobile phones.
- **Error Handling**: Provides user-friendly error messages for failed login attempts.

## Technologies Used

- **HTML**: For structuring the content on the web.
- **CSS**: For styling the application.
  - Flexbox: For layout structure.
  - Media Queries: For responsive design.
- **JavaScript**: For client-side logic and interactivity.
- **Node.js**: For backend server setup.
- **Express.js**: For handling HTTP requests and responses.
- **Passport.js**: For authentication middleware.
- **Steam Strategy**: For integrating Steam OAuth with Passport.js.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- A Steam API key. You can obtain one from the [Steam Community](https://steamcommunity.com/dev/apikey).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/gabriel-pipia/steam-authentication-clone.git
    ```

2. Navigate to the project directory:
    ```bash
    cd steam-authentication-clone
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your Steam API key:
    ```env
    STEAM_API_KEY=your_steam_api_key_here
    CALLBACK_URL=http://localhost:3000/auth/steam/return
    ```

5. Start the application:
    ```bash
    npm start
    ```

6. Open your browser and go to `http://localhost:3000` to see the login page.

## Usage

1. Open the application in your browser.
2. Click the "Sign in through Steam" button.
3. You will be redirected to the Steam login page.
4. After logging in, you will be redirected back to the application.

## Project Structure

- `index.html`: Main HTML file.
- `styles.css`: CSS file for styling the login page.
- `app.js`: Main application file.
- `auth.js`: Authentication configuration using Passport.js.
- `routes.js`: Defines application routes.
- `README.md`: Project documentation.

## Screenshots

![Desktop](assets/screenshots/Desktop.jpeg)
![Mobile](assets/screenshots/Mobile.jpeg)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Steam](https://steamcommunity.com/) for the authentication inspiration.
- [Passport.js](http://www.passportjs.org/) for the authentication middleware.
- [Font Awesome](https://fontawesome.com/) for icons.

## Author

Gabriel Pipia
- [GitHub](https://github.com/gabriel-pipia)

Feel free to contribute, open issues, or provide feedback!

---

Thank you for checking out this project!