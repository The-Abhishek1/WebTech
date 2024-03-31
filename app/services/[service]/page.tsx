"use client";
import AppFinal from "@/app/(services)/appdevelopment/AppFinal";
import BusinessFinal from "@/app/(services)/businessanalysis/BusinessFinal";
import DigitalFinal from "@/app/(services)/digitalmarketing/DigitalFinal";
import UIUXFinal from "@/app/(services)/uiuxDetails/UIUXFinal";
import WebFinal from "@/app/(services)/webDetails/WebFinal";
import React from "react";

export default function page({ params }: { params: { service: string } }) {
  return (
    <>
      {params.service == "webdevelopment" ? <WebFinal /> : null}
      {params.service == "uiuxdesign" ? <UIUXFinal /> : null}
      {params.service == "digitalmarketing" ? <DigitalFinal /> : null}
      {params.service == "appdevelopment" ? <AppFinal /> : null}
      {params.service == "businessanalysis" ? <BusinessFinal /> : null}
    </>
  );
}
