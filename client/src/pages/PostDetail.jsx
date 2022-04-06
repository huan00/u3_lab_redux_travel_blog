import Post from '../components/Post'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import {
  LoadComments,
  LoadLocations,
  LoadPosts
} from '../store/actions/PostAction'
import { connect } from 'react-redux'
import Comment from '../components/Comments'
import LikeButton from '../components/LikesButton'
import Client from '../services'

const mapStateToProps = ({ postState }) => {
  return {
    postState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts()),
    fetchComments: () => dispatch(LoadComments()),
    fetchLocations: () => dispatch(LoadLocations())
  }
}

const PostDetail = (props) => {
  console.log(props.postState)
  let { id } = useParams()

  useEffect(() => {
    props.fetchPosts()
    props.fetchComments()
    props.fetchLocations()
  }, [])

  const onSubmit = async (comm) => {
    const res = await Client.post(`/postComment/${id}`, comm)

    props.fetchPosts()
    props.fetchComments()
    props.fetchLocations()
  }

  const onClickLike = async () => {
    const res = await Client.post(`/likePost/${id}`, {})

    props.fetchPosts()
  }

  return (
    <div className="postPage">
      {props.postState.posts.map(
        (post) =>
          post._id === id && (
            <div key={post._id} className="postPageContent">
              <img src={post.image} alt="poster" />
              <div className="postPageDesc">
                <p>Description: {post.description}</p>
                {props.postState.locations.locations ? (
                  props.postState.locations.locations.map(
                    (loc) =>
                      post.location.includes(loc._id) && (
                        <>
                          <h3>Location:</h3>
                          <span key={loc._id}>
                            Name: {loc.name}
                            <br></br>
                            City: {loc.city}
                            <br></br>
                            Country: {loc.country}
                          </span>
                        </>
                      )
                  )
                ) : (
                  <></>
                )}
              </div>
              <div className="postPageComment">
                <h3>Comments:</h3>
                {props.postState.comments.comments ? (
                  props.postState.comments.comments.map(
                    (comm) =>
                      post.comments.includes(comm._id) && (
                        <p key={comm._id}>{comm.comment}</p>
                      )
                  )
                ) : (
                  <></>
                )}
              </div>
              <div className="postPageCreate">
                <Comment onSubmit={onSubmit} />
                <div className="postLike">
                  <span key={post._id}>{post.likes}</span>
                  <LikeButton onClickLike={onClickLike} />
                </div>
              </div>
            </div>
          )
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
