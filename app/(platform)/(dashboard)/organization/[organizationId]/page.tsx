import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server';

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      Organization PAge
      </div>
  )
}

export default OrganizationIdPage;