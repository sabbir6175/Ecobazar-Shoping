import React from "react";

const BlogPage = () => {
  return (
    <div className="my-10">
      {/* top bar blog page */}
      <div className="flex  justify-between">
        <div>
          <button>Filter</button>
        </div>
        {/* Center  */}
        <div>
          <select className="border rounded px-3 py-1 text-sm">
            <option>Sort by: Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        {/* right side */}
        <div>
            <h1>38 Result Found</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

