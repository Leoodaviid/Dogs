import { useState } from "react";
import { COMMENT_POST } from "../services/MainApi/login";

interface useCommentsProps {
  data: any;
  error?: null;
  loading?: boolean;
  sendNewComment: (
    comment: string | any,
    id: any | number,
    token?: any | string
  ) => Promise<void>;
}

const useComments = (): useCommentsProps => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendNewComment(
    comment: string | any,
    id: any,
    token?: string | any
  ) {
    try {
      setError(null);
      setLoading(true);
      const response = await COMMENT_POST({ comment }, id, token);
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

  return {
    data,
    sendNewComment,
    loading,
    error,
  };
};

export default useComments;
