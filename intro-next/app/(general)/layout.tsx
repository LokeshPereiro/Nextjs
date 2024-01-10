export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center p.24">
      <h1 className="text-lg">Hello World</h1>
      {children}
    </div>
  );
}
