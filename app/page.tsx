
export default function Home() {

  const variable1 = process.env.variable1;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>MI app test env</h2>
      { variable1 && <p className="text-sm text-gray-500">Environment variable: {variable1}</p>}
    </div>
  );
}
