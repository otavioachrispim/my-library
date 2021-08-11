import BookCard from "./BookCard";
import '../styles/home.scss';

import logo from '../assets/logo.svg';

const Home = () => {
    return(
        <section className="library-container">
                <img src={logo} alt="Logo" />
                <header>
                    <h1>My Library</h1>
                    <button>Sign In</button>
                </header>
                <main>
                    <div className="form-container">
                        <h1>Online Library</h1>
                        <h2>Add your new book</h2>
                        <form>
                            <div>
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Author"/>
                                <input type="text" placeholder="Pages"/>
                            </div>
                            <button type="submit">Register</button>
                        </form>
                        <div className="books-container">                      
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                        </div>  
                    </div>                   
                </main>
        </section>
    )
}

export default Home;