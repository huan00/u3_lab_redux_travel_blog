import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  LoadComments,
  LoadLocations,
  LoadPosts
} from '../store/actions/PostAction'
import { connect } from 'react-redux'
import Comment from '../components/Comments'

const mapStateToProps = ({ postState }) => {
  return {
    postState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  }
}

const LikeButton = (props) => {
  return <button onClick={props.onClickLike}>Like</button>
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton)
