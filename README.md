# ReviewRadar

## Purpose

This project is a sentiment analysis platform that helps users make informed purchase decisions by analyzing user reviews for products. It uses a Vite + React frontend, an Express.js backend, and Redis for data storage. The platform integrates with external AI APIs to provide dynamic, context-aware sentiment analysis, enabling users to quickly understand the overall sentiment of product reviews.

## Setup

This demo creates a WebApp using Vite for the frontend. The demo uses React for the development of the frontend and Express.js for the development of the backend.

### Running the frontend

You will need to have `node`, `npm`, and `yarn` installed on the device.\
Documentation to install `node` and `npm` can be found [here](https://nodejs.org/en/download).\
Documentation to install `yarn` can be found [here](https://classic.yarnpkg.com/lang/en/docs/install/).\
The commands to start the Frontend are:\
`cd frontend`\
`yarn install`\
`yarn dev`\
The frontend runs on the port `5173`.

### Running the backend

You will also need to create a `.env` file which contains an API Key for the AI-Client. The client used is `together-api`. The sample contents of the `.env` file are as follows:\
`TOGETHER_API_KEY = <YOUR_API_KEY>`\
The commands to start the Backend are:\
`cd backend`\
`npm install`\
`node app.js`\
The backend runs on the port `3000`.

### Running the Redis Server

We will also need a running `redis-server` to work as a database for this demo. The documentation to install the `redis-server` can be found [here](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/).\
The command to start the `redis-server` is:\
`redis-server`\
The Redis server is started with the default configuration and runs on port `6379`.

## Architecture

### Tech Stack

- **Frontend**: Vite + React (Fast, modern frontend framework)
- **Backend**: Express.js (Lightweight and scalable backend)
- **Database**: Redis (Key-value store for fast reads/writes)
- **AI Integration**: External API-based sentiment analysis (TogetherAI)

### System Design

#### Frontend (Vite + React)

- **Component-Based UI**: Organized using React components with Flowbite for UI Components and TailwindCSS for styling.
- **Routing**: `react-router-dom` for handling multiple views.
- **API Communication**: Axios for backend requests.

---

#### Frontend Directory Structure

    /frontend
    │── /src
    │   ├── /assets        	   # Static assets
    │   ├── /components        # Reusable UI components
    │   ├── /pages             # Application pages (HomePage, ProductPage)
    │   ├── /services          # API services (API handlers)
    │   ├── index.tsx          # Root file (React app entry)
    │   ├── App.tsx            # Main component
    │── /public                # Static assets
    │── vite.config.ts         # Vite config file
    │── package.json           # Dependencies

---

### Backend (Express.js + Redis)

- **Express for REST API**: Handles routes and business logic.
- **Redis as a Database**: Stores sentiment analysis results and user queries.
- **AI API Integration**: Calls external AI Assistant APIs for sentiment analysis.
- **Rate Limiting**: Uses Redis for request throttling.

#### Backend Directory Structure

    /backend
    │── /src
    │   ├── /routes          # Express routes (Sentiment analysis, product data, etc.)
    │   ├── /views           # Views
    │   ├── /redis           # Redis Integration
    │   ├── /config          # Config files (environment variables)
    │   ├── server.js        # Main Express server
    │── .env                 # Environment variables
    │── package.json         # Dependencies

---

### Database (Redis)

- Stores:
  - Sentiment analysis results
  - User queries and history

---

### AI Assistant Integration

- Uses an external AI API (TogetherAI).
- Requests handled via a backend service.
- Sentiment analysis results stored in Redis to maintain a history for future sessions.

---

### Communication Flow

1.  **Frontend (Vite + React)**
    - User submits a product review or query in the app.
    - React calls the Express backend (`/api/sentiment`).
2.  **Backend (Express)**
    - Checks Redis for previous analysis results.
    - Uses the history as context to generate a sentiment analysis for the current query.
    - Stores the analysis result in Redis for future sessions.
3.  **Redis (Database)**
    - Manages sentiment analysis history (if needed).

---

## Decisions

### Vite + React (Frontend)

**Fast Development & Hot Reloading**

- Vite offers instant builds & fast HMR (Hot Module Replacement).
- React’s component-based architecture allows for modular and reusable UI components.

**Optimized Performance**

- Vite only bundles the required code and supports lazy loading, improving app load times compared to Webpack-based setups.

**Rich Ecosystem**

- Compatible with Tailwind CSS and Flowbite for rapid styling.
- Large community allows for better support, libraries, and updates.

---

### Express.js (Backend)

**Minimal, Lightweight, and Fast**

- Has a small footprint, making it more efficient than heavier frameworks like Django or Rails.

**Seamless Integration with Redis & AI APIs**

- Easily connects with Redis (for caching sentiment analysis results).
- Handles requests to AI APIs like Together.AI.

---

### Redis (Database & Cache)

**In-Memory Data Storage**

- Redis is an in-memory database, making it faster than traditional databases.

**Flexible & Scalable**

- Works as a database (RedisJSON) or a cache layer over SQL/NoSQL databases.

**Use of States**

- While a database like Firebase could have been used to store content such as product categories and review data, for the demo they are hardcoded.

---

### API-Based Sentiment Analysis

**On-Demand AI without Expensive Infrastructure**

- Calling an external AI API (Together.AI) avoids the need to host an expensive LLM model yourself.
- Pay only for what you use rather than managing servers.

**Flexible & Upgradable**

- The AI service can be easily swapped or upgraded.
- Supports text-based sentiment analysis and embeddings.

### Video Demo
https://github.com/user-attachments/assets/d03366b0-a79e-496c-827e-9dcd475be76d

