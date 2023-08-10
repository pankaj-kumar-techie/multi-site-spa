
export default function CardShimmer() {
    return (
        <div className="relative h-80 transform transition duration-1000 hover:scale-110 rounded-lg overflow-hidden">
            <div className="bg-gray-300 animate-pulse w-full h-full"></div>
            <div className="absolute inset-0 bg-gray-700 opacity-0"></div>
        </div>
    )
}
