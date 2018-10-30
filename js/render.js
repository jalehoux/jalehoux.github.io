var portfolioItems = [
  {
    img_thumbnail: 'img/portfolio/thumbnails/giffy.gif',
    img_fullsize: 'img/portfolio/fullsize/giffy.gif',
    category: 'Front End',
    name: 'Movie GIF Finder',
    description: 'Built with Bootstrap this simple web app allows you to search for movies and GIFS.',
    liveSite: 'https://jacoblehoux.com/giftastic/',
    repo: 'https://github.com/jalehoux/giftastic',
    tech: ['Bootstrap','AJAX','jQuery']
  },
  {
    img_thumbnail: 'img/portfolio/thumbnails/2.jpg',
    img_fullsize: 'img/portfolio/fullsize/2.jpg',
    category: 'Front End',
    name: 'Star Wars Word Guess Game',
    description: 'A Star Wars word guess game built with Bootstrap and jQuery.',
    liveSite: 'https://jacoblehoux.com/wordguessgame/',
    repo: 'https://jacoblehoux.com/wordguessgame/',
    tech: ['Bootstrap','jQuery']
  },
  {
    img_thumbnail: 'img/portfolio/thumbnails/3.jpg',
    img_fullsize: 'img/portfolio/fullsize/3.jpg',
    category: 'Fire Base',
    name: 'Weather 2DO It',
    description: 'My first group project this web app uses Fire Base and various API\'s to track tasks.', 
    liveSite: 'https://jlasc.github.io/ProjectUno/',
    repo: 'https://github.com/JLasc/ProjectUno',
    tech: ['Fire Base', 'User Authentication', 'Matieralize','AJAX']
  },
  {
    img_thumbnail: 'img/portfolio/thumbnails/4.jpg',
    img_fullsize: 'img/portfolio/fullsize/4.jpg',
    category: 'Back End',
    name: 'LIRI',
    description: 'Simple Node app that can return data in a shell about movies, songs, and bands.',
    liveSite: 'Still in progress',
    repo: 'https://github.com/jalehoux/liri',
    tech: ['Node']
  },
  {
    img_thumbnail: 'img/portfolio/thumbnails/5.jpg',
    img_fullsize: 'img/portfolio/fullsize/5.jpg',
    category: 'Fire Base',
    name: 'Train Scheduler',
    description:'This Fire Base backed app allows you to see upcoming trains based on user input.',
    liveSite: 'https://jacoblehoux.com/train_scheduler',
    repo: 'https://github.com/jalehoux/train_scheduler',
    tech: ['Fire Base', 'Bootstrap','Moment.js']
  },
  {
    img_thumbnail: 'img/portfolio/fullsize/Star_wars.PNG',
    img_fullsize: 'img/portfolio/fullsize/Star_wars.PNG',
    category: 'Front end',
    name: 'Star Wars Memory Game',
    description: 'This is a Star Wars based memory game built entirely in React.  Test your skills and show your love of Star Wars!',
    liveSite: 'https://starwarsclicky.herokuapp.com/',
    repo: 'https://github.com/jalehoux/clicky_game',
    tech: ['React, Heroku']
  }
]

portfolioItems.forEach(element => {
  var newProject = `<div class="col-lg-4 col-sm-6">
<a class="portfolio-box" href="${element.img_fullsize}" data-description="${element.description}" data-live="${element.liveSite}" data-repo="${element.repo}">
  <img class="img-fluid" src="${element.img_thumbnail}" alt="">
  <div class="portfolio-box-caption">
    <div class="portfolio-box-caption-content">
      <div class="project-category text-faded">
        ${element.category}
      </div>
      <div class="project-name">
        ${element.name}
      </div>
    </div>
  </div>
</a>
</div>`
  $('.popup-gallery').append(newProject);
});

