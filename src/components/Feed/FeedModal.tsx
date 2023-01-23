import React, { useEffect, MouseEvent, Dispatch, SetStateAction } from "react";
import usePhoto from "../../Hooks/usePhoto";
import { Photo } from "../../models/models";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import { FeedModalStyle } from "./style";

interface FeedModalProps {
  photo: Photo;
  setModalPhoto: Dispatch<SetStateAction<Photo | null>>;
}
const FeedModal: React.FC<FeedModalProps> = ({ photo, setModalPhoto }) => {
  const { photoData, getPhoto, error, loading } = usePhoto();

  useEffect(() => {
    getPhoto(photo.id);
  }, [photo]);

  function handleOutsideClick(event: MouseEvent) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }
  return (
    <FeedModalStyle>
      <div className="modal" onClick={handleOutsideClick}>
        {error && <Error error={error} />}
        {loading && <Loading />}
        {photoData && <PhotoContent data={photoData} />}
      </div>
    </FeedModalStyle>
  );
};

export default FeedModal;
