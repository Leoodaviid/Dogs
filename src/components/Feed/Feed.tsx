import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
interface UsuarioProps {
  user: number;
}
const Feed: React.FC<UsuarioProps> = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState<any>();

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
