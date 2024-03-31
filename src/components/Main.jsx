import React from "react"
import Cards from "./Cards";

function Main({ news, searchText }) {

	return (
		<>
			<Cards news_card={news} searchTitle={searchText} />
		</>
	)
}

export default Main
