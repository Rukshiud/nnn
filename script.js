// Add your actual image paths here
const posters = [
  '1350907.png',
  '2807374.jpg',
  '2807413.jpg',
  '2807331.jpg',
  '1370335.png',
  '1350907.png'
];

const leftPoster = document.querySelector('.left-poster');
const rightPoster = document.querySelector('.right-poster');

// Set initial posters randomly
function getRandomPoster() {
  return posters[Math.floor(Math.random() * posters.length)];
}

function updateLeftPoster() {
  leftPoster.style.backgroundImage = `url('${getRandomPoster()}')`;
}

function updateRightPoster() {
  rightPoster.style.backgroundImage = `url('${getRandomPoster()}')`;
}

// Initialize with random images
updateLeftPoster();
updateRightPoster();

// Change intervals
setInterval(updateLeftPoster, 3000); // 3 seconds
setInterval(updateRightPoster, 4000); // 4 seconds

// Mobile image alternation logic
function isMobile() {
  return window.innerWidth <= 768;
}

if (isMobile()) {
  // Show only one poster, change its background periodically
  const mobilePoster = leftPoster;
  rightPoster.style.display = "none";
  setInterval(() => {
    mobilePoster.style.backgroundImage = `url('${getRandomPoster()}')`;
  }, 3000);
}

