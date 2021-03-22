import React from 'react'
//ref in stateless component
const FRInput = React.forwardRef((props, ref) => {
	return (
		<div>
            <input type="text" ref={ref} />
		</div>
	)
})

export default FRInput