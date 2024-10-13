export default function SkillsCard(props) {
	return (
		<div className="content-center bg-white shadow-xl rounded-3xl w-52 h-52">
			<img
				src={props.imageUrl}
				alt="Logo"
				className="mb-5 w-20 h-20 mx-auto"
			/>
			<h3 className="text-2xl text-center">{props.skillName}</h3>
		</div>
	)
}
