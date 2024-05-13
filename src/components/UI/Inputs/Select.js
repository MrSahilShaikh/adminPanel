export const SelectInput = ({ label, options }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-neutral-500 font-semibold">{label}</label>
      <select className="p-2 rounded-md bordr border-blue-400 outline outline-blue-400 sm:w-1/2 ">
        {options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
