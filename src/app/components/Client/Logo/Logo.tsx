import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <img src="/logo.webp" alt="" className="text-[40px] mx-auto" />
      </Link>
    </>
  );
};
