import React from "react";

const ListNew = ({ todoList }) => {
  const displayList = () => {
    return (
      <div>
        {todoList.map((item, index) => {
          return (
            <div key={index}>
              <li>{item.todo}</li>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <ul>{displayList()}</ul>
    </div>
  );
};

export default ListNew;
