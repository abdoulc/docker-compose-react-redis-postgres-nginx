import React from 'react';
import {Link} from 'react-router-dom';

export default ()=>{
    return(
        <div>
            Custom page 
            <Link to="/" >Go back to home</Link>
        </div>
    );
};
