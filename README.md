# AI Dashboard Theme

A modern and responsive AI-powered dashboard built with React. This project offers interactive data visualizations, real-time analytics, and a user-friendly interface, along with authentication for secure access. Ideal for data-driven applications and insights.

## Features
- **Real-Time Analytics**: Seamlessly integrates with APIs to display live data.
- **Customizable Widgets**: Easily rearrange components to suit user preferences.
- **Interactive Data Visualization**: Includes charts and graphs for insightful data representation.
- **AI Insights**: Provides recommendations and insights based on data trends.
- **User Authentication**: Secure sign-in and account creation.
- **Dark Mode**: Toggle between light and dark themes.

## Project Structure

```
ai-dashboard/
├── public/
│   ├── index.html
│   └── assets/             # Static assets like images, icons, etc.
│
├── src/
│   ├── components/         # Reusable components across the dashboard
│   │   ├── Navbar.js       # Navigation bar with menu options
│   │   ├── Sidebar.js      # Sidebar with user options and notifications
│   │   ├── Card.js         # Generic card component for reusable card layout
│   │   ├── StatsCard.js    # Specialized card for displaying statistics
│   │   ├── Chart.js        # Component to render charts (e.g., line, bar, pie)
│   │   ├── InsightsCard.js # Card for displaying AI-powered insights
│   │   ├── Settings.js     # Component for Settings menu (e.g., themes)
│   │   ├── CountryBreakdown.js # Component for data breakdown by country
│   │   └── Auth/           # Authentication components
│   │       ├── SignIn.js   # Sign-in form
│   │       └── SignUp.js   # Sign-up form
│   │
│   ├── containers/         # Sections containing multiple components
│   │   ├── Dashboard.js    # Main dashboard view
│   │   ├── MainStats.js    # Main section with questions and growth metrics
│   │   ├── ApiStats.js     # Section for API request statistics
│   │   ├── Insights.js     # Section for insights and updates
│   │   ├── Feedback.js     # Section for feedback and ticket creation
│   │   └── Subscription.js # Section for subscription and upgrades
│   │
│   ├── pages/              # Full-page components for routing
│   │   ├── Home.js         # Home page or landing page
│   │   ├── SignInPage.js   # Page that renders the SignIn component
│   │   ├── SignUpPage.js   # Page that renders the SignUp component
│   │   └── DashboardPage.js # Main dashboard page after sign-in
│   │
│   ├── hooks/              # Custom hooks for shared logic
│   │   └── useFetchData.js
│   │
│   ├── services/           # External service and API calls
│   │   ├── api.js          # API requests for data
│   │   └── auth.js         # Authentication services for sign-in and sign-up
│   │
│   ├── styles/             # CSS/SCSS styles
│   │   ├── main.scss       # Main styling file for global styles
│   │   ├── variables.scss  # SCSS variables (e.g., colors, fonts)
│   │   └── components/     # Component-specific styles
│   │
│   ├── utils/              # Utility functions (e.g., data formatting)
│   │   └── formatData.js
│   │
│   ├── App.js              # Root component for the React app
│   ├── index.js            # Entry point for the React app
│   └── config.js           # Configuration file (e.g., API endpoints, constants)
│
└── package.json            # Project dependencies and scripts
```

## Getting Started

These instructions will help you set up and run the project locally.

### Prerequisites
- Node.js and npm installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:Remote-Company-Simulation-RCS/ai-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ai-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `npm test`
Launches the test runner in interactive watch mode.

#### `npm run build`
Builds the app for production to the `build` folder.

## Contributing

Contributions are welcome! Please open issues or pull requests as needed.

## License

This project is open-source and available under the MIT License.