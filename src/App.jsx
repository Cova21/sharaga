import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const isAdult = !true;
	let text;

  if (isAdult) {
		text = <p>18</p>;
	}else{
    text = <p>-18</p>;
  }

	return <div>
    {text}
	</div>;
  // 26 урок
}

export default App
