export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {/* Include shared UI here -> header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}
