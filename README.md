# Metrics: A Performance Dashboard

![Metrics: A Performance Dashboard](https://res.cloudinary.com/workspaceio/image/upload/v1747775873/metrics/banner.png?q=80)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmetrics.justmvp.io&label=Live%20Site&style=for-the-badge)](https://metrics.justmvp.io)
[![Built with Preact](https://img.shields.io/badge/Built%20with-Preact-673AB8?style=for-the-badge&logo=preact)](https://preactjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/github/license/rameshupadhaya/metrics?style=for-the-badge)](LICENSE)

**Live Site:** [https://metrics.justmvp.io](https://metrics.justmvp.io)

> ⚡️ A lightning-fast, elegant performance metrics visualization dashboard for showcasing API and operation improvements.

## Overview

Metrics is a modern, Apple-inspired web application built with Preact for visualizing performance improvements across various APIs and operations. It provides an elegant, interactive interface for displaying performance metrics with beautiful animations and allows users to add new metrics through an accessible modal dialog.

## Features

- **Dynamic Performance Cards**: Visualize before and after performance metrics with elegant progress bars
- **Interactive Animations**: Smooth, subtle animations enhance usability and provide visual feedback
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Real-time Statistics**: Automatically calculates and displays summary statistics when new data is added
- **Add New Metrics**: Apple-inspired modal interface with accessible form controls
- **Dark Mode**: Elegant dark theme for reduced eye strain and modern aesthetics
- **Performance Optimized**: Lightweight Preact implementation ensures fast loading and rendering

## Technologies Used

- **Preact**: A fast 3KB alternative to React with the same modern API
- **Styled Components**: CSS-in-JS for component-based styling with dynamic theming
- **WebPack**: Module bundling and optimized build process
- **Babel**: JavaScript compiler for modern ECMAScript features
- **Chart.js**: Lightweight yet powerful charting library for data visualization
- **Intersection Observer API**: For performant scroll-based animations

## Project Structure

```
metrics
├── src                 # Source code
│   ├── components      # Reusable Preact components
│   │   ├── App.js      # Main application component
│   │   ├── Footer.js   # Footer component with dynamic year
│   │   ├── Modal.js    # Accessible modal dialog for adding metrics
│   │   ├── PerformanceCard.js # Individual performance metric card with animations
│   │   └── StatsHighlight.js  # Dynamic summary statistics component
│   ├── styles          # Styling
│   │   ├── GlobalStyle.js     # Global styles and CSS variables
│   │   ├── ModalStyles.js     # Apple-inspired modal-specific styles
│   │   └── StyledComponents.js # Component styles with animations
│   ├── utils           # Utility functions
│   │   └── data.js     # Data management and statistical calculations
│   ├── assets          # Static assets
│   │   └── favicon.ico # Application favicon
│   ├── index.html      # HTML template with font preloading
│   └── index.js        # Application entry point
├── webpack.config.js   # Webpack configuration with optimization
└── package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rameshupadhaya/metrics.git
   cd metrics
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   This will open the application in your default browser at http://localhost:3000.

4. **Build for production**:

   ```bash
   npm run build
   ```

   The optimized production build will be available in the `dist` directory.

## Usage Guide

### Viewing Performance Metrics

The dashboard automatically displays performance metrics in an elegant grid layout. Each card shows:

- The name of the API or operation
- Before and after response times
- Visual progress bar showing the relative improvement
- Percentage improvement calculation

### Adding New Metrics

1. Click the "+" floating action button in the bottom right corner
2. Fill in the form fields:
   - **API Name**: Enter the name of the API or operation
   - **Before Time**: Enter the response time before optimization
   - **After Time**: Enter the response time after optimization
   - **Time Unit**: Select either "seconds" or "milliseconds"
3. Click "Add Metric" to save and visualize the new data

The dashboard will automatically recalculate and update all summary statistics.

## Customization

### Modifying Theme Colors

You can customize the theme colors by editing the CSS variables in `src/styles/GlobalStyle.js`:

```javascript
:root {
  --primary-bg: #000000;       /* Background color */
  --card-bg: #141414;          /* Card background color */
  --text-primary: #ffffff;     /* Primary text color */
  --text-secondary: rgba(255, 255, 255, 0.7); /* Secondary text color */
  --accent: #2d77f6;          /* Accent color (blue) */
  --success: #35c759;         /* Success color (green) */
  --border-radius: 16px;      /* Border radius for cards and buttons */
}
```

### Adding Custom Data

To initialize with your own data, modify the array in `src/utils/data.js`:

```javascript
export const initialPerformanceData = [
  {
    id: 1,
    name: "YourAPI",
    before: 10.5,
    after: 3.2,
    unit: "seconds",
  },
  // Add more items...
];
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by Apple's elegant UI design principles
- Performance visualization best practices from Edward Tufte
- Font: Inter by Rasmus Andersson
  cd metrics

  ```

  ```

2. **Open `index.html`** in your web browser to view the dashboard.

## Usage

- The dashboard displays performance metrics for various operations.
- Users can add new performance metrics by clicking the floating "+" button, which opens a modal for input.
- Enter the name of the operation, the before and after times, and the time unit, then submit to update the dashboard dynamically.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Chart.js (for charting functionality)

## Contribution

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.
