import React from 'react';
import { Link } from 'react-router-dom';

const DetailsButton = (props) => {


    onclick = () => {

    }

    if (props.viewMode) {
        return (
            <Link to={`/${props.id}`} style={{ color: "white" }} className="text-decoration-none">
                <button className="btn btn-secondary"
                    onClick={onclick} >
                    Details
                </button>
            </Link>);
    }
    else return (<> </>);


}
export default DetailsButton;