import React, {Component} from 'react';
import './Movie.css';

//class Movie extends Component {
//    render(){
//        return (
//            <div>
//                <MoviePoster poster={this.props.poster} />
//                <h1>{this.props.title}</h1>
//            </div>
//        );
//    }
//}

function Movie({title, poster, genres, synopsis}) {
    return (
       <div className="Movie">
            <div className="Movie_Colums">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Colums">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/> )}
                </div>
                <p className="Movie_Sysnopsis">
                    {synopsis}
                </p>
            </div>
       </div>
    );
}

//class MoviePoster extends Component {
//    render(){
//        return (
//           <img src={this.props.poster} alt="Movie Poster" />
//        );
//    }
//}

//Fuctional Component (No State, No render, No lifecycle) This is Dump.
function MoviePoster({poster, alt}) {
    return (
       <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    );
}

function MovieGenre({genre}) {
    return (
       <span className="Movie_Genre"> {genre} </span>
    );
}

export default Movie;
