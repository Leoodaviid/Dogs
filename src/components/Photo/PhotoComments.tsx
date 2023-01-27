import React, { useContext, useState, useRef, useEffect } from "react";
import { Photo, Comment } from "../../models/models";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import { CommentStyle } from "./style";

interface PhotoCommentsProps {
  id: Photo;
  comments: Comment[];
  single?: boolean;
}
const PhotoComments: React.FC<PhotoCommentsProps> = ({
  id,
  comments,
  single,
}) => {
  const [newComments, setNewComments] = useState(() => comments);
  const commentsSection = useRef<any>(null);
  const { login } = useContext(UserContext);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  });
  return (
    <CommentStyle>
      <ul
        ref={commentsSection}
        className={`comments ${single ? `single` : ""}`}
      >
        {newComments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={single}
          id={id}
          setNewComments={setNewComments}
        />
      )}
    </CommentStyle>
  );
};

export default PhotoComments;
