"use client";
import { useRouter } from "next/navigation";
const Button = ({ slug }: { slug: string }) => {
  const router = useRouter();
  function handleClick() {
        router.push(`/dashboard/events/${slug}/settings`);
    }
  return (
    <button
      onClick={() => handleClick()}
      type="button"
      className="font-semibold text-orange-600"
    >
      Change
    </button>
  );
};

export default Button;
