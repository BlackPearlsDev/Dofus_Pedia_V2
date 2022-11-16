import img1 from '../../../assets/img/learnDofus/screen1.jpg';
import img2 from '../../../assets/img/learnDofus/screen2.jpg';
import img3 from '../../../assets/img/learnDofus/screen3.jpg';
import img4 from '../../../assets/img/learnDofus/screen4.jpg';
import img5 from '../../../assets/img/learnDofus/screen5.jpg';
import img6 from '../../../assets/img/learnDofus/screen6.jpg';

function LearnDofus() {
    return (
        <main>
            <section className="mainContent">
                <h2>Comprendre l'univers de Dofus</h2>

                <article className='articleLearnDofus'>
                    <h3 className='titleLearnDofus'>Qu'est-ce que Dofus ?</h3>

                    <p><strong>Dofus</strong> est un jeu de rôle en ligne massivement multijoueur <strong>(MMORPG)</strong> français développé et édité par Ankama puis par sa filiale <strong>Ankama Games</strong> à sa création en 2004.
                    Créé au départ par 3 anciens développeurs web, ils s'orientent vers le jeu vidéo en 2002 . Le jeu est sorti en 2004 et est un succès immédiat.</p>

                    <p>Le jeu propose un univers riche dans lequel le joueur a le choix entre <strong>12 classes de personnages jouables</strong> et entièrement personnalisables. Le but est de progresser à travers ce monde, monter en niveau et gagner un maximum d'or et d'équipements pour s'améliorer.</p>

                    <p>Le jeu existe également dans une version plus récente mais Dofus Pedia ne traite que de sa <strong>version mythique de 2009</strong>, il reprend ses éléments et informations ainsi que sa direction artistique, un <strong>style simple et très épuré</strong>.</p>

                    <h3 className='titleLearnDofus'>Le jeu en image</h3>
                    <div className='imgLearnDofus'>
                        <img src={img1} alt="Le village d'Amakna" />
                        <img src={img2} alt="Le port de Madrestam" />
                        <img src={img3} alt="Un combat dans l'arène de Bonta" />
                        <img src={img4} alt="Un combat contre le Chêne Mou" />
                        <img src={img5} alt="La place marchande d'Amakna" />
                        <img src={img6} alt="L'île de Nowel" />
                    </div>
                </article>
            </section>
        </main>
    )
}

export default LearnDofus;