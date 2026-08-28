import React from 'react';

function List({ movies, onDeleteMovie }) {
  return (
    <div className="list-container">
      <h2 className="movie-list-title">Filmes Cadastrados</h2>
      {movies.length === 0 ? (
        <p style={{ color: '#a0a6c0' }}>Nenhum filme cadastrado ainda.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <h3>
                {movie.titulo} <span className="movie-year">{movie.ano && `(${movie.ano})`}</span>
              </h3>
              <span className="movie-genre">{movie.genero}</span>
              <div className="movie-rating">
                {movie.avaliacao ? '⭐'.repeat(movie.avaliacao) : 'Sem nota'}
              </div>
              <p className="movie-synopsis">{movie.sinopse || 'Sem sinopse cadastrada.'}</p>
              
              {onDeleteMovie && (
                <button 
                  onClick={() => onDeleteMovie(movie.id)}
                  style={{
                    marginTop: '15px',
                    background: 'transparent',
                    border: '1px solid #e50914',
                    color: '#e50914',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  🗑️ Excluir
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default List;