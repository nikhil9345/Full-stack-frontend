import React, { useEffect, useState } from "react";
import './Mylist.css';

const Mylist = ({ searchQuery, myList }) => {
  const [filteredMyList, setFilteredMyList] = useState(myList);

  // Filter the list whenever the search query or myList changes
  useEffect(() => {
    setFilteredMyList(
      myList.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, myList]); // Re-run filter if searchQuery or myList changes

  return (
    <div className="lbody">
      <div className="listb">
        {filteredMyList.length === 0 ? (
          <p style={{ color: "gray" }}>
            No items found. Add movies or series to your list, or adjust your search.
          </p>
        ) : (
          filteredMyList.map((data, index) => (
            <div key={index} className="list">
              <div className="limg">
                <img src={data.imgVertical} alt={data.title} />
              </div>
              <div className="ltext">
                <h1>{data.title}</h1>
                <h6>Description: {data.description}</h6>
                <h5>Language: {data.language}</h5>
                <h5>Genre: {data.genre}</h5>
                <button className="lbtn">Play</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Mylist;
