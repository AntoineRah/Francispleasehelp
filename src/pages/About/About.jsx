import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your go-to destination for exploring and sharing your love of books! Dive into the world of literature and unleash your inner critic by reviewing your favorite reads. Whether it's a gripping mystery, a heartwarming romance, or a mind-bending thriller, share your insights and opinions with our vibrant community of book enthusiasts. But that's not all—BookHub is also your trusted companion for discovering new literary treasures. With our comprehensive search feature, you can easily look up books by title, author, genre, or keywords. Whether you're searching for a classic masterpiece or the latest release, let BookHub be your guide on your literary journey. Join us today and embark on an adventure through the pages of your next favorite book!"





</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
