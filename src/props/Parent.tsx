import { ChildAsFC } from "./Child";

const Parent = () => {
	return (
		<ChildAsFC color="red" onClick={() => console.log("nothing")}>
			hello
		</ChildAsFC>
	);
};

export default Parent;
