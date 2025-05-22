export default function Badge({ name }: { name: string }) {
  return (
    <li className="cursor-pointer rounded-3xl border border-green-600 bg-green-100 px-5 py-0.5 text-lg font-semibold text-slate-800 transition hover:bg-green-600 hover:text-white">
      {name}
    </li>
  );
}
