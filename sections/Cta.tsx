export default function CTA() {
  return (
    <div
      id={"cta"}
      className="relative w-full overflow-hidden rounded-[40px] bg-primary p-6 sm:p-10 md:p-20"
    >
      <div className="absolute inset-0 hidden h-full w-full overflow-hidden md:block">
        <div className="absolute top-1/2 right-[-45%] aspect-square h-[800px] w-[800px] -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-purple-400/30"></div>
          <div className="absolute inset-0 scale-[0.8] rounded-full bg-purple-300/30"></div>
          <div className="absolute inset-0 scale-[0.6] rounded-full bg-purple-200/30"></div>
          <div className="absolute inset-0 scale-[0.4] rounded-full bg-purple-100/30"></div>
          <div className="absolute inset-0 scale-[0.2] rounded-full bg-purple-50/30"></div>
          <div className="absolute inset-0 scale-[0.1] rounded-full bg-white/30"></div>
        </div>
      </div>

      <div className="relative z-10 pl-0 md:pl-16 lg:pl-32">
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:mb-4 md:text-5xl">
          Let&apos;s Get In Touch.
        </h1>
        <p className="mb-6 max-w-md text-base text-white sm:text-lg md:mb-8">
          Whether you have a question about our services, need technical
          support, or want to explore partnership opportunities, our team is
          ready to assist.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="tel:+2349139985618"
            className="flex w-full items-center justify-between rounded-full bg-background/10 backdrop-blur-sm px-5 py-3 text-white hover:bg-background/20 transition-colors sm:w-[240px]"
          >
            <span className="font-medium">Book a discovery call</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-primary-foreground"></span>
          </a>
          <a
            href="mailto:peeps.io.inc@gmail.com?subject=Inquiry%20from%20Website"
            className="flex w-full items-center justify-between rounded-full bg-background/10 backdrop-blur-sm px-5 py-3 text-white hover:bg-background/20 transition-colors sm:w-[240px]"
          >
            <span className="font-medium">Send us an email</span>
            <span className="h-5 w-5 flex-shrink-0 rounded-full bg-primary-foreground"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
