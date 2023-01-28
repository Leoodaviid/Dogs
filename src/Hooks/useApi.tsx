import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordLostProps, PasswordResetProps } from "../models/models";
import { PASSWORD_LOST, PASSWORD_RESET } from "../services/MainApi/login";

interface ContextApi {
  data: any;
  error?: null;
  loading?: boolean;
  PasswordLost: (payload: PasswordLostProps) => Promise<void>;
  PasswordReset: (payload: PasswordResetProps) => Promise<void>;
}

const useApi = (): ContextApi => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function PasswordLost(payload: PasswordLostProps) {
    try {
      setError(null);
      setLoading(true);
      const response = await PASSWORD_LOST(payload);
      setData(response.data);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function PasswordReset(payload: PasswordResetProps) {
    try {
      setError(null);
      setLoading(true);
      const response = await PASSWORD_RESET(payload);
      setData(response.data);
      if (response.status !== 200)
        throw new Error(`Error: ${response.statusText}`);
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return {
    PasswordLost,
    PasswordReset,
    data,
    loading,
    error,
  };
};

export default useApi;
