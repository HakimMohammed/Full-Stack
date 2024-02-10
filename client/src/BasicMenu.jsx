import more from "./assets/more.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";

export default function BasicMenu({ id }) {
  const [post, setPost] = useState({});

  const [comments, setComments] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {};

  const handleDetails = () => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        setComments(response.data);
        console.log(comments);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
    setIsOpen(true);
  };

  function close() {
    setIsOpen(false);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
    console.log(post);
  }, []);

  return (
    <div>
      <Menu as="div" className="content relative text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <img src={more}></img>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleDetails}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <EditIcon active={active} />
                    Details
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleDelete}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <DeleteIcon active={active} />
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Modal isOpen={isOpen} closeModal={close}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
          <h3 className="text-lg font-semibold text-gray-900">Deatil Post</h3>
          <button
            type="button"
            onClick={close}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-toggle="crud-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 w-100">
          <div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
              <br></br>
              <p>{post.body}</p>
            </div>
            <hr></hr>
            <div
              className="comments-container"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {comments.map((comment, index) => (
                <div key={index} className="comment mt-4">
                  <p >
                    {comment.name} <br></br><span className="text-gray-500 text-sm">{comment.name}</span>
                  </p>
                  <br></br>
                  <div>{comment.body}</div>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function EditIcon({ active }) {
  const stroke = active ? "#C4B5FD" : "#A78BFA";
  return (
    <svg
      className="mr-2 h-5 w-5 text-violet-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" />
      <line
        x1="40"
        y1="128"
        x2="216"
        y2="128"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="40"
        y1="64"
        x2="216"
        y2="64"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="40"
        y1="192"
        x2="216"
        y2="192"
        fill="#EDE9FE"
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </svg>
  );
}

function DeleteIcon({ active }) {
  const stroke = active ? "#C4B5FD" : "#A78BFA";
  return (
    <svg
      className="mr-2 h-5 w-5 text-violet-400"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={stroke}
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke={stroke} strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
