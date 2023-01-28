import { useParams } from "react-router-dom";
import { useEffect } from "react";
import usePhoto from "../../Hooks/usePhoto";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";
import Head from "../Helper/Head";

const Photo = () => {
  const { getPhoto, photoComments, error, loading } = usePhoto();
  const { id } = useParams();

  useEffect(() => {
    getPhoto(id);
  }, [id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (photoComments)
    return (
      <section className="container mainContainer">
        <Head title={photoComments.photo.title} />
        <PhotoContent single={true} data={photoComments} />
      </section>
    );
  else return null;
};

export default Photo;
