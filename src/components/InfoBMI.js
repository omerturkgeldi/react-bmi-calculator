import React from "react";

function InfoBMI(props) {
  return (
    <div className="container infoDiv">
      <div className="infobox">
        <h3 className="infoTitle">BMI Calculator</h3>
        The Body Mass Index (BMI) Calculator can be used to calculate BMI value
        and corresponding weight status while taking age into consideration. Use
        the "Metric Units" tab for the International System of Units or the
        "Other Units" tab to convert units into either US or metric units. Note
        that the calculator also computes the Ponderal Index in addition to BMI,
        both of which are discussed below in detail.
      </div>
    </div>
  );
}

export default InfoBMI;
