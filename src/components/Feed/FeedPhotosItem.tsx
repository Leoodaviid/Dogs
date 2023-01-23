import React, { Dispatch, SetStateAction } from "react";
import { Photo } from "../../models/models";

interface FeedPhotoItemProps {
  photo: Photo;
  setModalPhoto: Dispatch<SetStateAction<Photo | undefined>>;
}
const FeedPhotosItem: React.FC<FeedPhotoItemProps> = ({
  photo,
  setModalPhoto,
}) => {
  function handleClick() {
    setModalPhoto(photo);
    console.log(photo);
  }
  return (
    <li className="img" onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
