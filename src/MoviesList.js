const movies = [
    {
        name: "Batman"
    },
    {
        name: "Iron Man"
    },
    {
        name: "Superman"
    }
]

export function MoviesList() {
    return (
        <div>
            <ul>
                { movies.map((movie) => {
                    return (
                        <li key={movie.name}>{movie.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}