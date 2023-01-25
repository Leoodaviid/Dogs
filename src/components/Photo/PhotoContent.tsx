import { useContext } from "react";
import { Photo } from "../../models/models";
import { PhotoContentStyle } from "./style";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";
import { UserContext } from "../../UserContext";
import PhotoDelete from "./PhotoDelete";

interface PhotoContentProps {
  data: Photo[] | any;
}
const PhotoContent: React.FC<PhotoContentProps> = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <PhotoContentStyle>
      <div className="photoContent">
        <div className="imgContent">
          <img src={photo.src} alt={photo.title} />
        </div>
        <div className="details">
          <div>
            <p className="author">
              {user.data && user.data.username === photo.author ? (
                <PhotoDelete id={photo.id} />
              ) : (
                <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
              )}
              <span className="visualizacoes">{photo.acessos}</span>
            </p>
            <h1 className="title">
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <ul className="attributes">
              <li>{photo.peso} Kg</li>
              <li>{photo.idade} Anos</li>
            </ul>
          </div>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </PhotoContentStyle>
  );
};

export default PhotoContent;
