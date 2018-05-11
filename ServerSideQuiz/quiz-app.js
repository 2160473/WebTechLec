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
	new Question("Used to extend the capabilities of servers and implement the web applications.", ["HTML","Java Servlets","CSS","Pug"], "Java Servlets"),
	new Question("The script for the server-side is", ["Not available for the clients/end users to see", "Available for the clients/end users to see","Available if defined by the server", "Not available to both"], "Not available for the clients/end users to see"),
	new Question("Events generated by Node objects.", ["Emitters","Collectors","Issuer","Ejector"], "Emitters"),
	new Question("Which of the following is an example of the item in #3?", ["before","in","process","generator"], "process"),
	new Question("This method is used to pause data events", ["v.cease();","v.stop();","v.rest();","v.pause();"], "v.pause();"),
	new Question("Which of the following is not an open-source HTTP Web server software?", ["Apache HTTP Server","Node.js","Internet Information Services","Apache Tomcat"], "Internet Information Services"),
	new Question("What is a part of Java Servlet Development Kit 2.0", ["Servlet 1.0","Servlet 2.0","Servlet 3.0"], "Servlet 2.0"),
	new Question("What is PHP?", ["PHP: Hypertext Preprocessor","PHP: HTTP Processor","PHP: Hypertext Processor","PHP: HTTP Preprocessor"], "PHP: Hypertext Processor"),
	new Question("A server-side programming technology that enables the creation of dynamic, platform-independent method for building Web-based applications based on HTML, XML, or other document types.", ["Node.js" ,"PHP","Sun Microsystem","JSP"], "JSP"),
	new Question("What is the meaning of JSP?", ["Java Servlet Pages","Java Servlet Package","Java Server Pages","Java Server Package"], "Java Server Pages"),
    new Question("PHP development began in 1994 when Rasmus Lerdorf wrote several Common Gateway Interface (CGI) programs in C.", ["TRUE","FALSE","FALLS","I DON'T KNOW","FALLS","I DON'T KNOW"], "TRUE"),
    new Question("Servlet 2.2 has an addition of filter", ["TRUE","FALSE","FALLS","I DON'T KNOW","FALLS","I DON'T KNOW"], "FALSE"),
    new Question("JSP may be viewed as a low-level abstraction of Java Servlets.", ["TRUE","FALSE","FALLS","I DON'T KNOW"], "FALSE"),
    new Question("Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine", ["TRUE","FALSE"], "TRUE"),
    new Question("The PHP language evolved without a written formal specification or standard until 2014, leaving the canonical PHP interpreter as a de facto standard.", ["TRUE","FALSE","FALLS","I DON'T KNOW"], "TRUE"),
    new Question("The HttpServlet class provides methods, such as doObtain and doPost, for handling HTTP-specific services.", ["TRUE","FALSE","FALLS","I DON'T KNOW"], "TRUE"),
    new Question("The difference of JSP with Java servlets is that, servlets are HTML in Java, while JSP is Java in HTML", ["TRUE","FALSE","FALLS","I DON'T KNOW"], "FALSE"),
    new Question("On December 1, 2001, superglobals were introduced", ["TRUE","FALSE","FALLS","I DON'T KNOW"], "FALSE"),
    new Question("On December 2014, Node.js v0.12 and io.js v3.3 were merged back together into Node v4.0.", ["TRUE","FALSE","FALLS","I DON'T KNOW"], "TRUE"),
    new Question("To deploy and run JavaServer Pages, a compatible web server with a servlet container, such as Apache Tomcat or Jetty, is required.", ["TRUE","FALSE","FALLS","I DON'T KNOW"], "TRUE")
    
    
];

var quiz = new Quiz(questions);

populate();
