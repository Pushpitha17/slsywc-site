const branches = [
  "1. University of Moratuwa (UOM)",
  "2. University of Peradeniya (UOP)",
  "3. University of Ruhuna (UOR)",
  "4. University of Colombo School of Computing (UCSC)",
  "5. Sri Lanka Institute of Information Technololgy (SLIIT)",
  "6. General Sri John Kotelawala Defence University (KDU)",
  "7. Wayamba University of Sri Lanka (WUSL)",
  "8. Informatics Institute of Technology (IIT)",
  "8. Uva Wellassa University (UWU)",
  "10. Sabaragamuwa University of Sri Lanka (SUSL)",
  "11. Open University of Sri Lanka (OUSL)",
  "12. University of Kelaniya (UOK)",
  "13. National School of Business Management (NSBM)",
  "14. University of Sri Jayawardenepura (USJP)",
  "15. Sri Lanka Technological Campus (SLTC)",
  "16. Rajarata University of Sri Lanka (RUSL)",
  "17. University of Vavuniya (UOV)",
  "18. University of Jaffna (UOJ)",
  "19. University of Vocational Technology (UOVT)",
  "20. South Eastern University of Sri Lanka (SEUSL)",
  "21. National Institute of Business Management (NIBM)",
  "22. Colombo International Nautical and Engineering College (CINEC)",
  "23. Other"
]

const membership_catgories = [
  "Student Member",
  "Graduate Student Member",
  "Member",
  "Senior Member",
  "Fellow"
]

const volunteering_entities = [
  {
    id: "IEEE Sri Lanka Section",
    label: "IEEE Sri Lanka Section"
  },
  {
    id: "IEEE Sri Lanka Sri Lanka Section Student Activities Committee (SLSAC)",
    label:
      "IEEE Sri Lanka Sri Lanka Section Student Activities Committee (SLSAC)"
  },
  {
    id: "IEEE Young Professionals Sri Lanka (YPSL)",
    label: "IEEE Young Professionals Sri Lanka (YPSL)"
  },
  {
    id: "IEEE Women in Engineering Sri Lanka (WIE SL)",
    label: "IEEE Women in Engineering Sri Lanka (WIE SL)"
  },
  {
    id: "IEEE Sri Lanka Section SIGHT",
    label: "IEEE Sri Lanka Section SIGHT"
  },
  {
    id: "IEEE Sri Lanka Section Technical Chapter",
    label: "IEEE Sri Lanka Section Technical Chapter"
  },
  {
    id: "IEEE Global / Region 10",
    label: "IEEE Global / Region 10"
  },
  {
    id: "IEEE Student Branch",
    label: "IEEE Student Branch"
  },
  {
    id: "IEEE Technical Society Student Branch Chapter",
    label: "IEEE Technical Society Student Branch Chapter"
  },
  {
    id: "IEEE Student Branch Affinity Group",
    label: "IEEE Student Branch Affinity Group"
  }
]

const exco_entities = [
  {
    id: "IEEE Sri Lanka Section",
    label: "IEEE Sri Lanka Section"
  },
  {
    id: "IEEE Young Professionals Sri Lanka (YP)",
    label: "IEEE Young Professionals Sri Lanka (YP)"
  },
  {
    id: "IEEE Women in Engineering Sri Lanka (WIE)",
    label: "IEEE Women in Engineering Sri Lanka (WIE)"
  },
  {
    id: "IEEE Sri Lanka Section SIGHT",
    label: "IEEE Sri Lanka Section SIGHT"
  },
  {
    id: "IEEE Sri Lanka Section Technical Society Chapter",
    label: "IEEE Sri Lanka Section Technical Society Chapter"
  }
]
const chapter_memberships = [
  {
    id: "IES",
    label: "IES"
  },
  {
    id: "MTT-S",
    label: "MTT-S"
  },
  {
    id: "IAS",
    label: "IAS"
  },
]

const participation_years = [
  {
    id: "2023",
    label: "2023"
  },
  {
    id: "2022",
    label: "2022"
  },
  {
    id: "2021",
    label: "2021"
  },
  {
    id: "2020",
    label: "2020"
  },
  {
    id: "2019",
    label: "2019"
  },
  {
    id: "2018",
    label: "2018"
  },
  {
    id: "None",
    label: "Haven't participated"
  }
]

const thsirt_size = ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]

const membership_types = [
  "Student Member",
  "Graduate Student Member",
  "Member",
  "Senior Member",
  "Fellow"
]
const participating_days = [
  {
    id: "All 3 days",
    label: "All 3 days"
  },
  {
    id: "2 days (14th only)",
    label: "2 days (Stay on the night of September 14th only)"
  },
  {
    id: "2 days (15th only)",
    label: "2 days (Stay on the night of September 15th only)"
  },
  {
    id: "One day",
    label: "One day only"
  }
] as const

export {
  branches,
  membership_catgories,
  volunteering_entities,
  participation_years,
  thsirt_size,
  membership_types,
  participating_days,
  exco_entities,
  chapter_memberships
}
