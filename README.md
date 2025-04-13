
# React Form

A simple React Todo List application demonstrating controlled forms, prop drilling, dynamic list rendering, and support for editing and deleting todo items. The UI is built with [Tailwind CSS](https://tailwindcss.com/) for a responsive and modern look. It demonstrates core React concepts like:

- Props and Prop Drilling
- Controlled Forms and Inputs
- Lists, Keys, and Dynamic Rendering
- Editing and Deleting Todos
- Marking Todos as Completed
- LocalStorage for persistence

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- Add new todo items
- Edit existing todo text
- Delete individual todos
- Mark todos as completed
- State persistence with `localStorage`
- Beautiful UI with TailwindCSS

---

## Technologies

- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for rapid styling.
- **JavaScript (ES6+):** Modern syntax and features for improved coding practices.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-todo-list.git
cd react-todo-list
```

### 2. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install
```

### 3. Set Up Tailwind CSS

If Tailwind CSS isn’t already set up, run the following commands:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then, update the `tailwind.config.js` file:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

And ensure that your `src/index.css` contains:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Usage

### Start the Development Server

To run the app in development mode:

```bash
npm start
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Working with the App

- **Adding a Todo:**  
  Type into the input field and click **Add Todo** to create a new todo item.

- **Editing a Todo:**  
  Click **Edit** beside a todo item to enter edit mode. Modify the text and click **Save** to update, or **Cancel** to revert your changes.

- **Deleting a Todo:**  
  Click **Delete** on a todo item to remove it from the list.

---

## Project Structure

```
/react-form
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx              # Main component; handles state and form submission
│   ├── ChildComponent.jsx   # Intermediate component for rendering the todo list
│   ├── TodoItem.jsx         # Component for individual todos (editable and deletable)
│   ├── index.css           # Global styles with Tailwind CSS directives
│   └── index.jsx            # Entry point for React
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository**
2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to Your Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

