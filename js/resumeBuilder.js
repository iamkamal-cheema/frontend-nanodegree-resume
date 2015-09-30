
//Bio section of resume
var bio={
	"name" : "Kamalpreet Singh",
	"role" : "Web Developer",
	"contacts" : {
	"mobile": "519-562-9608",
	"email" : "kamal.cheema53@gmail.com",
	"github" : "iamkamal-cheema",
	"twitter" : "@iamkamalcheema",
	"location" :"Windsor,Ontario"
	},
	"welcomeMessage" : "Hire the best developer in town",
	"skills" : ["HTML","CSS","Javascript","Jquery","Bootstrap framework"],
	"picturUrl" : "images/kamalcheema.jpg"


};


$("#topContacts").prepend(HTMLmobile.replace("%data%", bio["contacts"].mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio["contacts"].email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio["contacts"].github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio["contacts"].twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio["contacts"].location));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLbioPic.replace("%data%", bio.picturUrl));

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#footerContacts").prepend(HTMLmobile.replace("%data%", bio["contacts"].mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio["contacts"].email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio["contacts"].github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio["contacts"].twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio["contacts"].location));

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


	//Education Section of resume

var education = {
	"schools" : [
	{
		"name" : "University Of Windsor",
		"city" :"Windsor, Ontario",
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
	education.displayEducation = function () {


	for (school in education["schools"]){
		$("#education").append(HTMLschoolStart);
		var formattedName= HTMLschoolName.replace("%data%",education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedDegree= HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedDates= HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedCity= HTMLschoolLocation.replace("%data%",education.schools[school].city);
		$(".education-entry:last").append(formattedCity);
		var formattedMajor= HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
		}

		if(education.onlineCourses){
			$(".education-entry:last").append(HTMLonlineClasses)
			for(course in education["onlineCourses"] ){

				var formattedTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
				$(".education-entry:last").append(formattedTitle);
				var formattedSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
				$(".education-entry:last").append(formattedSchool);
				var formattedDates= HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedUrl= HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedUrl);

				}
			}




	}
	education.displayEducation();


	//Work Section of resume

	var work = {
		"jobs" : [
		{
			"employer" : "NIIT Jalandhar",
			"title" : "Project Trainee",
			"dates" : 2013,
			"description" : "Worked As an intern , Learning Fundamentals of Web development.It was a great experience to get the glimpse of website development process.Since then,I am working on my skills to stand-out as a web developer."

		}
		]
	};

	work.displayWork = function () {


	for (job in work["jobs"]){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer= HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle= formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription= HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		}
	}
	work.displayWork();

	var projects = {
		"projects" : [
		{
			"title" : "CSS Project",
			"dates" : 2015,
			"description" : "This was my first project in this class. I learned a lot about HTML and CSS.",
			"images" : ["images/first-item.png"]
		},
		 {
			"title" : "Bootstrap Project",
			"dates" : 2015,
			"description" : "This was my Second project in this class. I learned a lot about Bootstrap.",
			"images" : ["images/second-item.png"]
		}
	]
	};


	projects.displayProject = function () {


	for (project in projects["projects"]){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle= HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates= HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription= HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0){
			for(image in projects["projects"] ){
				var formattedImage= HTMLprojectImage.replace("%data%",projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
				}
			}

		}
	}
	projects.displayProject();

	//Google Map Implementation
	$("#mapDiv").append(googleMap);



