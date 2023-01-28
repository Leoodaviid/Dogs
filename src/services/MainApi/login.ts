import { AxiosResponse } from "axios";
import baseApi from "./config";

interface LoginPayload {
  username: string;
  password: string;
}
export const TOKEN_POST = (payload: LoginPayload | Promise<AxiosResponse>) => {
  return baseApi.post("/jwt-auth/v1/token", payload);
};

interface CreatePayload {
  username: string;
  email: string;
  password: string;
}

export const USER_POST = (payload: CreatePayload | Promise<AxiosResponse>) => {
  return baseApi.post("/api/user", payload);
};

export function USER_GET(token: string) {
  return baseApi.get("/api/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function TOKEN_VALIDATE_POST(token: string) {
  return baseApi.post("/jwt-auth/v1/token/validate", {
    Headers: (baseApi.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`),
  });
}

interface PhotoPostPayload {
  formData: FormData;
  token: any;
}
export function PHOTO_POST(data: PhotoPostPayload): Promise<AxiosResponse> {
  return baseApi.post("/api/photo", data.formData, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
}

interface PhotosGetPayload {
  page: number;
  total: number;
  user: number | string | undefined;
}
export function PHOTOS_GET(payload: PhotosGetPayload): Promise<AxiosResponse> {
  return baseApi.get(
    `/api/photo/?_page=${payload.page}&_total=${payload.total}&_user=${payload.user}`
  );
}
export function PHOTO_GET(
  id: string | number | undefined
): Promise<AxiosResponse> {
  return baseApi.get(`/api/photo/${id}`);
}
export function PHOTO_DELETE(id: string): Promise<AxiosResponse> {
  return baseApi.delete(`/api/photo/${id}`, {
    headers: {
      Authorization: `Bearer ` + window.localStorage.getItem("token"),
    },
  });
}

interface CommentProps {
  comment: string | any;
}
export function COMMENT_POST(
  data: CommentProps,
  id: any | number,
  token: any | string
): Promise<AxiosResponse> {
  return baseApi.post(`/api/comment/${id}`, data.comment, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
