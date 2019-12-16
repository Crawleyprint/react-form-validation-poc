import React, {useState, useRef, useEffect} from 'react';

const Form = ({onSubmit, onReset, reportErrors, children, ...props}) => {
    const theForm = useRef();
    const [isDisabled, setDisabled] = useState(false);
    const disableForm = (event) => {
        if (!theForm.current.checkValidity()) {
            setDisabled(true);
            return reportErrors(
                []
                    .slice
                    .call(theForm.current.elements)
                    .reduce((all, element) => {
                        const name = element.getAttribute('name');
                        const returnValidity = {}
                        const validity = element.validity;
                        for (const reason in validity) {
                            returnValidity[reason] = validity[reason];
                        }
                        return {...all, [name]: returnValidity};
                    }, {})
            );
        }
        setDisabled(false);
        reportErrors({})

    }
    useEffect(disableForm, []);
    return (
        <form 
            ref={theForm} 
            onSubmit={onSubmit} 
            onChange={disableForm} 
            onReset={onReset} 
            {...props} noValidate
        >
            {children}
            <footer>
                <button type="reset">Cancel</button>
                <button disabled={isDisabled} type="submit">Submit</button>
            </footer>
        </form>
    )
}

export default Form;