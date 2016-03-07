# hacker-news-stream [![Build Status](https://travis-ci.org/joseluisq/hacker-news-stream.svg?branch=master)](https://travis-ci.org/joseluisq/hacker-news-stream)
> The Hacker News top stories but in [Streams](https://nodejs.org/api/stream.html).

## Install

```sh
$ npm install hacker-news-stream --save-dev
```

## Usage

```js
var hackerNews = require('hacker-news-stream');
var stream = hackerNews().getStory(11218732);

stream.on('data', function(res) {
  var story = JSON.parse(res);
  console.log(story);
});
```

Output:

```sh
$ node example/stream.js
{
  by: "schakraberty",
  descendants: 3,
  id: 11218732,
  kids: [11219282],
  score: 11,
  time: 1457029231,
  title: "How Duolingo got 110M users",
  type: "story",
  url: "https//www.techinasia.com/how-duolingo-got-110-million-users"
}
```

## Methods

### getStory(id)
Find one story by `id` and return a readable stream.

### getStories()
Find all top stories ids and return a readable stream.

## Contributions
[Pull requests](https://github.com/joseluisq/hacker-news-stream/pulls) and [issues](https://github.com/joseluisq/hacker-news-stream/issues) will be appreciated.

## License
MIT license

© 2016 [José Luis Quintana](http://git.io/joseluisq)
