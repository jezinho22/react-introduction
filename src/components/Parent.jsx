import Child from "./Child";

export default function Parent() {
	const childNames = [
		"Billy",
		"Milly",
		"Tilly",
		"Willy",
		"Dilly",
		"Jilly",
		"Ben",
	];
	return (
		<div>
			<h1>I am the parent</h1>
			<h2>These are my children</h2>
			<Child name={childNames[0]} />
			<Child name={childNames[1]} />
			<Child name={childNames[2]} />
			<Child name={childNames[3]} />
			<p>This is a bit repetitive - my DRI-dey senses are tingling</p>
			{/* obviously there is a shorter way - but is it the old faithful for loop?
            fraid not - it has to return something ie spit something out - at the end rather than each loop*/}

			{childNames.map((childName, index) => {
				return <Child name={childName} key={index} />;
			})}
			<p>Ah, that's better</p>
		</div>
	);
}
