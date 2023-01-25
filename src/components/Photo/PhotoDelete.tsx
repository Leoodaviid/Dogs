import React from "react";
import useComments from "../../Hooks/useComments";
import { ButtonDeleteStyle } from "./style";

interface PhotoDeleteProps {
  id: string;
}
const PhotoDelete: React.FC<PhotoDeleteProps> = ({ id }) => {
  const { photoDelete, error, loading } = useComments();
  function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      photoDelete(id);
      if (error == null) window.location.reload();
    }
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
