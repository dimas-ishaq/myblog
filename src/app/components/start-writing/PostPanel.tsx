import SelectCategory from "./SelectCategory";
import SelectTag from "./SelectTag";
export default function PostPanel() {
  return (
    <div className="fixed w-44 mx-auto">
      <div className="flex flex-col w-full pt-8 space-y-4">
        <h3 className="text-center font-medium text-lg mb-2">Post Panel</h3>
          <div className="flex flex-col text-sm gap-y-2">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="px-2 py-1.5 border-2 text-xs rounded-md focus:outline-green-500 focus:outline-1"
              required
            />
          </div>
          <SelectCategory />
          <SelectTag />
          <div className="flex flex-col text-sm gap-y-2 mb-4">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              className="px-2 py-1.5 border-2 text-xs rounded-md focus:outline-green-500 focus:outline-1 cursor-pointer"
            >
              <option value="DRAFT" defaultChecked>
                Draft
              </option>
              <option value="PUBLISHED">Published</option>
              <option value="PRIVATE">Private</option>
              <option value="ARCHIVED">Archived</option>
            </select>
          </div>
          <button
            type="submit"
            className="text-sm bg-green-500 px-2.5 py-1.5 rounded-md text-white hover:bg-green-600 w-full "
          >
            Publish
          </button>
      </div>
    </div>
  );
}
