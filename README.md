# rn-assignment4-11146019
rn-assignment4-11146019 project

# My React Native Application

## Overview
This is a React Native application with a login screen and a home screen. The application allows users to enter their name and email on the login screen and displays this information on the home screen. The home screen also features sections for featured and popular job listings, implemented as reusable components.

## Components

### 1. App
The main component that sets up the navigation structure using `react-navigation`. It contains a stack navigator with two screens: `LoginScreen` and `HomeScreen`.

### 2. LoginScreen
A screen that allows users to log in by entering their name and email. Upon pressing the login button, the user is navigated to the `HomeScreen`, with the entered name and email passed as parameters.

- **Props:** None
- **Navigation:** Navigates to `HomeScreen` with the entered `name` and `email`.

### 3. HomeScreen
A screen that displays the user's name and email, a search bar, and sections for featured and popular job listings. It uses the `JobCard` component to display each job.

- **Props:** Receives `name` and `email` from the `LoginScreen`.
- **Components Used:** `JobCard`

### 4. JobCard
A reusable component that displays details of a job, including the job title, company, salary, and location. This component is used by the `HomeScreen` to display both featured and popular job listings.

- **Props:**
  - `job`: An object containing job details (title, company, salary, location).

## Styles
The styles are defined using `StyleSheet` in React Native to closely match the provided UI design. Key styles include layout, text formatting, and input styling.
 
