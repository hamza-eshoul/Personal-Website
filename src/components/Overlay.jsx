const Overlay = () => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-20 min-h-screen 
            backdrop-blur-[6px] xmd:hidden`}
      // onClick={() => setIsMobileMenu(false)}
    />
  );
};

export default Overlay;
