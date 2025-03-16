
import { findManyCategory } from "@/app/actions/category";
import Categories from "@/app/dashboard/post-settings/categories/page";

type Categories = {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}[];

export default async function SelectCategory() {
  const categories: Categories = await findManyCategory();

  return (
    <div className="flex flex-col text-sm gap-y-2">
      <label htmlFor="category">Post Category</label>
      <select
        name="category"
        id="category"
        className="px-2 py-1.5 border-2 text-xs rounded-md focus:outline-green-500 focus:outline-1 cursor-pointer"
      >
        {categories?.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
