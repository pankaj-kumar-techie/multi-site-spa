import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";

export default function FirstTimeline() {
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`${theme.background.backgroundColor} py-20`}>
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold text-center mb-4">
                        Process: Interior Design from Start to Finish
                    </h2>
                    <p className="text-gray-600 text-center">
                        Discover our comprehensive interior design process that ensures a seamless journey from initial consultation to final installation.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    {/* Initial Consultation */}
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            1
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold mb-1">Initial Consultation</h3>
                            <p className="text-gray-600">
                                We begin with a detailed discussion to understand your vision, needs, and goals for the project.
                            </p>
                        </div>
                    </div>

                    {/* Design Concept Development */}
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                            2
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold mb-1">Design Concept Development</h3>
                            <p className="text-gray-600">
                                Our experts create design concepts and mood boards that bring your ideas to life visually.
                            </p>
                        </div>
                    </div>

                    {/* Project Planning */}
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold">
                            3
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold mb-1">Project Planning</h3>
                            <p className="text-gray-600">
                                Detailed planning and budgeting are carried out, ensuring a smooth execution of the project.
                            </p>
                        </div>
                    </div>

                    {/* Construction */}
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                            4
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold mb-1">Construction</h3>
                            <p className="text-gray-600">
                                Skilled craftsmen and contractors bring the design to life, handling every aspect of construction.
                            </p>
                        </div>
                    </div>

                    {/* Final Installation */}
                    <div className="flex items-center">
                        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                            5
                        </div>
                        <div className="ml-3">
                            <h3 className="text-lg font-semibold mb-1">Final Installation</h3>
                            <p className="text-gray-600">
                                The last step involves carefully placing and arranging all elements to achieve the desired look and feel.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-semibold text-center mb-4">
                        Design Styles: From Modern to Traditional
                    </h2>
                    <p className="text-gray-600 text-center">
                        Explore a variety of interior design styles that cater to different preferences and aesthetics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {/* Modern Design */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Modern Design</h3>
                        <p className="text-gray-600">
                            Clean lines, minimalism, and functionality define this design style, creating sleek and sophisticated interiors.
                        </p>
                    </div>

                    {/* Traditional Design */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Traditional Design</h3>
                        <p className="text-gray-600">
                            Rich colors, ornate details, and classic furnishings characterize this timeless and elegant design approach.
                        </p>
                    </div>

                    {/* Scandinavian Design */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Scandinavian Design</h3>
                        <p className="text-gray-600">
                            Embrace simplicity, functionality, and natural elements in this style that focuses on comfort and coziness.
                        </p>
                    </div>

                    {/* Industrial Design */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Industrial Design</h3>
                        <p className="text-gray-600">
                            Exposed materials, raw textures, and utilitarian aesthetics create an urban and edgy design look.
                        </p>
                    </div>

                    {/* More Design Styles */}
                    {/* Add more design styles as needed */}
                </div>
            </div>
        </section>
    );
}
