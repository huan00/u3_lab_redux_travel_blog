const db = require('../db')
const { Location, Comment, Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const location1 = await new Location({
    name: 'Esperanza Resort',
    city: 'Cabo San Lucas',
    country: 'Mexico',
    pics: [
      'https://cdn.kiwicollection.com/media/property/PR000100/xl/000100-08-esperanza_1576.jpg?cb=1520012955'
    ]
  })
  location1.save()

  const location2 = await new Location({
    name: 'Fountainebleau',
    city: 'Miami, FL',
    country: 'United States',
    pics: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f6/17/f0/miami-beach.jpg?w=900&h=-1&s=1'
    ]
  })

  location2.save()
  const location3 = await new Location({
    name: 'Caesars Palace',
    city: 'Las Vegas, NV',
    country: 'United States',
    pics: [
      'https://travelnevada.com/wp-content/uploads/2020/10/Caesars_Featured-scaled.jpg'
    ]
  })

  location3.save()
  const location4 = await new Location({
    name: 'The Cosmopolitan',
    city: 'Las Vegas, NV',
    country: 'United States',
    pics: [
      'https://media.lasvegassun.com/media/img/photos/2019/01/16/20190112_strip_aerials_2_t653.jpg?214bc4f9d9bd7c08c7d0f6599bb3328710e01e7b'
    ]
  })

  location4.save()
  const location5 = await new Location({
    name: 'Miami Marriott',
    city: 'Miami, FL',
    country: 'United States',
    pics: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/8e/13/fc/exterior.jpg?w=900&h=-1&s=1'
    ]
  })

  location5.save()
  const comment1 = await new Comment({
    name: 'Karen',
    comment: '3/10 stars, management was rude',
    likes: 0
  })

  comment1.save()
  const comment2 = await new Comment({
    name: 'Ed',
    comment:
      'I had a great time, rooms were clean, food was cheap, cant complain',
    likes: 0
  })

  comment2.save()
  const comment3 = await new Comment({
    name: 'Kyle',
    comment:
      'Out of all the places i have gone to this year, this by far has to be the best. would recommend',
    likes: 0
  })

  comment3.save()
  const comment4 = await new Comment({
    name: 'Bryan',
    comment:
      'This place is great, food is great, service is great. will be back soon!',
    likes: 0
  })

  comment4.save()
  const comment5 = await new Comment({
    name: 'Thommas',
    comment: 'This place is alright, dinner was overpriced',
    likes: 0
  })
  comment5.save()

  const posts = [
    {
      image:
        'https://image.shutterstock.com/image-photo/young-woman-relaxing-on-beach-260nw-769031299.jpg',
      description: 'Loved the area and the food! had a blast!',
      location: location1._id,
      likes: 0,
      comments: [comment1._id]
    },
    {
      image:
        'https://www.incimages.com/uploaded_files/image/1920x1080/getty_167167350_9706479704500183_94071.jpg',
      description: 'The weather is amazing! cant wwait to come back.',
      location: location2._id,
      likes: 0,
      comments: [comment2._id]
    },

    {
      image:
        'https://i.insider.com/5b071d801ae6621f008b4676?width=990&format=jpeg',
      description: 'The water is crystal clear, got sunburned but its okay!',
      location: location3._id,
      likes: 0,
      comments: [comment3._id]
    },

    {
      image:
        'https://www.studyfinds.org/wp-content/uploads/2021/01/pexels-artem-beliaikin-452738-500x320.jpg',
      description: 'The family had a great time. 10/10',
      location: location3._id,
      likes: 0,
      comments: [comment4._id]
    },
    {
      image:
        'https://www.marriottvacationclub.com/wp-content/images/homepage-carousel/beach-family.jpg',
      description: 'Had a great time at the beach, cant wait to come back',
      location: location5._id,
      likes: 0,
      comments: [comment5._id]
    }
  ]
  await Post.insertMany(posts)
  console.log('Created products!')
}
const run = async () => {
  await main()
  db.close()
}

run()
