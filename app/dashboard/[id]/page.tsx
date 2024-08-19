'use client'
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()

  console.log(router)
    return (
      <main className="flex flex-col min-h-screen p-3 bg-white">
        <div className="flex h-10 md:h-52 shrink-0 items-end rounded-lg bg-primary px-10 py-5">
          <div className="text-white text-6xl">{`${params.id}`}</div>
        </div>
      </main>
    );
  }