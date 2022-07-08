const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://kasiliwachiye:bOn2jiRwLfofMWuZ@cluster0.zoudst1.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://localhost:27017/expense-tracker',
}

export default config