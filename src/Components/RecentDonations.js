import React from "react";

export default function RecentDonations({ donations }) {
  return (
    <>
      <h2>Recent Donations</h2>
      
      {donations.map((donation) => {
        return (
          <div>
            <h3>
              {donation.name} donated ${donation.amount}
            </h3>
            <p>{donation.caption}</p>
          </div>
        );
      })}
    </>
  );
}
