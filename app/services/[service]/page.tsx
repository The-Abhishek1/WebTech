"use client";
import Final from "@/app/ServiceDetails/Final";

import React from "react";

export default function page({ params }: { params: { service: string } }) {
  return (
    <>
      <Final />
    </>
  );
}
