import Client from './'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/getPosts')

    console.log(res.data.posts)
    return res.data.posts
  } catch (error) {
    throw error
  }
}

export const GetComments = async () => {
  try {
    const res = await Client.get('/getComments')

    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetLocations = async () => {
  try {
    const res = await Client.get('/getLocations')

    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddReview = async (pushData) => {
  try {
    const res = await Client.post('/postreview', pushData)
  } catch (error) {
    throw error
  }
}
