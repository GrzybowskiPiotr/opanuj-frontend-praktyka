import { useState, useEffect } from 'react';
interface useApiProps {
  name: string;
  gender: string;
  apiBaseUrl: string;
}

export function useAPI<T>({ name, gender, apiBaseUrl }: useApiProps) {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (name || gender) {
      fetch(`${apiBaseUrl}/character/?name=${name}&gender=${gender}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setData(data.results || []))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [name, gender]);

  return data;
}
