import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Detail.css";
export default function Detail(props) {
  const [infoDetail, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  function backHome() {
    navigate("/home");
  }
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setInfo(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setInfo({ id });
  }, [id]);
  return (
    <div className="detail-contenedor">
      <div className="btn">
        <button className="volver" onClick={backHome}>
          Volver
        </button>
      </div>
      {infoDetail.id ? (
        <div className="detail-hijo">
          <h5>{infoDetail.name}</h5>
          <h5>{infoDetail.status}</h5>
          <h5>{infoDetail.species}</h5>
          <h5>{infoDetail.genero}</h5>
          <h5>{infoDetail.origin?.name}</h5>
          <div>
            <img className="img" src={infoDetail.image} alt={infoDetail.name} />
          </div>
        </div>
      ) : (
        <h5>Loading...</h5>
      )}
    </div>
  );
}
