import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";


const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };
  console.log("Image URL:", POSTER_URL_PREFIX + movie.poster_path);

  return (<div className={styles.movieCard} onClick={goToMovieDetails}>
    <div
      className={styles.moviePoster}
      style={{
        backgroundImage: `url(${POSTER_URL_PREFIX + movie.poster_path})`,
      }}
    ></div>
    <div className={styles.movieInfo}>
      <div className={styles.movieTitle}>{movie.title}</div>
      
    </div>
  </div>
  );
};

export default MoviePreview;
