import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseURL = () => {
  return Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  });
};

export const baseURL = getBaseURL();

export class MarketPlaceApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
      headers: { "Content-Type": "application/json" },
    });

    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        // rotas públicas que não precisam de token
        const publicRoutes = ["/auth/register", "/auth/login"];
        if (!publicRoutes.some((route) => config.url?.includes(route))) {
          const userData = await AsyncStorage.getItem("marketplace-auth");
          if (userData) {
            try {
              const {
                state: { token },
              } = JSON.parse(userData);
              if (token) {
                config.headers.Authorization = `Bearer ${token}`;
              } else {
                delete config.headers.Authorization;
              }
            } catch {
              delete config.headers.Authorization;
            }
          } else {
            delete config.headers.Authorization;
          }
        }

        return config;
      },
      (error) => Promise.reject(error)
    );
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
