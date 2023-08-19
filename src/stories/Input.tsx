import Button from "./Button";

interface InputProps {
  button?: string;
}

const Input = ({ button }: InputProps) => {
  return (
    <div className="relative w-fit">
      <input
        type="text"
        className="rounded-2xl border py-2.5 px-4 focus-visible:outline-none"
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
