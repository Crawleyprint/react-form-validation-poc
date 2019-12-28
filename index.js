(function () {
    const $ = query => document.querySelectorAll(query);
    const form = $('form')[0];
    form.addEventListener('submit', event => {
        event.preventDefault();
        const isValid = form.checkValidity();
        const validityObject = [].slice.call(form.elements).map(element => {
            if (element.type === 'email' && element.validity.valid) {
                if (!/\.[a-zA-Z]{2,}$/.test(element.value)) {
                    element.setCustomValidity('Gimme a real email!')
                }
            }
            return Object.assign(
                {}, 
                { id: element.getAttribute('id') }, 
                element.validity, 
                { errorMsg: element.validationMessage }
        );
    });
        if (!isValid) {
            $('#error-dump')[0].innerHTML = JSON.stringify(validityObject, null, 2);
            return false;
        }

        $('#error-dump')[0].innerHTML = 'All good!';
        
    })
})();