var hyreq = require('hyperquest');

module.exports = function() {
  return {
    getStory: getStory,
    getStories: getStories
  };

  function apiUrl(url) {
    return 'https://hacker-news.firebaseio.com/v0' + url;
  }

  function getStories() {
    return hyreq(apiUrl('/topstories.json'));
  }

  function getStory(id) {
    return hyreq(apiUrl('/item/' + id.toString() + '.json'));
  }
};
