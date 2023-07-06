import React from "react";
import { Link } from "react-router-dom";
import mencottenjacket from "../Image/menscottonjacket.jpg";
import whitegold from "../Image/whitegold.jpg";

export default function Firstimage() {
  return (
    <div className="row mb-2 d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <div className="row">
              <div className="col order-md-2">
                <h3 className="mb-0">mens cotton jacket</h3>
                <div className="mb-1 text-body-secondary">june 3</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <Link
                  to="/"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <img src={mencottenjacket} alt="Thumbnail" className="bi" />
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src={mencottenjacket}
                  alt="Thumbnail"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Secondimage = () => {
  return (
    <div className="row mb-2 d-flex align-items-center justify-content-center">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <div className="row">
              <div className="col">
                <h3 className="mb-0">white Gold</h3>
                <div className="mb-1 text-body-secondary">june 3</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.This is a wider card with
                  supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link
                  to="/"
                  className="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <img src={whitegold} alt="Thumbnail" className="bi" />
                </Link>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src={whitegold}
                  alt="Thumbnail"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/////have you seen ? i have used same image twice. to solve we need to used map function //
