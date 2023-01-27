import React from "react";
import usePhoto from "../../Hooks/usePhoto";
import { ButtonDeleteStyle } from "./style";

interface PhotoDeleteProps {
  id: string;
}
const PhotoDelete: React.FC<PhotoDeleteProps> = ({ id }) => {
  const { photoDelete, photoDeleteData, error, loading } = usePhoto();
  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) photoDelete(id);
    window.location.reload();
  }
  return (
    <ButtonDeleteStyle>
      {loading ? (
        <button disabled className="buttonPhotoDelete">
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className="buttonPhotoDelete">
          Deletar
        </button>
      )}
    </ButtonDeleteStyle>
  );
};

export default PhotoDelete;
