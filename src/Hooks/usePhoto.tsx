import { useState } from "react";
import { Photo } from "../models/models";
import { PHOTOS_GET, PHOTO_GET, PHOTO_POST } from "../services/MainApi/login";

interface ContextPhoto {
  error?: null;
  loading?: boolean;
  sendNewPhoto: (formData: FormData, token: any) => Promise<void>;
  fetchPhotos: (page: number, total: number, user: number) => Promise<void>;
  getPhoto: (id: string | number) => Promise<void>;
  data: {
    formData?: FormData;
    token?: any;
  };
  photoData: Photo[];
  setPhotoData: React.Dispatch<any>;
}

const usePhoto = (): ContextPhoto => {
  const [data, setData] = useState<any>();
  const [photoData, setPhotoData] = useState<any>();
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
      const message = err.response.data.statusText;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  async function fetchPhotos() {
    try {
      setError(null);
      setLoading(true);
      const response = await PHOTOS_GET({ page: 1, total: 9, user: 0 });
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      setPhotoData(response.data);
      // console.log(response.data);
    } catch (err: any) {
      const message = err.response.data.statusText;
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
      // console.log(`Resposta do PHOTO_GET${response.data}`);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      setPhotoData(response.data);
      // console.log(response.data);
    } catch (err: any) {
      const message = err.response.data.statusText;
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    photoData,
    setPhotoData,
    sendNewPhoto,
    fetchPhotos,
    getPhoto,
    loading,
    error,
  };
};

export default usePhoto;
