import { Footer } from "./_components/footer";
import { MarketingNavbar } from "./_components/marketing-navbar";




export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full bg-slate-100">
       <MarketingNavbar/>
            <main className="pt-40 pb-20 ">
                {children}
            </main>
            <Footer/>

        </div>
    );
}
