import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Acceuil() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "http://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  });

  return (
    <div className="flex flex-col text-center m-auto">
      <PaginatedItems data={posts} itemsPerPage={20} />
    </div>
  )
}

function Items({ currentItems }) {

  const countWords = (text) => {
    const trimmedText = text.trim();
    const words = trimmedText.split(/\s+/);
    return words.length;
  }
  return (
    <>
    <table>
        <tr>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Word Count</th>
            <th>Operations</th>
        </tr>
        {currentItems &&
        currentItems.map((item) => (
          <tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>{countWords(item.body)}</td>
          </tr>
        ))}
    </table>
      
    </>
  );
}

function PaginatedItems({ data, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        activeClassName="text-center"
        breakClassName="text-center"
        containerClassName="flex justify-center space-x-2 py-10"
        breakLabel="..."
        nextLabel={<button>Next</button>}
        nextClassName="text-center"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        pageClassName="text-center"
        previousLabel={<button>Previous</button>}
        previousClassName="text-center"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
