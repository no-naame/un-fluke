import { Content } from "@prismicio/client";
import {PrismicRichText, PrismicText, SliceComponentProps} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import {PrismicNextImage} from "@prismicio/next";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
          className="relative py-32 text-center font-medium md:py-40"
      >
        <div
            className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/50 blur-[160px] filter"/>

        <div className="mt-8 max-w-xl text-balance text-5xl">
          <PrismicRichText field={slice.primary.heading}/>
        </div>

        <div className="glass-container max-w-32 mt-20 rounded-lg bg-gradient-to-b from-slate-800 to-slate-900 p-4 md:rounded-xl">
          <PrismicNextImage field={slice.primary.image}/>
        </div>

      <div className="mt-14 text-xl">
        <PrismicRichText field={slice.primary.body}/>
      </div>
      </Bounded>
  );
};

export default CallToAction;
