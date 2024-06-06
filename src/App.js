import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Modla from "./component/Modla";

function App() {
  let [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button className="btn btn-danger" onClick={() => setOpen(true)}>
        <FaTrashAlt /> Delete
      </button>
      <Modla open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <FaTrashAlt className="text-4xl text-red-600 block mx-auto" />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-bold text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="btn btn-light"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setOpen(false)}
            >
              Delete
            </button>
          </div>
        </div>
      </Modla>
    </div>
  );
}

export default App;
