import React from "react";
import { BsTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const DisplayItem = ({ log }) => {
  const { deleteLog } = useContext(GlobalContext);

  return (
    <div className="d-flex justify-content-around bg-secondary mt-1">
      <button>
        <BsTrashFill onClick={() => deleteLog(log.id)} />
      </button>
      <h5>${log.amount}</h5>
      <h5>{log.info}</h5>
    </div>
  );
};

export default DisplayItem;
