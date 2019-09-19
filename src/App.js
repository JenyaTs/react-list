import React, { useState } from 'react';
import Item from './Item';

function App() {
	const [state, setState] = useState([
		'string',
		'number',
		'object',
		'array',
		'null',
		'undefined',
		'boolean',
		'symbol',
		'function'
	]);

	const list = state.map((el, idx) => {
		return (
			<Item 
				fullState={state} 
				updateState={setState} 
				key={idx} 
				index={idx}
				el={el}
			/>
		)
		
	});

    return (
		<div className="App">
			<ul>
				{list}
			</ul>
		</div>
    );
}

export default App;
