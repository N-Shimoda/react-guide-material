import "./Child.css";
import { Fragment } from "react";

const Child = () => {
  return (
    <Fragment key="1">
      {/* POINT keyはFragmentが受け取ることができる唯一の属性 */}
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        フラグメントは複数のタグをreturnで返したいときに利用する。
      </p>
    </Fragment>
  );
};

export default Child;
