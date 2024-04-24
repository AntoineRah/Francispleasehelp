import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to BookHub, your go-to destination for exploring and sharing your love of books!  Whether it's a gripping mystery, a heartwarming romance, or a mind-bending thriller, share your insights and opinions with our vibrant community of book enthusiasts. But that's not all—BookHub is also your trusted companion for discovering new literary treasures. With our comprehensive search feature, you can easily look up books by title, author, genre, or keywords. Whether you're searching for a classic masterpiece or the latest release, let BookHub be your guide on your literary journey. Join us today and embark on an adventure through the pages of your next favorite book!"</p>
                   <SearchForm />
            </div>
            
        </header>
    </div>
  )
}

export default Header