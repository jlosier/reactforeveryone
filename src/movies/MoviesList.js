import { useState } from 'react'
import { Movie } from './Movie'
import { Filter } from '../Filter'

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
            <Filter filter={filter} setFilter={setFilter} />
            <ul>
                { movies
                    .filter((movie) => movie.name.toLowerCase().includes(filter.toLowerCase()))
                    .map((movie) => {
                        return (
                            <Movie key={movie.name} movie={movie}/>
                        )
                    })}
            </ul>
        </div>
    )
}