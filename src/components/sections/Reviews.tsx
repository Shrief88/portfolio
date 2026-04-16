"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AnimatedSectionWrapper from "../AnimatedSectionWrapper";
import MaxWidthWrapper from "../MaxWidthWrapper";
import data from "@/content/data.json";
import { cn } from "@/lib/utils";

type Review = {
  name: string;
  title: string;
  review: string;
  link?: string;
};

const Reviews = () => {
  const reviews = data.reviews as Review[];

  return (
    <MaxWidthWrapper>
      <AnimatedSectionWrapper id="reviews">
        <h1 className="section-heading mb-10" data-section-number="04.">
          What Clients Say
        </h1>

        <Swiper
          className="reviews-swiper mt-4 w-full"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={24}
          loop={reviews.length > 1}
          grabCursor
        >
          {reviews.map((review) => (
            <SwiperSlide
              key={`${review.name}-${review.title}`}
              className="lg:h-auto"
          
            >
              {review.link ? (
                <a
                  href={review.link}
                  target={
                    review.link.startsWith("http://") ||
                    review.link.startsWith("https://")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    review.link.startsWith("http://") ||
                    review.link.startsWith("https://")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={cn(
                    "group relative flex lg:h-full  flex-col justify-between overflow-hidden rounded-[28px] border border-separator bg-secondary/45 p-6 md:p-8 backdrop-blur-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-foreground/70 md:hover:border-foreground/40"
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(144,224,196,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(97,165,194,0.14),transparent_30%)]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <p className="font-fira text-sm text-foreground">
                        Client Review
                      </p>
                      <div>
                        <h2 className="text-2xl font-semibold text-primary-foreground md:text-[28px]">
                          {review.name}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground md:text-base">
                          {review.title}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full border border-foreground/15 bg-background/20 p-3 text-foreground/80 transition-transform duration-300 group-hover:rotate-6">
                      <Quote className="size-5" />
                    </div>
                  </div>

                  <div className="relative mt-10">
                    <p className="text-base leading-8 text-primary-foreground md:text-lg">
                      &ldquo;{review.review}&rdquo;
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 font-fira text-sm text-foreground transition-transform duration-300 group-hover:translate-x-1">
                      View review
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </a>
              ) : (
                <article className="relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[28px] border border-separator bg-secondary/45 p-6 md:p-8 backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(144,224,196,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(97,165,194,0.14),transparent_30%)]" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <p className="font-fira text-sm text-foreground">
                        Client Review
                      </p>
                      <div>
                        <h2 className="text-2xl font-semibold text-primary-foreground md:text-[28px]">
                          {review.name}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground md:text-base">
                          {review.title}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full border border-foreground/15 bg-background/20 p-3 text-foreground/80">
                      <Quote className="size-5" />
                    </div>
                  </div>

                  <p className="relative mt-10 text-base leading-8 text-primary-foreground md:text-lg">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </article>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatedSectionWrapper>
    </MaxWidthWrapper>
  );
};

export default Reviews;
