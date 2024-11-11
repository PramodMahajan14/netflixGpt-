export const TMDB_API_KEY = "4c5fb3d6350038be629aba38612413f8";
export const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzVmYjNkNjM1MDAzOGJlNjI5YWJhMzg2MTI0MTNmOCIsIm5iZiI6MTczMDYzNTI1Ni4zMzM3Nywic3ViIjoiNjcyNzYxMGZjMGJjMDc0OWQwZDg5Njc2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.pY2eeBVyPK-VGqsQnfu4LUx78KP4pzoICCgIZOpfHuI";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const OPENAI_GPT_KEY = process.env.REACT_APP_OPENAI_KEY;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LANGAUGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिंदी" },
];
