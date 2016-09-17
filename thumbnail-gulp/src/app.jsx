var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
        
     thumbnailData:[
        {
            title: 'Show Courses',
            number: 12,
            header: 'Learn React',
            description: 'React is fantastic new library for making fast, dynamic pages. React is fantastic new library for making fast, dynamic pages.',
            imageUrl: 'http://formatjs.io/img/react.svg'
        },
        {
            title: 'Sent',
            number: 25,
            header: 'Learn Gulp',
            description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
            imageUrl: 'http://brunch.io/images/others/gulp.png'
        }
    ]
        
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));