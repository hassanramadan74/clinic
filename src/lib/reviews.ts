import axiosInstance from "./axios";

export interface Review {
  id?: number;
  name: string;
  photoUrl: string;
  text: string | null;
  stars: number;
  publishAt: string;
  publishedAtDate: string;
}

interface ReviewsCache {
  data: Review[];
  timestamp: number;
}

// Cache duration in milliseconds (2 days)
const CACHE_DURATION = 2 * 24 * 60 * 60 * 1000;

// Function to get reviews from backend or cache
export const getReviews = async (): Promise<Review[] | null> => {
  try {
    // Check if we have cached data
    const cachedData = localStorage.getItem("reviewsCache");

    if (cachedData) {
      const cache: ReviewsCache = JSON.parse(cachedData);
      const now = Date.now();

      // If cache is still valid, return cached data
      if (now - cache.timestamp < CACHE_DURATION) {
        return cache.data;
      }
    }

    // Fetch fresh data from backend
    const response = await axiosInstance.get("/reviews/get/");

    if (response.data) {
      // Cache the new data
      const cacheObject: ReviewsCache = {
        data: response.data,
        timestamp: Date.now(),
      };

      localStorage.setItem("reviewsCache", JSON.stringify(cacheObject));
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
};
