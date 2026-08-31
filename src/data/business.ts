export const business = {
  name: "Range & River Cleaning Co.",
  shortName: "Range & River",
  ownerFirstName: "Doug",
  category: "Residential and commercial cleaning",
  city: "Fort Worth",
  region: "TX",
  country: "US",
  serviceAreaLabel: "Fort Worth, Texas",
  description:
    "Residential and commercial cleaning in Fort Worth, with clear service paths for homes, offices, and local workplaces.",
  phone: "(929) 448 1567",
  phoneE164: "+19294481567",
  phoneHref: "tel:+19294481567",
  email: null,
  streetAddress: null,
  hours: null,
  formDestination: null
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Residential", href: "/residential-cleaning/" },
  { label: "Commercial", href: "/commercial-cleaning/" },
  { label: "What We Clean", href: "/what-we-clean/" },
  { label: "Fort Worth", href: "/service-area/fort-worth/" },
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" }
] as const;

export const services = [
  {
    name: "Residential Cleaning",
    href: "/residential-cleaning/",
    eyebrow: "For homes",
    summary:
      "Cleaning scopes for houses, apartments, and everyday living spaces in Fort Worth."
  },
  {
    name: "Commercial Cleaning",
    href: "/commercial-cleaning/",
    eyebrow: "For workplaces",
    summary:
      "Cleaning plans for offices and local commercial spaces, shaped around the facility and requested frequency."
  },
  {
    name: "Deep Cleaning",
    href: "/deep-cleaning/",
    eyebrow: "More detail",
    summary:
      "A more detailed reset for buildup, overlooked surfaces, seasonal needs, or a fresh starting point."
  },
  {
    name: "Move Cleaning",
    href: "/move-cleaning/",
    eyebrow: "Empty spaces",
    summary:
      "Move in and move out cleaning for renters, homeowners, landlords, and property managers."
  },
  {
    name: "Office & Janitorial",
    href: "/office-janitorial/",
    eyebrow: "Ongoing upkeep",
    summary:
      "Restrooms, breakrooms, common areas, touchpoints, trash, and floors for local offices."
  }
] as const;

export const routes = [
  "/",
  "/residential-cleaning/",
  "/commercial-cleaning/",
  "/deep-cleaning/",
  "/move-cleaning/",
  "/office-janitorial/",
  "/what-we-clean/",
  "/service-area/fort-worth/",
  "/about/",
  "/faq/",
  "/quote/",
  "/privacy/"
] as const;

export const faqs = [
  {
    question: "Does Range & River clean both homes and businesses?",
    answer:
      "Yes. Range & River serves residential and commercial cleaning requests in Fort Worth. Home and workplace quotes follow separate paths so the scope starts with the right questions."
  },
  {
    question: "What is included in a cleaning?",
    answer:
      "The final scope depends on the property and service selected. Common requests cover kitchens, bathrooms, living areas, offices, restrooms, breakrooms, floors, dusting, and trash. The exact checklist should be confirmed in the quote before service."
  },
  {
    question: "What is the difference between standard and deep cleaning?",
    answer:
      "Standard cleaning focuses on recurring upkeep and commonly used surfaces. Deep cleaning allows more time for buildup, edges, fixtures, detail work, and areas that are not part of routine upkeep. The final distinction should be written into the quote."
  },
  {
    question: "Can I request move in or move out cleaning?",
    answer:
      "Yes. Move cleaning is designed for empty or mostly empty homes and apartments. Share the property size, condition, access details, and deadline so the requested scope can be reviewed."
  },
  {
    question: "Do you provide office or janitorial cleaning?",
    answer:
      "Yes. Fort Worth offices and local workplaces can request commercial cleaning or janitorial support. Facility type, square footage, service areas, preferred timing, and frequency are collected during the quote process."
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Fort Worth is the confirmed primary market. Additional cities and travel limits have not been published yet. Use the quote form with your ZIP code so coverage can be confirmed before scheduling."
  },
  {
    question: "Do you bring cleaning supplies?",
    answer:
      "The supplies and equipment policy is still being finalized. Add any product preferences, sensitivities, or site requirements to the quote request so they can be discussed before service."
  },
  {
    question: "How much does cleaning cost?",
    answer:
      "Pricing is not published yet. A quote can consider the property type, size, current condition, requested tasks, frequency, access, and desired timing. Range & River will not publish price claims until the quoting model is confirmed."
  },
  {
    question: "Is the quote form active?",
    answer:
      "Not in this preview. The form demonstrates the intended residential and commercial intake experience, but it does not send or store information until an approved destination is connected."
  }
] as const;
