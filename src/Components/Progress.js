import React from "react";

export default function Progress({ donations }) {
  return (
    <>
      <h2>Raised 441 of $1000</h2>

      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 25%;"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          25%
        </div>
      </div>
    </>
  );
}
