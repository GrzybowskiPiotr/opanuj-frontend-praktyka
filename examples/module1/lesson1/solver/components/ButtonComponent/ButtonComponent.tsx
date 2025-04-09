type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  jobTypeSymbol: string;
};

export function ButtonComponent({ onClick, jobTypeSymbol }: ButtonProps) {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {jobTypeSymbol}
    </button>
  );
}
