var hackerNews = require('../');
var stream = hackerNews().getStory(11218732);

stream.on('data', function(res) {
  var story = JSON.parse(res);
  console.log(story);
});
