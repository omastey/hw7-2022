var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.getElementById('player1');
	video.autoplay = false;
	// console.log("Autoplay is set to false");
	video.loop = false;
	video.load();
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = document.getElementById("slider").value;
	document.getElementById(volume).innerHTML = volume + '%';
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate - .1);
	video.playbackRate -= .1;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	console.log("Speed is " + + video.playbackRate + .1);
	video.playbackRate += .1;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	console.log("Current time is " + video.currentTime + 10);
	video.currentTime += 10;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.volume = 0;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	const list = video.classList;
	list.add("css/.oldSchool");
	list.toggle("css/.oldSchool");
});

