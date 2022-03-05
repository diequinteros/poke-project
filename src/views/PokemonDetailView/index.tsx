import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchPokemon from '../../hooks/useFetchPokemon';
import './index.scss';

const PokemonDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: pokemon, loading, error } = useFetchPokemon(id || '');

  const backToList = () => {
    navigate(-1);
  };

  return (
    <>
      {!loading && !error && (
        <div className="detail-container">
          <div className="detail-container-options">
            <i className="bi bi-arrow-left-circle-fill" onClick={backToList} aria-hidden="true" />
            <i className="bi bi-heart-fill" />
          </div>
          <h1 className="detail-container-title">{pokemon?.name}</h1>
          <div className="inner-detail-container">
            <img src={pokemon?.image} alt="" className="inner-detail-image" />
            <div className="stats">
              <table className="stats__table">
                <tr>
                  <td>Hp</td>
                  <td>46</td>
                  <td>barra</td>
                </tr>
                <tr>
                  <td>Attack</td>
                  <td>46</td>
                  <td>barra</td>
                </tr>
                <tr>
                  <td>Defense</td>
                  <td>46</td>
                  <td>barra</td>
                </tr>
                <tr>
                  <td>Sp. Atk</td>
                  <td>46</td>
                  <td>barra</td>
                </tr>
                <tr>
                  <td>Sp. Def</td>
                  <td>46</td>
                  <td>barra</td>
                </tr>
                <tr>
                  <td>Speed</td>
                  <td>46</td>
                  <td>barra</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
      {loading && '...loading'}

      {error && 'An error has ocurred ...'}
    </>
  );
};

export default PokemonDetailView;
