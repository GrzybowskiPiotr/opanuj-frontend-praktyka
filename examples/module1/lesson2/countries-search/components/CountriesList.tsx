import { CountryCard } from './CountryCard';
import type { Country } from '../types/types';
interface CountriesListProps {
  countries: Country[];
}
export function CountriesList({ countries }: CountriesListProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto">
      {countries.map((country: Country) => (
        <li key={country.name.common}>
          <CountryCard country={country} />
        </li>
      ))}
    </ul>
  );
}
