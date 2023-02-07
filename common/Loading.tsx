import Image from "next/image";
import Logo from "../public/assets/logo.svg";
export default function Loading() {
  return (
    <>
      <style>{`
        .loader {
          width: 200px;
          height: 200px;
          animation: spin 2s linear infinite;
          border: none;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="loader">
        <Image
          className=""
          src={Logo}
            width={200}
             height={200}
          alt=""
        />
      </div>
    </>
  );
}
