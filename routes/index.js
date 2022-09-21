var express = require('express');
var router = express.Router();

let currDate = new Date()
let cDay = currDate.getDate()
let cMonth = currDate.getMonth()
let cYear = currDate.getFullYear()
let messageDate = `Year ${cYear}, Month ${cMonth}, Day ${cDay}`
const messages = [
  {
  text: "Hi there!",
  user: "Amando",
  added: messageDate
  },
  {
  text: "Hello World!",
  user: "Charles",
  added: messageDate
  },
  {
    text: "Hello People!",
    user: "David",
    added: messageDate
    }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board!!', messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form',{title:'Create New Message'});
});

/*POST user messsages*/
router.post('/new',function(req,res,next){
  console.log(req.body)
  messages.push({text:req.body.message, user:req.body.user, added: messageDate})
  res.redirect('/')
})


module.exports = router;
