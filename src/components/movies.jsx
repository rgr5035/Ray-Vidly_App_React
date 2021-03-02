import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies: getMovies()
     }

     handleDelete = movie => {

     }

    render() { 
        return <table className="table mt-3">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        </table>;
    }
}
 
export default Movies;