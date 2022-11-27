import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Cat from "./Cat";

const CategoryDetails = () => {
  const all = useLoaderData();
  const [mobileBook, setMobileBook] = useState(null);

  return (
    <div className="grid grid-cols-1 m-5 lg:grid-cols-3 md:grid-cols-2 gap-3">
      {all.map((singlecategory, i) => (
        <Cat
          key={singlecategory._id}
          singlecategory={singlecategory}
          setMobileBook={setMobileBook}
        >
          {" "}
        </Cat>
      ))}

      {mobileBook && (
        <BookingModal
          mobileBook={mobileBook}
          setMobileBook={setMobileBook}
        ></BookingModal>
      )}
    </div>
  );
};

export default CategoryDetails;
