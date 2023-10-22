import React, { useContext } from "react";
import { PackageDetail } from "../../modal/Section";
import { ThemeContext } from "../../themes/ThemeProvider";

export default function PackageDetailCard(packageDetailData: PackageDetail) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`bg-${theme.colors.primary} container mx-auto px-4 py-8` }>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold mb-4">Page Title</h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Page content goes here.
                </p>
            </div>
        </div>
    </div>
    );
}
