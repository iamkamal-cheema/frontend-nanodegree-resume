var name="Kamalpreet Singh";
var role="Web Developer";
var skills=["HTML","CSS","Javascript","Jquery"];
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio={
	"name" : "Kamalpreet Singh",
	"role" : "Web Developer",
	"contacts" : {
	"mobile": "519-562-9608",
	"email" : "kamal.cheema53@gmail.com",
	"github" : "https://github.com/iamkamal-cheema",
	"twitter" : "@iamkamalcheema",
	"location" :"Windsor"
	},
	"welcomeMessage" : "Hire the best developer in town",
	"skills" : ["HTML","CSS","Javascript","Jquery","Bootstrap framework"],
	"picturUrl" : "images/kamalcheematb.jpg"


};

var education = {
	"schools" : [
	{
		"name" : "University Of Windsor",
		"city" :"Windsor",
		"degree" : "Masters",
		"majors" : ["CS"],
		"dates" : 2015,
		"url"	: "http://www.uwindsor.ca/"
	},
	{
		"name" : "Lovely Professional University",
		"city" :"Jalandhar",
		"degree" : "Bachelors",
		"majors" : ["CS"],
		"dates" : 2014,
		"url"	: "http://www.lpu.in/"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Front End Developer Nanodegree",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	]
	};

	var work = {
		"jobs" : [
		{
			"employer" : "NIIT Jalandhar",
			"title" : "Project Trainee",
			"dates" : 2013,
			"description" : "Worked As an intern , Learning Fundamentals of Web development.It was a great experience to get the glimpse of website development process. Since then,I am working on my skills to stand-out as a web developer."

		}
		]
	};

	var projects = {
		"projects" : [
		{
			"title" : "CSS Project",
			"dates" : 2015,
			"description" : "This was my first project in this class. I learned a lot about HTML and CSS.",
			"images" : ["images/first-item.jpg"]
		},
		 {
			"title" : "Bootstrap Project",
			"dates" : 2015,
			"description" : "This was my Second project in this class. I learned a lot about Bootstrap.",
			"images" : ["images/second-item.jpg"]
		}
		]
	};

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var formattedSkill=HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);

		formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);

		formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);

		formattedSkill=HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill=HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}