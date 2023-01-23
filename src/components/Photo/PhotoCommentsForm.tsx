import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import useComments from "../../Hooks/useComments";
import { Photo, Comment } from "../../models/models";
import { FormCommentsStyle } from "./style";
import Error from "../Helper/Error";

interface CommentsFormProps {
  id: Photo[] | any;
  setNewComments: Dispatch<SetStateAction<Comment[]>>;
}
const PhotoCommentsForm: React.FC<CommentsFormProps> = ({
  id,
  setNewComments,
}) => {
  const [comment, setComment] = useState<string>();
  const { sendNewComment, data, error } = useComments();
  const token = window.localStorage.getItem("token");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    sendNewComment({ comment }, id, token);
    if (data) {
      setComment("");
      setNewComments((newComments) => [...newComments, data]);
    }
  }

  return (
    <FormCommentsStyle>
      <form className="formComment" onSubmit={handleSubmit}>
        <textarea
          className="formTextarea"
          id="comment"
          name="comment"
          placeholder="Coment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button className="buttonFormComment">
          <Enviar />
        </button>
        <Error error={error} />
      </form>
    </FormCommentsStyle>
  );
};

export default PhotoCommentsForm;
