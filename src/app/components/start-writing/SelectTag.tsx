import { prisma } from "@/app/lib/prisma";

export default async function SelectTag() {
    const tags = await prisma.tag.findMany();
  return (
    <div className="flex flex-col text-sm gap-y-2">
      <label htmlFor="tag">Post Tag</label>
      <select
        name="tag"
        id="tag"
        className="px-2 py-1.5 border-2 text-xs rounded-md focus:outline-green-500 focus:outline-1 cursor-pointer"
      >
        {tags.map((tag) => (
          <option value={tag.id} key={tag.id}>
            {tag.name}
          </option>
        ))}
      </select>
    </div>
  );
}
