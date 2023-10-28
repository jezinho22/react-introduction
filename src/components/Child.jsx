import { useState } from "react";

export default function Child({ name }) {
	// darn it - oldClick changes but the returned jsx doesn't notice
	let oldClick = 0;

	function clicked() {
		console.log("WTF?");
		oldClick++;
		console.log(oldClick);
	}

	// oh no wait, if I want the return to change, I have to run the function again
	// and if I do that, oldClick will be 0 again
	// let's move oldClick outside the component function
	// ugh, now oldClick goes up whichever Child you click on
	// and the jsx still doesn't render the change

	// so react has a different way to do this - useState
	// when you change a state variable, it updates everywhere

	const [click, setClick] = useState("");

	function handleClick() {
		if (click === "") {
			setClick("Hey that tickles!");
		} else {
			setClick(click + " Stop it!");
		}
	}
	return (
		<div>
			<h3>The name of the child is {name}</h3>
			<p>
				<span onClick={handleClick}>Click here</span> Clicks: {click}
			</p>
		</div>
	);
}
