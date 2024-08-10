# ExpenseEase

ExpenseEase is a web application designed to help you manage your finances by creating different types of budgets and tracking your expenses. The app is built using React.js and Next.js, with data stored in Neon Database and user authentication handled by Clerk.

## Features

- **Custom Budgets**: Create various types of budgets according to your needs.
- **Expense Tracking**: Add expenses to your budgets and keep track of your spending.
- **Financial Management**: Get insights into your financial habits and make informed decisions.
- **Secure Authentication**: Sign in securely using Clerk Authentication.
- **Data Storage**: Budgets and expenses are securely stored using Neon Database.

## Tech Stack

- **Frontend**: React.js
- **Framework**: Next.js
- **Database**: Neon Database
- **Authentication**: Clerk

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Neon Database account.
- Clerk account for authentication.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ExpenseEase.git
   cd ExpenseEase
Install the dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env.local file in the root of your project and add your Neon Database and Clerk credentials:

env
Copy code
NEXT_PUBLIC_NEON_DATABASE_URL=your_neon_database_url
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 to view the app in your browser.
