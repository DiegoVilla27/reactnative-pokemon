import { environments } from "@/config/environments";
import axios from "@interceptor/index";
import { Rgb } from "@interfaces/colors";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useGetColorsByImage = (url: string) => {
  const [data, setData] = useState<Rgb>([148, 163, 184]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const { signal }: { signal: AbortSignal } = controller;
    const fetchData: () => Promise<void> = async () => {
      try {
        const response: AxiosResponse<{ [colors: string]: Rgb }> =
          await axios.post(`${environments.colors}`, { url }, { signal });
        setData(response.data.colors);
      } catch (err: unknown) {
        if (axios.isCancel(err)) {
          setError((err as AxiosError).message);
        } else {
          setError((err as Error).message);
        }
      } finally {
        setLoading(false);
      }
    };
    url && fetchData();
    return () => controller.abort();
  }, [url]);

  return {
    data,
    loading,
    error
  };
};

export default useGetColorsByImage;
