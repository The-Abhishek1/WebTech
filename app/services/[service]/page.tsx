"use client";
import ServiceFooter from "@/app/(services)/ServiceComponets/ServiceFooter";
import AppFinal from "@/app/(services)/appdevelopment/AppFinal";
import BusinessFinal from "@/app/(services)/businessanalysis/BusinessFinal";
import DigitalFinal from "@/app/(services)/digitalmarketing/DigitalFinal";
import SoftwareFinal from "@/app/(services)/softwaresolutions/SoftwareFinal";
import UIUXFinal from "@/app/(services)/uiuxDetails/UIUXFinal";
import WebFinal from "@/app/(services)/webDetails/WebFinal";
import React from "react";

export default function page({ params }: { params: { service: string } }) {
  return (
    <>
      {params.service == "webdevelopment" ? (
        <>
          <WebFinal /> <ServiceFooter />
        </>
      ) : null}
      {params.service == "uiuxdesign" ? (
        <>
          <UIUXFinal />
          <ServiceFooter />
        </>
      ) : null}
      {params.service == "digitalmarketing" ? (
        <>
          <DigitalFinal />
          <ServiceFooter />
        </>
      ) : null}
      {params.service == "appdevelopment" ? (
        <>
          <AppFinal />
          <ServiceFooter />
        </>
      ) : null}
      {params.service == "businessanalysis" ? (
        <>
          <BusinessFinal />
          <ServiceFooter />
        </>
      ) : null}
      {params.service == "softwareservices" ? (
        <>
          <SoftwareFinal />
          <ServiceFooter />
        </>
      ) : null}
    </>
  );
}
