import React, { useState } from 'react';

const IncreaseDecrease = (props) => {

    const [counter, setCounter] = useState(0);

    const inputHandler = (e) => {
        setCounter(e.target.value);

    };



    return (
        <div className="d-sm-flex ">
            <input className="form-control input-number" type="number" value={counter} min={0}
                onChange={inputHandler} onBlur={inputHandler}
                step={1} style={{ width: "5rem" }} />
        </div>
    );
}

export default IncreaseDecrease;