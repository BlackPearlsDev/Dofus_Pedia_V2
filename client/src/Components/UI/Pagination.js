function Pagination({ totalMonsters, monstersPerPage, setCurrentPage, currentPage }) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalMonsters / monstersPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="pagination">
            {pages.map((page, index) => (
                <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''}> {page} </button>
            ))}
        </div>
    )
}

export default Pagination;