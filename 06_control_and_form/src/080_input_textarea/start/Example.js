import { useState } from "react";

const Example = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const clear = () => {
    alert("本当に削除しますか？");
    setTitle("");
    setContent("");
  }
  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>

      <label htmlFor="title_box">タイトル</label>
      <div>
        <input
          id="title_box"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <label htmlFor="content_box">投稿内容</label>
      <div>
        <textarea
          id="content_box"
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={clear}>Clear all</button>
    </>
  );
};

export default Example;
