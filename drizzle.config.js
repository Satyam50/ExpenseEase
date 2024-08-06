export default {
  schema: "./utils/schema.jsx",
  driver: 'pg',
  dialect: 'postgres', // Add this line
  dbCredentials: {
    connectionString: 'postgresql://ai-interview-mocker_owner:QnNIKs3RUz7q@ep-quiet-bar-a5a748rf.us-east-2.aws.neon.tech/Expenses-Tracker?sslmode=require',
  }
};
