'use client'
import React, { ReactNode } from 'react';

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  id?: string;
  labels?: {
    error?: string;
    label?: string;
  };
  variant?: 'checkbox' | 'list';
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className = '',
  id,
  labels = {},
  variant,
}) => {
  const generatedId = React.useRef(id || `button-group-${Math.random().toString(36).substr(2, 9)}`).current;

  // Apply base styling and variant-specific styling using Tailwind CSS
  const baseStyle = 'flex items-center space-x-2';
  const checkboxGroupStyle = 'flex flex-wrap';
  const listGroupStyle = 'list-none flex flex-col space-y-2';

  // Determine the appropriate styling based on the variant
  const componentStyle = variant === 'checkbox' ? `${checkboxGroupStyle} ${className}` : variant === 'list' ? `${listGroupStyle} ${className}` : `${baseStyle} ${className}`;

  // Conditionally render the component or wrap it in a fieldset if labels are used
  let component = variant === 'list' ? (
    <ul className={componentStyle} id={generatedId}>
      {React.Children.map(children, (child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  ) : (
    <div className={componentStyle} id={generatedId} role={variant !== 'list' ? 'group' : undefined}>
      {children}
    </div>
  );

  if (variant === 'checkbox' || labels?.label) {
    component = (
      <fieldset className={`p-4 rounded-md ${labels.error ? 'border border-red-500' : 'border border-gray-200'} ${className}`}>
        {labels.label && (
          <legend className="text-base font-semibold mb-2">
            {labels.label}
          </legend>
        )}
        <div className="form-element__control">
          {component}
          {labels.error && (
            <div className="text-red-500 text-sm mt-2" id={`button-group-error-${generatedId}`}>
              {labels.error}
            </div>
          )}
        </div>
      </fieldset>
    );
  }

  return component;
};

export default ButtonGroup;
