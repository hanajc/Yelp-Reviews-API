var express = require('express');
var axios = require('axios');

var router = express.Router();

/* GET reviews listing. */
router.get('/', async (req, res, next) => {
  let url = 'https://api.yelp.com/v3/businesses/4HG6PBAnnam6RfgrHqMXPw/reviews'
  var reviews = await axios.get(url).then(response => { return response.data.reviews })
  var finalReviews = reviews.map(review => {
    return {
      'name': review.user.name,
      'image_url': review.user.image_url,
      'rating': review.rating,
      'review_content': review.text
    }
  })

  res.send(finalReviews);
});

module.exports = router;
