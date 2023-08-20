import Button from "./Button";

interface InputProps {
  button?: string;
  placeholder: string;
  disabled?: boolean;
}

const Input = ({ button, placeholder, disabled = false }: InputProps) => {
  return (
    <div className="relative rounded-2xl border bg-white overflow-hidden">
      <input
        disabled={disabled}
        placeholder={placeholder}
        type="text"
        className="w-full py-2.5 px-4 focus-visible:outline-none"
      />

      {button && (
        <div className="absolute bottom-2 right-2">
          <Button size="small" title={button} />
        </div>
      )}
    </div>
  );
};

export default Input;
