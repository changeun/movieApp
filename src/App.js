import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    
    state = {
    }
    
// 컴포넌트가 Mount 할때마다 greeting을 Hello! -> Hello again!으로 변경한다는 뜻
//    componentDidMount(){
//        setTimeout(() => {
//            this.setState({
//                movies: [
//                    ...this.state.movies, //이전영화 그대로 두고 새로운거 추가
//                    {
//                        title: "Transformar",
//                        poster: "https://img2.cgtrader.com/items/8632/57da4b01d7/large/transformer-bumblebee-3d-model-c4d.jpg"
//                    }
//                ]
//            })
//        }, 3000)
//    }

// State를 옮김
//    componentDidMount(){
//        setTimeout(() => {
//            this.setState({
//                movies: [
//                    {
//                        title: "Metrcs",
//                        poster: "http://cdn.lionsgateapp.psdops.com/dims4/LG/114e969/2147483647/thumbnail/991x483%3E/quality/75/?url=http%3A%2F%2Fcdn.lionsgateapp.psdops.com%2Fd5%2Fb0%2F5e8abcf04bad97c6832ca07bbb02%2Fcatching-fire-mobile-background.jpg"
//                    },
//                    {
//                        title: "fall Metal Jacket",
//                        poster: "https://lumiere-a.akamaihd.net/v1/images/1200x630_lol_opengraphimage_starwars_d4a542b8.jpeg?region=0%2C0%2C900%2C473"
//                    },
//                    {
//                        title: "Old Boy",
//                        poster: "http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/11/boba_fett.jpg?itok=EMYTkxeW"
//                    },
//                    {
//                        title: "Star wars",
//                        poster: "https://secure.cdn1.wdpromedia.com/resize/mwImage/1/630/354/75/dam/wdpro-assets/parks-and-tickets/tours-and-experiences/star-wars-guided-tour/star-wars-guided-tour-00.jpg?1527788071266"
//                    },
//                    {
//                        title: "Transformar",
//                        poster: "https://img2.cgtrader.com/items/8632/57da4b01d7/large/transformer-bumblebee-3d-model-c4d.jpg"
//                    }
//                ]
//            })
//        }, 3000)
//    }

    componentDidMount(){
        this._getMovies();
    }

    _getMovies = async () => { //async는 이전 작업이 끝나는것을 기다리고 하는것이 아니고 순서와 상관없이 작업이 진행이 됨.
        const movies = await this._callApi() //await는 callApi 기능이 끝나는 것을 기다림
        this.setState({// callApi의 return value를 movies에 Set. callApi 작업이 완료되기 전까지는 실행되지 않음.
            movies
        })
    }
    
    _callApi = () => {
       //url 불러오기
        return fetch("https://yts.am/api/v2/list_movies.json?sort_by=like_count")
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err)) 
    }

    _renderMovie = () => {
       const movies = this.state.movies.map(movie => { //index를 따로 쓰는건 느려서 좋지 않은 방법임.
           console.log(movie);
           return <Movie 
           title={movie.title_english} 
           poster={movie.medium_cover_image} 
           key={movie.id} 
           genres={movie.genres}
           synopsis={movie.synopsis}
           />
       })
       return movies
    }
    
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : 'Loading'}
      </div>
    );
  }
}

export default App;
