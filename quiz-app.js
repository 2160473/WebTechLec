function populate() {
	if(quiz.isEnded()) {
		showScores();
	}
	else {
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("button-" + i, choices[i]);
		}
		showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
	var gameOverHTML = "<h1>Result</h1>";
		gameOverHTML += "<h2 id='score'> Your score is: " +quiz.score + "/" + quiz.questions.length + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHTML;
}

var questions = [
	new Question("This allows mapping a host name to an IP address:", ["URL", "DNS", "Hypermedia", "Static resource"], "DNS"),
	new Question("What is considered to be today's greatest information system?", ["World Wide Web","Hypertext Transfer Protocol","Hypertext Markup Language","Standard Generalized Markup Language"], "World Wide Web"),
	new Question("HTTP 1.1 included the following improvements except for one:", ["compression of data","content negotiation","parallel request handling","support for chunk responses"], "parallel request handling"),
	new Question("Which of the following HTTP versions made use of a binary protocol?", ["HTTP 0.9","HTTP 1.0","HTTP 1.1","HTTP 2"], "HTTP 2"),
	new Question("_______ introduced persistent connection.", ["HTTP 0.9","HTTP 1.0","HTTP 1.1","HTTP 2"], "HTTP 1.1"),
	new Question("Which of the following is not a safe HTTP request method?", ["GET","HEAD","POST","TRACE"], "POST"),
	new Question("HTTP request methods that can be called several times but then results still stay the same.", [" Safe methods","Idempodent methods","Cacheable methods","Recursive methods"], "Idempotent methods"),
	new Question("Server error makes use of which HTTP status codes?", ["2xx","3xx","4xx","5xx"], "5xx"),
	new Question("It was the first HTML version to be released as a W3C recommendation.", ["HTML 1.0","HTML 2.0","HTML 3.2","HTML 4.01"], "HTML 3.2"),
	new Question("He started a breakaway group from XHTML, forming the group WHATWG.", ["Tim Berners-Lee","Steve Jobs","Ian Hickson","Robert Cailliau"], "Ian Hickson")
];

var quiz = new Quiz(questions);

populate();
