import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  text: string;
  link?: string;
  color1?: string;
  color2?: string;
  textColor?: string;
  isSubmit?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  color1 = 'gray-100',
  color2 = 'brand-purple-600',
  textColor = 'brand-charcoal-800',
  isSubmit = false,
  onClick,
}) => {
  const button = (
    <button
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      className="relative w-fit rounded-full font-display text-label-small uppercase"
    >
      <div className={`absolute inset-x-0 h-full rounded-full bg-${color2}`} />
      <div
        className={`relative text-${textColor} transform rounded-full border-gray-500 bg-${color1} px-5 py-2 text-center transition duration-200 hover:-translate-y-1`}
      >
        {text}
      </div>
    </button>
  );

  return (
    <div>
      {!link && button}
      {!!link && <Link href={link}>{button}</Link>}
    </div>
  );
};

export default Button;
