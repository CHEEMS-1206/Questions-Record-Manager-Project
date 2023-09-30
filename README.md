# Questions Record Manager

![Home Image](https://github.com/CHEEMS-1206/Triveni/blob/main/img/ProjectImages/home.pn)

Welcome to the Questions Record Manager GitHub repository! This project is a front-end application built with React.js, Masonry-CSS, and Material UI. The application allows users to manage a collection of questions, supporting CRUD (Create, Read, Update, Delete) operations on data fetched from an API. It also provides sorting capabilities based on question difficulties.

## Features

- **Add New Questions**: Easily add new questions to the collection, including specifying the question, algorithm used, notes about the question, approach to solve the question and difficulty level.

- **Delete Existing Questions**: Remove unwanted questions from the collection with a simple deletion process.

- **Update a Question**: Edit and update the content or difficulty level of a question.

- **Sort Questions**: Sort the displayed questions based on their difficulty levels for better organization and navigation.

## Pages

The Questions Record Manager application is organized into the following pages:

1. **Home**: This is the main page where all the questions are displayed in an organized manner, making it easy for users to browse through the collection.

2. **Drawer**: The drawer is a user-friendly interface that provides quick access to various options:

   - **Add**: Allows users to add new questions to the collection.
   - **Delete**: Provides a way to remove questions from the collection.
   - **Update**: Allows users to edit and update existing questions.
   - **Filter**: Enables users to sort questions based on difficulty levels.

## Getting Started

To get started with the Questions Record Manager project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/CHEEMS-1206/Questions-Record-Manager-Project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Questions-Record-Manager-Project
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Create a db.json file and serve it using json-liveserver.
   ```bash
   json-server --watch .\data\db.json --port 8000
   ```

6. The application should open in your default web browser. You can now begin exploring and using the Questions Record Manager.

7. To interact with an API, ensure you have the necessary API endpoints configured in your project. Modify the API endpoints as needed to fetch and manage questions.

## Dependencies

This project relies on the following libraries and technologies:

- React.js
- Masonry-CSS
- Material UI

Make sure you have these dependencies installed and configured in your project.

## Contributing

Contributions to the Questions Record Manager project are welcome! If you have ideas for improvements, new features, or bug fixes, please feel free to submit pull requests or open issues on the GitHub repository.

## License

This project is open-source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute this project according to the terms of the license.

Thank you for using Questions Record Manager. If you have any questions or need further assistance, please don't hesitate to contact us.

Happy managing your questions! 📚🧐
