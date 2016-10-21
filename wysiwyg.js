

var userInput = document.getElementById("userInput");


var brock = {
	title: "Musician",
	name: "Isaac Brock",
	bio: "Modest Mouse frontman, founder of Glacial Pace Recordings.",
	image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/29/11/enhanced/webdr04/enhanced-mid-2795-1427642909-35.jpg",
	lifespan: {
		birth: "July 9, 1975",
		death: "NA"
	}
}

var suess = {
	title: "Author",
	name: "Theodor Seuss Geisel",
	bio: "American writer, cartoonist, animator, book publisher, and artist best known for authoring popular children's books under the pen name Dr. Seuss.",
	image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Ted_Geisel_NYWTS_2_crop.jpg",
	lifespan: {
		birth: "March 2, 1904",
		death: "September 24, 1991"
	}
}

var supreme = {
	title: "Artist/Activist",
	name: "Vermin Supreme",
	bio: "American performance artist and activist who has run as a candidate in various local, state, and national elections in the United States.",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vermin_Supreme_2012.jpg/440px-Vermin_Supreme_2012.jpg",
	lifespan: {
		birth: "1961",
		death: "NA"
	}
}

var martin = {
	title: "Author",
	name: "George RR Martin",
	bio: "American novelist and short-story writer in the fantasy, horror, and science fiction genres, a screenwriter, and television producer.",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/George_R.R._Martin_at_Archipelacon.jpg/440px-George_R.R._Martin_at_Archipelacon.jpg",
	lifespan: {
		birth: "September 20, 1948",
		death: "NA"
	}
}

var tipper = {
	title: "Composer/Producer",
	name: "Dave Tipper",
	bio: "British composer and producer specialising in electronic music that ranges from ambient, through trip hop, to uptempo nu skool breaks.",
	image: "http://raverrafting.com/wp-content/uploads/Tipper11.jpg",
	lifespan: {
		birth: "1976",
		death: "NA"
	}
}

var celebrities = [brock, suess, supreme, martin, tipper];






var counter = 0;
var outputEl = document.getElementById("outputElement");

for (; counter < celebrities.length; counter++) {
	outputEl.innerHTML += '<div class="celebrityCard" id="celebrity--' + counter + '"></div>';
}

var containerEls = document.getElementsByClassName("celebrityCard");

var selectedPerson;
function selectionHandler(event) {
	console.log("event", event);
	event.currentTarget.classList.toggle("dottedBorder");
	userInput.focus();
	// console.log("event.currentTarget.childNodes[0].childNodes[1].childNodes[0]", event.currentTarget.childNodes[0].childNodes[1].childNodes[0]);
	selectedPerson = event.currentTarget;
}




userInput.addEventListener("keyup", inputHandler);
function inputHandler (event) {
	// console.log("selectedPerson.childNodes[0].childNodes[1].childNodes[0]", selectedPerson.childNodes[0].childNodes[1].childNodes[0]);
	if (event.keyCode === 13) {
		userInput.value = "";
	} else {
	selectedPerson.childNodes[0].childNodes[1].childNodes[0].innerHTML = userInput.value;
	}

}



function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n%2));
}


//adding the content to the celebrity cards
for (var i = 0; i < containerEls.length; i++) {
	containerEls[i].addEventListener("click", selectionHandler);
	containerEls[i].innerHTML = '<person><header>' + celebrities[i].title + " " + celebrities[i].name + '</header><section><p>' + celebrities[i].bio + '</p><br><img src="' + celebrities[i].image + '"></section><footer>Birth: ' + celebrities[i].lifespan.birth + '<br>Death: ' + celebrities[i].lifespan.death + '</footer></person>';	
	if (isEven(i)) {
		containerEls[i].classList.toggle("even");
	} else {
		containerEls[i].classList.toggle("odd");
	}
}






