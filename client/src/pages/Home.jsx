import Comments from '../components/Comments'
import LikeButton from '../components/LikesButton'
import '../styles/Home.css'
import Post from '../components/Post'

const Home = () => {
  return (
    <div>
      <div className="banner">
        <h3>Travel</h3>
      </div>
      <div className="mainContent">
        <Post />
      </div>
    </div>
  )
}

export default Home
