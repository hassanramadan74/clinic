import AnimatedHeader from "@/components/AnimatedHeader";
import ReservationForm from "@/components/ReservationForm";
import React from "react";

function Reservation() {
  return (
    <>
      <AnimatedHeader
        imageUrl="/images/background.jpg"
        title="Transform Your Beauty with Confidence"
        subtitle="Book Your Plastic Surgery Consultation Today"
        gradientClass="bg-gradient-to-r from-pink-500/80 to-sky-500/80"
        imagePosition="70%"
      />
      <ReservationForm />
    </>
  );
}

export default Reservation;
