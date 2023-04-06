import Head from "next/head";
import Header from "./components/Header";
import TodoContents from "./components/TodoContents";


const App = () => {

	return (
		<>
			<Head>
				{/* <link rel="stylesheet" href="../styles/css/reset.css" /> */}
				<title>Next.js-ToDo</title>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<TodoContents/>
		</>
	);
};

export default App;
