import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import ListGroup from "./ListGroup";
import Pagination from "./pagination";
import Paginate from "./utils/paginate";
import _ from "lodash";
import { NavLink } from "react-router-dom";

class MovieLists extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "You Will Meet a Tall Dark Stranger",
        genre: "Comedy|Romance",
        price: 40,
        count: 4,
      },
      {
        id: 2,
        title: "Funny Face",
        genre: "Comedy|Musical",
        price: 53,
        count: 8,
      },
      {
        id: 3,
        title: "Shadows and Fog",
        genre: "Comedy|Drama|Mystery|Thriller",
        price: 57,
        count: 1,
      },
      {
        id: 4,
        title: "Here Comes the Navy",
        genre: "Comedy|Drama|Romance",
        price: 17,
        count: 2,
      },
      {
        id: 5,
        title: "Aspen Extreme",
        genre: "Action",
        price: 29,
        count: 10,
      },
      {
        id: 6,
        title: "Lucky Texan, The",
        genre: "Romance|Western",
        price: 38,
        count: 5,
      },
      {
        id: 7,
        title: "Santa's Slay",
        genre: "Comedy|Fantasy|Horror",
        price: 25,
        count: 7,
      },
      {
        id: 8,
        title: "Free The Mind",
        genre: "Documentary",
        price: 40,
        count: 8,
      },
      {
        id: 9,
        title: "Just Before Dawn",
        genre: "Horror",
        price: 65,
        count: 4,
      },
      {
        id: 10,
        title: "Punks",
        genre: "Comedy",
        price: 36,
        count: 7,
      },
      {
        id: 11,
        title: "A Smoky Mountain Christmas",
        genre: "Fantasy",
        price: 27,
        count: 9,
      },
      {
        id: 12,
        title: "Blood",
        genre: "Crime|Drama|Thriller",
        price: 39,
        count: 2,
      },
      {
        id: 13,
        title: "Blue Steel",
        genre: "Western",
        price: 46,
        count: 5,
      },
      {
        id: 14,
        title: "Whistle Blower, The",
        genre: "Thriller",
        price: 56,
        count: 9,
      },
      {
        id: 15,
        title: "Stay Cool",
        genre: "Comedy|Drama|Romance",
        price: 38,
        count: 2,
      },
      {
        id: 16,
        title: "Afflicted, The",
        genre: "Horror|Thriller",
        price: 97,
        count: 4,
      },
      {
        id: 17,
        title: "Boy",
        genre: "Drama|Romance",
        price: 46,
        count: 6,
      },
      {
        id: 18,
        title: "Pathology",
        genre: "Crime|Horror|Thriller",
        price: 71,
        count: 1,
      },
      {
        id: 19,
        title: "Love Me If You Dare (Jeux d'enfants)",
        genre: "Drama|Romance",
        price: 66,
        count: 8,
      },
      {
        id: 20,
        title: "3 Worlds of Gulliver, The",
        genre: "Adventure|Fantasy",
        price: 68,
        count: 7,
      },
    ],
    currentPage: 1,
    pageSize: 5,
  };

  genreSelector = (g) => {
    let genreClass;
    if (g === "Comedy") {
      genreClass = "badge rounded-pill bg-danger";
    } else {
      genreClass = "badge rounded-pill bg-secondary";
    }
  };
  handleDelete = (movieId) => {
    const filteredMovies = this.state.movies.filter((m) => movieId !== m.id);
    // console.log(movieId);
    // console.log(filteredMovies);
    this.setState({ movies: filteredMovies });
  };
  handleDecrement = (movie) => {
    const { movies } = { ...this.state };
    const movieIndex = movies.indexOf(movie);
    if (movies[movieIndex].count > 0) movies[movieIndex].count--;
    this.setState({ movies: movies });
    // console.log(movies);
  };
  handleIncrement = (movie) => {
    const { movies } = { ...this.state };
    const movieIndex = movies.indexOf(movie);
    movies[movieIndex].count++;
    this.setState({ movies: movies });
    // console.log(movies);
  };
  handleChangePage = (currentPage) => {
    this.setState({ currentPage });
  };

  handleCategory = (genre) => {
    // const { movies } = { ...this.state };
    // const movieIndex = movies.indexOf(movie);
    // if (movies[movieIndex].genre === genre) movies[movieIndex].genre--;

    console.log(genre);
  };
  render() {
    const { movies: allMovies, currentPage, pageSize } = this.state;

    /*--         1             Start Unify                                     --*/
    let allgenres = [];
    // allMovies.map((movie) => allgenres.push(movie.genre));
    // const uniqueGenre = Array.from(new Set(allgenres.join("|").split("|")));

    /* --       2                                                            --*/
    allMovies.map((movie) => allgenres.push(movie.genre));
    const uniqueGenre = allgenres
      .join("|")
      .split("|")
      .filter(function (x, i, a) {
        return a.indexOf(x) == i;
      });
    console.log(uniqueGenre);

    /*--        3                                                            --*/
    // allMovies.map((movie) => allgenres.push(movie.genre));
    // const uniqueGenre = _.uniq(allgenres.join("|").split("|"));
    // console.log(uniqueGenre);

    /*--                      End Unify                                      --*/
    /*   Start to Categorize                                                  */
    let filteredGenre = [];
    const { genre } = this.props.match.params;
    if (genre) {
      allMovies.map((movie) => {
        const genres = movie.genre.split("|");
        if (genres.indexOf(genre) >= 0) filteredGenre.push(movie);
      });
    } else {
      filteredGenre = [...allMovies];
    }

    /*   End Categorize                                                      */
    const slicedMovies = Paginate(filteredGenre, pageSize, currentPage);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className={
                allMovies.length !== 0
                  ? "alert alert-warning my-2"
                  : "alert alert-danger my-2"
              }
            >
              There are {filteredGenre.length} movie(s) in the list below.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ul className="list-group  ">
              <NavLink
                className="list-group-item list-group-item-action"
                to={"/Movies"}
              >
                All
              </NavLink>
              {uniqueGenre.map((genre) => (
                <li key={genre} className="list-group">
                  <NavLink
                    className="list-group-item list-group-item-action"
                    to={`/Movies/${genre}`}
                  >
                    {genre}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-9">
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {slicedMovies.map((m) => (
                  <tr key={m.id}>
                    <td>{m.id}</td>
                    <td>{m.title}</td>
                    <td>
                      {m.genre.split("|").map((g) => (
                        <span
                          className={
                            g === "Comedy" ||
                            g === "Documentary" ||
                            g === "Thriller"
                              ? "badge rounded-pill bg-danger"
                              : "badge rounded-pill bg-secondary"
                          }
                          key={g}
                        >
                          {g}
                        </span>
                      ))}
                    </td>
                    <td>{m.price}</td>
                    <td>
                      <div
                        className="btn-group btn-group-sm"
                        role="group"
                        aria-label="Basic mixed styles example"
                      >
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => this.handleDecrement(m)}
                        >
                          <FontAwesomeIcon icon={"minus"} />
                        </button>
                        <button
                          type="button"
                          className="btn btn-light disabled"
                        >
                          {m.count}
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => this.handleIncrement(m)}
                        >
                          <FontAwesomeIcon icon={"plus"} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(m.id)}
                      >
                        <FontAwesomeIcon icon={"trash"} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPageNumber={filteredGenre.length}
              pageSize={pageSize}
              onPageChange={this.handleChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieLists;
