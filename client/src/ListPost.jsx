import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./DataTable";
import BasicMenu from "./BasicMenu";

export default function ListPost() {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIdLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setIdLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const countWords = (text) => {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);
    return words.length;
  };
  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userId,
      sortable: true,
      style: {
        color: "#202124",
        fontSize: "14px",
      },
    },
    {
      name: "Post ID",
      selector: (row) => row.id,
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
    },
    {
      name: "Body",
      selector: (row) => row.body,
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
    },
    {
      name: "Word Count",
      selector: (row) => countWords(row.body),
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
    },
    {
      cell: (row) => <BasicMenu id={row.id} onDelete={deletePost}/>,
      width: "80px",
      style: {
        borderBottom: "1px solid #FFFFFF",
        marginBottom: "-1px",
      },
    },
  ];

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    console.log(posts);
  }

  return (
    <>
      {isLoading && <div>Loadign ...</div>}
      {posts && <DataTable data={posts} columns={columns}/>}
    </>
  );
}
