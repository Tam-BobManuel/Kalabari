import type { CSSProperties } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function PhotoLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <CircleLoader
        color="#ffffff"
        loading
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}