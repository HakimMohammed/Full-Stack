export default function BasicMenu({id}) {

  return (
    <div as="div" className="content relative text-left">
      <div>
        <div className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <img src={more}></img>
        </div>
      </div>
      <div
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="z-50 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <div>
              {({ active }) => (
                <button
                  onClick={handleEdit}
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <EditIcon active={active} />
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="px-1 py-1">
            <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditIcon({ active }) {
  return (
    <svg
      className="mr-2 h-5 w-5"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill={active ? "#8B5CF6" : "#EDE9FE"}
        stroke={active ? "#C4B5FD" : "#A78BFA"}
        strokeWidth="2"
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
