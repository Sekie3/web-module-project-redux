import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    const { favorites, displayFavorites } = props;
    const handleRemove = (id) => {
        props.removeFromFavorites(id);
    }    

    return (
        displayFavorites ? (
            <div className="col-xs savedContainer">
                <h5>Favorite Movies</h5>
                {
                    favorites.map(movie => {
                        return <div key={movie.id}>
                            <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                                {movie.title}
                                <span><span className="material-icons"
                                 onClick={() => handleRemove(movie.id)}
                                 >remove_circle</span></span>
                            </Link> 
                        </div>
                    })
                }
            </div>
        ) : null
    );  
}


const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites,
        displayFavorites: state.favorites.displayFavorites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromFavorites: (id) => dispatch(removeFromFavorites(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);

