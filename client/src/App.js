import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Task from "./components/Task";
import { getTask } from "./redux/Tasks/task.action";

function App() {
  // const dispatch = useDispatch();
  const { task } = useSelector((stroe) => stroe.task);

  // useEffect(() => {
  //   dispatch(getTask());
  // }, []);



  return (
    <>
      <Navbar
        link={"https://deepthought.education/assets/images/logo/logo.svg"}
      />
      <Task />
    </>
  );
}

export default App;
