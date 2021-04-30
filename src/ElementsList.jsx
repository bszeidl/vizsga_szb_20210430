import React, { useState, useEffect } from 'react';
import LoadingMask from './LoadingMask';
import Element from './Element';
//import FreeWordSearcher from './FreeWordSearcher';
import {v4 as uuidv4} from 'uuid';

const ElementsList = () => {

	const [serverData, setServerData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	//const [search, setSearch] = useState(''); //szabadszavas keresőhöz
	//const [filteredData, setFilteredData] = useState([]); //szabadszavas keresőhöz
	

	useEffect(() => {
    fetch("/api/teams")
      .then((res) => res.json())
      .then((result) => {

				setServerData(result);

				setTimeout(function () {
					setIsLoaded(true);
				}, 2000);				
			
      },									

      	(error) => {
        	console.log(error);
        	setIsLoaded(true);
      	}

      );
			
  }, []);
	console.log(serverData);
	

	//szabdszavas kereső
	/*useEffect(() => 
	setFilteredData(serverData.filter((item) =>
				{return item.franchisePlayers.toLowerCase().includes(search.toLowerCase())
			? item : false}
		)), [search, serverData])*/



	return (
		<div className="elements-container">
			{/*<input type="text" placeholder="keresés" onChange={(event) => {setSearch(event.target.value)}}/>*/}
			
		{
			!isLoaded ?
			<LoadingMask />
			:
			serverData.map(element => <Element key = {uuidv4()} element = {element}/>)
		}

		</div>
	);
}

export default ElementsList;
