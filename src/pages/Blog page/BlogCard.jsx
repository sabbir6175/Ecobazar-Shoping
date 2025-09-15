import { FaRegCommentDots, FaTag, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ image, category, title, description }) => {
  return (
    // The outermost div needs a height to work with flex.
    // `h-full` ensures the card takes up the full height of its grid cell.
    <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full object-cover" />
      
      {/* This div is the main content area. `flex-grow` makes it expand vertically. */}
      <div className="p-3 flex flex-col flex-grow">
        <div className="flex items-center mt-3 text-sm text-gray-600 gap-3">
          {/* Category */}
          <div className="flex items-center gap-2">
            <FaTag className="text-green-600" />
            <span className="text-xs">{category}</span>
          </div>
          {/* Author */}
          <div className="flex items-center gap-2">
            <FaUserAlt className="text-green-600" />
            <span className="text-xs">By Admin</span>
          </div>
          {/* Comments */}
          <div className="flex items-center gap-2">
            <FaRegCommentDots className="text-green-600" />
            <span className="text-xs">65 Comments</span>
          </div>
        </div>

        {/* This div grows to push the link down. */}
        <div className="flex-grow">
          <h3 className="font-semibold text-lg my-2">{title}</h3>
          <p className="text-sm mt-0 text-gray-600 h-10 overflow-hidden">
            {description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
        </div>

        {/* `mt-auto` pushes the link to the bottom of the flex container. */}
        <Link
          to="/singleBlog"
          className="text-green-500 text-sm inline-block mt-auto"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;