# Allen - Course Platform

A modern course marketplace platform built with React and React Router, featuring course listings, navigation, and course details.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Pages](#project-pages)

## ✨ Features

- **Home Page**: Landing page showcasing featured courses and platform overview
- **Courses Page**: Browse all available courses with detailed information
- **Online Courses**: Dedicated section for online course offerings
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Course Cards**: Interactive course cards displaying course details (name, batch, price)
- **Multi-page Navigation**: Seamless navigation using React Router

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7.13.0
- **Styling**: Tailwind CSS 4.1.18
- **Build Tool**: Vite 7.2.4
- **Linting**: ESLint 9.39.1

## 📁 Project Structure

```
src/
├── components/
│   └── CourseCard.jsx       # Reusable course card component
├── pages/
│   ├── Home.jsx             # Home page
│   └── Classes.jsx          # Classes/courses page
├── section/
│   └── Courses.jsx          # Online courses section
├── layout/
│   └── Layout.jsx           # Main layout wrapper
├── common/                  # Common utilities and helpers
├── assets/                  # Images, icons, and static files
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── index.css                # Global styles
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project:**
   ```bash
   cd Projects/Allen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 💻 Usage

### Development Server
Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:

```bash
npm run build
```

### Preview Production Build
Preview the production build locally:

```bash
npm run preview
```

### Lint Code
Run ESLint to check code quality:

```bash
npm run lint
```

## 🧭 Project Pages

### Home Page (`/`)
- Main landing page
- Platform introduction
- Featured courses showcase

### Courses Page (`/courses`)
- Display all available courses
- Course filtering and browsing
- Course details display

### Online Courses (`/online-courses`)
- Section dedicated to online course offerings
- Specialized online course listings

## 🎨 Component Overview

### CourseCard Component
Displays individual course information including:
- Course name
- Batch/cohort information
- Price
- Course features and benefits
- Call-to-action ("Know More")

**Props:**
- `name` (string): Course name
- `batch` (string): Batch/cohort information
- `price` (string): Course price

## 🔧 Configuration

- **Vite Config**: `vite.config.js`
- **ESLint Config**: `eslint.config.js`
- **Tailwind Config**: Integrated with Tailwind CSS 4.1.18

## 📝 Notes

- The project uses Tailwind CSS for styling with responsive design
- React Router is configured with nested routes
- Layout component wraps all pages for consistent UI
- Course data is passed through props to CourseCard component

## 🤝 Contributing

Feel free to modify and extend the project for learning purposes.

## 📄 License

This is a learning project.
