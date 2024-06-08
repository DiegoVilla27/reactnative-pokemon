import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import axios from "@interceptor/index";
import { environments } from "@/config/environments";
import { IPokemon } from "@/interfaces/pokemon";

export const useGetPokemonsSvc = (generation: number) => {
  const controller: AbortController = new AbortController();
  const { signal }: { signal: AbortSignal } = controller;

  const [data, setData] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData: () => Promise<void> = async () => {
      setError(null);
      setLoading(true);
      try {
        const response: AxiosResponse<IPokemon[]> = await axios.get(
          generation === 1
            ? `${environments.apiFirst}`
            : `${environments.apiSecond}`,
          { signal }
        );
        setData(response.data);
      } catch (err: unknown) {
        if (axios.isCancel(err)) {
          setError((err as AxiosError).message);
        } else {
          setError((err as Error).message);
        }
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchData();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generation]);

  return {
    data,
    loading,
    error
  };
};
