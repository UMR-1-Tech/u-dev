export default function GetQuote() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-3xl font-bold">Request a Quote</h1>

      <form className="mt-6 flex flex-col gap-4 max-w-md">
        <input
          placeholder="Your Name"
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />

        <input
          placeholder="Email"
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />

        <textarea
          placeholder="Describe your project"
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />

        <button className="bg-blue-600 p-2 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
}