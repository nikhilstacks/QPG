//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const homeStartingContent ="all generated questions";
const aboutContent ="This is a website created by nikhilstacks to generate question paper, An easy way to generate question papers so that the user have more efficient way to create question papers.";
const contactContent = "contact us on gmail- nikhilstacks@gmail.com";
let data = {};
const app = express();

mongoose.connect(
  "mongodb+srv://nikhilstacks:test123@cluster0.rzizx.mongodb.net/blogDB?retryWrites=true&w=majority"
);

const postSchema = {
  code: String,
  title: String,
  body: String,
  marks: Number
};

const Post = mongoose.model("Post", postSchema);

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.get("/", function (req, res) {
  Post.find({}, function (err, foundPosts) {
    res.render("home", {
      homeContent: homeStartingContent,
      homePosts: foundPosts,
    });
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    aboutContent: aboutContent,
  });
});

app.get("/paper", function (req, res) {
  res.render("paper", {
    data: data,
  });
});


app.get("/view", function (req, res) {
  res.render("questionview");
});


app.get("/contact", function (req, res) {
  res.render("contact", {
    contactContent: contactContent,
  });
});



app.post("/generator", function (req, res) {
  const generate = {
    code: req.body.generateCode,
    award: req.body.generateAward
  }
  const random = Math.floor(Math.random() * 4);
  if(generate.award == 10 && generate.code == 'eng'){
  if(random == 1){
      Post.find({marks: 1, code: 'eng'}, null, {limit:10}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'eng'}, null, {limit:2}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 3){
      Post.find({marks: 2, code: 'eng'}, null, {limit:5}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }
  if(generate.award == 10 && generate.code == 'sci'){
  if(random == 2){
      Post.find({marks: 1, code: 'sci'}, null, {limit:10}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'sci'}, null, {limit:2}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }else if(random == 3){
      Post.find({marks: 2, code: 'sci'}, null, {limit:5}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }
  if(generate.award == 10 && generate.code == 'math'){
  if(random == 2){
      Post.find({marks: 1, code: 'math'}, null, {limit:10}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'math'}, null, {limit:2}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }else if(random == 3){
      Post.find({marks: 2, code: 'math'}, null, {limit:5}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }if(generate.award == 20 && generate.code == 'eng'){
  if(random == 1){
      Post.find({marks: 1, code: 'eng'}, null, {limit:20}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'eng'}, null, {limit:4}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 3){
      Post.find({marks: 2, code: 'eng'}, null, {limit:10}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }
  if(generate.award == 20 && generate.code == 'sci'){
  if(random == 1){
      Post.find({marks: 1, code: 'sci'}, null, {limit:20}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'sci'}, null, {limit:4}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }else if(random == 3){
      Post.find({marks: 2, code: 'sci'}, null, {limit:10}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }
  if(generate.award == 20 && generate.code == 'math'){
  if(random == 1){
      Post.find({marks: 1, code: 'math'}, null, {limit:20}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'math'}, null, {limit:4}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }else if(random == 3){
      Post.find({marks: 2, code: 'math'}, null, {limit:10}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }if(generate.award == 40 && generate.code == 'eng'){
  if(random == 1){
      Post.find({marks: 1, code: 'eng'}, null, {limit:40}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'eng'}, null, {limit:8}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 3){
      Post.find({marks: 2, code: 'eng'}, null, {limit:20}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }
  if(generate.award == 40 && generate.code == 'sci'){
  if(random == 1){
      Post.find({marks: 1, code: 'sci'}, null, {limit:40}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'sci'}, null, {limit:8}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }else if(random == 3){
      Post.find({marks: 2, code: 'sci'}, null, {limit:20}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }
  if(generate.award == 40 && generate.code == 'math'){
  if(random == 1){
      Post.find({marks: 1, code: 'math'}, null, {limit:40}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    } else if(random == 2){
      Post.find({marks: 5, code: 'math'}, null, {limit:8}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }else if(random == 3){
      Post.find({marks: 2, code: 'math'}, null, {limit:20}, function (err, foundPosts) {
        data = foundPosts
        res.redirect('/paper')
      });
    }
  }
  });

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.get("/generator", function (req, res) {
  res.render("generator");
});

app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findOne(
    {
      _id: requestedPostId,
    },
    function (err, foundPosts) {
      res.render("post", {
        title: foundPosts.title,

        content: foundPosts.body,
      });
    }
  );
});

app.post("/compose", function (req, res) {
  const post = new Post({
    code: req.body.composeCode,
    title: req.body.composeTitle,
    body: req.body.composeBody,
    marks: req.body.composeMarks
  });
  post.save(function (err) {
    if (!err) {
      res.redirect("/view");
    }
  });
});

app.post("/viewQuestions", (req, res) => {
  // for odering of data according to coloumssss....
  let order = req.body.order[0];
  let sort ={mark : 1};
  if (order.column == "0") {
    if(order.dir == "asc") { sort = {marks: 1} }
    else {
      sort= {marks: -1}
    }
  }
  ////  count of record
  var total = 0; // no. of total recrds ...
  // counting of total recorsds in a collection...  . .
  Post.countDocuments({}, (err, count) => {
    if (!err) {
      total = count;
    }
  });

  //for searching....
  if (req.body.search.value ) {
    var regex = new RegExp(req.body.search.value, "i");
    searchStr = { $or: [{ code: regex }, { body: regex }, { title: regex } ]  };
  } else {
    searchStr = {};
  }
  var t = 0;

  // data base fetching .....
  Post.find(
    searchStr,
    null,
    {
      skip: Number(req.body.start),
      limit: Number(req.body.length),
      sort: sort
    },
    (err, data) => {
      if (err) throw err;

      Post.countDocuments(searchStr, (err, count) => {
        res.send({ recordsTotal: total, recordsFiltered: count, data });
      });
    }
  );
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
