const branches = [
  "University of Moratuwa (UOM)",
  "University of Peradeniya (UOP)",
  "University of Ruhuna (UOR)",
  "University of Colombo School of Computing (UCSC)",
  "Sri Lanka Institute of Information Technololgy (SLIIT)",
  "General Sri John Kotelawala Defence University (KDU)",
  "Wayamba University of Sri Lanka (WUSL)",
  "Informatics Institute of Technology (IIT)",
  "Uva Wellassa University (UWU)",
  "Sabaragamuwa University of Sri Lanka (SUSL)",
  "Open University of Sri Lanka (OUSL)",
  "University of Kelaniya (UOK)",
  "National School of Business Management (NSBM)",
  "University of Sri Jayawardenepura (USJP)",
  "Sri Lanka Technological Campus (SLTC)",
  "Rajarata University of Sri Lanka (RUSL)",
  "University of Vavuniya (UOV)",
  "University of Jaffna (UOJ)",
  "University of Vocational Technology (UOVT)",
  "South Eastern University of Sri Lanka (SEUSL)",
  "National Institute of Business Management (NIBM)"
]

const membership_catgories = [
  "Student Member",
  "graduate Student Member",
  "Member",
  "Senior Member", 
  "Fellow"
]

const volunteering_entities = [
  {
    id: "IEEE Sri Lanka Section",
    label: "IEEE Sri Lanka Section",
  },
  {
    id: "IEEE Sri Lanka Sri Lanka Section Student Activities Committee (SLSAC)",
    label: "IEEE Sri Lanka Sri Lanka Section Student Activities Committee (SLSAC)",
  },
  {
    id: "IEEE Young Professionals Sri Lanka (YPSL)",
    label: "IEEE Young Professionals Sri Lanka (YPSL)",
  },
  {
    id: "IEEE Women in Engineering Sri Lanka (WIE SL)",
    label: "IEEE Women in Engineering Sri Lanka (WIE SL)",
  },
  {
    id: "IEEE Sri Lanka Section SIGHT",
    label: "IEEE Sri Lanka Section SIGHT",
  },
  {
    id: "IEEE Sri Lanka Section Technical Chapter",
    label: "IEEE Sri Lanka Section Technical Chapter",
  },
  {
    id: "IEEE Global / Region 10",
    label: "IEEE Global / Region 10",
  },
  {
    id: "IEEE Student Branch",
    label: "IEEE Student Branch",
  },
  {
    id: "IEEE Technical Society Student Branch Chapter",
    label: "IEEE Technical Society Student Branch Chapter",
  },
  {
    id: "IEEE Student Branch Affinity Group",
    label: "IEEE Student Branch Affinity Group",
  }
] as const;


const participation_years = [
  {
    id: "2022",
    label: "2022",
  },
  {
    id: "2021",
    label: "2021",
  },
  {
    id: "2020",
    label: "2020",
  },
  {
    id: "2019",
    label: "2019",
  },
  {
    id: "2018",
    label: "2018",
  },
  {
    id: "Haven't participated",
    label: "Haven't participated",
  }
] as const;

const thsirt_size = ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"]

const membership_types = ["Student Member", "Graduate Student Member", "Member", "Senior Member", "Fellow"]

export { branches , membership_catgories, volunteering_entities, participation_years , thsirt_size, membership_types }
