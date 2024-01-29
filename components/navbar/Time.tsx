import { memo, useEffect, useState } from "react";

type TimeProps = {};

const Time: React.FC<TimeProps> = memo(() => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="hover:text-color1/45 dark:hover:text-white/45 transition duration-500 cursor-default ">
      {currentTime.toLocaleTimeString([], {
        timeZone: "Africa/Casablanca",
      })}
    </div>
  );
});
Time.displayName = "Time";

export default Time;
