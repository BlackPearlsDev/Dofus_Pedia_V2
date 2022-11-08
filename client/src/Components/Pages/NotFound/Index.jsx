import { Link }  from   'react-router-dom' ;
import image404 from '../../../assets/img/error-404.png';

function NotFound() {
    return (
        <main>
            <section className="mainContent">
                <article className='article404'>
                    <img src={image404} alt="" />
                    <h3>Tous les chemins mènent au monde des douze...</h3>
                    <h4>sauf celui-là !</h4>

                    <Link to="/">Retour à l'accueil</Link>
                </article>
            </section>
        </main>
    )
}

export default NotFound;