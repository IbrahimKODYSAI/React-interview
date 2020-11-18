const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    img: 'https://upload.wikimedia.org/wikipedia/en/d/dd/OceansEightPoster.jpeg',
    isLiked: false,
    isDisliked: false
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    img: 'https://upload.wikimedia.org/wikipedia/en/6/65/Midnight_Sun_2017.jpg',
    isLiked: false,
    isDisliked: false
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    img: 'https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_2.jpg',
    isLiked: false,
    isDisliked: false
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    img: 'https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png',
    isLiked: false,
    isDisliked: false
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    img: 'https://upload.wikimedia.org/wikipedia/en/9/90/Creed_II_poster.png',
    isLiked: false,
    isDisliked: false
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
    isLiked: false,
    isDisliked: false
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
    isLiked: false,
    isDisliked: false
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    img: 'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg',
    isLiked: false,
    isDisliked: false
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    img: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
    isLiked: false,
    isDisliked: false
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    img: 'https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg',
    isLiked: false,
    isDisliked: false
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))