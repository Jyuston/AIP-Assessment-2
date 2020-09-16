declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "production" | "development";
    MONGODB_URL: string;
    MONGODB_DB: string;
    JWT_SECRET: string;
  }
}
