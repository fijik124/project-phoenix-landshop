import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ status: string }>;
}) {
  // 1. Await the params to get the dynamic value
  const { status } = await params;

  // 2. Customize content based on the status argument
  const isSuccess = status === "success";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 text-white">
      <div className="max-w-md text-center space-y-6">
        {/* Dynamic Icon/Header */}
        <div className="text-6xl mb-4">{isSuccess ? "🎉" : "⚠️"}</div>

        <h1 className="text-4xl font-bold">
          {isSuccess ? "Submission Successful!" : "Something went wrong"}
        </h1>

        <p className="text-xl text-gray-300">
          {isSuccess
            ? "Thank you for your feedback. We will get back to you shortly."
            : "We couldn't process your request. Please try again later."}
        </p>

        <Link
          href="/"
          className={`inline-block px-6 py-3 rounded-lg font-semibold transition-colors ${
            isSuccess
              ? "bg-green-600 hover:bg-green-700"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
