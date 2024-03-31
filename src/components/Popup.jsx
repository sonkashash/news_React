import React from "react"
import '../styles/Popup.css'

function Popup({ active, setActive, title, content }) {

	return (
		<>
			<div className={active ? 'popup active' : 'popup'} onClick={() => setActive(false)}>
				<div className="popup-content" onClick={(e) => e.stopPropagation()}>
					<h2>{title}</h2>
					<p>{content}</p>
					<button className="close-btn" onClick={() => setActive(false)}>Close</button>
				</div>
			</div>
		</>
	)
}

export default Popup