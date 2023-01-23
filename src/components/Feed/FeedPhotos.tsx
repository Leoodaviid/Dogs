import { useEffect, useState, Dispatch, SetStateAction } from "react";
import usePhoto from "../../Hooks/usePhoto";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotosItem from "./FeedPhotosItem";
import { FeedPhotosStyle } from "./style";

interface ModalProps {
  setModalPhoto: Dispatch<SetStateAction<any>>;
}

const FeedPhotos: React.FC<ModalProps> = ({ setModalPhoto }) => {
  const { photoData, fetchPhotos, error, loading } = usePhoto();

  useEffect(() => {
    fetchPhotos(1, 6, 0);
  }, []);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (photoData)
    return (
      <FeedPhotosStyle>
        <ul className="feed animeLeft">
          {photoData.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </FeedPhotosStyle>
    );
  else return null;
};

export default FeedPhotos;
