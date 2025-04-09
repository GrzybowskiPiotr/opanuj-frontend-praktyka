interface SearchInputProps {
  searchCountry: string;
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchInput({
  searchCountry,
  setSearchCountry,
}: SearchInputProps) {
  return (
    <label
      htmlFor="searchCountry"
      className="block text-lg font-medium text-gray-300"
    >
      Country's name
      <br />
      <input
        type="text"
        className="my-4 rounded-lg border border-transparent px-4 py-2 text-base font-medium bg-gray-900 cursor-pointer transition-colors duration-200 hover:border-indigo-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-webkit-focus-ring-color"
        placeholder="Search by country's name..."
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
      <br />
    </label>
  );
}
