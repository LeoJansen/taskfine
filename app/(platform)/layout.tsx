import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <ClerkProvider>
            {children}
            </ClerkProvider>

        </div>
    );
}

export default PlatformLayout;