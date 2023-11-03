import Loading from "@/src/components/layout/Loading";
import Sidebar from "@/src/components/AppSide";

export default function DefaultLoading({ lng }: { lng: string | "de" }) {
  return (
    <div id="page-wrapper" className="flex w-full h-full flex-col md:flex-row">
      {/* @ts-ignore Server Component */}
      <Sidebar language={lng} session={undefined} />
      <div
        id="page-content"
        className="flex w-full md:w-1/2 h-full  my-auto flex-col justify-center items-center"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Loading message="..." />
        </div>
      </div>
    </div>
  );
}
