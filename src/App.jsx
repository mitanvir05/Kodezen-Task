import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import TableBody from "./components/TableBody";
import data from "../src/assets/data.json"
function App() {
  const [open, setOpen] = useState(false);
  console.log(data);
  const [showTitle, setShowTitle] = useState(true);
  const [showCategories, setShowCategories] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showStatus, setShowStatus] = useState(true);
  const [showDate, setShowDate] = useState(true);
  const [showAuthor, setShowAuthor] = useState(true);
  const [showActions, setShowActions] = useState(true);

  return (
    <>
      <section className="bg-slate-200 overflow-hidden flex justify-center items-center h-screen font-poppins  ">
        <div className="bg-white container mx-auto shadow-lg  py-7 w-full">
          <div className="flex justify-between mb-8 px-8 text-green-950">
            <h2 className="text-2xl font-semibold capitalize">Table header</h2>
            <div className="relative">
              <FaBars
                onClick={() => setOpen(!open)}
                className="text-green-950 cursor-pointer"
                size={32}
              />
              {/* add or remove field here */}
              <div>
                <div
                  className={`bg-white shadow-2xl px-6 py-4 rounded-xl w-44 lg:w-96 absolute right-0 top-full  rotate-0 transition-all duration-300  ${
                    open ? "visible scale-1" : "invisible scale-0"
                  } `}
                >
                  <div className="mb-5">
                    <label
                      className="checkBox flex items-center  capitalize relative pl-[35px] cursor-pointer text-base "
                      htmlFor="title"
                    >
                      title
                      <input
                        type="checkbox"
                        name=""
                        id="title"
                        checked={showTitle}
                        onChange={(e) => setShowTitle(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="mb-3">
                    <label
                      className="checkBox flex items-center  capitalize relative pl-[35px] cursor-pointer text-base "
                      htmlFor="categories"
                    >
                      Categories
                      <input
                        type="checkbox"
                        name=""
                        id="categories"
                        checked={showCategories}
                        onChange={(e) => setShowCategories(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="mb-5">
                    <label
                      className="checkBox flex items-center  capitalize relative pl-[35px] cursor-pointer text-base "
                      htmlFor="price"
                    >
                      Price
                      <input
                        type="checkbox"
                        name=""
                        id="price"
                        checked={showPrice}
                        onChange={(e) => setShowPrice(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="mb-3">
                    <label
                      className="checkBox flex items-center  capitalize relative pl-[35px] cursor-pointer text-base "
                      htmlFor="date"
                    >
                      Date
                      <input
                        type="checkbox"
                        name=""
                        id="date"
                        checked={showDate}
                        onChange={(e) => setShowDate(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="mb-5">
                    <label
                      className="checkBox flex items-center  capitalize relative pl-[35px] cursor-pointer text-base "
                      htmlFor="author"
                    >
                      Author
                      <input
                        type="checkbox"
                        name=""
                        id="author"
                        checked={showAuthor}
                        onChange={(e) => setShowAuthor(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="mb-5">
                    <label
                      className="checkBox flex items-center  capitalize relative pl-[35px] cursor-pointer text-base "
                      htmlFor="status"
                    >
                      Status
                      <input
                        type="checkbox"
                        name=""
                        id="status"
                        checked={showStatus}
                        onChange={(e) => setShowStatus(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="mb-3">
                    <label
                      className="checkBox flex items-center  capitalize relative pl-[35px] cursor-pointer text-base "
                      htmlFor="actions"
                    >
                      Actions
                      <input
                        type="checkbox"
                        name=""
                        id="actions"
                        checked={showActions}
                        onChange={(e) => setShowActions(e.target.checked)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* table Wrapper */}
          <div className=" overflow-x-auto">
            <div className="max-lg:w-[1000px]">
              {/* table header */}
              <div
                className={`grid grid-cols-8 items-center place-content-between  border-b border-solid border-gray-400 px-6 pb-3 capitalize font-medium text-gray-900 text-lg gap-5`}
              >
                {showTitle && <p className=" col-span-2 ">Title</p>}
                {showCategories && <p>Categories</p>}
                {showPrice && <p>Price</p>}
                {showDate && <p>Date</p>}
                {showAuthor && <p>Author</p>}
                {showStatus && <p>Status</p>}
                {showActions && <p>Action</p>}
              </div>
              {/* table Body */}
              <div>
                {data.map((item, index) => (
                  <TableBody
                    item={item}
                    key={index}
                    showTitle={showTitle}
                    showActions={showActions}
                    showAuthor={showAuthor}
                    showCategories={showCategories}
                    showDate={showDate}
                    showPrice={showPrice}
                    showStatus={showStatus}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Table end here */}
        </div>
      </section>
    </>
  );
}

export default App;
