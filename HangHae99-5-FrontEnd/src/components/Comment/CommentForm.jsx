import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __addComment } from "../../Redux/modules/commentSlice";

export const CommentForm = () => {
  const init = {
    comment: "",
  };

  const [ment, setMent] = useState(init);
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.boards.board.id);
  const userName = useSelector((state) => state.boards.board.username);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setMent({ boardId: boardId, ...ment, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(__addComment(ment));
    setMent(init);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {userName}:
      <input
        type="text"
        name="comment"
        value={ment.comment}
        maxLength={500}
        placeholder="소중한 의견을 남겨주세요!"
        onChange={(e) => onChangeHandler(e)}
      />
      <button>추가</button>
    </form>
  );
};
