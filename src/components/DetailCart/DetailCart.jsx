import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";

import UserBadge from "../UserBadge/UserBadge";
import Comment from "../Comment/Comment";
import "./style.css";
import { useState } from "react";

function DetailCart({
  userName,
  avatarUrl,
  userId,
  imageUrl,
  likes,
  isLikedByYou,
  comments,
}) {
  const [isCommentsShow, setIsCommentsShow] = useState(false);

  function renderComments() {
    if (comments.length > 2 && !isCommentsShow) {
      const comentsCopy = [...comments];
     const comentsForRender = comentsCopy.splice(comments.length - 2, 2);

      return (
        <>
          <span
            className="detailCartCommentTitle"
            onClick={() => setIsCommentsShow(true)}
          >{`Показати ще ${
            comments.length - comentsForRender.length
          } коментарів`}</span>

          {comentsForRender.map((comment) => (
            <Comment
              nickName={comment.nickName}
              text={comment.text}
            />
          ))}
        </>
      );
    }

    return comments.map((comment) => (
      <Comment
        nickName={comment.nickName}
        text={comment.text}
      />
    ));
  }

  return (
    <div className="detailCartRoot">
      <div className="detailCartHeader">
        <UserBadge
          nickName={userName}
          avatarUrl={avatarUrl}
          id={userId}
        />
      </div>
      <div>
        <img
          className="detailCartImg"
          src={imageUrl}
          alt="User img"
        />
      </div>
      <div className="detailCartButtons">
        {isLikedByYou ? (
          <AiFillHeart className="detailCartLike" />
        ) : (
          <AiOutlineHeart className="detailCartLike" />
        )}
        <RiMessage2Line />
      </div>
      <div className="detailCartLikes">{`Oцінили ${likes} людей`}</div>
      <div className="detailCartComments">{renderComments()}</div>
      <textarea className="detailCartTextarea"></textarea>
    </div>
  );
}

export default DetailCart;
