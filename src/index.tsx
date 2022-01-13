import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UseSearch";

const App = () => {
	return (
		<div>
			<h1>hello world</h1>
			<UserSearch />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
