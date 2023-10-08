import React from 'react';
import NavRight from "./NavRight";
import NavLeft from './NavLeft';

const Header = () => {
    return (
      <div className=" h-32 flex items-center shadow-md">
        <NavRight className='w-4/5' />
        <NavLeft className='w-1/5'/>
      </div>
    );
};

export default Header;