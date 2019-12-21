import React, {useState} from 'react';
import classNames from 'classnames';
import Error from './Error';

const Select = ({validityState, className, label, children, onChange, ...props}) => {
    const [pristine, setPristine] = useState(true);
    return <label>
        <select 
            {...props} 
            onBlur={() => { setPristine(false) } } 
            onChange={event => {
                console.log('event');
                setPristine(false);
                onChange && onChange(event);
            }}
            className={classNames(className, { pristine })}
        >{children}</select>
        { !pristine && <Error validityState={validityState} /> }
    </label>
}

export default Select;