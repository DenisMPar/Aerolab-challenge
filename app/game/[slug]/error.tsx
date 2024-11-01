"use client";
import { GameDetailError } from "@/components/game-detail/error";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <GameDetailError />;
}
