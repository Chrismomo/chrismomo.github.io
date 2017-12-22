

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
      date: "2017/05/31 - ",
      location: "Beijing",
      url: "https://www.gotokeep.com"
    },
    {
      title: "marketing & growth",
      employer: "Uber",
      date: "2015/07/22 - 2016/10/10",
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
       title: "Hackathon & API launch",
       dates: "2015/07/24",
       company: "Uber",
       description: "That public service would be on hour of air time set aside every night for informational broadcasting, or what we now call the evening news. *Congress, unable to anticipate the enormous capacity television would have to deliver consumers to advertisers, failed to include in its deal the one requirement that would have changed our national discourse immeasurably for the better.* ",
       images: ["img/0a.JPG","img/0b.JPG","img/0c.JPG","img/0d.JPG"]
    },
    {
       title: "Beijing Demand Analysis",
       dates: "2016/04/-2016/10",
       company: "Uber",
       description: "My responsibility lies as below: <br><br>- Defined initiatives and incentives for Beijing demand generating activities, which brought over 10w+ followers on Wechat within several months and reach operational record under limited budget.<br><br>- Designed and tracked experiments and lifecycle program to reach actionable strategies and investment efficiency, which led to 8% trip growth under no extra budget, about 10% drop on 7-day-churn-rate and 50% retention rate growth at most.<br><br>- Created dashboards and reports to regular monitor key metrics, to enhance understanding of user behavior and drive business decisions.",
       images: ["img/project2a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "Uber ArtStation",
       dates: "2016/05",
       company: "Uber",
       description: "Celebrating the city has always been Uber's Mission. In general, UberStation serves as a conspicuous sign for better pick-up service between riders and drivers. With this special project, we cooperated with young local artists and combine their sculptures with our stations, which can be found within 8 landmarks in Beijing. Also, brief introductions of the artworks will show up when the rider is waiting around, waiting for his/her ride. <br><br>Through this program, young artist can get more exposures and our riders have more interesting experience with Uber. As key project owner, I've led the project via partnership with ArtAnd and 8 Beijing landmarks, which created major media exposure with over 150 articles and spread brand awareness.",
       images: ["img/2b.png","img/2c.png","img/2e.jpg","img/2a.png"]
    },
    {
       title: "Crazy Cart Prototype",
       dates: "2017/01/01",
       company: "Uber",
       description: "I'm leader in an industry that miscalled election results, hyped up terror scares, ginned up controversy, and failed to report on tectonic shift in our country. From the collapse of the financial system to the truths about how strong we are to the dangers we actually face. I'm a leader in an industry that misdirected your attention with dexterity of Harry Houdini while sending hundreds of thousands of our bravest young men and women off to war without due diligence.",
       images: ["img/project1a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "The Great 3D Printing",
       dates: "2017/01/01",
       company: "Uber",
       description: "I'm leader in an industry that miscalled election results, hyped up terror scares, ginned up controversy, and failed to report on tectonic shift in our country. From the collapse of the financial system to the truths about how strong we are to the dangers we actually face. I'm a leader in an industry that misdirected your attention with dexterity of Harry Houdini while sending hundreds of thousands of our bravest young men and women off to war without due diligence.",
       images: ["img/project1a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "2nd Future Exhibition",
       dates: "2017/01/01",
       company: "CAFAM",
       description: "I'm leader in an industry that miscalled election results, hyped up terror scares, ginned up controversy, and failed to report on tectonic shift in our country. From the collapse of the financial system to the truths about how strong we are to the dangers we actually face. I'm a leader in an industry that misdirected your attention with dexterity of Harry Houdini while sending hundreds of thousands of our bravest young men and women off to war without due diligence.",
       images: ["img/project1a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "Expression of Uncertainty",
       dates: "2014/01",
       company: "Freelance",
       description: "Cooperated with artist Haochen Wang, this new media art work sprays color pigment while playing piano. I mainly worked on the hardware system, based on open-source hardware Arduino and related sensors.",
       images: ["img/project1a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "Hackathon Serial Competition",
       dates: "2013/04/-2013/11",
       company: "Makerspace",
       description: "Hackthon is a kind of event where people from different area team up and develope one project from idea to prototypes within limited times. I initiated 5 hardware Hackathons via partnership with Intel, Intel Ciilabs, Cinnovate, Sunshine Library, CAFA etc. Topics covered rural education, air pollution and IOT applications, and ~30 prototypes were developed. Also, I've made several projects during the competitions.",
       images: ["img/project3a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "C2D2 Sharing Talks",
       dates: "2012/08-2014/07",
       company: "Makerspace",
       description: "C2D2 is a serial talk show started from Aug.2012 in Beijing Makerspace. As project owner, I inivted over 80 professional speakers to share their projects, views and edge-cutting development in their focus. More than 2000 audiences participated offline. This event gathered the very first members of the makerspace.",
       images: ["img/project3a.jpg","img/project2a.jpg","img/project3a.jpg"]
    },
    {
       title: "2012 Maker Carnival",
       dates: "2012/02-2012/05",
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
