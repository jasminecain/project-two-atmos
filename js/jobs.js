console.log("jobs.js, yo!");

let jobs = [];

jobs.push({
	jobName: "Software Developer",
	jobDescription: "Develop, create, and modify general computer applications software or specialized utility programs. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. May analyze and design databases within an application area, working individually or coordinating database development as part of a team. May supervise computer programmers.",
	jobPay: "$82,740.00",
	jobPostingDate: "July 1, 2017"

});

jobs.push({
	jobName: "Training and Development Specialist",
	jobDescription: "Design and conduct training and development programs to improve individual and organizational performance. May analyze training needs.",
	jobPay: "$59,740.00",
	jobPostingDate: "July 1, 2017"

});

jobs.push({
	jobName: "Robotics Engineer",
	jobDescription: "Research, design, develop, or test robotic applications.",
	jobPay: "$97,740.00",
	jobPostingDate: "July 1, 2017"

});

jobs.push({
	jobName: "Front End Web Developer",
	jobDescription: "Design, create, and modify Web sites. Analyze user needs to implement Web site content, graphics, performance, and capacity. May integrate Web sites with other computer applications. May convert written, graphic, audio, and video components to compatible Web formats by using software designed to facilitate the creation of Web and multimedia content.",
	jobPay: "$66,740.00",
	jobPostingDate: "July 1, 2017"

});

jobs.forEach(function(item){
	document.getElementById("jobList").innerHTML += `<div class="card">
			<h2>${item.jobName}</h2>
			<p>${item.jobDescription}</p>
			<p class="pay">Pay Starting At: ${item.jobPay}</p>
			<h3>Posting Date: ${item.jobPostingDate}</h3>
			<button><a href="#">Apply for this job</a></button>
			<button><a href="#">Save for later</a></button>
			<button><a href="#">Share with a friend</a></button>
		</div>`;
	
});