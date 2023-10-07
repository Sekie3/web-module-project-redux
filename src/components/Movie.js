    import React from 'react';
    import { useParams, useHistory } from 'react-router-dom';
    import { connect } from 'react-redux';
    import { deleteMovie } from '../actions/movieActions'; 
    import { addToFavorites } from '../actions/favoritesActions';


    const Movie = (props) => {
        const { movies, displayFavorites } = props;
        const { id } = useParams();
        const { push } = useHistory();

        const handleFavorite = () => {
            props.addToFavorites(movie);
            push('/');
        }
        const handleDelete = () => {
            props.deleteMovie(movie.id);
            push('/');  
        };


        const movie = Array.isArray(movies) ? movies.find(movie => movie.id === Number(id)) : null;

        return(<div className="modal-page col">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">						
                        <h4 className="modal-title">{movie.title} Details</h4>
                    </div>
                    <div className="modal-body">
                        <div className="flexContainer">

                            <section className="movie-details">
                                <div>
                                    <label>Title: <strong>{movie.title}</strong></label>
                                </div>
                                <div>
                                    <label>Director: <strong>{movie.director}</strong></label>
                                </div>
                                <div>
                                    <label>Genre: <strong>{movie.genre}</strong></label>
                                </div>
                                <div>
                                    <label>Metascore: <strong>{movie.metascore}</strong></label>
                                </div>
                                <div>
                                    <label>Description:</label>
                                    <p><strong>{movie.description}</strong></p>
                                </div>
                            </section>
                            
                            <section>
                                <span 
                                    className="m-2 btn btn-dark"
                                    onClick={handleFavorite}
                                    >Favorite</span>
                                <span 
                                    className="delete"
                                >
                                <input 
                                    type="button" 
                                    className="m-2 btn btn-danger" 
                                    value="Delete"
                                    onClick={handleDelete}/></span>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

    const mapStateToProps = (state) => {
        return {
            movies: state.movies.movies,
            displayFavorites: state.favorites.displayFavorites
        };
    }
    
    
    const mapDispatchToProps = (dispatch) => {
        return {
            deleteMovie: (id) => dispatch(deleteMovie(id)),
            addToFavorites: (movie) => dispatch(addToFavorites(movie))  // Add this line
        };
    };
    


    export default connect(mapStateToProps, mapDispatchToProps)(Movie);
