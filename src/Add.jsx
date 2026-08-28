import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Add({ onAddMovie }) {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [sinopse, setSinopse] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !genero) return alert('Preencha título e gênero!');
    onAddMovie({ id: Date.now(), titulo, genero, ano, avaliacao, sinopse });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h2>Cadastrar Novo Filme</h2>
      <div className="form-group">
        <input className="form-input" type="text" placeholder="1. Título do Filme" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      </div>
      <div className="form-group">
        <input className="form-input" type="text" placeholder="2. Gênero (ex: Ação, Sci-Fi)" value={genero} onChange={(e) => setGenero(e.target.value)} />
      </div>
      <div className="form-group">
        <input className="form-input" type="number" placeholder="3. Ano de Lançamento" value={ano} onChange={(e) => setAno(e.target.value)} />
      </div>
      <div className="form-group">
        <input className="form-input" type="number" min="1" max="5" placeholder="4. Avaliação (1 a 5)" value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} />
      </div>
      <div className="form-group">
        <textarea className="form-textarea" placeholder="5. Sinopse do Filme" value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
      </div>
      <button type="submit" className="btn-submit">Salvar Filme</button>
    </form>
  );
}

export default Add;