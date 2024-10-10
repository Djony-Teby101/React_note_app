import React from 'react';

const Header = ({handleToggleDark}) => {
    return (
        <div className='header'>
         <h1>Notes</h1> 
         <button className='save'
            onClick={()=>
                handleToggleDark(
                    (toggleDark)=>!toggleDark,
                    
                )
                
            }
         >Toggle Mode</button>
        </div>
    );
}

export default Header;
