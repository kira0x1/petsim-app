export default function Content({ children }) {
  return (
    <>
      <div className="rounded-md border-2 bg-slate-500 h-20 w-96 m-auto flex mt-20">
        {children}
      </div>
    </>
  );
}
