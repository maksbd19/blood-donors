import React from "react";

export const DonorBloodGroup = (props: any) => {
  const bloodGroups: any = {
    "a-positive": "A (+ve)",
    "a-negetive": "A (-ve)",
    "b-positive": "B (+ve)",
    "b-negetive": "B (-ve)",
    "o-positive": "O (+ve)",
    "o-negetive": "O (-ve)",
    "ab-positive": "AB (+ve)",
    "ab-negetive": "AB (-ve)"
  };
  const bloodGroup: string = bloodGroups[props.bg];

  return <p>Blood Group: {bloodGroup}</p>;
};
