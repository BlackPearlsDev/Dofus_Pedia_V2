import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <p><a href="https://www.dofus.com/fr/dofus-retro" target={'_blank'} rel="noreferrer">Dofus</a> est un MMORPG édité par <a href="https://www.ankama.com/fr" target={'_blank'} rel="noreferrer">Ankama</a>. Ce site n'est pas affilié à Ankama.</p>
            <p>Un peu perdu ? Besoin de <Link to="/learnDofus" className='learnDofus'>bien comprendre Dofus</Link> ?</p>
            <p>Développé par <a href="https://github.com/BlackPearlsDev" target={'_blank'} rel="noreferrer">Black Pearl</a>.</p>
        </footer>
    )
}

export default Footer