import { useState } from 'react'
import { connect } from 'react-redux'
import { PushReview } from '../store/actions/PostAction'
import { useNavigate } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    postState: state.postState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushPost: (pushData) => dispatch(PushReview(pushData))
  }
}

const AddReview = (props) => {
  const [post, setPost] = useState({
    image: '',
    description: '',
    location: '624d902e374bc7d0b7331141',
    comments: ['624d902e374bc7d0b7331146'],
    likes: 0
  })

  const [comment, setComment] = useState({
    comment: ''
  })

  const [location, setLocation] = useState({
    name: '',
    city: '',
    country: ''
  })
  let pushData = [{ ...post }, { ...location }, { ...comment }]
  let navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    props.pushPost(pushData)

    navigate('/')
  }
  console.log(post)
  return (
    <div className="formCont">
      <form onSubmit={onSubmit}>
        <label htmlFor="image">Image</label>
        <input
          required
          onChange={(e) => setPost({ ...post, image: e.target.value })}
          type="text"
          name="image"
          id="imag"
        />
        <label htmlFor="desc">Description</label>
        <input
          required
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          type="text"
          name="desc"
          id="desc"
        />
        <section>
          <label htmlFor="name">Location Name:</label>
          <input
            required
            onChange={(e) => setLocation({ ...location, name: e.target.value })}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="city">City</label>
          <input
            required
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
            type="text"
            name="city"
            id="city"
          />
          <label htmlFor="country">Country</label>
          <input
            required
            onChange={(e) =>
              setLocation({ ...location, country: e.target.value })
            }
            type="text"
            name="country"
            id="country"
          />
        </section>
        <label htmlFor="comment">Comments</label>
        <input
          required
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          type="text"
          name="comment"
          id="comment"
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview)
