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
      } fixed bottom-0 right-1`}
    >
      <div className="flex flex-col items-center gap-32">
        <p className="email-link animate-email-link">
          hamza.eshoul.pro@gmail.com
        </p>
        <div className="mt-5 h-24 w-[1px] bg-lightestTertiaryColor" />
      </div>
    </div>
  );
};

export default EmailLink;
