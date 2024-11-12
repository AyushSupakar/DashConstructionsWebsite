import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, SearchIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>DASH&nbsp;</span>
        <span className={title({ color: "violet" })}>CONSTRUCTIONS&nbsp;</span>
        <br />
        <span className={title()}>
          
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Let your dreams to be constructed...
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"#"}
        >
          Our Projects
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.sponsor}
        >
          <SearchIcon size={20} />
          Services We Offer
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Explore Our Page
          </span>
        </Snippet>
      </div>
    </section>
  );
}
