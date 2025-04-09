import type { SortOrder } from '../types/types';
interface SortSelectProps {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

export function SortSelect({ sortOrder, setSortOrder }: SortSelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder);
  };
  return (
    <>
      <label className="mx-4" htmlFor="sort-select">
        Sort By:
      </label>
      <select
        id="sort-select"
        onChange={handleChange}
        className="p-2"
        value={sortOrder}
      >
        <option value="alphabetical">alphabetical</option>
        <option value="population">population</option>
      </select>
    </>
  );
}
