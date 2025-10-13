import type { ReactNode } from 'react';

type ButtonProps = {
  buttonType?: 'primary' | 'secondary';
  children: ReactNode;
};

const Button = ({ buttonType, children }: ButtonProps) => {
  return (
    <button
      className={`h-[54px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer  ${
        buttonType === 'secondary' ? 'opacity-[85%]' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
