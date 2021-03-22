import React from 'react';

function MemoComp(props) {
    console.log("Memo Component");
    return (
        <div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default React.memo(MemoComp);