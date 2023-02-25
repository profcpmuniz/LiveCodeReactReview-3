import React, {useState} from "react";
import {Footer} from "./Footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import nemo from "../../img/finding-nemo-fish-tiger-shark-animals-wallpaper.jpg";

import { Header } from "./Header.jsx";

//create your first component
const Home = () => {
	const [imageSelected, setImageSeleted] = useState(rigoImage)
	console.log(imageSelected)
	return (
		<div className="text-center">
			<h1>Choose your image</h1>
			<button onClick={()=> setImageSeleted(rigoImage)}>Rigo</button> or <button onClick={()=> setImageSeleted(nemo)}>Nemo</button>
			<Header image={imageSelected} />
				
			
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<Footer data="Academy"  />
		</div>
	);
};

export default Home;
