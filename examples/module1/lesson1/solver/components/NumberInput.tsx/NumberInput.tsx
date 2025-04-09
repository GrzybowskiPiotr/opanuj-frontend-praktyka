type inputPropsType = {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  additionalStyleClassName?: string;
};

export function NumberInput({
  value,
  onChange,
  additionalStyleClassName,
}: inputPropsType) {
  return (
    <input
      type="number"
      className={`rounded-md shadow-md p-4 ${additionalStyleClassName}`}
      value={value}
      onChange={onChange}
    />
  );
}
