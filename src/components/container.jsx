import React from 'react';
import cn from 'classnames';

function Container({ className = '', ...rest }) {
  return (
    <div className={cn(className, 'px-6 max-w-[1156px] w-full')} {...rest} />
  );
}

export default Container;
