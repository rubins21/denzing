import { MaxWidthWrapper } from "@/components/utils/MaxWidthWrapper";
import React from "react";
import { Tower } from "./Tower";
import { MiniCard1 } from "./MiniCard1";
import { MiniCard2 } from "./MiniCard2";
import { LongCard } from "./LongCard";
import { SimpleGrid } from "./SimpleGrid";
import { SectionHeading } from "@/components/utils/SectionHeading";
import { SectionSubheading } from "@/components/utils/SectionSubheading";
import { SectionHeadingSpacing } from "@/components/utils/SectionHeadingSpacing";

export const Content = () => {
  return (
    <section>
      <MaxWidthWrapper className="relative z-20 pb-20 pt-20 md:pb-28 md:pt-40">
        <SectionHeadingSpacing>
          <SectionHeading>
            Show the people
            <br />
            <span className="bg-gradient-to-br from-primary-light to-primary-dark bg-clip-text text-transparent">
              what makes you great
            </span>
          </SectionHeading>
          <SectionSubheading>
            Here's a good way to show some high levels pros as to what your
            product does and for who.
          </SectionSubheading>
        </SectionHeadingSpacing>

        <Grid />
        <div className="my-12 h-[1px] w-full bg-gradient-to-r from-primary-dark/0 via-primary/50 to-primary-dark/0 md:my-20" />
        <SimpleGrid />
      </MaxWidthWrapper>
    </section>
  );
};

const Grid = () => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
    <Tower />
    <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
      <MiniCard1 />
      <MiniCard2 />
      <LongCard />
    </div>
  </div>
);
