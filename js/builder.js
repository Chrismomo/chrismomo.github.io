

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
       title: "Hackathon & China API launch",
       dates: "2016/01/24",
       company: "Uber",
       description: "On Sep.2015, Uber has launched its API in China. Empowering developers to build moving experiences with Uber API is a key part of its mission. As launch event, this 48-hour-hackathon aimed to promote Uber API among local developers and startups. My main responsibilities and key results include:<br><br>- established and maintained the connection with main partners, including Tsinghua University, Microsoft Ventures, SenseTime, Ticwatch and local developer platforms. Except for Uber API, participants could also play with smartwatch and facial recognition API.<br><br>- fully owned the event operation, including event planning, participants recruiting and event hosting. <br><br>- with 300+ participants, 20 out of 26 teams delivered live demo, and one went production on Android Wear Platform afterwards.",
       images: ["img/0a.JPG","img/0b.JPG","img/0c.JPG","img/0d.JPG"]
    },
    {
       title: "Beijing Demand Analysis",
       dates: "2016/04/-2016/10",
       company: "Uber",
       description: "My main responsibility of this project lies as below: <br><br>- Defined initiatives and incentives for Beijing demand generating activities, which brought over 10w+ followers on Wechat within several months and reach operational record under limited budget.<br><br>- Designed and tracked experiments and lifecycle program to reach actionable strategies and investment efficiency, which led to 8% trip growth under no extra budget, about 10% drop on 7-day-churn-rate and 50% retention rate growth at most.<br><br>- Created dashboards and reports to regular monitor key metrics, to enhance understanding of user behavior and drive business decisions.",
       images: ["img/1a.jpg"]
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
       company: "Makerpapa",
       description: "The Crazy Cart is the ultimate drifting machine origionally made by Razor. It's a very interesting kart, but its adult version was sold with limited amount. So we decide to make by ourselves. The final prototype shown as below:",
       images: ["img/3a.jpg"]
    },
    {
       title: "《The Great 3D Printing》",
       dates: "2014/06",
       company: "publication",
       description: "Pushlished in June.2014, this is a book about 3D printing. Except for history review, this book also explains the mechanisms of different types of 3D printer and includes brief guides for self-making 3D printer and models. As one of the writers, my part mainly introduces the development and technique about 3D scanning and 3D photo studio. The same article of mine has also been published in 《Radio Magazine》.",
       images: ["img/4a.jpg"]
    },
    {
       title: "2nd Future Exhibition",
       dates: "2017/01/01",
       company: "Makerpapa",
       description: "Future Exhibition is a biennale exhibition for young new media artists. I was invited to own the maker session of this biennial new-media art exhibition, including artists invitation, on-site design, management of related activities like workshops, speeches, and hackathon.",
       images: ["img/5a.jpg","img/5b.jpg","img/5c.jpg"]
    },
    {
       title: "Expression of Uncertainty",
       dates: "2014/01",
       company: "Freelance",
       description: "Cooperated with artist Haochen Wang, this new media art work sprays color pigment while playing piano. I mainly worked on the hardware system, based on open-source hardware Arduino and related sensors.",
       images: ["img/6a.jpg"]
    },
    {
       title: "Hackathon Serial Competition",
       dates: "2013/04/-2013/11",
       company: "Makerspace",
       description: "Hackathon is a 48-hour-competition where participants from different background collaborate intensively on projects, from ideas to prototypes. I initiated 5 hardware Hackathons via partnership with Intel, Intel Ciilabs, Cinnovate, Sunshine Library, CAFA etc. Topics covered rural education, air pollution and IOT applications, and ~30 prototypes were developed. <br><br>Also, I've finished one prototype of my own: <br>Based on the Intel IOT API of air pollution data, I developed a wearable device that can display different patterns according to the value of PM2.5 of surrounding area. I used Arduino as control board and an 8*8 LED Matrix as display as hardware device.",
       images: ["img/project1a.jpg"]
    },
    {
       title: "C2D2 Sharing Talks",
       dates: "2012/08-2014/07",
       company: "Makerspace",
       description: "C2D2 is a serial talk show started from Aug.2012 in Beijing Makerspace. As project owner, I inivted over 80 professional speakers to share their projects, views and edge-cutting development in their focus. More than 2000 audiences participated offline. This event gathered the very first members of the makerspace.",
       images: ["img/project2a.jpg"]
    },
    {
       title: "2012 Maker Carnival",
       dates: "2012/02-2012/05",
       company: "Makerspace",
       description: "2012 Maker carnival is one of the earliest large maker activities on China Mainland. The total number of the exhibition projects exceeds 72. I recruited and trained over 270 volunteers to assist through the exhibition and its preparation. Also, I managed the reception of 51 global teams.",
       images: ["img/9a.jpg","img/9b.jpg","img/9c.jpg","img/9d.jpg"]
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
