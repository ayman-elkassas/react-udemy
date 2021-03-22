import React, { Fragment } from 'react';

function FragmentComp(props) {
    return (
        //* parent without appear in dom
        <Fragment>
            <h1>Fragment</h1>
        </Fragment>
    );
}

export default FragmentComp;