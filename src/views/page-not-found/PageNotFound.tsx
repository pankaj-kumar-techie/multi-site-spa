import TitleCover from "../../components/common/title-cover/TitleCover";

function PageNotFound() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <TitleCover title={"404"} titleColor="text-white tracking-widest" titleSize="text-9xl font-extrabold"
                subtitle={"Page Not Fund"} subtitleColor={"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute"}></TitleCover>

            <button className="mt-5">
                <a href={"/echo"}
                    className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>
                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        {/*<Link to="/website/portfolio">Go Home</Link>*/}
                    </span>
                </a>
            </button>
        </main>
    );
}
export default PageNotFound;
