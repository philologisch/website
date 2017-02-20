var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
var i = 0;

var slideImage = document.getElementsByClassName('slideimage')[0];
var imageList = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg'];

next.onclick = function () {
	i++;
	if(i >= imageList.length) {
		i = 0;
	}
	slideImage.setAttribute('src', imageList[i]);
}

prev.onclick = function () {
	i--;
	if(i < 0) {
		i = imageList.length - 1;
	}
	slideImage.setAttribute('src', imageList[i]);
}