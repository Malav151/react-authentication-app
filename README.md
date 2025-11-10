# React Authentication App

This is a simple React application that lets users **create an account, log in, and edit their profile information**.  
I built this project using **React** and **localStorage** — without using any backend.

# Features

- **Registration Page** – Users can sign up with their name, email, and password.  
  If someone tries to register with an existing email, an alert is shown.
- **Login Page** – Users can log in using their credentials. Invalid credentials show an alert message.
- **Profile Page** – After logging in, users can view and edit their profile (name, email, and password).
- **Local Storage Based Auth** – User data is stored locally in the browser (no database or API used).
- **Responsive Design** – All pages are fully responsive, built with **Bootstrap** and some custom CSS.

# Tech Stack

- **React (v16+)**
- **Bootstrap 5**
- **CSS3**
- **JavaScript (ES6)**
- **LocalStorage**

# Pages Overview

- **Register** : Sign up with name, email, and password. Shows alert if email is already used.
- **Login** : Log in using valid credentials. Invalid login shows an alert.
- **Profile** : Displays and allows editing of user information. Changes are saved to localStorage.
