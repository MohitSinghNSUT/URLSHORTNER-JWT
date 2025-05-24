import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../enviroment";

function UserData() {
  const [data, setData] = useState([]);
  const [userUrl, setUserUrl] = useState("");
  const fetch = async () => {
    try {
      const newData = await axios.get(url + "/", {
        withCredentials: true,
      });
      console.log(newData, "data fetched from server");
      setData(newData.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
    return () => {};
  }, []);
  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      url + "/urls",
      {
        url: userUrl,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response);
    if (response.data.error == null) {
      fetch();
    }
  };
  return (
    <div>
      <form type="submit" onSubmit={handleUrlSubmit}>
        <input
          type="text"
          placeholder="Enter Url"
          value={userUrl}
          onChange={(e) => setUserUrl(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      <div className="container">
        <ul>
          {data.map((elem, idx) => {
            let newShortUrl = `http://localhost:3000/urls/${elem.shortId}`;
            return (
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                key={idx}
              >
                <a href={elem.redirectUrl}>{elem.redirectUrl}</a>
                <li>{elem.visitCount}</li>
                <a href={newShortUrl}>{newShortUrl}</a>
              </div>
            );
          })}
          <a href="google.com">google</a>
        </ul>
      </div>
    </div>
  );
}

export default UserData;
