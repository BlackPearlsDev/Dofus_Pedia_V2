import { useEffect ,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../NavBar/Index';
import { useDispatch, useSelector } from 'react-redux';
import { setToggle } from '../../../store/slices/menu.slice';

function Header() {

    const dispatch = useDispatch();
    const { isToggle } = useSelector((state) => ({ ...state.menu }));

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });


    return (
        <header>
            {widthScreen > 767 && (
            <>
            <h1>Dofus Pedia</h1>
            </>
            )}

            <section className='sectionNav'>
                {widthScreen > 767 ? (
                    <NavBar />
                ) : (
                    <>
                    <button onClick={() => dispatch(setToggle(!isToggle))} className="btnNav"> 
                        {isToggle ? <FontAwesomeIcon icon={faCircleXmark}/> : <FontAwesomeIcon icon={faBars}/>}
                    </button>
                    {isToggle && <NavBar/>}
                    </>
                )}
            </section>
        </header>
    )
}

export default Header;

// <FontAwesomeIcon icon={faCircleXmark} />