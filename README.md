# ReviewRadar

ReviewRadar is a web application that leverages AI to provide insightful product recommendations. Users can fetch product reviews by entering a product URL, and the app combines these reviews with sentiment analysis to generate an AI-based recommendation. Additionally, the app displays a list of popular products with their AI-based recommendation and images in a clean, responsive, and modern UI.

## Features

### 1. **AI-Based Product Recommendations**

- Combines user reviews and sentiment analysis to generate a concise, AI-driven recommendation for each product.
- Provides actionable insights to help users make informed purchasing decisions.

### 2. **Fetch Product Reviews**

- Users can enter a product URL to fetch its reviews.
- Displays the product image, title, and a brief AI-generated recommendation based on the sentiment analysis.

### 3. **Popular Products Section**

- Displays a list of popular products in a responsive grid layout.
- Each product card includes:
  - Product image
  - Product name
  - AI-based recommendation

### 4. **Modern UI**

- The UI is designed to be clean and consistent, inspired by the Stack Overflow design.
- Uses Material-UI for responsive and modern components.
- Includes hover effects, shadows, and borders for a polished look.

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI
- **Backend**: Node.js, Express
- **Styling**: Material-UI with custom `sx` styling for components
- **AI Integration**: Sentiment analysis and review aggregation for recommendations
- **API Services**: Fetches data from custom APIs for reviews, sentiment analysis, and popular products

## Setup Instructions

### 1. **Backend**

The backend handles API requests, sentiment analysis, and communication with Redis.

#### Installation

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following:

   ```env
   TOGETHER_API_KEY = <YOUR_API_KEY>
   ```

4. Start the backend server:

   ```bash
   nodemon app.js
   ```

5. The backend will be available at:
   ```
   http://localhost:5000
   ```

### 2. **Frontend**

The frontend is the React-based user interface for the application.

#### Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

### 3. **Redis**

Redis is used as a caching layer and storing popular data.

#### Installation

1. Download and install Redis:

   - [Windows](https://github.com/microsoftarchive/redis/releases)
   - [macOS/Linux](https://redis.io/docs/getting-started/installation/)

2. Start the Redis server:

   ```bash
   redis-server
   ```

3. Verify Redis is running:

   ```bash
   redis-cli ping
   ```

   You should see the response: `PONG`.

4. Update the backend configuration to include the Redis connection details (e.g., `localhost:6379`).

### 4. **Connecting All Components**

Ensure all components are running:

- Redis: `localhost:6379`
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000`

The backend will communicate with Redis and the AI Agent, while the frontend will interact with the backend to fetch data and display it.

## Folder Structure

```
ReviewRadar/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.tsx
│   │   │   ├── PopularProducts.tsx
│   │   │   ├── Review.tsx
│   │   ├── services/
│   │   │   ├── apiServices.ts
│   │   ├── utils/
│   │   │   ├── types.ts
│   │   ├── index.tsx
│   ├── public/
│   ├── package.json
```

## Components Overview

### 1. **App.tsx**

- The main entry point of the app.
- Includes:
  - A header with the app title and description.
  - A form for entering a product URL.
  - A section to display the fetched review and AI-based recommendation.
  - The `PopularProducts` component to display popular products.

### 2. **PopularProducts.tsx**

- Displays a list of popular products in a responsive grid layout.
- Each product is displayed in a `Card` with:
  - Product image
  - Product name
  - A single review
  - AI-based recommendation
- Wrapped in a `Box` for consistent styling.

### 3. **Review.tsx**

- Displays a single product review fetched from the URL.
- Includes:
  - Product image
  - Product title
  - Review content
  - AI-based recommendation
- Styled with Material-UI's `Card` and `Typography`.

## AI Features

### 1. **Sentiment Analysis**

- Analyzes the sentiment of user reviews (positive, negative, or neutral).
- Provides a sentiment score for each review.

### 2. **AI-Based Recommendation**

- Aggregates reviews and sentiment analysis to generate a concise recommendation.
- Example:
  - **Input Reviews**: "Great product!", "Good value for money."
  - **AI Recommendation**: "Highly recommended for its value and quality."

## API Services

### 1. **fetchPopularProducts**

- Fetches a list of popular products with their images, and AI-based recommendations.

### 2. **fetchSentimentAnalysis**

- Fetches the review and sentiment analysis for a product based on the provided URL.
- Combines the sentiment analysis with reviews to generate an AI-based recommendation.

## UI Design

### Consistent Design

- The UI is inspired by Stack Overflow, with a clean and minimalistic design.
- Components are styled using Material-UI's `sx` prop for flexibility.

### Responsive Layout

- The app uses Material-UI's `Grid` system to ensure responsiveness across devices.

### Key Features

- Hover effects on product cards.
- Shadows and borders for better visual separation.
- Typography for consistent text styling.

### Video Demo

https://github.com/user-attachments/assets/d03366b0-a79e-496c-827e-9dcd475be76d

## Future Enhancements

1. **Dark Mode**:

   - Add a toggle for light and dark themes.

2. **Pagination**:

   - Add pagination for the popular products section.

3. **Search Functionality**:

   - Allow users to search for specific products in the popular products section.

4. **Advanced AI Features**:

   - Use machine learning models to provide more detailed product insights.

5. **Backend Integration**:
   - Integrate with a backend service for real-time data fetching.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
