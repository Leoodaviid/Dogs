import React, { useContext, useState, useRef, useEffect } from "react";
import { Photo, Comment } from "../../models/models";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import { CommentStyle } from "./style";

interface PhotoCommentsProps {
  id: Photo;
  comments: Comment[];
}
const PhotoComments: React.FC<PhotoCommentsProps> = ({ id, comments }) => {
  const [newComments, setNewComments] = useState(() => comments);
  const commentsSection = useRef<any>(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  });
  return (
    <CommentStyle>
      <ul ref={commentsSection} className="comments">
        {newComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={id} setNewComments={setNewComments} />}
    </CommentStyle>
  );
};

export default PhotoComments;
