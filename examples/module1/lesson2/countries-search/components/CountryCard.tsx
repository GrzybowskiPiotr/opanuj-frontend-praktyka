import type { Country } from '../types/types';

interface CountrieCardProps {
  country: Country;
}

export function CountryCard({ country }: CountrieCardProps) {
  return (
    <article className="border border-gray-300 rounded p-2 w-full min-h-[270px] flex flex-col justify-center items-start">
      <img
        src={country.flags?.svg}
        alt={`${country.name.common} flag`}
        className="w-40 h-20 rounded p-2 "
      />
      <h2
        data-testid="country-name"
        className="text-xl font-semibold mb-2 py-2 "
      >
        {country.name.common}
      </h2>
      <p className="text-gray-600">
        🏙️ <span>{country.capital}</span>
      </p>
      {country.languages && (
        <p className="text-gray-600">🗣️ {Object.keys(country.languages)[0]}</p>
      )}
      {country.currencies && (
        <p className="text-gray-600">
          💰 {Object.values(country.currencies)[0].name}(
          {Object.keys(country.currencies)[0]})
        </p>
      )}

      {country.population && (
        <p data-testid="country-population" className="text-gray-600">
          🧑‍🧑‍🧒‍🧒 {country.population.toLocaleString()}
        </p>
      )}
    </article>
  );
}
