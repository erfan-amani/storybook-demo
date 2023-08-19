type Size = "small" | "large";

interface ButtonType {
  title: string;
  size?: Size;
  isActive?: boolean;
  disabled?: boolean;
}

const getSizeClasses = (size?: Size) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5 font text-sm";
    }
    case "large": {
      return "px-6 py-3 text-lg";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const Button = ({ title, disabled = false, size, isActive }: ButtonType) => {
  const sizeClasses = getSizeClasses(size);

  return (
    <button
      disabled={disabled}
      className={`${sizeClasses} rounded-full ${
        isActive ? "bg-indigo-700 text-white" : "bg-slate-300"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
