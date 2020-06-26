let arrRight = document.querySelector(".item__arr-right");
let contentTitle = document.querySelector(".content__title");
let variableCounter = document.querySelector(".item__variable-counter");
let contaiter = document.querySelector(".contaiter");

let arrTitle = ["Harmony", "Testing"];
let arrBg = ["url('../img/bg1.png')", "url('../img/bg2.png')"];

// slider
let counterBg = 0,
	counterTitle = 0,
	counterNum = 1;

arrRight.addEventListener("click", () => {
	counterTitle++;
	if (counterTitle === 2) {
		counterTitle = 0;
	}
	contentTitle.textContent = arrTitle[counterTitle];

	counterBg++;
	if (counterBg === 2) {
		counterBg = 0;
	}
	contaiter.style.backgroundImage = arrBg[counterBg];

	counterNum += 1;
	variableCounter.textContent = `0${counterNum}`;

	if (counterNum === 2) {
		counterNum = 0;
	}
});

// menu
let openMenu = document.querySelector(".openMenu");
let menu = document.querySelector(".container__menu");
let closeMenuBtn = document.querySelector(".close__btn");
openMenu.addEventListener("click", () => {
	menu.style.display = "block";
	contaiter.style.display = "none";
});
closeMenuBtn.addEventListener("click", () => {
	menu.style.display = "none";
	contaiter.style.display = "block";
});

//search
let searchBtn = document.querySelector(".serchBlock");
let hidingElem = document.querySelectorAll(".clickHiding");
searchBtn.addEventListener("click", () => {
	for (elem of hidingElem) {
		elem.style.display = "none";
	}
	searchBtn.style.marginRight = "10px";
	document.querySelector(".header__item:nth-child(6)").style.marginRight =
		"10px";
	document.querySelector(".header__item-search").style.display = "flex";
	document.querySelector(".bottomLine").style.display = "block";
});

let closeSearchBtn = document.querySelector(".header__item-closebtn");
closeSearchBtn.addEventListener("click", () => {
	document.querySelector(".header__item-search").style.display = "none";
	document.querySelector(".header__item:nth-child(6)").style.marginRight =
		"20px";
	document.querySelector(".bottomLine").style.display = "none";
	document.querySelector(".header__item:nth-child(7)").style.marginRight =
		"20px";
	for (elem of hidingElem) {
		elem.style.display = "block";
	}
});

// hover menu
let menuPic1 = document.querySelector(".menu__link:nth-child(2)");
let menuPic2 = document.querySelector(".menu__link:nth-child(3)");

menuPic1.onmouseenter = () => {
	document.querySelector(".hoverPic1").style.display = "block";
};
menuPic1.onmouseleave = () => {
	document.querySelector(".hoverPic1").style.display = "none";
};

menuPic2.onmouseenter = () => {
	document.querySelector(".hoverPic2").style.display = "block";
};
menuPic2.onmouseleave = () => {
	document.querySelector(".hoverPic2").style.display = "none";
};
