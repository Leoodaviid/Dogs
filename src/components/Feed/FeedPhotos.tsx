import { useEffect, Dispatch, SetStateAction } from "react";
import usePhoto from "../../Hooks/usePhoto";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotosItem from "./FeedPhotosItem";
import { FeedPhotosStyle } from "./style";

interface ModalProps {
  setModalPhoto: Dispatch<SetStateAction<any>>;
  user: number;
}

const FeedPhotos: React.FC<ModalProps> = ({ user, setModalPhoto }) => {
  const { photoData, getPhotos, error, loading } = usePhoto();

  useEffect(() => {
    getPhotos(1, 6, user);
  }, [user]);

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
