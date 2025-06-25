import type { JSX } from "react";

export const SelectedPage = {
  Home: "home",
  Benefits: "benefits",
  OurClasses: "ourclasses",
  ContactUs: "contactus"
} as const;

export type SelectedPage = typeof SelectedPage[keyof typeof SelectedPage];

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}