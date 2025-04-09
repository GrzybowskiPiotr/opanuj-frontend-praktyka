import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'es-toolkit';
interface SearchBarProps {
  filterType: string;
  setSearchTerm: (term: string) => void;
  searchTerm: string;
}

export function SearchBar({
  filterType,
  setSearchTerm,
  searchTerm: externalSearchTerm,
}: SearchBarProps) {
  const [localSearchTerm, setLocalSearchTerm] = useState(externalSearchTerm);

  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 500),
    []
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setLocalSearchTerm(newValue);
    debouncedSetSearchTerm(newValue);
  }

  useEffect(() => {
    setLocalSearchTerm(externalSearchTerm);
  }, [externalSearchTerm]);

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder={`Search by country's ${filterType}...`}
        value={localSearchTerm}
        className="p-2 my-4 mr-4 w-[250px]"
      />
    </>
  );
}
