import { useEffect, Dispatch, SetStateAction, useState } from "react";
import { Photo } from "../../models/models";
import { PHOTOS_GET } from "../../services/MainApi/login";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import FeedPhotosItem from "./FeedPhotosItem";
import { FeedPhotosStyle } from "./style";

interface ModalProps {
  setModalPhoto: Dispatch<SetStateAction<any>>;
  setInfinite: Dispatch<SetStateAction<boolean>>;
  user: number | string | undefined;
  page: number;
}

const FeedPhotos: React.FC<ModalProps> = ({
  page,
  user,
  setModalPhoto,
  setInfinite,
}) => {
  const [photoData, setPhotoData] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPhotos() {
      const total = 3;
      try {
        setError(null);
        setLoading(true);
        const response = await PHOTOS_GET({
          page,
          total,
          user,
        });
        setPhotoData(response.data);
        if (response.status === 200 && response.data.length < total)
          setInfinite(false);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [user, page, setPhotoData, setInfinite]);

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
