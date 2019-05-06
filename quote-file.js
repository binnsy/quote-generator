
const quotes = [
  'Dream Big!',
  'A rough sea never built a skilled sailor',
  'You can not stop the waves, but you can learn to surf',
  'Today is a good day to have a good day',
  'Build a dream and the dream will build you. - Robert H. Schuller',
  'Life begins at the end of your comfort zone. - Neale Donald Walsch',
  'You are never too old to set another goal or to dream a new dream. - Les Brown',
  'Dwell on the beauty of life. Watch the stars, and see yourself running with them. - Marcus Aurelius',
  'Do what you love, not what you think you are supposed to do. - Unknown',
  'Our dreams can come true if we have the courage to pursue them. - Walt Disney',
  'This is your life. Do what you love, and do it often. - Holstee Manifesto',
  'You never know how strong you are, until being strong is your only choice. - Bob Marley',
  'Be focused. Be determined. Be hopeful. Be empowered. - Michelle Obama'
]

function quote () {
const randomNum = Math.floor(Math.random() * (quotes.length))
  document.getElementById('displayQuote').innerHTML = quotes[randomNum]
}

const mantras = [
  'Your potential is unlimited.',
  'Be still.',
  'Action conquers fear.',
  'Trust your instincts.',
  'See the good.',
  'Stay hungry; stay foolish.',
  'Be fearless.',
  'You got this!',
  'Enjoy the present moment.',
  'Never give up!',
  'Live life.',
  'You can and you will.',
  'Believe in yourself.'
]

function mantra () {
const randomNum = Math.floor(Math.random() * (mantras.length))
  document.getElementById('displayMantra').innerHTML = mantras[randomNum]
}
