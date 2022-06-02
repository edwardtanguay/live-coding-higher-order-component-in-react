export const PageTechBooks = ({techBooks}) => {
	return (
		<div className="page_techBooks">
			<h2>Tech Books</h2>
			<p>Here are the {techBooks.length} tech books.</p>
			<ul>
				{techBooks.map((book, index) => {
					return <li key={index}>{book.title}</li>;
				})}
			</ul>
		</div>
	)
}