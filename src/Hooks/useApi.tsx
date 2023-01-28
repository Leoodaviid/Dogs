import { useState } from "react";
import { PasswordLostProps } from "../models/models";
import { PASSWORD_LOST } from "../services/MainApi/login";

interface ContextApi {
  data: any;
  error?: null;
  loading?: boolean;
  PasswordLost: (payload: PasswordLostProps) => Promise<void>;
}

const useApi = (): ContextApi => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function PasswordLost(payload: PasswordLostProps) {
    try {
      setError(null);
      setLoading(true);
      const response = await PASSWORD_LOST(payload);
      console.log(response.data);
      setData(response.data);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    PasswordLost,
    data,
    loading,
    error,
  };
};

export default useApi;
