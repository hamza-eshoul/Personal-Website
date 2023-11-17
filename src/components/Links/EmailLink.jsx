import { useInView } from "react-intersection-observer";

const EmailLink = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } fixed bottom-0 right-1 hidden translate-x-16 xmd:block xlg:translate-x-8`}
    >
      <div className="flex flex-col items-center gap-24">
        <a
          href="mailto:hamza.eshoul.pro@gmail.com"
          className="email-link animate-email-link font-mono text-[12px]"
        >
          hamza.eshoul.pro@gmail.com
        </a>
        <div className="mt-5 h-24 w-[1px] bg-lightestTertiaryColor" />
      </div>
    </div>
  );
};

export default EmailLink;
