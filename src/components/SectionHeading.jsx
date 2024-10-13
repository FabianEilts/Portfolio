function Heading(props) {
	return (
		<article className="sectionHeading">
			<div id={props.id}>
				<p className="text-5xl text-gray">{props.heading}</p>
				<hr className="mt-4" />
			</div>
		</article>
	)
}

export default Heading
