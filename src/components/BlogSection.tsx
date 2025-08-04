import React from "react";
import ArrowRightIcon from "./icons/ArrowRightIcon";

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: "/assets/blog-image-1.jpg",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "#",
    },
    {
      image: "/assets/blog-image-2.jpg",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      link: "#",
    },
    {
      image: "/assets/blog-image-3.jpg",
      title: "Revamping the Membership Model with Triathlon Australia",
      link: "#",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col gap-xl">
          {/* Section Header */}
          <div className="text-center flex flex-col gap-sm">
            <h2 className="heading-xl">Caring is the new marketing</h2>
            <p
              className="text-secondary"
              style={{
                lineHeight: "24px",
                maxWidth: "628px",
                margin: "0 auto",
              }}
            >
              The Nexcent blog is the best place to read about the latest
              membership insights, trends and more. See who's joining the
              community, read about how our community are increasing their
              membership income and lot's more.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-3 gap-lg">
            {blogPosts.map((post, index) => (
              <div key={index} className="card-blog">
                <img src={post.image} alt={post.title} />
                <div className="card-blog-content">
                  <div className="flex flex-col gap-sm">
                    <h3
                      className="heading-md text-secondary"
                      style={{ lineHeight: "28px" }}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-xs">
                      <span className="text-primary-color heading-md">
                        Readmore
                      </span>
                      <ArrowRightIcon
                        width={16}
                        height={10}
                        color="var(--color-primary)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
