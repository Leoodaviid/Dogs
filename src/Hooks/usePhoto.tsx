import { useState } from "react";
import { Comment, Photo } from "../models/models";
import {
  PHOTOS_GET,
  PHOTO_DELETE,
  PHOTO_GET,
  PHOTO_POST,
} from "../services/MainApi/login";

interface ContextPhoto {
  error?: null;
  loading?: boolean;
  sendNewPhoto: (formData: FormData, token: any) => Promise<void>;
  getPhotos: (page: number, total: number, user: number) => Promise<void>;
  getPhoto: (id: string | number) => Promise<void>;
  photoDelete: (id: string) => Promise<void>;
  data: {
    formData?: FormData;
    token?: any;
  };
  photoDeleteData: any;
  photoData: Photo[];
  photoComments: {
    comments: Comment;
    photo: Photo;
  };
  setPhotoData: React.Dispatch<any>;
}

const usePhoto = (): ContextPhoto => {
  const [data, setData] = useState<any>();
  const [photoData, setPhotoData] = useState<any>();
  const [photoComments, setPhotoComments] = useState<any>();
  const [photoDeleteData, setPhotoDeleteData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendNewPhoto(formData: FormData, token: string) {
    try {
      setError(null);
      setLoading(true);
      const response = await PHOTO_POST({ formData, token });
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  async function getPhotos(page: number, total: number, user: number) {
    try {
      setError(null);
      setLoading(true);
      const response = await PHOTOS_GET({ page, total, user });
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      setPhotoData(response.data);
      console.log(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  async function getPhoto(id: string | number) {
    try {
      setError(null);
      setLoading(true);
      const response = await PHOTO_GET(id);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      setPhotoComments(response.data);
      console.log(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  async function photoDelete(id: string) {
    try {
      setError(null);
      setLoading(true);
      const response = await PHOTO_DELETE(id);
      setPhotoDeleteData(response.data);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    photoData,
    photoComments,
    photoDelete,
    photoDeleteData,
    setPhotoData,
    sendNewPhoto,
    getPhotos,
    getPhoto,
    loading,
    error,
  };
};

export default usePhoto;
