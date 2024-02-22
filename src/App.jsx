import { useState } from "react";
import TableBody from "./components/TableBody";
import data from "../public/data.json";
function App() {
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
