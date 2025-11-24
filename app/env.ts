if (!process.env.DOG_API_KEY) {
  throw new Error("DOG_API_KEY is not defined in environment variables");
}

export const DOG_API_KEY = process.env.DOG_API_KEY;
