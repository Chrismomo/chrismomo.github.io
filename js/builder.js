

/*info*/
var bio = {
  name: "Momo Hou",
  biopic: "img/momo.jpg",
  contacts: {
    email: "chris-momo@hotmail.com",
    linkedin: "123-456-78900",
    facebook: "chris-momo"
  },
  skills :{
    type: ["program", "tool", "other"],
    skill: ["R, SQL, html/css, javascript, python, C/C++","tableau, PS/AI, excel, keynote","3D modeling, 3D printing, open-source hardware"]
  }
};


bio.display = function(){
  for(var skill = 0; skill < bio.skills.type.length; skill++){
    var formattedskill = HTMLskill.replace("%title%", bio.skills.type[skill]);
    formattedskill = formattedskill.replace("%data%", bio.skills.skill[skill]);
    $("#skill:last").append(formattedskill);
  }
}


var work = {
  jobs: [
    {
      title: "data analysis & user growth",
      employer: "Keep",
      date: "2017/05/31 - 2018/06/01",
      location: "Beijing",
      url: "https://www.gotokeep.com"
    },
    {
      title: "marketing & growth",
      employer: "Uber",
      date: "2015/07/22 - 2017/10/10",
      location: "Beijing",
      url: "https://www.uber.com"
    },
    {
      title: "community manager",
      employer: "Beijing Makerspace",
      date: "2012/07/22 - 2014/07/10",
      location: "Beijing",
      url: "http://bjmakerspace.com/"
    }
  ] 
};

work.display = function(){
  work.jobs.forEach(function(element){
    var formattedwork = HTMLwork.replace("%employer%", element.employer);
    formattedwork = formattedwork.replace("%link%", element.url);
    formattedwork = formattedwork.replace("%date%", element.date);
    formattedwork = formattedwork.replace("%title%", element.title);
    $("#work:last").append(formattedwork);
  });
}


var education = {
  schools: [
    {
      name: "Beijing University of Post and Telecommunication",
      description: "bachelor in Network Engineering",
      url: "http://www.bupt.edu.cn/"
    },
    {
      name: "Coursera",
      description: "online course in Customer Analysis",
      url: "http://www.coursera.com"
    },
    {
      name: "Udacity",
      description: "online nanodegree of Front-end Web Develop",
      url: "http://www.udacity.com"
    }
  ]
};

education.display = function(){
  education.schools.forEach(function(element){
    var formattedschool = HTMLschool.replace("%name%", element.name);
    formattedschool = formattedschool.replace("%link%", element.url);
    formattedschool = formattedschool.replace("%description%", element.description);
    $("#education:last").append(formattedschool);
  });
}

var cases = {
  cases: [
    {
       title: "UberIcecream Day",
       dates: "2017/01/01",
       company: "Uber",
       description: "I'm leader in an industry that miscalled election results, hyped up terror scares, ginned up controversy, and failed to report on tectonic shift in our country. From the collapse of the financial system to the truths about how strong we are to the dangers we actually face. I'm a leader in an industry that misdirected your attention with dexterity of Harry Houdini while sending hundreds of thousands of our bravest young men and women off to war without due diligence.",
       images: ["img/project1a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "Uber ArtStation",
       dates: "2015/07/24",
       company: "Uber",
       description: "*The reason we failed isn't a mystery. We took a dive for the ratings*. *In the infancy of* mass communications, *the Columbus and Magellan* of broadcast journalism, William Paley and David Sarnoff, went down to Washington to cut a deal with Congress. Congress would allow the fledgling networks free use of taxpayer-owned airwaves in exchange for on public service.",
       images: ["img/project3a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "Uber Hackathon",
       dates: "2015/07/24",
       company: "Uber",
       description: "That public service would be on hour of air time set aside every night for informational broadcasting, or what we now call the evening news. *Congress, unable to anticipate the enormous capacity television would have to deliver consumers to advertisers, failed to include in its deal the one requirement that would have changed our national discourse immeasurably for the better.* ",
       images: ["img/project2a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "C2D2 Sharing Talks",
       dates: "2015/07/24",
       company: "Makerspace",
       description: "Congress forgot to add that under no circumstances would there be paid advertising during informational broadcasting. They forgot to say that taxpayers will give you the airwaves for free and for 23 hours a day you should make a profit, but for one hour a night you work for us. ",
       images: ["img/project3a.jpg","img/project2a.jpg","img/project3a.jpg"]
    }
  ]
};

cases.display = function(){
  for(var n = 0; n < cases.cases.length; n++){   
    $("#cases").append(HTMLcaseStart);
    var formattedImage = HTMLcasePic.replace("%data%", cases.cases[n].images[0]);
    formattedImage = formattedImage.replace("%id%", n);
    formattedImage = formattedImage.replace("%title%", cases.cases[n].title);
    formattedImage = formattedImage.replace("%date%", cases.cases[n].dates);
    $(".case:last").append(formattedImage);
  }
}

cases.display_detail = function(){
  for(var n = 0; n < cases.cases.length; n++){
    if($(".case-detail").attr("id") == n){
      var formattedCaseStart = HTMLcaseDetailStart.replace("%id%",n);
      $(".case-detail").append(formattedCaseStart);

      var formattedCaseText = HTMLcaseText.replace("%title%",cases.cases[n].title);
      formattedCaseText = formattedCaseText.replace("%dates%",cases.cases[n].dates);
      formattedCaseText = formattedCaseText.replace("%company%",cases.cases[n].company);
      formattedCaseText = formattedCaseText.replace("%description%",cases.cases[n].description);
      $(".case-detail-start").append(formattedCaseText);

      var formattedCaseImgStart = HTMLcaseImgStart.replace("%id%",n);
      $(".case-detail:last").append(formattedCaseImgStart);
      cases.cases[n].images.forEach(function(element){
        var formatedPic = HTMLImg.replace("%link%", element);
        $(".case-pics:last").append(formatedPic);
      });
    }
  }
}

cases.display();
work.display();
education.display();
bio.display();
cases.display_detail();



/*pixi

// 1. Create a Pixi renderer and define size and a background color
var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.getElementById("pixi_canvas").appendChild(app.view);
  
var hawaii = PIXI.Sprite.fromImage('http://placekitten.com/200/300');
 
hawaii.anchor.set(0.5);
hawaii.x = app.renderer.width / 2;
hawaii.y = app.renderer.height / 2;

app.stage.addChild(hawaii);

*/
