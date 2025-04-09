import type { FilterType } from '../types/types';
interface FilterOptionsProps {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<FilterType>>;
}

export function FilterOptions({
  filterType,
  setFilterType,
}: FilterOptionsProps) {
  return (
    <>
      <label htmlFor="filter-select" className="mx-4">
        Filter By:
      </label>
      <select
        id="filter-select"
        className="p-2 my-4"
        value={filterType}
        onChange={(e) => setFilterType(e.target.value as FilterType)}
      >
        <option value="name">Name</option>
        <option value="currency">Currency</option>
        <option value="language">Language</option>
        <option value="capital">Capital</option>
      </select>
    </>
  );
}
