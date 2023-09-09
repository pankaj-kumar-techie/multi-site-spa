import React, { useContext, useEffect, useState } from "react";
import BlogCard from "../../../components/cards/BlogCard";
import TitleCover from "../../../components/common/title-cover/TitleCover";
import { Blog } from "../../../modal/Section";
import { ThemeContext } from "../../../themes/ThemeProvider";
import SectionShimmer from "../../../components/common/shimmer/SectionShimmer";
import NavigationButtons from "../../../components/common/button/NavigationButtons";
import { useDynamicTextColor } from "../../../themes/DynamicTextColor"; // Import the hook

export default function FirstBlog(props: { data: any }) {
  const { theme } = useContext(ThemeContext);
  const [blogList, setBlogList] = useState<any>({
    title: "",
    description: "",
    blogs: [],
  });
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const textColor = useDynamicTextColor(theme.colors.primary || ""); // Use the hook for text color

  useEffect(() => {
    setBlogList(props.data);
    setIsLoading(false);
  }, [props.data]);

  const handlePrev = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(Math.min(blogList.blogs.length - 1, startIndex + 1));
  };

  const shouldRenderSingleSlide = window.innerWidth < 768; // Check for mobile view

  return (
    <section className={`bg-${theme.colors.primary} font-bold`}>
      <div className="container mx-auto px-4 py-12">
        <TitleCover
          title={blogList.title}
          subtitle={blogList.subTitle}
          titleColor={`${textColor}`} // Use dynamic text color here
          subtitleColor={`${textColor}`} // Use dynamic text color here
        />
        {isLoading ? (
          <SectionShimmer title={blogList.title}></SectionShimmer>
        ) : (
          <div className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {blogList.blogs
                .slice(startIndex, startIndex + (shouldRenderSingleSlide ? 1 : 4))
                .map((blog: Blog) => (
                  <BlogCard
                    key={blog.id}
                    id={blog.id}
                    title={blog.title}
                    description={blog.description}
                    descriptionContext={blog.descriptionContext}
                    imageSrc={blog.imageSrc}
                    imageAlt={blog.imageAlt}
                  />
                ))}
            </div>
            <NavigationButtons
              onPrev={handlePrev}
              onNext={handleNext}
              isPrevDisabled={startIndex === 0}
              isNextDisabled={startIndex + (shouldRenderSingleSlide ? 1 : 4) >= blogList.blogs.length}
            />
          </div>
        )}
      </div>
    </section>
  );
}
