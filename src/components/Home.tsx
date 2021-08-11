import BookCard from "./BookCard";
import '../styles/home.scss';

const Home = () => {
    return(
        <section className="library-container">
                <header>
                    <h1>My Library</h1>
                    <button>Sign In</button>
                </header>
                <main>
                    <div>
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
                    </div>
                    <div>
                        <BookCard />
                    </div>
                </main>
        </section>
    )
}

export default Home;