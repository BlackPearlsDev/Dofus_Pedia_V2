// import serverHS from '../assets/images/server-down.png';

function Error() {
	return (
		<main className="mainContent txtCenter">
			<h2 className='txtBlue'>Le serveur est actuellement éteint, merci de revenir plus tard.</h2>
			{/* <img src={serverHS} alt="serveur down" className='imgServerDown'/> */}

			<p className='txtServerDown'>Nous faisons le maximum pour rendre nos services de nouveau utilisables, merci de votre compréhension.</p>
		</main>
	)
}

export default Error;