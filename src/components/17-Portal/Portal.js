import ReactDOM from 'react-dom'

//* can make it in any render() function

function Portal(props) {
    return ReactDOM.createPortal (
        <div>
            Portal Demo
        </div>,
        document.getElementById("portal")
    );
}

export default Portal;