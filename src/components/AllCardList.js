function AllCardList() {

    const handleClick = () => {
        fetch('http://localhost:3000/users', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(response => response.json())
        .then(result => console.log(result))
    };

    return (
        <button onClick={handleClick}> Get Users </button>
    )
}

export default AllCardList;