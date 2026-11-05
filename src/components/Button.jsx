const base =
  "inline-flex shrink-0 items-center justify-center rounded-full border-2 border-ink font-bold leading-none whitespace-nowrap transition duration-150 motion-safe:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0";

const variants = {
  ink: "bg-ink text-paper hover:bg-ink/85",
  paper: "bg-paper text-ink hover:bg-butter",
  butter: "bg-butter text-ink hover:brightness-95",
};

const sizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-5 text-sm",
};

// Tombol/link yang konsisten. `as` bisa "button", "a", atau Link dari react-router.
export default function Button({
  as: Tag = "button",
  variant = "paper",
  size = "md",
  className = "",
  type,
  ...props
}) {
  const typeProp = Tag === "button" ? { type: type ?? "button" } : {};
  return (
    <Tag
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...typeProp}
      {...props}
    />
  );
}
