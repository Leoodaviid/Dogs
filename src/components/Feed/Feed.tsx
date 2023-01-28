import { useState, useEffect } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
interface UsuarioProps {
  user: number | string | undefined;
}
const Feed: React.FC<UsuarioProps> = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState<any>();
  const [pages, setPages] = useState<number[]>([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function InfiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", InfiniteScroll);
    window.addEventListener("scroll", InfiniteScroll);
    return () => {
      window.removeEventListener("wheel", InfiniteScroll);
      window.removeEventListener("scroll", InfiniteScroll);
    };
  }, [infinite]);
  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          key={page}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
