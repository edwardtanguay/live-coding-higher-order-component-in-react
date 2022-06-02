export const PageGeneralBooks = ({ generalBooks, subtitle }) => {
	return (
		<div className="page_generalBooks">
			<h2>General Books</h2>
			<h3>{subtitle}</h3>
			<p>Here are the {generalBooks.length} general books:</p>
			<ul>
				{generalBooks.map((book, index) => {
					return <li key={index}>{book.title}</li>;
				})}
			</ul>
		</div>
	);
};
