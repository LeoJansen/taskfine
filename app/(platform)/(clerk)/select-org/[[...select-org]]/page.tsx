import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizatioPage(){
    return (
        <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
        />
    )
}