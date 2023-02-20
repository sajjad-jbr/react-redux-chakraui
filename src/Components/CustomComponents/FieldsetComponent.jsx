import React from 'react';

function FieldsetComponent({title = "", children, ...props}) {
    return (
        <fieldset style={{width: '100%', borderRadius: 10, border: '1px solid #cbcbcb', padding: '10px'}}>
            <legend>{title}</legend>
            {children}
        </fieldset>
    );
}

export default FieldsetComponent;
