import { useState, useEffect } from 'react';

import type { Country, FilterType } from '../types/types';
/**
 * Import of FetchStrategies.
 */
import {
  fetchAllCountries,
  fechtCountriesByCurrency,
  fetchCountriesByLanguage,
  fetchCountriesByCapital,
  fetchCountriesByName,
} from '../api/apiClients';
import { set } from 'zod';

/**
 * Function to fetch countries from the API.
 * @param searchTerm Parameter to search for countries.
 * @returns Object with countries, isLoading and error.
 */

export function useAPI(searchTerm: string, filterType: FilterType) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * Object with different strategies to fetch countries.
     */
    const fetchStrategies = {
      name: fetchCountriesByName,
      currency: fechtCountriesByCurrency,
      language: fetchCountriesByLanguage,
      capital: fetchCountriesByCapital,
      default: fetchAllCountries,
    };

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log(`🚀 ~ fetchData ~ searchTerm: ${searchTerm}`);
        console.log(`🚀 ~ fetchData ~ filterType: ${filterType}`);

        const fetchFn =
          searchTerm === ''
            ? fetchAllCountries
            : (fetchStrategies[filterType] ?? fetchStrategies.default);

        const data = await fetchFn(searchTerm);
        setCountries(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.'
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchTerm, filterType]);

  return { countries, isLoading, error };
}
