import React from 'react';

const Error = ({validityState}) => {
    if (!validityState) return null;
    const { validationMessage } = validityState;
    return validityState ? <span>{validationMessage}</span> : null;
}

export default Error;