import React from "react";
import { useSearchParams } from "react-router-dom";
function activeuser() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParams({})}>Reset filters</button>
      </div>
      {showActiveUsers ? (<h2>Show active users</h2>) : (<h2>Showing all users</h2>)}
    </div>
  );
}
export default activeuser;
