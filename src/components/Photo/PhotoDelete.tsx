import React from "react";
import { Photo } from "../../models/models";
interface PhotoDeleteProps {
  id: Photo[];
}
const PhotoDelete: React.FC<PhotoDeleteProps> = ({ id }) => {
  return (
    <div>
      <button className="buttonPhotoDelete">Deletar</button>
    </div>
  );
};

export default PhotoDelete;
