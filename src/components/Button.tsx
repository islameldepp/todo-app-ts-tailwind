import type { ReactNode } from 'react';

type ButtonProps = {
  onClick: () => Promise<void>;
  buttonType?: 'primary' | 'secondary';
  children: ReactNode;
};

const Button = ({ onClick, buttonType, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`h-[54px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer text-sm sm:text-base ${
        buttonType === 'secondary' ? 'opacity-[85%]' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
