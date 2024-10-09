import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizatioPage() {
    return (
        <div className="flex h-screen w-full justify-center items-center">
            <OrganizationList
                hidePersonal
                afterSelectOrganizationUrl="/organization/:id"
                afterCreateOrganizationUrl="/organization/:id"
            />

        </div>

    )
}