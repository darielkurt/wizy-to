import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Movie from "../../components/movie/movie.component";

import "./browse.styles.scss";

const CssTextField = withStyles({
  root: {
    background: "grey",
    margin: "20px 40px",
    width: "60%",
    padding: "20px",
    "& label": {
      color: "#ffffff",
      marginLeft: "20px",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& label.Mui-focused": {
      color: "#ffffff",
      marginLeft: "20px",
      margin: "0",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#64B443",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "",
        color: "#ffffff",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#64B443",
      },
    },
    "& .MuiInputBase-input": {
      color: "#ffffff",
    },
  },
})(TextField);

class BrowseMovies extends React.Component {
  constructor() {
    super();

    this.state = {
      movieSearch: "",
      movieSearchResults: null,
    };
  }

  handleSubmit = (e) => {
    try {
      if (this.state.movieSearch.length < 1) return;

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=1c405e1c5592d214f74b8cb74e0781e9&language=en-US&query=${this.state.movieSearch}&page=1`
      )
        .then((response) => response.json()) // one extra step
        .then((data) => {
          this.setState({ movieSearchResults: data });
        })
        .catch((error) => console.error(error));
    } catch {
      e.preventDefault();
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  keyPress = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };

  render() {
    // console.log(this.state.movieSearchResults)
    return (
      <div className="browse-movies">
        <h1>{this.props.pageName}</h1>
        <div className="search-bar">
          <CssTextField
            name="movieSearch"
            id="movieSearch"
            label="Search here"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            onKeyDown={this.keyPress}
          />
          <Button variant="contained" type="submit" onClick={this.handleSubmit}>
            Search
          </Button>
        </div>
        <div>
          {this.movieSearchResults
            ? `Search results for ${this.state.movieSearch}`
            : null}
        </div>
        <div className="movie-list">
          {this.state.movieSearchResults ? (
            this.state.movieSearchResults.results.map((movie) => (
              <Movie
                imgSource={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                key={movie.id}
              />
            ))
          ) : this.props.trendingMovies ? (
            this.props.trendingMovies.results.map((movie) => (
              <Movie
                imgSource={movie.poster_path}
                title={movie.title}
                date={movie.release_date}
                key={movie.id}
              />
            ))
          ) : (
            <div>TRY AGAIN</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trendingMovies: state.movies.trendingMovies,
});

export default connect(mapStateToProps)(BrowseMovies);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     margin: "20px 40px",
//     padding: "20px",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: "25ch",
//     padding: "40px",
//   },
//   ".MuiButton-label": {
//     color: "black",
//   },
// }));
