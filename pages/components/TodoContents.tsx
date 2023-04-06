import { useState } from "react";
import Form from "./Form";
import styles from "../../styles/sass/style.module.scss";

type Todo = {
  id: number;
  todo: string;
  status: boolean;
  deleted: boolean;
};

const TextContents = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoStatus, setTodoStatus] = useState("全て");

  const todoProcess = ["全て", "完了", "未完了", "削除"];

  const getTodo = (
    id: number,
    todo: string,
    status: boolean,
    deleted: boolean
  ) => {
    setTodos([...todos, { id, todo, status, deleted }]);
  };

  const filterTodos = () => {
    if (todoStatus === "削除") {
      const deletedTodos = todos.filter((value) => value.deleted === true);

      return deletedTodos;
    } else if (todoStatus === "完了") {
      const completeTodos = todos.filter((value) => value.status === true && value.deleted === false);

      return completeTodos;
    } else if (todoStatus === "未完了") {
      const incompleteTodos = todos.filter((value) => value.status === false && value.deleted === false);

      return incompleteTodos;
    }

    return todos;
  };

  //Todoが完了・未完了かを切り替える
  const isTodoChangeStatus = (id: number) => {
    const changeStatus = todos.map((index) => {
      if (index.id === id) {
        index.status = !index.status;
      }
      return index;
    });

    setTodos(changeStatus);
  };

  const handleRemove = (id: number, deleted: boolean) => {
    setTodos((todos) => {
      const deepCopy = todos.map((todo) => ({ ...todo }));
      const newTodos = deepCopy.map((todo) => {
        if (todo.id === id) {
          todo.deleted = !deleted;
        }
        return todo;
      });
      return newTodos;
    });
  };

  return (
    <main>
      <Form addTodo={getTodo} />
      <div className={styles.contents}>
        <div className={styles.contents_tabs}>
          {todoProcess.map((status, index) => {
            return (
              <>
                <button
                  className={`${styles.contents_tabs_tab} ${
                    todoStatus === status && styles.is_active
                  }`}
                  key={index}
                  onClick={() => setTodoStatus(status)}
                >
                  {status}
                </button>
              </>
            );
          })}
        </div>
        {filterTodos().map((value, index) => {
          return (
            <li className={styles.list_item} key={index}>
              <p
                className={`${styles.list_item_ttl} ${
                  value.status && styles.is_done_item_ttl
                }`}
              >
                {value.todo}
              </p>
              <button
                className={`${styles.list_item_button} ${
                  value.status && styles.is_done_item_button
                }`}
                onClick={() => isTodoChangeStatus(value.id)}
              >
                完了
              </button>
              <button
                onClick={() => handleRemove(value.id, value.deleted)}
                className={styles.list_item_button}
              >
                {value.deleted ? "復元" : "削除"}
              </button>
            </li>
          );
        })}
      </div>
    </main>
  );
};

export default TextContents;
