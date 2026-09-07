export const dashboardData = {
  water: {
    value: 67.2,
    change: 8.4,
    label: "SDG 6.1.1 Basic or Safely Managed",
  },

  sanitation: {
    value: 46.5,
    change: 5.2,
    label: "SDG 6.2.1a",
  },

  hygiene: {
    value: 17.8,
    change: -2.1,
    label: "SDG 6.2.1b Basic",
  },

  targetRunRate: {
    value: 5.46,
    multiplier: "6.5x",
  },

  trend: [
    { year: "2000", water: 43.1, sanitation: 36.2, hygiene: 8.1 },
    { year: "2004", water: 47.3, sanitation: 38.4, hygiene: 9.8 },
    { year: "2008", water: 51.6, sanitation: 40.1, hygiene: 11.4 },
    { year: "2012", water: 55.8, sanitation: 42.3, hygiene: 13.2 },
    { year: "2016", water: 59.4, sanitation: 44.1, hygiene: 15.1 },
    { year: "2020", water: 63.8, sanitation: 45.2, hygiene: 16.5 },
    { year: "2024", water: 67.2, sanitation: 46.5, hygiene: 17.8 },
  ],

  regions: [
    { name: "SW", value: 81 },
    { name: "SS", value: 74 },
    { name: "SE", value: 69 },
    { name: "NC", value: 58 },
    { name: "NW", value: 54 },
    { name: "NE", value: 49 },
  ],
};