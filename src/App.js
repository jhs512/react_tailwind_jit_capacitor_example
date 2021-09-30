import classNames from "classnames/bind";
import { useState } from "react";

function App() {
  const [actived, setActived] = useState(false)
  return <div onClick={() => setActived(!actived)} className={classNames("w-[100px]", "h-10", {"bg-red-500": actived})}>ㅋㅋ</div>;
}

export default App;
