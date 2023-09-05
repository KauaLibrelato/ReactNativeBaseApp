/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const urlBackend = "http://ip-user:8080/api/client";

const apiNodeAuth = axios.create({
  baseURL: urlBackend,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "*/*",
    "Content-Type": "application/json",
    "Accept-Encondig": "gzip, deflate, br",
  },
});

apiNodeAuth.interceptors.request.use(
  async (req) => {
    const token = await AsyncStorage.getItem("accessToken");

    // @ts-ignore
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (error: any) => Promise.reject(error)
);

export default apiNodeAuth;
