var test = require('tape');
var hackerNews = require('./');

var storyId = 11218732;
var stream = hackerNews().getStory(storyId);

test('testing', function(t) {
  t.plan(3);

  stream.on('data', function(res) {
    var story = JSON.parse(res);

    t.ok(story, '`story` object should be ok');
    t.ok(story.id, '`story.id` should be ok');
    t.equal(story.id, storyId, '`story.id` should be equal to `storyId`');
  });
});
