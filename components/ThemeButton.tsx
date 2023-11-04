import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className="flex items-center justify-center w-8 h-8 rounded-full icon bg-zinc-100 bg-opacity-10 top-4 right-4"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <BsFillSunFill />
      ) : (
        <BsFillMoonFill className="text-white" />
      )}
    </button>
  );
};

export default ThemeButton;

