import '../styles/bookcard.scss';
// import {FaBookReader} from 'react-icons/fa';

import logo1 from '../assets/logo1.svg';

const BookCard = () => {
    return(
        <div className="container">
            {/* <FaBookReader size="36" color="#44337A"/> */}
            <img src={logo1} alt="Logo1" />
            <div>
                <h3>JavaScript: O Guia Definitivo</h3>
                <h4>David Flanagan</h4>
                <h5>1080 paginas</h5>
            </div>
        </div>
    )
}

export default BookCard;