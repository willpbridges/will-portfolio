
module.exports = {
  pathPrefix: '/gatsby-starter-developer-blog',
  siteUrl: 'https://willbridgesgames.com',
  siteTitle: 'Will Bridges',
  siteDescription: 'Programmer and Game Designer',
  author: 'willbridges',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    games: '/games/',
    projects: '/projects/',
    blog: 'blog',
    about: '/about/'
  },
  social: {
    github: 'https://github.com/willpbridges',
    linkedin: 'https://www.linkedin.com/in/willpbridges/',
    rss: ''
  },
  tags: {
    frontpage: {
      description: "projects on my front page"
    },
    games: {
      description: "game projects"
    },
    projects: {
      description: "CS projects"
    },
    angular: {
      description: 'Angular is an open source web application platform.'
    },
    electron: {
      description: 'Electron is a framework for building cross-platform desktop applications with web technology.'
    },
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.'
    },
    laravel: {
      description: 'Laravel is a PHP framework for building web applications following the MVC pattern.'
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.'
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.'
    },
    sass: {
      description: 'Sass is a stable extension to classic CSS.'
    },
    typescript: {
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.'
    },
    react: {
      description: 'React is an open source JavaScript library used for designing user interfaces.'
    },
    vuejs: {
      name: 'Vue.js',
      description: 'Vue.js is a JavaScript framework for building interactive web applications.'
    }
  }
}