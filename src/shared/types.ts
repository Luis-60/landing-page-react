export const SelectedPage = {
  Home: "home",
  Benefits: "benefits",
  OurClasses: "ourclasses",
  ContactUs: "contactus"
} as const;

export type SelectedPage = typeof SelectedPage[keyof typeof SelectedPage];