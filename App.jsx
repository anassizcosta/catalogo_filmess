import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Add from './Add';
import List from './List';
import './App.css';

function App() {
  // 1. Carrega os filmes do localStorage ao iniciar (ou usa a lista inicial caso esteja vazio)
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('catalogo_filmes');
    if (savedMovies) {
      return JSON.parse(savedMovies);
    }
    return [
      {
        id: 1,
        titulo: 'Interstellar',
        genero: 'Ficção Científica',
        ano: '2014',
        avaliacao: 5,
        sinopse: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade.'
      }
    ];
  });

  // 2. Toda vez que a lista de filmes mudar, salva automaticamente no localStorage
  useEffect(() => {
    localStorage.setItem('catalogo_filmes', JSON.stringify(movies));
  }, [movies]);

  // Função para adicionar um novo filme
  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  // Função para deletar um filme por ID
  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<List movies={movies} onDeleteMovie={handleDeleteMovie} />} 
          />
          <Route 
            path="/adicionar" 
            element={<Add onAddMovie={handleAddMovie} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;