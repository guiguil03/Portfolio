import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <div
        className="overflow-hidden pb-2 animate-typewriter"
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold">
          {words.map((word, idx) => (
            <span
              key={`word-${idx}`}
              className={cn("dark:text-white text-black", word.className)}
            >
              {word.text}{" "}
            </span>
          ))}
        </div>
      </div>
      <span
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500 animate-blink",
          cursorClassName
        )}
      ></span>
    </div>
  );
};
