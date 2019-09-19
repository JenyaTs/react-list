import React, { useState } from 'react';

function Item(props) {
	const [state, setState] = useState(false);
    const [value, setValue] = useState('');   
    const {fullState, updateState, el, index} = props; 
    
    if (state) {
        return (
            <li>
                <input value={value} type="text" onChange={(ev) => {
                    setValue(ev.target.value);
                }}/>
                <button onClick={() => {
                    setState(!state);

                    if (value) {
                        let newState = fullState.slice();
                        newState.splice(index, 1, value);
                        updateState(newState);
                        setValue('');
                    }
                }}>Ok</button>
                <button onClick={() => {
                    setState(!state);
                    
                    if (value) {
                        setValue('');
                    }
                }}>Not Ok</button>
            </li>
        );
    }

    return (
		<li onDoubleClick={()=>{setState(!state)}}>{el}</li>
    );
}

export default Item;
