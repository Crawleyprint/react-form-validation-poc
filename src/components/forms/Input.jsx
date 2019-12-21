import React, { useState } from 'react';
import Error from './Error';
import classNames from 'classnames';

const Input = ({className, label, validityState, ...props}) => {
    const [pristine, setPristine] = useState(true);

    return <label>
        { label }
        <input 
            {...props} 
            onBlur={() => setPristine(false)} 
            className={classNames(className, {pristine})} 
        />
        { !pristine && <Error validityState={validityState} /> }
    </label>
};

export default Input;