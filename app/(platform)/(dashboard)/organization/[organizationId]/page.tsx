import { db } from "@/lib/db";



const OrganizationIdPage = () => {


  return (
    <div>
      <form action={create}>
        <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border border-black p-1"
        />
      </form>
      </div>
  )
}

export default OrganizationIdPage;