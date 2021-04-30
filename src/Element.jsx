import React, { useState } from 'react';


const Element = ( {element} ) => {

	const [show, setShow] = useState('show more');

	const showHandler = () => {
		show === 'show more' ? setShow('show less') : setShow('show more');
	}	


	return (
		<div className="element-container">			
			<h3>{element.name}</h3>			
			<button onClick={showHandler}>{show}</button>

			{
				show === 'show less'
				? 
				<div>
					<p>{element.stadium}</p>
								
				</div>
				: null
			}

						
		</div>
	);


}

export default Element;
