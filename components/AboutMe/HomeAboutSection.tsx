type HomeAboutSectionProps = {};
const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({}) => {
  return (
    <div className="flex justify-center items-center text-lg container md:text-4xl  pt-20 pb-5 flex-col gap-4 ">
      <p className=" cursor-default leading-snug  text-[27px]">
        <span className="opacity-70 dark:opacity-50">Hi, I&apos;m </span>
        <span className="dark:opacity-100">Sabir Koutabi</span>.{" "}
        <span className="opacity-70 dark:opacity-50">
          After four years in finance, I found my passion for web development.
          As a self-taught developer, I offer a unique perspective, focused on
          enhancing digital experiences in a down-to-earth manner.
        </span>
      </p>
    </div>
  );
};

export default HomeAboutSection;
