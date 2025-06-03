import useWindowSize from "../hooks/useWindowSize";

export default function User({ data, elementRef }) {
  const { avatar, firstName, lastName, gender, id } = data;

  const { width } = useWindowSize();
  if (width > 640) {
    return (
      <>
        <div
          className="w-full max-w-2xl rounded-md grid grid-cols-[50px_repeat(4,_1fr)] items-center p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer hover:bg-brand-100 "
          ref={elementRef}
        >
          <span>{id}</span>
          <img
            src={`/avatars/${gender}/${avatar}.png`}
            alt="avatar"
            className="w-10"
          />
          <span>{firstName}</span>
          <span>{lastName}</span>
          <span>{gender}</span>
        </div>
      </>
    );
  }

  return (
    <div
      className="w-full max-w-sm h-52 rounded-md p-4 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer  relative"
      ref={elementRef}
    >
      <img src={`/avatars/${gender}/${avatar}.png`} className="w-24  " alt="" />

      <span className="absolute top-2 right-2">ID: {id}</span>
      <div>
        <p>
          <span className="font-semibold">Full Name: </span>{" "}
          {`${firstName} ${lastName}`}
        </p>
        <p>
          {" "}
          <span className="font-semibold">Gender: </span> {gender}
        </p>
      </div>
    </div>
  );
}
// export default function User({ data, elementRef }) {
//   const { avatar, firstName, lastName, gender, id } = data;
//   return (
//     <div
//       className="w-full max-w-sm h-52 rounded-md p-4 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer  relative"
//       ref={elementRef}
//     >
//       <img src={`/avatars/${gender}/${avatar}.png`} className="w-24  " alt="" />

//       <span className="absolute top-2 right-2">ID: {id}</span>
//       <div>
//         <p>
//           <span className="font-semibold">Full Name: </span>{" "}
//           {`${firstName} ${lastName}`}
//         </p>
//         <p>
//           {" "}
//           <span className="font-semibold">Gender: </span> {gender}
//         </p>
//       </div>
//     </div>
//   );
// }
