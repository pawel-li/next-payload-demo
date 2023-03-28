import Link from 'next/link';
import React, { ElementType } from 'react';
import { useBackgroundColor } from '../BackgroundColor';

export type Props = {
  label?: string
  appearance?: 'default' | 'primary' | 'secondary'
  el?: 'button' | 'link' | 'a'
  onClick?: () => void
  href?: string
  newTab?: boolean
  className?: string
}

export const Button: React.FC<Props> = ({
  el = 'button',
  label,
  newTab,
  href,
  appearance,
  className: classNameFromProps
}) => {
  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  const className = [classNameFromProps].filter(Boolean).join(' ');

  const content = (
      <span className={`underline text-black`}>
        {label}
      </span>
  )

  if (el === 'link') {
    return (
      <Link 
        {...newTabProps}
        href={href || ''}
        className={className}
      >
        {content}
      </Link>
    )
  }

  const Element: ElementType = el;

  return (
    <Element
      href={href}
      className={className}
      {...newTabProps}
    >
      {content}
    </Element>
  )
}
