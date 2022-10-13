import { useState } from "react";

import { useId } from "react-id-generator";
import "./App.css";
import "./AppLight.css";
import BottomContainer from "./components/BottomContainer";
import Header from "./components/Header";
import InputField from "./components/InputField";
import Item from "./components/Item";
import Nav from "./components/Nav";

function App() {
  const [modeState, setModeState] = useState(false);
  // const [completeList, setCompleteList] = useState([]);
  // const [activeList, setActiveList] = useState([]);
  const [allList, setAllList] = useState([]);
  const [id, setId] = useState(0);

  const [active, setActive] = useState("all");

  const [todo, setTodo] = useState([]);

  console.log("Todo", todo);
  console.log("All", allList);

  function addTodo(event) {
    if (event.key === "Enter") {
      setId((pre) => pre + 1);
      event.preventDefault();
      setTodo((pre) => [
        ...pre,
        {
          id: id,
          note: event.target.value,
          complete: false,
        },
      ]);
      setAllList((pre) => [
        ...pre,
        {
          id: id,
          note: event.target.value,
          complete: false,
        },
      ]);
    }
  }

  function showComplete(event) {
    setActive("complete");
    setTodo(allList.filter((el) => el.complete === true));
  }

  function clearCompleted() {
    setTodo(allList.filter((el) => el.complete === false));
    setAllList(allList.filter((el) => el.complete === false));
  }

  function showActive(event) {
    setActive("active");
    setTodo(allList.filter((el) => el.complete === false));
  }

  function showAll(event) {
    setActive("all");
    setTodo(allList);
  }

  function handleComplete(id) {
    const newTodo = [...allList];
    const setComplete = newTodo?.find((todo) => todo.id === id);
    setComplete.complete = !setComplete?.complete;
    setAllList(newTodo);
    if (active !== "active") setTodo(newTodo);
  }

  function handleDelete(id) {
    setTodo(todo.filter((el) => el.id !== id));
    setAllList(todo.filter((el) => el.id !== id));
  }

  function changeMode() {
    setModeState((pre) => !pre);
  }
  return (
    <div className={modeState ? "light App" : "App"}>
      <main>
        <div className="upper"></div>
        <div className="body">
          <div className="main__container">
            <Header mode={modeState} handleModeChange={changeMode} />
            <InputField completeState={false} handleKeyEnter={addTodo} />
            <div className="items__container">
              <div className="list__container">
                {todo?.map((el, index) => (
                  <Item
                    key={index}
                    id={el.id}
                    todo={el.note}
                    handleComplete={handleComplete}
                    completeState={el.complete}
                    handleDelete={handleDelete}
                  />
                ))}
              </div>
              <BottomContainer
                left={allList.filter((el) => el.complete === false).length}
                active={active}
                showAll={showAll}
                showComplete={showComplete}
                showActive={showActive}
                clearCompleted={clearCompleted}
              />
              <div className="bottom__nav item__wrapper">
                <Nav />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
