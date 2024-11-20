import UserDataManager from "./UserDataManager";
import ReactHookForm from "./ReactHookForm";
import { FetchData } from "./FetchData";
import { Memo } from "./Memo";
import { Callback } from "./Callback";

function App() {
  return (
    <>
      <Memo />
      <hr style={{ margin: "50px" }} />
      <Callback />
      <hr style={{ margin: "50px" }} />
      <UserDataManager />
      <hr style={{ margin: "50px" }} />
      <FetchData />
      <hr style={{ margin: "50px" }} />
      <ReactHookForm />
      <hr style={{ margin: "50px" }} />
    </>
  );
}

export default App;
