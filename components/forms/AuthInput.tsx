import { InputHTMLAttributes } from "react";

interface InputProps {
  errors?: string[];
  name: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}
const AuthInput = ({
  errors = [],
  name,
  setState,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="px-3 py-4 rounded-md outline-none border dark:border-gray-700 dark:bg-[#161821]"
        name={name}
        onChange={(e) => setState(e.target.value)}
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
};

export default AuthInput;
