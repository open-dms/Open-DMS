import Loading from "@/src/components/layout/Loading";

export default function DefaultLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loading message="..." />
    </div>
  );
}
