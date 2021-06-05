import { useEffect, useState } from "react";
import { Button } from "../App.style.js";

function CalculateBMI(props) {
  const [height, setHeight] = useState(
    localStorage.getItem("height") ? localStorage.getItem("height") : 0
  );
  const [weight, setWeight] = useState(
    localStorage.getItem("weight") ? localStorage.getItem("weight") : 0
  );
  const [bmi, setBmi] = useState(
    localStorage.getItem("bmi") ? localStorage.getItem("bmi") : 0
  );
  const [status, setStatus] = useState("");

  function handleHeight(e) {
    let h = e.target.value;
    setHeight(h);
    localStorage.setItem("height", h);
  }

  function handleWeight(e) {
    let w = e.target.value;
    setWeight(w);
    localStorage.setItem("weight", w);
  }

  // Calculation
  function handleBmi(e) {
    e.preventDefault();
    let bmi = (weight / (height * height)) * 10000;
    setBmi(bmi.toFixed(2));
    localStorage.setItem("bmi", bmi.toFixed(2));
  }

  useEffect(() => {
    if (bmi == 0) {
      setStatus("");
      setBmi("");
    } else if (bmi <= 18.5) {
      setStatus("Underweight");
    } else if (bmi > 18.5 && bmi < 25) {
      setStatus("Normal weight");
    } else if (bmi >= 25 && bmi < 30) {
      setStatus("Overweight");
    } else if (bmi >= 30) {
      setStatus("Obesity");
    } else {
      setBmi("Plase enter valid numbers");
    }
  }, [bmi]);

  return (
    <div className="container mainContainer">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <h1 className="d-flex justify-content-center mb-5 title-calculate">
            Calculate Your BMI!
          </h1>
        </div>
        <div className="col-md-2"></div>

        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <form>
              <div className="form-group mb-1  input-group-lg">
                <input
                  value={height}
                  onChange={handleHeight}
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Height"
                />
              </div>
              <small className="form-text text-muted">
                Enter your height in centimeters
              </small>
              <div className="form-group input-group-lg mt-4 mb-1">
                <input
                  value={weight}
                  onChange={handleWeight}
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Weight"
                />
              </div>
              <small className="form-text text-muted mb-3">
                Enter your weight in kilograms
              </small>
              <div className="bmiInfos">
                <div className="form-group form-check bmiDiv">{bmi}</div>
                <div className="form-group form-check bmiDiv">{status}</div>
              </div>

              <div className="row calcButton">
                <div className="col-md-6">
                  <Button backgroundColor="#5df095" onClick={handleBmi}>
                    Calculate
                  </Button>
                </div>
                <div className="col-md-6">
                  <a href="/dietplan">
                    <Button backgroundColor="#82e0ec">See Diet</Button>
                  </a>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default CalculateBMI;
