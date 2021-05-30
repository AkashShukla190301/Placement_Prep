const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".slider", { x: "-100%", duration: 1.5 });
tl.to(".sliderr", { x: "-100%", duration: 1.5 });
tl.to(".container", { y: "0%", duration: 0.25 });
// tl.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 0.25 }, "1");


