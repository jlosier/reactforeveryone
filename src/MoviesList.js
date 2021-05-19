import { useState } from 'react'

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
    const [ filter, setFilter ] = useState("")

    return (
        <div>
            <label>
                Filter: 
                <input onChange={(e) => setFilter(e.target.value)} value={filter} />
            </label>
            <ul>
                { movies
                    .filter((movie) => movie.name.toLowerCase().includes(filter.toLowerCase()))
                    .map((movie) => {
                        return (
                            <li key={movie.name}>{movie.name}</li>
                        )
                    })}
            </ul>
        </div>
    )
}