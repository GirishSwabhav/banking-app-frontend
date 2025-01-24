import Header from "../(components)/header/page";
import NavBar from "../(components)/navbar/page";

export const metadata = {
    title: "Maxus",
    description: "Maxus banking app",
};

export default function RootLayout({ children }) {
    return (
        <body>
            <div className="bg-slate-50 w-screen h-screen flex">
                <NavBar />
                <div className="flex-1 h-screen flex flex-col">
                    <section className="flex-1 overflow-y-auto py-9 px-12">
                        <Header />
                        {children}
                    </section>
                </div>
            </div>
        </body>
    );
}
