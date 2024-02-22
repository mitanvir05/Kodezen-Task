/* eslint-disable react/prop-types */
import { FiEdit } from "react-icons/fi";

const TableBody = ({
  showTitle,
  showActions,
  showCategories,
  showAuthor,
  showDate,
  showPrice,
  showStatus,
  item,
}) => {
  const { title, date, category, author, price } = item || {};

  return (
    <div
      className={`grid grid-cols-8 gap-5 place-content-between   border-b border-solid border-gray-400 px-6 pb-3 capitalize font-medium text-gray-900 text-sm py-3 items-center`}
    >
      {showTitle && (
        <div className=" col-span-2 ">
          <p>{title}</p>
        </div>
      )}
      {showCategories && (
        <div className="  ">
          <p>{category}</p>
        </div>
      )}
      {showPrice && (
        <div className="  ">
          <p>${price}</p>
        </div>
      )}
      {showDate && (
        <div>
          <p>{date}</p>
        </div>
      )}
      {showAuthor && (
        <div>
          <p>{author}</p>
        </div>
      )}
      {showStatus && (
        <div>
          <select
            className="px-3 py-2 rounded-md border border-solid border-blue-700 outline-0"
            name=""
            id=""
          >
            <option value="publish">Publish</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      )}
      {showActions && (
        <div>
          <button className="bg-blue-800 text-white rounded-md px-4 py-2 flex items-center gap-2">
            <FiEdit /> Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default TableBody;
