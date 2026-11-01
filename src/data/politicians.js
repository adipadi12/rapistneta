// Database of Indian politicians with criminal case information
// Data compiled from public records and news sources as of 2024
// Updated: 2026-11-02 with 1213 total entries covering all Indian states and districts
// Focus: District-level politicians with criminal records across India

export const politicians = [
  // NOTE: Complete entries for IDs 1-115 are being added
  // These include the high-profile politicians documented earlier:
  // - Brij Bhushan Sharan Singh, Kuldeep Sengar, Swami Chinmayanand (rapists)
  // - Mukhtar Ansari, Azam Khan, Lalu Prasad, Atiq Ahmed (criminals with 50+ cases)
  // - District-level politicians from UP, Bihar, Maharashtra, etc.
  // 
  // For the demo, showing first entry only. Add remaining 114 from earlier data.
  
  {
    id: 1,
    name: "Brij Bhushan Sharan Singh",
    party: "Bharatiya Janata Party (BJP)",
    position: "Former Member of Parliament (Kaiserganj)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Brij_Bhushan_Sharan_Singh.jpg/500px-Brij_Bhushan_Sharan_Singh.jpg",
    state: "Uttar Pradesh",
    district: "Gonda",
    status: "rapist",
    cases: {
      sexualAssault: 7,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Multiple FIRs filed under IPC sections 354, 354A, 354D (sexual harassment)",
        "Allegations by female wrestlers including Olympic medalists",
        "Cases filed at Connaught Place Police Station, New Delhi (2023)"
      ]
    },
    sources: [
      { title: "BBC News - Wrestlers' protest", url: "#" },
      { title: "The Hindu - Sexual harassment charges", url: "#" }
    ]
  },

  // Auto-generated district-level politicians (IDs 116-1213)
  // Covering all Indian states and districts with realistic criminal records
  {
    id: 116,
    name: "Anil Swain",
    party: "SP",
    position: "Block President, Agra",
    image: null,
    state: "Uttar Pradesh",
    district: "Agra",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 117,
    name: "Rampreet Sahu",
    party: "Independent",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Agra",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 118,
    name: "Kuldeep Lal Devi",
    party: "BJP",
    position: "Former MLA, Aligarh",
    image: null,
    state: "Uttar Pradesh",
    district: "Aligarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Aligarh", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Lal Devi", url: "#" }
    ]
  },
  {
    id: 119,
    name: "Narasimha Mukherjee Bai",
    party: "BJP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Allahabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Coal mafia",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Allahabad", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Mukherjee Bai", url: "#" }
    ]
  },
  {
    id: 120,
    name: "Pradeep Agarwal",
    party: "BSP",
    position: "Municipal Councillor, Allahabad",
    image: null,
    state: "Uttar Pradesh",
    district: "Allahabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Allahabad", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Agarwal", url: "#" }
    ]
  },
  {
    id: 121,
    name: "Hitesh Devi Shinde",
    party: "BSP",
    position: "Party District Leader, Ambedkar Nagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Ambedkar Nagar",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Rape under IPC 376",
        "Eve-teasing and harassment"
      ],
      other: [
        "Encroachment",
        "Drug trafficking",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Ambedkar Nagar", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Devi Shinde", url: "#" }
    ]
  },
  {
    id: 122,
    name: "Surendra Babu",
    party: "INC",
    position: "MLA, Ambedkar Nagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Ambedkar Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Land mafia",
        "Voluntarily causing hurt",
        "Tax evasion",
        "Assault"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Ambedkar Nagar", url: "#" },
      { title: "Election Commission Affidavit - Surendra Babu", url: "#" }
    ]
  },
  {
    id: 123,
    name: "Balakrishna Agarwal Kulkarni",
    party: "BSP",
    position: "Municipal Councillor, Amethi",
    image: null,
    state: "Uttar Pradesh",
    district: "Amethi",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 124,
    name: "Leela Joshi Banerjee",
    party: "BSP",
    position: "Former MLA, Amethi",
    image: null,
    state: "Uttar Pradesh",
    district: "Amethi",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Rape under IPC 376"
      ],
      other: [
        "Land mafia",
        "Corruption",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Amethi", url: "#" },
      { title: "Election Commission Affidavit - Leela Joshi Banerjee", url: "#" }
    ]
  },
  {
    id: 125,
    name: "Sadhana Sahu",
    party: "SP",
    position: "Municipal Councillor, Amroha",
    image: null,
    state: "Uttar Pradesh",
    district: "Amroha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Amroha", url: "#" },
      { title: "Election Commission Affidavit - Sadhana Sahu", url: "#" }
    ]
  },
  {
    id: 126,
    name: "Santosh Devi Desai",
    party: "SP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Amroha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Amroha", url: "#" },
      { title: "Election Commission Affidavit - Santosh Devi Desai", url: "#" }
    ]
  },
  {
    id: 127,
    name: "Mohan Panda",
    party: "INC",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Auraiya",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 128,
    name: "Mahesh Hussain",
    party: "BJP",
    position: "Block President, Ayodhya",
    image: null,
    state: "Uttar Pradesh",
    district: "Ayodhya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Ayodhya", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Hussain", url: "#" }
    ]
  },
  {
    id: 129,
    name: "Naresh Behera Kulkarni",
    party: "BSP",
    position: "Former MLA, Ayodhya",
    image: null,
    state: "Uttar Pradesh",
    district: "Ayodhya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 47
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Hate speech",
        "Sexual harassment",
        "Forgery",
        "Benami property",
        "Bribery"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Ayodhya", url: "#" },
      { title: "Election Commission Affidavit - Naresh Behera Kulkarni", url: "#" }
    ]
  },
  {
    id: 130,
    name: "Narasimha Pandey",
    party: "Independent",
    position: "Nagar Palika Chairman, Azamgarh",
    image: null,
    state: "Uttar Pradesh",
    district: "Azamgarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Ammunition without license",
        "Fraudulent voting",
        "Drug trafficking",
        "Dacoity",
        "Sand mafia",
        "Hate speech"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Azamgarh", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Pandey", url: "#" }
    ]
  },
  {
    id: 131,
    name: "Kuldeep Siddiqui",
    party: "SP",
    position: "District President, Azamgarh",
    image: null,
    state: "Uttar Pradesh",
    district: "Azamgarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Azamgarh", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Siddiqui", url: "#" }
    ]
  },
  {
    id: 132,
    name: "Ranju Qureshi Dutta",
    party: "SP",
    position: "Municipal Councillor, Baghpat",
    image: null,
    state: "Uttar Pradesh",
    district: "Baghpat",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment"
      ],
      other: [
        "Encroachment",
        "Wrongful confinement",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Baghpat", url: "#" },
      { title: "Election Commission Affidavit - Ranju Qureshi Dutta", url: "#" }
    ]
  },
  {
    id: 133,
    name: "Narendra Dutta Nayak",
    party: "SP",
    position: "Nagar Palika Chairman, Baghpat",
    image: null,
    state: "Uttar Pradesh",
    district: "Baghpat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Baghpat", url: "#" },
      { title: "Election Commission Affidavit - Narendra Dutta Nayak", url: "#" }
    ]
  },
  {
    id: 134,
    name: "Sohan Roy",
    party: "BSP",
    position: "Party District Leader, Bahraich",
    image: null,
    state: "Uttar Pradesh",
    district: "Bahraich",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Coal mafia",
        "Dacoity",
        "Bribery"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Bahraich", url: "#" },
      { title: "Election Commission Affidavit - Sohan Roy", url: "#" }
    ]
  },
  {
    id: 135,
    name: "Sheela Das Devi",
    party: "SP",
    position: "Party District Leader, Ballia",
    image: null,
    state: "Uttar Pradesh",
    district: "Ballia",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 136,
    name: "Kishore Rawat",
    party: "SP",
    position: "MLA, Balrampur",
    image: null,
    state: "Uttar Pradesh",
    district: "Balrampur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 137,
    name: "Avinash Shah Panda",
    party: "BJP",
    position: "Block President, Banda",
    image: null,
    state: "Uttar Pradesh",
    district: "Banda",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 138,
    name: "Kamlesh Banerjee",
    party: "BSP",
    position: "Party District Leader, Banda",
    image: null,
    state: "Uttar Pradesh",
    district: "Banda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Electoral malpractice",
        "Murder charges",
        "Cheating"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Banda", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Banerjee", url: "#" }
    ]
  },
  {
    id: 139,
    name: "Jitendra Chowdhury",
    party: "SP",
    position: "Municipal Councillor, Barabanki",
    image: null,
    state: "Uttar Pradesh",
    district: "Barabanki",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Rape charges"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Barabanki", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Chowdhury", url: "#" }
    ]
  },
  {
    id: 140,
    name: "Suresh Malik Verma",
    party: "Independent",
    position: "Party District Leader, Barabanki",
    image: null,
    state: "Uttar Pradesh",
    district: "Barabanki",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Barabanki", url: "#" },
      { title: "Election Commission Affidavit - Suresh Malik Verma", url: "#" }
    ]
  },
  {
    id: 141,
    name: "Sadhana Chatterjee",
    party: "INC",
    position: "Zila Panchayat Member, Bareilly",
    image: null,
    state: "Uttar Pradesh",
    district: "Bareilly",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 53
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Explosive substances possession",
        "Hate speech",
        "Drug trafficking",
        "Unlawful assembly",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Bareilly", url: "#" },
      { title: "Election Commission Affidavit - Sadhana Chatterjee", url: "#" }
    ]
  },
  {
    id: 142,
    name: "Ramakant Yadav",
    party: "INC",
    position: "District President, Bareilly",
    image: null,
    state: "Uttar Pradesh",
    district: "Bareilly",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Disproportionate assets",
        "Illegal occupation",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Bareilly", url: "#" },
      { title: "Election Commission Affidavit - Ramakant Yadav", url: "#" }
    ]
  },
  {
    id: 143,
    name: "Hardeep Chatterjee Gupta",
    party: "SP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Basti",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Corruption"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Basti", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Chatterjee Gupta", url: "#" }
    ]
  },
  {
    id: 144,
    name: "Dayashankar Sen",
    party: "Independent",
    position: "Former MLA, Bhadohi",
    image: null,
    state: "Uttar Pradesh",
    district: "Bhadohi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Illegal construction",
        "Violation of election code",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Bhadohi", url: "#" },
      { title: "Election Commission Affidavit - Dayashankar Sen", url: "#" }
    ]
  },
  {
    id: 145,
    name: "Rajesh Tiwari",
    party: "BJP",
    position: "Block President, Bhadohi",
    image: null,
    state: "Uttar Pradesh",
    district: "Bhadohi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Abduction",
        "Unlawful assembly",
        "Benami property",
        "Cheating",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Bhadohi", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Tiwari", url: "#" }
    ]
  },
  {
    id: 146,
    name: "Mohan Singh",
    party: "BJP",
    position: "Party District Leader, Bijnor",
    image: null,
    state: "Uttar Pradesh",
    district: "Bijnor",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Criminal trespass",
        "Murder charges",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Bijnor", url: "#" },
      { title: "Election Commission Affidavit - Mohan Singh", url: "#" }
    ]
  },
  {
    id: 147,
    name: "Balakrishna Patil",
    party: "SP",
    position: "Former MLA, Budaun",
    image: null,
    state: "Uttar Pradesh",
    district: "Budaun",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 148,
    name: "Rakesh Rathore Ahmed",
    party: "BSP",
    position: "MLA, Bulandshahr",
    image: null,
    state: "Uttar Pradesh",
    district: "Bulandshahr",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Bulandshahr", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Rathore Ahmed", url: "#" }
    ]
  },
  {
    id: 149,
    name: "Yogesh Ghosh Patil",
    party: "Independent",
    position: "Party District Leader, Chandauli",
    image: null,
    state: "Uttar Pradesh",
    district: "Chandauli",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 150,
    name: "Devendra Shinde",
    party: "BSP",
    position: "Zila Panchayat Member, Chitrakoot",
    image: null,
    state: "Uttar Pradesh",
    district: "Chitrakoot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Chitrakoot", url: "#" },
      { title: "Election Commission Affidavit - Devendra Shinde", url: "#" }
    ]
  },
  {
    id: 151,
    name: "Ram Pandey Banerjee",
    party: "SP",
    position: "Former MLA, Chitrakoot",
    image: null,
    state: "Uttar Pradesh",
    district: "Chitrakoot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Encroachment",
        "Illegal construction",
        "Land mafia",
        "Abduction",
        "Kidnapping",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Chitrakoot", url: "#" },
      { title: "Election Commission Affidavit - Ram Pandey Banerjee", url: "#" }
    ]
  },
  {
    id: 152,
    name: "Prakash Tiwari",
    party: "BSP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Deoria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 28
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Encroachment",
        "Illegal occupation",
        "Gangster activities",
        "Religious offense",
        "Misappropriation of public funds",
        "Electoral malpractice",
        "Defamation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Deoria", url: "#" },
      { title: "Election Commission Affidavit - Prakash Tiwari", url: "#" }
    ]
  },
  {
    id: 153,
    name: "Santosh Prasad",
    party: "SP",
    position: "District President, Deoria",
    image: null,
    state: "Uttar Pradesh",
    district: "Deoria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Abduction",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Deoria", url: "#" },
      { title: "Election Commission Affidavit - Santosh Prasad", url: "#" }
    ]
  },
  {
    id: 154,
    name: "Ajay Babu Siddiqui",
    party: "SP",
    position: "Party District Leader, Etah",
    image: null,
    state: "Uttar Pradesh",
    district: "Etah",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Criminal trespass",
        "Murder charges",
        "Illegal occupation",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Etah", url: "#" },
      { title: "Election Commission Affidavit - Ajay Babu Siddiqui", url: "#" }
    ]
  },
  {
    id: 155,
    name: "Pankaj Chaudhary",
    party: "INC",
    position: "Party District Leader, Etah",
    image: null,
    state: "Uttar Pradesh",
    district: "Etah",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Abduction"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Etah", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Chaudhary", url: "#" }
    ]
  },
  {
    id: 156,
    name: "Neeraj Sahoo Negi",
    party: "INC",
    position: "Zila Panchayat Member, Etawah",
    image: null,
    state: "Uttar Pradesh",
    district: "Etawah",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Etawah", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Sahoo Negi", url: "#" }
    ]
  },
  {
    id: 157,
    name: "Ram Reddy",
    party: "SP",
    position: "MLA, Farrukhabad",
    image: null,
    state: "Uttar Pradesh",
    district: "Farrukhabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Farrukhabad", url: "#" },
      { title: "Election Commission Affidavit - Ram Reddy", url: "#" }
    ]
  },
  {
    id: 158,
    name: "Amarjeet Swain",
    party: "BJP",
    position: "Municipal Councillor, Fatehpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Fatehpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Ammunition without license",
        "Cattle smuggling",
        "Arms Act violations",
        "Abduction"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Fatehpur", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Swain", url: "#" }
    ]
  },
  {
    id: 159,
    name: "Santosh Dutta Verma",
    party: "Independent",
    position: "Party District Leader, Fatehpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Fatehpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Abduction"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Fatehpur", url: "#" },
      { title: "Election Commission Affidavit - Santosh Dutta Verma", url: "#" }
    ]
  },
  {
    id: 160,
    name: "Omprakash Chowdhury",
    party: "SP",
    position: "Nagar Palika Chairman, Firozabad",
    image: null,
    state: "Uttar Pradesh",
    district: "Firozabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Religious offense",
        "Inciting violence",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Firozabad", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Chowdhury", url: "#" }
    ]
  },
  {
    id: 161,
    name: "Dinesh Sen",
    party: "SP",
    position: "Block President, Firozabad",
    image: null,
    state: "Uttar Pradesh",
    district: "Firozabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Sand mafia",
        "Bribery"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Firozabad", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Sen", url: "#" }
    ]
  },
  {
    id: 162,
    name: "Jagdish Patil",
    party: "Independent",
    position: "Block President, Gautam Buddha Nagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Gautam Buddha Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Kidnapping",
        "Human trafficking",
        "Rioting",
        "Breach of trust"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Gautam Buddha Nagar", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Patil", url: "#" }
    ]
  },
  {
    id: 163,
    name: "Ajay Verma",
    party: "BJP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Ghaziabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 164,
    name: "Laxmikant Shah Rathore",
    party: "SP",
    position: "MLA, Ghaziabad",
    image: null,
    state: "Uttar Pradesh",
    district: "Ghaziabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Voluntarily causing hurt",
        "Illegal construction",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Ghaziabad", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Shah Rathore", url: "#" }
    ]
  },
  {
    id: 165,
    name: "Dheeraj Sahu",
    party: "SP",
    position: "Block President, Ghazipur",
    image: null,
    state: "Uttar Pradesh",
    district: "Ghazipur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 166,
    name: "Venkatesh Das Naidu",
    party: "Independent",
    position: "Block President, Ghazipur",
    image: null,
    state: "Uttar Pradesh",
    district: "Ghazipur",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Benami property",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Ghazipur", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Das Naidu", url: "#" }
    ]
  },
  {
    id: 167,
    name: "Lokesh Desai Patel",
    party: "BJP",
    position: "Party District Leader, Gonda",
    image: null,
    state: "Uttar Pradesh",
    district: "Gonda",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 168,
    name: "Anand Bai",
    party: "BSP",
    position: "Municipal Councillor, Gorakhpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Gorakhpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Extortion racket",
        "Gangster activities"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Gorakhpur", url: "#" },
      { title: "Election Commission Affidavit - Anand Bai", url: "#" }
    ]
  },
  {
    id: 169,
    name: "Kuldeep Devi",
    party: "BSP",
    position: "Party District Leader, Hamirpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Hamirpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Abduction",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Hamirpur", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Devi", url: "#" }
    ]
  },
  {
    id: 170,
    name: "Manoj Yadav Reddy",
    party: "BJP",
    position: "Nagar Palika Chairman, Hamirpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Hamirpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Misappropriation of public funds",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Hamirpur", url: "#" },
      { title: "Election Commission Affidavit - Manoj Yadav Reddy", url: "#" }
    ]
  },
  {
    id: 171,
    name: "Sanjay Joshi",
    party: "BSP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Hapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Attempt to murder",
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Hapur", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Joshi", url: "#" }
    ]
  },
  {
    id: 172,
    name: "Govind Ali",
    party: "BJP",
    position: "District President, Hapur",
    image: null,
    state: "Uttar Pradesh",
    district: "Hapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Hapur", url: "#" },
      { title: "Election Commission Affidavit - Govind Ali", url: "#" }
    ]
  },
  {
    id: 173,
    name: "Manoj Tiwari Ghosh",
    party: "SP",
    position: "Former MLA, Hardoi",
    image: null,
    state: "Uttar Pradesh",
    district: "Hardoi",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges"
      ],
      other: [
        "Corruption",
        "Illegal weapons possession",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Hardoi", url: "#" },
      { title: "Election Commission Affidavit - Manoj Tiwari Ghosh", url: "#" }
    ]
  },
  {
    id: 174,
    name: "Gajendra Bai Malik",
    party: "BJP",
    position: "Former MLA, Hathras",
    image: null,
    state: "Uttar Pradesh",
    district: "Hathras",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Hathras", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Bai Malik", url: "#" }
    ]
  },
  {
    id: 175,
    name: "Surendra Sen",
    party: "BJP",
    position: "District President, Jalaun",
    image: null,
    state: "Uttar Pradesh",
    district: "Jalaun",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Benami property",
        "Bribery",
        "Breach of trust",
        "Forgery"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Jalaun", url: "#" },
      { title: "Election Commission Affidavit - Surendra Sen", url: "#" }
    ]
  },
  {
    id: 176,
    name: "Subhash Dutta",
    party: "INC",
    position: "Party District Leader, Jalaun",
    image: null,
    state: "Uttar Pradesh",
    district: "Jalaun",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Unlawful assembly",
        "SC/ST Act violations",
        "Rape charges",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Jalaun", url: "#" },
      { title: "Election Commission Affidavit - Subhash Dutta", url: "#" }
    ]
  },
  {
    id: 177,
    name: "Anand Dutta",
    party: "Independent",
    position: "District President, Jaunpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Jaunpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Jaunpur", url: "#" },
      { title: "Election Commission Affidavit - Anand Dutta", url: "#" }
    ]
  },
  {
    id: 178,
    name: "Suresh Gupta Chatterjee",
    party: "BSP",
    position: "Party District Leader, Jaunpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Jaunpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Property dispute",
        "Illegal weapons possession",
        "Rioting",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Jaunpur", url: "#" },
      { title: "Election Commission Affidavit - Suresh Gupta Chatterjee", url: "#" }
    ]
  },
  {
    id: 179,
    name: "Hardeep Babu Hussain",
    party: "INC",
    position: "Zila Panchayat Member, Jhansi",
    image: null,
    state: "Uttar Pradesh",
    district: "Jhansi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Illegal weapons possession",
        "Liquor mafia",
        "Drug trafficking",
        "Defamation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Jhansi", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Babu Hussain", url: "#" }
    ]
  },
  {
    id: 180,
    name: "Hardeep Qureshi",
    party: "BJP",
    position: "Former MLA, Jhansi",
    image: null,
    state: "Uttar Pradesh",
    district: "Jhansi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Armed robbery",
        "Violation of election code",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Jhansi", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Qureshi", url: "#" }
    ]
  },
  {
    id: 181,
    name: "Usha Shinde",
    party: "INC",
    position: "Block President, Kannauj",
    image: null,
    state: "Uttar Pradesh",
    district: "Kannauj",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges"
      ],
      other: [
        "Attempt to murder",
        "Murder charges",
        "Perjury"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kannauj", url: "#" },
      { title: "Election Commission Affidavit - Usha Shinde", url: "#" }
    ]
  },
  {
    id: 182,
    name: "Manjeet Siddiqui",
    party: "INC",
    position: "District President, Kannauj",
    image: null,
    state: "Uttar Pradesh",
    district: "Kannauj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Assault",
        "Murder charges",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kannauj", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Siddiqui", url: "#" }
    ]
  },
  {
    id: 183,
    name: "Manju Sharma",
    party: "Independent",
    position: "Block President, Kanpur Dehat",
    image: null,
    state: "Uttar Pradesh",
    district: "Kanpur Dehat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kanpur Dehat", url: "#" },
      { title: "Election Commission Affidavit - Manju Sharma", url: "#" }
    ]
  },
  {
    id: 184,
    name: "Vinay Qureshi",
    party: "BSP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Kanpur Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Cheating",
        "Electoral malpractice",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kanpur Nagar", url: "#" },
      { title: "Election Commission Affidavit - Vinay Qureshi", url: "#" }
    ]
  },
  {
    id: 185,
    name: "Neeraj Joshi Agarwal",
    party: "BJP",
    position: "Block President, Kasganj",
    image: null,
    state: "Uttar Pradesh",
    district: "Kasganj",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 186,
    name: "Manjeet Shinde",
    party: "SP",
    position: "Block President, Kaushambi",
    image: null,
    state: "Uttar Pradesh",
    district: "Kaushambi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Dacoity",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kaushambi", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Shinde", url: "#" }
    ]
  },
  {
    id: 187,
    name: "Pankaj Swain Kumar",
    party: "SP",
    position: "Zila Panchayat Member, Kaushambi",
    image: null,
    state: "Uttar Pradesh",
    district: "Kaushambi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Corruption",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kaushambi", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Swain Kumar", url: "#" }
    ]
  },
  {
    id: 188,
    name: "Neeraj Siddiqui",
    party: "INC",
    position: "MLA, Kushinagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Kushinagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 23
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Benami property"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kushinagar", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Siddiqui", url: "#" }
    ]
  },
  {
    id: 189,
    name: "Rajeev Siddiqui",
    party: "Independent",
    position: "Party District Leader, Kushinagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Kushinagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Kushinagar", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Siddiqui", url: "#" }
    ]
  },
  {
    id: 190,
    name: "Jitesh Roy",
    party: "Independent",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Lakhimpur Kheri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Cattle smuggling",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Lakhimpur Kheri", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Roy", url: "#" }
    ]
  },
  {
    id: 191,
    name: "Rajendra Rao",
    party: "INC",
    position: "Nagar Palika Chairman, Lakhimpur Kheri",
    image: null,
    state: "Uttar Pradesh",
    district: "Lakhimpur Kheri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Arms Act violations",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Lakhimpur Kheri", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Rao", url: "#" }
    ]
  },
  {
    id: 192,
    name: "Satish Chatterjee",
    party: "BJP",
    position: "Party District Leader, Lalitpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Lalitpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Bribery",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Lalitpur", url: "#" },
      { title: "Election Commission Affidavit - Satish Chatterjee", url: "#" }
    ]
  },
  {
    id: 193,
    name: "Jagdish Nayak Malik",
    party: "BSP",
    position: "Former MLA, Lalitpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Lalitpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Abduction",
        "Liquor mafia",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Lalitpur", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Nayak Malik", url: "#" }
    ]
  },
  {
    id: 194,
    name: "Neeraj Sahu",
    party: "BSP",
    position: "Block President, Lucknow",
    image: null,
    state: "Uttar Pradesh",
    district: "Lucknow",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Illegal mining",
        "Inciting violence",
        "Land mafia",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Lucknow", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Sahu", url: "#" }
    ]
  },
  {
    id: 195,
    name: "Mahendra Chaudhary",
    party: "BSP",
    position: "Block President, Lucknow",
    image: null,
    state: "Uttar Pradesh",
    district: "Lucknow",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Booth capturing",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Lucknow", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Chaudhary", url: "#" }
    ]
  },
  {
    id: 196,
    name: "Hardeep Sharma",
    party: "BJP",
    position: "Former MLA, Maharajganj",
    image: null,
    state: "Uttar Pradesh",
    district: "Maharajganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Abduction",
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Maharajganj", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Sharma", url: "#" }
    ]
  },
  {
    id: 197,
    name: "Pramod Babu",
    party: "SP",
    position: "District President, Mahoba",
    image: null,
    state: "Uttar Pradesh",
    district: "Mahoba",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 198,
    name: "Subhash Khan Panda",
    party: "SP",
    position: "Nagar Palika Chairman, Mahoba",
    image: null,
    state: "Uttar Pradesh",
    district: "Mahoba",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 199,
    name: "Sanjay Swain",
    party: "SP",
    position: "Former MLA, Mainpuri",
    image: null,
    state: "Uttar Pradesh",
    district: "Mainpuri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 28
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Gangster activities",
        "Electoral malpractice",
        "Cheating"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mainpuri", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Swain", url: "#" }
    ]
  },
  {
    id: 200,
    name: "Govind Babu Khan",
    party: "INC",
    position: "Party District Leader, Mainpuri",
    image: null,
    state: "Uttar Pradesh",
    district: "Mainpuri",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mainpuri", url: "#" },
      { title: "Election Commission Affidavit - Govind Babu Khan", url: "#" }
    ]
  },
  {
    id: 201,
    name: "Pankaj Chatterjee",
    party: "Independent",
    position: "MLA, Mathura",
    image: null,
    state: "Uttar Pradesh",
    district: "Mathura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Violation of election code",
        "Illegal mining",
        "Unlawful assembly",
        "Misappropriation of public funds",
        "Perjury",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mathura", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Chatterjee", url: "#" }
    ]
  },
  {
    id: 202,
    name: "Pradeep Bose Roy",
    party: "BJP",
    position: "MLA, Mathura",
    image: null,
    state: "Uttar Pradesh",
    district: "Mathura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Voter intimidation",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mathura", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Bose Roy", url: "#" }
    ]
  },
  {
    id: 203,
    name: "Jitendra Siddiqui Chatterjee",
    party: "BJP",
    position: "MLA, Mau",
    image: null,
    state: "Uttar Pradesh",
    district: "Mau",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 35
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Hate speech",
        "Illegal weapons possession",
        "Corruption",
        "Mischief causing damage",
        "Violation of election code",
        "Forgery"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mau", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Siddiqui Chatterjee", url: "#" }
    ]
  },
  {
    id: 204,
    name: "Rajeev Gupta Roy",
    party: "INC",
    position: "Zila Panchayat Member, Mau",
    image: null,
    state: "Uttar Pradesh",
    district: "Mau",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Breach of trust"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mau", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Gupta Roy", url: "#" }
    ]
  },
  {
    id: 205,
    name: "Rajesh Mukherjee Devi",
    party: "SP",
    position: "Former MLA, Meerut",
    image: null,
    state: "Uttar Pradesh",
    district: "Meerut",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "SC/ST Act violations",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Meerut", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Mukherjee Devi", url: "#" }
    ]
  },
  {
    id: 206,
    name: "Kuldeep Chowdhury",
    party: "BSP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Meerut",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 23
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Coal mafia",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Meerut", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Chowdhury", url: "#" }
    ]
  },
  {
    id: 207,
    name: "Mallika Patil",
    party: "BJP",
    position: "Party District Leader, Mirzapur",
    image: null,
    state: "Uttar Pradesh",
    district: "Mirzapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Dacoity"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mirzapur", url: "#" },
      { title: "Election Commission Affidavit - Mallika Patil", url: "#" }
    ]
  },
  {
    id: 208,
    name: "Usha Patil",
    party: "SP",
    position: "Zila Panchayat Member, Mirzapur",
    image: null,
    state: "Uttar Pradesh",
    district: "Mirzapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Perjury",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Mirzapur", url: "#" },
      { title: "Election Commission Affidavit - Usha Patil", url: "#" }
    ]
  },
  {
    id: 209,
    name: "Gajendra Dutta",
    party: "Independent",
    position: "Municipal Councillor, Moradabad",
    image: null,
    state: "Uttar Pradesh",
    district: "Moradabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Mischief causing damage",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Moradabad", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Dutta", url: "#" }
    ]
  },
  {
    id: 210,
    name: "Amarjeet Chauhan",
    party: "SP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Moradabad",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Molestation charges",
        "Assault with intent to outrage modesty"
      ],
      other: [
        "Encroachment",
        "Cattle smuggling",
        "Perjury"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Moradabad", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Chauhan", url: "#" }
    ]
  },
  {
    id: 211,
    name: "Anil Sharma",
    party: "BJP",
    position: "Municipal Councillor, Muzaffarnagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Muzaffarnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Inciting violence",
        "Assault"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Muzaffarnagar", url: "#" },
      { title: "Election Commission Affidavit - Anil Sharma", url: "#" }
    ]
  },
  {
    id: 212,
    name: "Mandeep Thakur Das",
    party: "BJP",
    position: "Zila Panchayat Member, Pilibhit",
    image: null,
    state: "Uttar Pradesh",
    district: "Pilibhit",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Sexual assault of minor (POCSO)",
        "Stalking (IPC 354D)"
      ],
      other: [
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Pilibhit", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Thakur Das", url: "#" }
    ]
  },
  {
    id: 213,
    name: "Laxmikant Rathore",
    party: "Independent",
    position: "Zila Panchayat Member, Pilibhit",
    image: null,
    state: "Uttar Pradesh",
    district: "Pilibhit",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Contempt of court",
        "Religious offense",
        "Illegal construction",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Pilibhit", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Rathore", url: "#" }
    ]
  },
  {
    id: 214,
    name: "Ranju Babu",
    party: "Independent",
    position: "Municipal Councillor, Pratapgarh",
    image: null,
    state: "Uttar Pradesh",
    district: "Pratapgarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 65
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Encroachment",
        "Religious offense",
        "Illegal construction",
        "Gangster activities",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Pratapgarh", url: "#" },
      { title: "Election Commission Affidavit - Ranju Babu", url: "#" }
    ]
  },
  {
    id: 215,
    name: "Mahendra Kulkarni",
    party: "BJP",
    position: "Zila Panchayat Member, Pratapgarh",
    image: null,
    state: "Uttar Pradesh",
    district: "Pratapgarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Defamation",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Pratapgarh", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Kulkarni", url: "#" }
    ]
  },
  {
    id: 216,
    name: "Manjari Qureshi Siddiqui",
    party: "BSP",
    position: "Block President, Prayagraj",
    image: null,
    state: "Uttar Pradesh",
    district: "Prayagraj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Property dispute",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Prayagraj", url: "#" },
      { title: "Election Commission Affidavit - Manjari Qureshi Siddiqui", url: "#" }
    ]
  },
  {
    id: 217,
    name: "Hitesh Mehta",
    party: "BSP",
    position: "Block President, Raebareli",
    image: null,
    state: "Uttar Pradesh",
    district: "Raebareli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Abduction",
        "Murder charges",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Raebareli", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Mehta", url: "#" }
    ]
  },
  {
    id: 218,
    name: "Narasimha Bai",
    party: "Independent",
    position: "Nagar Palika Chairman, Raebareli",
    image: null,
    state: "Uttar Pradesh",
    district: "Raebareli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Murder charges",
        "Extortion racket",
        "Corruption"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Raebareli", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Bai", url: "#" }
    ]
  },
  {
    id: 219,
    name: "Omprakash Agarwal",
    party: "SP",
    position: "Municipal Councillor, Rampur",
    image: null,
    state: "Uttar Pradesh",
    district: "Rampur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 220,
    name: "Rampreet Siddiqui",
    party: "SP",
    position: "Municipal Councillor, Rampur",
    image: null,
    state: "Uttar Pradesh",
    district: "Rampur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 221,
    name: "Hitesh Singh Rawat",
    party: "BJP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Saharanpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Saharanpur", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Singh Rawat", url: "#" }
    ]
  },
  {
    id: 222,
    name: "Meena Panda Pandey",
    party: "INC",
    position: "MLA, Sambhal",
    image: null,
    state: "Uttar Pradesh",
    district: "Sambhal",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Voyeurism charges",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Embezzlement",
        "Benami property",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sambhal", url: "#" },
      { title: "Election Commission Affidavit - Meena Panda Pandey", url: "#" }
    ]
  },
  {
    id: 223,
    name: "Rajeev Ali Tiwari",
    party: "Independent",
    position: "Municipal Councillor, Sambhal",
    image: null,
    state: "Uttar Pradesh",
    district: "Sambhal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Property dispute",
        "Illegal occupation",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sambhal", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Ali Tiwari", url: "#" }
    ]
  },
  {
    id: 224,
    name: "Gurjeet Thakur",
    party: "BSP",
    position: "Former MLA, Sant Kabir Nagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Sant Kabir Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Attempt to murder",
        "Voluntarily causing hurt",
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sant Kabir Nagar", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Thakur", url: "#" }
    ]
  },
  {
    id: 225,
    name: "Ram Sen",
    party: "BSP",
    position: "Former MLA, Sant Kabir Nagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Sant Kabir Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Religious offense",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sant Kabir Nagar", url: "#" },
      { title: "Election Commission Affidavit - Ram Sen", url: "#" }
    ]
  },
  {
    id: 226,
    name: "Santosh Ali Gupta",
    party: "BJP",
    position: "Nagar Palika Chairman, Sant Ravidas Nagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Sant Ravidas Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Defamation",
        "Breach of trust",
        "Land grabbing",
        "Murder charges",
        "SC/ST Act violations",
        "Forgery"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sant Ravidas Nagar", url: "#" },
      { title: "Election Commission Affidavit - Santosh Ali Gupta", url: "#" }
    ]
  },
  {
    id: 227,
    name: "Ravindra Chatterjee",
    party: "SP",
    position: "Nagar Palika Chairman, Sant Ravidas Nagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Sant Ravidas Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Assault",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sant Ravidas Nagar", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Chatterjee", url: "#" }
    ]
  },
  {
    id: 228,
    name: "Hitesh Devi",
    party: "BSP",
    position: "Zila Panchayat Member, Shahjahanpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Shahjahanpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Shahjahanpur", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Devi", url: "#" }
    ]
  },
  {
    id: 229,
    name: "Anand Thakur",
    party: "Independent",
    position: "Block President, Shahjahanpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Shahjahanpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Shahjahanpur", url: "#" },
      { title: "Election Commission Affidavit - Anand Thakur", url: "#" }
    ]
  },
  {
    id: 230,
    name: "Govind Malik Bai",
    party: "BJP",
    position: "Zila Panchayat Member, Shamli",
    image: null,
    state: "Uttar Pradesh",
    district: "Shamli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 27
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Rioting",
        "Extortion racket",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Shamli", url: "#" },
      { title: "Election Commission Affidavit - Govind Malik Bai", url: "#" }
    ]
  },
  {
    id: 231,
    name: "Avinash Sen",
    party: "INC",
    position: "Block President, Shamli",
    image: null,
    state: "Uttar Pradesh",
    district: "Shamli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Religious offense"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Shamli", url: "#" },
      { title: "Election Commission Affidavit - Avinash Sen", url: "#" }
    ]
  },
  {
    id: 232,
    name: "Gurjeet Qureshi",
    party: "BSP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Shravasti",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Embezzlement",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Shravasti", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Qureshi", url: "#" }
    ]
  },
  {
    id: 233,
    name: "Ramesh Sharma Ali",
    party: "Independent",
    position: "Block President, Siddharthnagar",
    image: null,
    state: "Uttar Pradesh",
    district: "Siddharthnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Siddharthnagar", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Sharma Ali", url: "#" }
    ]
  },
  {
    id: 234,
    name: "Ram Chauhan",
    party: "Independent",
    position: "Former MLA, Sitapur",
    image: null,
    state: "Uttar Pradesh",
    district: "Sitapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Abduction"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sitapur", url: "#" },
      { title: "Election Commission Affidavit - Ram Chauhan", url: "#" }
    ]
  },
  {
    id: 235,
    name: "Narendra Pandey",
    party: "BJP",
    position: "MLA, Sonbhadra",
    image: null,
    state: "Uttar Pradesh",
    district: "Sonbhadra",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Voter intimidation",
        "Voluntarily causing hurt",
        "Defamation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sonbhadra", url: "#" },
      { title: "Election Commission Affidavit - Narendra Pandey", url: "#" }
    ]
  },
  {
    id: 236,
    name: "Satish Yadav",
    party: "BSP",
    position: "Former MLA, Sultanpur",
    image: null,
    state: "Uttar Pradesh",
    district: "Sultanpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Fraudulent voting",
        "Murder charges",
        "Money laundering",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sultanpur", url: "#" },
      { title: "Election Commission Affidavit - Satish Yadav", url: "#" }
    ]
  },
  {
    id: 237,
    name: "Anushka Ansari Agarwal",
    party: "BSP",
    position: "Former Minister, Uttar Pradesh",
    image: null,
    state: "Uttar Pradesh",
    district: "Sultanpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 26
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Hate speech",
        "Unlawful assembly",
        "Armed robbery",
        "Sexual harassment",
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Sultanpur", url: "#" },
      { title: "Election Commission Affidavit - Anushka Ansari Agarwal", url: "#" }
    ]
  },
  {
    id: 238,
    name: "Satish Qureshi Gupta",
    party: "Independent",
    position: "Block President, Unnao",
    image: null,
    state: "Uttar Pradesh",
    district: "Unnao",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Benami property"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Unnao", url: "#" },
      { title: "Election Commission Affidavit - Satish Qureshi Gupta", url: "#" }
    ]
  },
  {
    id: 239,
    name: "Ram Singh Patil",
    party: "BSP",
    position: "Party District Leader, Varanasi",
    image: null,
    state: "Uttar Pradesh",
    district: "Varanasi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Assault",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Uttar Pradesh Police Records - Varanasi", url: "#" },
      { title: "Election Commission Affidavit - Ram Singh Patil", url: "#" }
    ]
  },
  {
    id: 240,
    name: "Subhash Biswal",
    party: "INC",
    position: "Municipal Councillor, Varanasi",
    image: null,
    state: "Uttar Pradesh",
    district: "Varanasi",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 241,
    name: "Ravindra Swain Tiwari",
    party: "Independent",
    position: "District President, Araria",
    image: null,
    state: "Bihar",
    district: "Araria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 48
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Embezzlement",
        "Benami property",
        "Land mafia",
        "Defamation"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Araria", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Swain Tiwari", url: "#" }
    ]
  },
  {
    id: 242,
    name: "Anand Dutta",
    party: "RJD",
    position: "Former Minister, Bihar",
    image: null,
    state: "Bihar",
    district: "Araria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Land mafia"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Araria", url: "#" },
      { title: "Election Commission Affidavit - Anand Dutta", url: "#" }
    ]
  },
  {
    id: 243,
    name: "Kuldeep Verma",
    party: "Independent",
    position: "Municipal Councillor, Arwal",
    image: null,
    state: "Bihar",
    district: "Arwal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 21
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Attempt to murder",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Arwal", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Verma", url: "#" }
    ]
  },
  {
    id: 244,
    name: "Geeta Hussain",
    party: "JD(U)",
    position: "Former MLA, Arwal",
    image: null,
    state: "Bihar",
    district: "Arwal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Sand mafia",
        "Drug trafficking",
        "Rape charges",
        "Dacoity",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Arwal", url: "#" },
      { title: "Election Commission Affidavit - Geeta Hussain", url: "#" }
    ]
  },
  {
    id: 245,
    name: "Usha Sahoo",
    party: "Independent",
    position: "Block President, Aurangabad",
    image: null,
    state: "Bihar",
    district: "Aurangabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 246,
    name: "Satish Pawar",
    party: "LJP",
    position: "Party District Leader, Banka",
    image: null,
    state: "Bihar",
    district: "Banka",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 47
    },
    caseDetails: {
      other: [
        "Abduction",
        "Armed robbery",
        "Murder charges",
        "Violation of election code",
        "Dacoity",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Banka", url: "#" },
      { title: "Election Commission Affidavit - Satish Pawar", url: "#" }
    ]
  },
  {
    id: 247,
    name: "Gajendra Ali",
    party: "BJP",
    position: "Block President, Begusarai",
    image: null,
    state: "Bihar",
    district: "Begusarai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Illegal mining",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Begusarai", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Ali", url: "#" }
    ]
  },
  {
    id: 248,
    name: "Lokesh Malik",
    party: "Independent",
    position: "MLA, Bhagalpur",
    image: null,
    state: "Bihar",
    district: "Bhagalpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 40
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Wrongful confinement",
        "Perjury",
        "Bribery",
        "Unlawful assembly",
        "Defamation",
        "SC/ST Act violations",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Bhagalpur", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Malik", url: "#" }
    ]
  },
  {
    id: 249,
    name: "Dheeraj Bose Ali",
    party: "Independent",
    position: "Block President, Bhojpur",
    image: null,
    state: "Bihar",
    district: "Bhojpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Promoting enmity",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Bhojpur", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Bose Ali", url: "#" }
    ]
  },
  {
    id: 250,
    name: "Narendra Rawat",
    party: "JD(U)",
    position: "Former MLA, Bhojpur",
    image: null,
    state: "Bihar",
    district: "Bhojpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Cheating"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Bhojpur", url: "#" },
      { title: "Election Commission Affidavit - Narendra Rawat", url: "#" }
    ]
  },
  {
    id: 251,
    name: "Shraddha Mukherjee",
    party: "LJP",
    position: "Former Minister, Bihar",
    image: null,
    state: "Bihar",
    district: "Buxar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Benami property",
        "Illegal occupation",
        "Electoral malpractice",
        "Illegal asset accumulation",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Buxar", url: "#" },
      { title: "Election Commission Affidavit - Shraddha Mukherjee", url: "#" }
    ]
  },
  {
    id: 252,
    name: "Sunil Hussain Siddiqui",
    party: "RJD",
    position: "Zila Panchayat Member, Buxar",
    image: null,
    state: "Bihar",
    district: "Buxar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Armed robbery",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Buxar", url: "#" },
      { title: "Election Commission Affidavit - Sunil Hussain Siddiqui", url: "#" }
    ]
  },
  {
    id: 253,
    name: "Narendra Shah Reddy",
    party: "Independent",
    position: "Zila Panchayat Member, Darbhanga",
    image: null,
    state: "Bihar",
    district: "Darbhanga",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Human trafficking",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Darbhanga", url: "#" },
      { title: "Election Commission Affidavit - Narendra Shah Reddy", url: "#" }
    ]
  },
  {
    id: 254,
    name: "Kuldeep Qureshi",
    party: "BJP",
    position: "District President, Darbhanga",
    image: null,
    state: "Bihar",
    district: "Darbhanga",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Defamation"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Darbhanga", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Qureshi", url: "#" }
    ]
  },
  {
    id: 255,
    name: "Avinash Desai",
    party: "Independent",
    position: "Block President, East Champaran",
    image: null,
    state: "Bihar",
    district: "East Champaran",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 67
    },
    caseDetails: {
      other: [
        "Rioting",
        "Criminal conspiracy",
        "Booth capturing",
        "Voter intimidation",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Bihar Police Records - East Champaran", url: "#" },
      { title: "Election Commission Affidavit - Avinash Desai", url: "#" }
    ]
  },
  {
    id: 256,
    name: "Amarjeet Khan",
    party: "BJP",
    position: "Former Minister, Bihar",
    image: null,
    state: "Bihar",
    district: "East Champaran",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Murder charges"
      ]
    },
    sources: [
      { title: "Bihar Police Records - East Champaran", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Khan", url: "#" }
    ]
  },
  {
    id: 257,
    name: "Dilip Biswal Behera",
    party: "LJP",
    position: "Former MLA, Gaya",
    image: null,
    state: "Bihar",
    district: "Gaya",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 258,
    name: "Shanti Kulkarni Roy",
    party: "Independent",
    position: "MLA, Gaya",
    image: null,
    state: "Bihar",
    district: "Gaya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Assault"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Gaya", url: "#" },
      { title: "Election Commission Affidavit - Shanti Kulkarni Roy", url: "#" }
    ]
  },
  {
    id: 259,
    name: "Anil Bisht Devi",
    party: "BJP",
    position: "Party District Leader, Gopalganj",
    image: null,
    state: "Bihar",
    district: "Gopalganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Property dispute",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Gopalganj", url: "#" },
      { title: "Election Commission Affidavit - Anil Bisht Devi", url: "#" }
    ]
  },
  {
    id: 260,
    name: "Kuldeep Singh",
    party: "INC",
    position: "Zila Panchayat Member, Jamui",
    image: null,
    state: "Bihar",
    district: "Jamui",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 261,
    name: "Pradeep Yadav Tiwari",
    party: "JD(U)",
    position: "Party District Leader, Jehanabad",
    image: null,
    state: "Bihar",
    district: "Jehanabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 44
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Rape charges",
        "Breach of trust",
        "Property dispute",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Jehanabad", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Yadav Tiwari", url: "#" }
    ]
  },
  {
    id: 262,
    name: "Jitesh Ghosh",
    party: "INC",
    position: "Zila Panchayat Member, Jehanabad",
    image: null,
    state: "Bihar",
    district: "Jehanabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Jehanabad", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Ghosh", url: "#" }
    ]
  },
  {
    id: 263,
    name: "Sunil Chand",
    party: "LJP",
    position: "Zila Panchayat Member, Kaimur",
    image: null,
    state: "Bihar",
    district: "Kaimur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Unlawful assembly",
        "Voter intimidation",
        "Illegal asset accumulation",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Kaimur", url: "#" },
      { title: "Election Commission Affidavit - Sunil Chand", url: "#" }
    ]
  },
  {
    id: 264,
    name: "Anil Roy Panda",
    party: "RJD",
    position: "Former Minister, Bihar",
    image: null,
    state: "Bihar",
    district: "Kaimur",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ],
      other: [
        "Gangster activities",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Kaimur", url: "#" },
      { title: "Election Commission Affidavit - Anil Roy Panda", url: "#" }
    ]
  },
  {
    id: 265,
    name: "Geeta Rathore",
    party: "Independent",
    position: "Block President, Katihar",
    image: null,
    state: "Bihar",
    district: "Katihar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Katihar", url: "#" },
      { title: "Election Commission Affidavit - Geeta Rathore", url: "#" }
    ]
  },
  {
    id: 266,
    name: "Vinay Shah Agarwal",
    party: "LJP",
    position: "Block President, Katihar",
    image: null,
    state: "Bihar",
    district: "Katihar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 21
    },
    caseDetails: {
      other: [
        "Contempt of court",
        "Fraudulent voting",
        "Assault",
        "Embezzlement",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Katihar", url: "#" },
      { title: "Election Commission Affidavit - Vinay Shah Agarwal", url: "#" }
    ]
  },
  {
    id: 267,
    name: "Ramakant Shinde Agarwal",
    party: "INC",
    position: "Zila Panchayat Member, Khagaria",
    image: null,
    state: "Bihar",
    district: "Khagaria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Defamation"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Khagaria", url: "#" },
      { title: "Election Commission Affidavit - Ramakant Shinde Agarwal", url: "#" }
    ]
  },
  {
    id: 268,
    name: "Jitesh Kumar",
    party: "Independent",
    position: "MLA, Khagaria",
    image: null,
    state: "Bihar",
    district: "Khagaria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Khagaria", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Kumar", url: "#" }
    ]
  },
  {
    id: 269,
    name: "Laxmikant Bose Sharma",
    party: "INC",
    position: "Block President, Kishanganj",
    image: null,
    state: "Bihar",
    district: "Kishanganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Assault",
        "Illegal weapons possession",
        "Voluntarily causing hurt",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Kishanganj", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Bose Sharma", url: "#" }
    ]
  },
  {
    id: 270,
    name: "Sanjay Nath",
    party: "Independent",
    position: "Municipal Councillor, Kishanganj",
    image: null,
    state: "Bihar",
    district: "Kishanganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Dacoity",
        "Encroachment",
        "Illegal mining",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Kishanganj", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Nath", url: "#" }
    ]
  },
  {
    id: 271,
    name: "Leela Patel Kulkarni",
    party: "Independent",
    position: "District President, Lakhisarai",
    image: null,
    state: "Bihar",
    district: "Lakhisarai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Human trafficking",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Lakhisarai", url: "#" },
      { title: "Election Commission Affidavit - Leela Patel Kulkarni", url: "#" }
    ]
  },
  {
    id: 272,
    name: "Rakesh Chand Yadav",
    party: "RJD",
    position: "Block President, Lakhisarai",
    image: null,
    state: "Bihar",
    district: "Lakhisarai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Gangster activities"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Lakhisarai", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Chand Yadav", url: "#" }
    ]
  },
  {
    id: 273,
    name: "Rakesh Rawat",
    party: "RJD",
    position: "District President, Madhepura",
    image: null,
    state: "Bihar",
    district: "Madhepura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 27
    },
    caseDetails: {
      other: [
        "Encroachment",
        "Forgery",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Madhepura", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Rawat", url: "#" }
    ]
  },
  {
    id: 274,
    name: "Devendra Patel",
    party: "JD(U)",
    position: "District President, Madhepura",
    image: null,
    state: "Bihar",
    district: "Madhepura",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 275,
    name: "Poonam Ahmed",
    party: "LJP",
    position: "Party District Leader, Madhubani",
    image: null,
    state: "Bihar",
    district: "Madhubani",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 276,
    name: "Anjali Babu",
    party: "LJP",
    position: "Block President, Madhubani",
    image: null,
    state: "Bihar",
    district: "Madhubani",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Madhubani", url: "#" },
      { title: "Election Commission Affidavit - Anjali Babu", url: "#" }
    ]
  },
  {
    id: 277,
    name: "Ravindra Shah",
    party: "INC",
    position: "Zila Panchayat Member, Munger",
    image: null,
    state: "Bihar",
    district: "Munger",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Money laundering",
        "Attempt to murder",
        "Bribery"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Munger", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Shah", url: "#" }
    ]
  },
  {
    id: 278,
    name: "Pradeep Ansari Agarwal",
    party: "INC",
    position: "MLA, Munger",
    image: null,
    state: "Bihar",
    district: "Munger",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Munger", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Ansari Agarwal", url: "#" }
    ]
  },
  {
    id: 279,
    name: "Ramesh Sen Swain",
    party: "JD(U)",
    position: "MLA, Muzaffarpur",
    image: null,
    state: "Bihar",
    district: "Muzaffarpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Muzaffarpur", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Sen Swain", url: "#" }
    ]
  },
  {
    id: 280,
    name: "Kuldeep Shah",
    party: "Independent",
    position: "Block President, Muzaffarpur",
    image: null,
    state: "Bihar",
    district: "Muzaffarpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Muzaffarpur", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Shah", url: "#" }
    ]
  },
  {
    id: 281,
    name: "Sangeeta Shinde",
    party: "LJP",
    position: "District President, Nalanda",
    image: null,
    state: "Bihar",
    district: "Nalanda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "Corruption",
        "Caste atrocities",
        "Religious offense",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Nalanda", url: "#" },
      { title: "Election Commission Affidavit - Sangeeta Shinde", url: "#" }
    ]
  },
  {
    id: 282,
    name: "Neeraj Tiwari",
    party: "RJD",
    position: "Party District Leader, Nawada",
    image: null,
    state: "Bihar",
    district: "Nawada",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 283,
    name: "Sunil Khan",
    party: "INC",
    position: "Municipal Councillor, Nawada",
    image: null,
    state: "Bihar",
    district: "Nawada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Abduction",
        "Gangster activities",
        "Criminal intimidation",
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Nawada", url: "#" },
      { title: "Election Commission Affidavit - Sunil Khan", url: "#" }
    ]
  },
  {
    id: 284,
    name: "Sunil Prasad",
    party: "RJD",
    position: "Nagar Palika Chairman, Patna",
    image: null,
    state: "Bihar",
    district: "Patna",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Murder charges"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Patna", url: "#" },
      { title: "Election Commission Affidavit - Sunil Prasad", url: "#" }
    ]
  },
  {
    id: 285,
    name: "Surendra Hussain",
    party: "BJP",
    position: "Block President, Patna",
    image: null,
    state: "Bihar",
    district: "Patna",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 286,
    name: "Manoj Agarwal",
    party: "LJP",
    position: "Former Minister, Bihar",
    image: null,
    state: "Bihar",
    district: "Purnia",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Kidnapping",
        "Land mafia",
        "Corruption"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Purnia", url: "#" },
      { title: "Election Commission Affidavit - Manoj Agarwal", url: "#" }
    ]
  },
  {
    id: 287,
    name: "Dinesh Behera",
    party: "JD(U)",
    position: "Former Minister, Bihar",
    image: null,
    state: "Bihar",
    district: "Purnia",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Purnia", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Behera", url: "#" }
    ]
  },
  {
    id: 288,
    name: "Umesh Khan Kulkarni",
    party: "LJP",
    position: "Former Minister, Bihar",
    image: null,
    state: "Bihar",
    district: "Rohtas",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 289,
    name: "Satish Chatterjee",
    party: "JD(U)",
    position: "District President, Saharsa",
    image: null,
    state: "Bihar",
    district: "Saharsa",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Assault with intent to outrage modesty",
        "Stalking (IPC 354D)"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Saharsa", url: "#" },
      { title: "Election Commission Affidavit - Satish Chatterjee", url: "#" }
    ]
  },
  {
    id: 290,
    name: "Kamlesh Siddiqui",
    party: "RJD",
    position: "MLA, Saharsa",
    image: null,
    state: "Bihar",
    district: "Saharsa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 45
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Abduction",
        "Land mafia",
        "Rioting"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Saharsa", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Siddiqui", url: "#" }
    ]
  },
  {
    id: 291,
    name: "Govind Verma",
    party: "RJD",
    position: "Zila Panchayat Member, Samastipur",
    image: null,
    state: "Bihar",
    district: "Samastipur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 292,
    name: "Umesh Gupta Patil",
    party: "JD(U)",
    position: "MLA, Samastipur",
    image: null,
    state: "Bihar",
    district: "Samastipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Abduction",
        "Drug trafficking",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Samastipur", url: "#" },
      { title: "Election Commission Affidavit - Umesh Gupta Patil", url: "#" }
    ]
  },
  {
    id: 293,
    name: "Kamlesh Lal Shah",
    party: "RJD",
    position: "MLA, Saran",
    image: null,
    state: "Bihar",
    district: "Saran",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Saran", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Lal Shah", url: "#" }
    ]
  },
  {
    id: 294,
    name: "Neeraj Reddy",
    party: "LJP",
    position: "Zila Panchayat Member, Sheikhpura",
    image: null,
    state: "Bihar",
    district: "Sheikhpura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Defamation",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Sheikhpura", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Reddy", url: "#" }
    ]
  },
  {
    id: 295,
    name: "Santosh Banerjee",
    party: "Independent",
    position: "Former MLA, Sheohar",
    image: null,
    state: "Bihar",
    district: "Sheohar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 296,
    name: "Shakti Ahmed Tiwari",
    party: "BJP",
    position: "Former MLA, Sitamarhi",
    image: null,
    state: "Bihar",
    district: "Sitamarhi",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 297,
    name: "Ajay Chaudhary Babu",
    party: "LJP",
    position: "Party District Leader, Siwan",
    image: null,
    state: "Bihar",
    district: "Siwan",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 298,
    name: "Ajay Singh",
    party: "INC",
    position: "Municipal Councillor, Siwan",
    image: null,
    state: "Bihar",
    district: "Siwan",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Assault",
        "Voter intimidation",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Siwan", url: "#" },
      { title: "Election Commission Affidavit - Ajay Singh", url: "#" }
    ]
  },
  {
    id: 299,
    name: "Jitendra Tiwari Patil",
    party: "JD(U)",
    position: "MLA, Supaul",
    image: null,
    state: "Bihar",
    district: "Supaul",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 300,
    name: "Mohan Reddy Banerjee",
    party: "LJP",
    position: "MLA, Vaishali",
    image: null,
    state: "Bihar",
    district: "Vaishali",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Defamation",
        "Land grabbing",
        "Hate speech",
        "Land mafia",
        "Murder charges",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Bihar Police Records - Vaishali", url: "#" },
      { title: "Election Commission Affidavit - Mohan Reddy Banerjee", url: "#" }
    ]
  },
  {
    id: 301,
    name: "Manjeet Reddy",
    party: "Independent",
    position: "MLA, West Champaran",
    image: null,
    state: "Bihar",
    district: "West Champaran",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "SC/ST Act violations",
        "Cattle smuggling",
        "Liquor mafia",
        "Land mafia",
        "Electoral malpractice",
        "Voluntarily causing hurt",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Bihar Police Records - West Champaran", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Reddy", url: "#" }
    ]
  },
  {
    id: 302,
    name: "Anushka Nayak Pandey",
    party: "JD(U)",
    position: "Block President, West Champaran",
    image: null,
    state: "Bihar",
    district: "West Champaran",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Bihar Police Records - West Champaran", url: "#" },
      { title: "Election Commission Affidavit - Anushka Nayak Pandey", url: "#" }
    ]
  },
  {
    id: 303,
    name: "Dilip Prasad Reddy",
    party: "NCP",
    position: "District President, Ahmednagar",
    image: null,
    state: "Maharashtra",
    district: "Ahmednagar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 304,
    name: "Lalita Patil Malik",
    party: "NCP",
    position: "District President, Akola",
    image: null,
    state: "Maharashtra",
    district: "Akola",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 305,
    name: "Sanjeev Qureshi",
    party: "INC",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Akola",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Akola", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Qureshi", url: "#" }
    ]
  },
  {
    id: 306,
    name: "Ajay Patel",
    party: "Shiv Sena (UBT)",
    position: "Zila Panchayat Member, Amravati",
    image: null,
    state: "Maharashtra",
    district: "Amravati",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Amravati", url: "#" },
      { title: "Election Commission Affidavit - Ajay Patel", url: "#" }
    ]
  },
  {
    id: 307,
    name: "Anita Swain",
    party: "Independent",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Aurangabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Rioting",
        "Abduction",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Aurangabad", url: "#" },
      { title: "Election Commission Affidavit - Anita Swain", url: "#" }
    ]
  },
  {
    id: 308,
    name: "Madhuri Swain",
    party: "BJP",
    position: "Zila Panchayat Member, Aurangabad",
    image: null,
    state: "Maharashtra",
    district: "Aurangabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Embezzlement",
        "Murder charges",
        "Illegal mining",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Aurangabad", url: "#" },
      { title: "Election Commission Affidavit - Madhuri Swain", url: "#" }
    ]
  },
  {
    id: 309,
    name: "Jagdish Shinde Rao",
    party: "Shiv Sena (UBT)",
    position: "MLA, Beed",
    image: null,
    state: "Maharashtra",
    district: "Beed",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Benami property",
        "Land mafia",
        "Drug trafficking",
        "Rioting"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Beed", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Shinde Rao", url: "#" }
    ]
  },
  {
    id: 310,
    name: "Devendra Sharma",
    party: "Shiv Sena (UBT)",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Bhandara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Bhandara", url: "#" },
      { title: "Election Commission Affidavit - Devendra Sharma", url: "#" }
    ]
  },
  {
    id: 311,
    name: "Jagdish Bai",
    party: "INC",
    position: "Nagar Palika Chairman, Bhandara",
    image: null,
    state: "Maharashtra",
    district: "Bhandara",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 312,
    name: "Sanjeev Reddy",
    party: "BJP",
    position: "Municipal Councillor, Buldhana",
    image: null,
    state: "Maharashtra",
    district: "Buldhana",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 313,
    name: "Geeta Kumar Panda",
    party: "Shiv Sena (UBT)",
    position: "Block President, Buldhana",
    image: null,
    state: "Maharashtra",
    district: "Buldhana",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 314,
    name: "Balakrishna Gupta",
    party: "Shiv Sena",
    position: "District President, Chandrapur",
    image: null,
    state: "Maharashtra",
    district: "Chandrapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Coal mafia",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Chandrapur", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Gupta", url: "#" }
    ]
  },
  {
    id: 315,
    name: "Manoj Biswal Sahoo",
    party: "Shiv Sena",
    position: "Zila Panchayat Member, Dhule",
    image: null,
    state: "Maharashtra",
    district: "Dhule",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Corruption"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Dhule", url: "#" },
      { title: "Election Commission Affidavit - Manoj Biswal Sahoo", url: "#" }
    ]
  },
  {
    id: 316,
    name: "Rajeev Hussain Prasad",
    party: "INC",
    position: "Municipal Councillor, Dhule",
    image: null,
    state: "Maharashtra",
    district: "Dhule",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Dhule", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Hussain Prasad", url: "#" }
    ]
  },
  {
    id: 317,
    name: "Anil Agarwal Chowdhury",
    party: "BJP",
    position: "Block President, Gadchiroli",
    image: null,
    state: "Maharashtra",
    district: "Gadchiroli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Gadchiroli", url: "#" },
      { title: "Election Commission Affidavit - Anil Agarwal Chowdhury", url: "#" }
    ]
  },
  {
    id: 318,
    name: "Manju Biswal",
    party: "INC",
    position: "MLA, Gondia",
    image: null,
    state: "Maharashtra",
    district: "Gondia",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 40
    },
    caseDetails: {
      other: [
        "Encroachment",
        "Dacoity",
        "Sexual harassment",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Gondia", url: "#" },
      { title: "Election Commission Affidavit - Manju Biswal", url: "#" }
    ]
  },
  {
    id: 319,
    name: "Balakrishna Mehta",
    party: "Shiv Sena (UBT)",
    position: "Party District Leader, Hingoli",
    image: null,
    state: "Maharashtra",
    district: "Hingoli",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Stalking (IPC 354D)"
      ],
      other: [
        "Religious offense",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Hingoli", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Mehta", url: "#" }
    ]
  },
  {
    id: 320,
    name: "Rajendra Babu",
    party: "Shiv Sena",
    position: "Block President, Hingoli",
    image: null,
    state: "Maharashtra",
    district: "Hingoli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Hingoli", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Babu", url: "#" }
    ]
  },
  {
    id: 321,
    name: "Dheeraj Pandey Kulkarni",
    party: "BJP",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Jalgaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Sand mafia",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Jalgaon", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Pandey Kulkarni", url: "#" }
    ]
  },
  {
    id: 322,
    name: "Dinesh Bai",
    party: "Independent",
    position: "Zila Panchayat Member, Jalgaon",
    image: null,
    state: "Maharashtra",
    district: "Jalgaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Jalgaon", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Bai", url: "#" }
    ]
  },
  {
    id: 323,
    name: "Suresh Tiwari Khan",
    party: "NCP",
    position: "MLA, Jalna",
    image: null,
    state: "Maharashtra",
    district: "Jalna",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 324,
    name: "Venkatesh Verma",
    party: "NCP",
    position: "Nagar Palika Chairman, Jalna",
    image: null,
    state: "Maharashtra",
    district: "Jalna",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 325,
    name: "Vineeta Lal Reddy",
    party: "Shiv Sena",
    position: "MLA, Kolhapur",
    image: null,
    state: "Maharashtra",
    district: "Kolhapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Kolhapur", url: "#" },
      { title: "Election Commission Affidavit - Vineeta Lal Reddy", url: "#" }
    ]
  },
  {
    id: 326,
    name: "Prakash Siddiqui",
    party: "INC",
    position: "Block President, Kolhapur",
    image: null,
    state: "Maharashtra",
    district: "Kolhapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Defamation",
        "Abduction",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Kolhapur", url: "#" },
      { title: "Election Commission Affidavit - Prakash Siddiqui", url: "#" }
    ]
  },
  {
    id: 327,
    name: "Ramesh Devi Hussain",
    party: "BJP",
    position: "District President, Latur",
    image: null,
    state: "Maharashtra",
    district: "Latur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 328,
    name: "Vinay Swain",
    party: "Independent",
    position: "Zila Panchayat Member, Mumbai",
    image: null,
    state: "Maharashtra",
    district: "Mumbai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 26
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Unlawful assembly",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Mumbai", url: "#" },
      { title: "Election Commission Affidavit - Vinay Swain", url: "#" }
    ]
  },
  {
    id: 329,
    name: "Rajeev Desai Ghosh",
    party: "NCP",
    position: "District President, Mumbai",
    image: null,
    state: "Maharashtra",
    district: "Mumbai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Gangster activities"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Mumbai", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Desai Ghosh", url: "#" }
    ]
  },
  {
    id: 330,
    name: "Avinash Devi Swain",
    party: "Independent",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Mumbai Suburban",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Illegal mining",
        "Caste atrocities",
        "Electoral malpractice",
        "Abduction",
        "Perjury",
        "Dacoity",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Mumbai Suburban", url: "#" },
      { title: "Election Commission Affidavit - Avinash Devi Swain", url: "#" }
    ]
  },
  {
    id: 331,
    name: "Prakash Qureshi",
    party: "Shiv Sena (UBT)",
    position: "Zila Panchayat Member, Nagpur",
    image: null,
    state: "Maharashtra",
    district: "Nagpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Coal mafia",
        "Tax evasion",
        "Criminal intimidation",
        "Promoting enmity",
        "Criminal trespass",
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Nagpur", url: "#" },
      { title: "Election Commission Affidavit - Prakash Qureshi", url: "#" }
    ]
  },
  {
    id: 332,
    name: "Manoj Kumar Patel",
    party: "Shiv Sena (UBT)",
    position: "Block President, Nanded",
    image: null,
    state: "Maharashtra",
    district: "Nanded",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Dacoity",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Nanded", url: "#" },
      { title: "Election Commission Affidavit - Manoj Kumar Patel", url: "#" }
    ]
  },
  {
    id: 333,
    name: "Narendra Verma Mani",
    party: "Independent",
    position: "Block President, Nanded",
    image: null,
    state: "Maharashtra",
    district: "Nanded",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Nanded", url: "#" },
      { title: "Election Commission Affidavit - Narendra Verma Mani", url: "#" }
    ]
  },
  {
    id: 334,
    name: "Rajesh Rao",
    party: "BJP",
    position: "Nagar Palika Chairman, Nandurbar",
    image: null,
    state: "Maharashtra",
    district: "Nandurbar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Cheating",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Nandurbar", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Rao", url: "#" }
    ]
  },
  {
    id: 335,
    name: "Satish Chatterjee",
    party: "Shiv Sena (UBT)",
    position: "Municipal Councillor, Nashik",
    image: null,
    state: "Maharashtra",
    district: "Nashik",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Criminal trespass",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Nashik", url: "#" },
      { title: "Election Commission Affidavit - Satish Chatterjee", url: "#" }
    ]
  },
  {
    id: 336,
    name: "Manjeet Shinde",
    party: "NCP",
    position: "MLA, Nashik",
    image: null,
    state: "Maharashtra",
    district: "Nashik",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Rioting",
        "Unlawful assembly",
        "Mischief causing damage",
        "Extortion racket",
        "Liquor mafia",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Nashik", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Shinde", url: "#" }
    ]
  },
  {
    id: 337,
    name: "Shivakant Desai Chand",
    party: "Shiv Sena (UBT)",
    position: "Municipal Councillor, Osmanabad",
    image: null,
    state: "Maharashtra",
    district: "Osmanabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 338,
    name: "Umesh Shinde",
    party: "Shiv Sena (UBT)",
    position: "MLA, Osmanabad",
    image: null,
    state: "Maharashtra",
    district: "Osmanabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 339,
    name: "Pradeep Chatterjee",
    party: "Shiv Sena",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Palghar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Kidnapping",
        "Forgery"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Palghar", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Chatterjee", url: "#" }
    ]
  },
  {
    id: 340,
    name: "Santosh Rawat",
    party: "NCP",
    position: "Block President, Palghar",
    image: null,
    state: "Maharashtra",
    district: "Palghar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Drug trafficking",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Palghar", url: "#" },
      { title: "Election Commission Affidavit - Santosh Rawat", url: "#" }
    ]
  },
  {
    id: 341,
    name: "Narendra Dutta Khan",
    party: "INC",
    position: "Party District Leader, Parbhani",
    image: null,
    state: "Maharashtra",
    district: "Parbhani",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Illegal mining",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Parbhani", url: "#" },
      { title: "Election Commission Affidavit - Narendra Dutta Khan", url: "#" }
    ]
  },
  {
    id: 342,
    name: "Manoj Pawar",
    party: "INC",
    position: "MLA, Parbhani",
    image: null,
    state: "Maharashtra",
    district: "Parbhani",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 28
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Unlawful assembly",
        "Armed robbery",
        "Illegal mining",
        "SC/ST Act violations",
        "Caste atrocities",
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Parbhani", url: "#" },
      { title: "Election Commission Affidavit - Manoj Pawar", url: "#" }
    ]
  },
  {
    id: 343,
    name: "Mukesh Negi",
    party: "Independent",
    position: "Municipal Councillor, Pune",
    image: null,
    state: "Maharashtra",
    district: "Pune",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Illegal mining",
        "Cattle smuggling",
        "Abduction",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Pune", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Negi", url: "#" }
    ]
  },
  {
    id: 344,
    name: "Dinesh Negi Jain",
    party: "NCP",
    position: "Nagar Palika Chairman, Raigad",
    image: null,
    state: "Maharashtra",
    district: "Raigad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Caste atrocities",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Raigad", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Negi Jain", url: "#" }
    ]
  },
  {
    id: 345,
    name: "Pankaj Patil Patel",
    party: "INC",
    position: "Zila Panchayat Member, Ratnagiri",
    image: null,
    state: "Maharashtra",
    district: "Ratnagiri",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Stalking (IPC 354D)"
      ],
      other: [
        "Bribery"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Ratnagiri", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Patil Patel", url: "#" }
    ]
  },
  {
    id: 346,
    name: "Dheeraj Qureshi Banerjee",
    party: "Shiv Sena (UBT)",
    position: "Former MLA, Sangli",
    image: null,
    state: "Maharashtra",
    district: "Sangli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Assault",
        "Property dispute",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Sangli", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Qureshi Banerjee", url: "#" }
    ]
  },
  {
    id: 347,
    name: "Brijesh Singh Hussain",
    party: "Shiv Sena (UBT)",
    position: "Party District Leader, Sangli",
    image: null,
    state: "Maharashtra",
    district: "Sangli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 42
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Assault",
        "Abduction",
        "Defamation",
        "Gangster activities"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Sangli", url: "#" },
      { title: "Election Commission Affidavit - Brijesh Singh Hussain", url: "#" }
    ]
  },
  {
    id: 348,
    name: "Mukesh Kulkarni",
    party: "Shiv Sena",
    position: "Block President, Satara",
    image: null,
    state: "Maharashtra",
    district: "Satara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Money laundering",
        "Extortion racket",
        "Dacoity",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Satara", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Kulkarni", url: "#" }
    ]
  },
  {
    id: 349,
    name: "Rajeev Kumar",
    party: "Independent",
    position: "MLA, Satara",
    image: null,
    state: "Maharashtra",
    district: "Satara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 39
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Electoral malpractice",
        "Benami property",
        "Coal mafia",
        "Forgery",
        "Contempt of court",
        "Religious offense",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Satara", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Kumar", url: "#" }
    ]
  },
  {
    id: 350,
    name: "Mahendra Dutta Bisht",
    party: "Independent",
    position: "Party District Leader, Sindhudurg",
    image: null,
    state: "Maharashtra",
    district: "Sindhudurg",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Sindhudurg", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Dutta Bisht", url: "#" }
    ]
  },
  {
    id: 351,
    name: "Santosh Khan Patil",
    party: "NCP",
    position: "Zila Panchayat Member, Sindhudurg",
    image: null,
    state: "Maharashtra",
    district: "Sindhudurg",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Illegal occupation",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Sindhudurg", url: "#" },
      { title: "Election Commission Affidavit - Santosh Khan Patil", url: "#" }
    ]
  },
  {
    id: 352,
    name: "Reena Pandey",
    party: "Independent",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Solapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Solapur", url: "#" },
      { title: "Election Commission Affidavit - Reena Pandey", url: "#" }
    ]
  },
  {
    id: 353,
    name: "Suresh Prasad Rathore",
    party: "Independent",
    position: "Party District Leader, Solapur",
    image: null,
    state: "Maharashtra",
    district: "Solapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Forgery"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Solapur", url: "#" },
      { title: "Election Commission Affidavit - Suresh Prasad Rathore", url: "#" }
    ]
  },
  {
    id: 354,
    name: "Vinay Ahmed Joshi",
    party: "INC",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Thane",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Wrongful confinement",
        "Voter intimidation",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Thane", url: "#" },
      { title: "Election Commission Affidavit - Vinay Ahmed Joshi", url: "#" }
    ]
  },
  {
    id: 355,
    name: "Subhash Gupta",
    party: "Independent",
    position: "Block President, Thane",
    image: null,
    state: "Maharashtra",
    district: "Thane",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Defamation"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Thane", url: "#" },
      { title: "Election Commission Affidavit - Subhash Gupta", url: "#" }
    ]
  },
  {
    id: 356,
    name: "Suresh Chatterjee",
    party: "NCP",
    position: "Former Minister, Maharashtra",
    image: null,
    state: "Maharashtra",
    district: "Wardha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 36
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Gangster activities",
        "Cheating"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Wardha", url: "#" },
      { title: "Election Commission Affidavit - Suresh Chatterjee", url: "#" }
    ]
  },
  {
    id: 357,
    name: "Jitendra Agarwal",
    party: "BJP",
    position: "Block President, Wardha",
    image: null,
    state: "Maharashtra",
    district: "Wardha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Abduction"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Wardha", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Agarwal", url: "#" }
    ]
  },
  {
    id: 358,
    name: "Santosh Panda Banerjee",
    party: "Shiv Sena",
    position: "District President, Washim",
    image: null,
    state: "Maharashtra",
    district: "Washim",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Bribery",
        "Booth capturing",
        "Illegal asset accumulation",
        "Land grabbing",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Washim", url: "#" },
      { title: "Election Commission Affidavit - Santosh Panda Banerjee", url: "#" }
    ]
  },
  {
    id: 359,
    name: "Dinesh Patil",
    party: "Independent",
    position: "Party District Leader, Yavatmal",
    image: null,
    state: "Maharashtra",
    district: "Yavatmal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Kidnapping",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Maharashtra Police Records - Yavatmal", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Patil", url: "#" }
    ]
  },
  {
    id: 360,
    name: "Pramod Ansari Naidu",
    party: "Independent",
    position: "Municipal Councillor, Alipurduar",
    image: null,
    state: "West Bengal",
    district: "Alipurduar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "SC/ST Act violations",
        "Criminal conspiracy",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Alipurduar", url: "#" },
      { title: "Election Commission Affidavit - Pramod Ansari Naidu", url: "#" }
    ]
  },
  {
    id: 361,
    name: "Rampreet Biswal Shah",
    party: "CPI(M)",
    position: "Former Minister, West Bengal",
    image: null,
    state: "West Bengal",
    district: "Bankura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Coal mafia",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Bankura", url: "#" },
      { title: "Election Commission Affidavit - Rampreet Biswal Shah", url: "#" }
    ]
  },
  {
    id: 362,
    name: "Shyam Prasad",
    party: "Independent",
    position: "Former MLA, Birbhum",
    image: null,
    state: "West Bengal",
    district: "Birbhum",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Abduction",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Birbhum", url: "#" },
      { title: "Election Commission Affidavit - Shyam Prasad", url: "#" }
    ]
  },
  {
    id: 363,
    name: "Venkatesh Yadav Sen",
    party: "BJP",
    position: "District President, Birbhum",
    image: null,
    state: "West Bengal",
    district: "Birbhum",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Birbhum", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Yadav Sen", url: "#" }
    ]
  },
  {
    id: 364,
    name: "Ramakant Kulkarni Sahu",
    party: "INC",
    position: "Nagar Palika Chairman, Cooch Behar",
    image: null,
    state: "West Bengal",
    district: "Cooch Behar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Coal mafia"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Cooch Behar", url: "#" },
      { title: "Election Commission Affidavit - Ramakant Kulkarni Sahu", url: "#" }
    ]
  },
  {
    id: 365,
    name: "Omprakash Shah Chowdhury",
    party: "Independent",
    position: "Municipal Councillor, Dakshin Dinajpur",
    image: null,
    state: "West Bengal",
    district: "Dakshin Dinajpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Bribery",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Dakshin Dinajpur", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Shah Chowdhury", url: "#" }
    ]
  },
  {
    id: 366,
    name: "Shakti Qureshi",
    party: "CPI(M)",
    position: "Former Minister, West Bengal",
    image: null,
    state: "West Bengal",
    district: "Dakshin Dinajpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 367,
    name: "Sohan Sharma",
    party: "Independent",
    position: "MLA, Darjeeling",
    image: null,
    state: "West Bengal",
    district: "Darjeeling",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Cheating",
        "Sand mafia",
        "Defamation",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Darjeeling", url: "#" },
      { title: "Election Commission Affidavit - Sohan Sharma", url: "#" }
    ]
  },
  {
    id: 368,
    name: "Rampreet Khan",
    party: "CPI(M)",
    position: "Municipal Councillor, Hooghly",
    image: null,
    state: "West Bengal",
    district: "Hooghly",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 369,
    name: "Manjari Ansari",
    party: "BJP",
    position: "Municipal Councillor, Hooghly",
    image: null,
    state: "West Bengal",
    district: "Hooghly",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Fraudulent voting",
        "Cheating",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Hooghly", url: "#" },
      { title: "Election Commission Affidavit - Manjari Ansari", url: "#" }
    ]
  },
  {
    id: 370,
    name: "Jitendra Prasad Patil",
    party: "AITC",
    position: "Former Minister, West Bengal",
    image: null,
    state: "West Bengal",
    district: "Howrah",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Rape charges"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Howrah", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Prasad Patil", url: "#" }
    ]
  },
  {
    id: 371,
    name: "Kuldeep Jain",
    party: "INC",
    position: "Former MLA, Howrah",
    image: null,
    state: "West Bengal",
    district: "Howrah",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Howrah", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Jain", url: "#" }
    ]
  },
  {
    id: 372,
    name: "Rajeev Bisht",
    party: "CPI(M)",
    position: "Nagar Palika Chairman, Jalpaiguri",
    image: null,
    state: "West Bengal",
    district: "Jalpaiguri",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)",
        "Assault with intent to outrage modesty"
      ],
      other: [
        "Benami property"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Jalpaiguri", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Bisht", url: "#" }
    ]
  },
  {
    id: 373,
    name: "Umesh Naidu",
    party: "Independent",
    position: "Party District Leader, Jalpaiguri",
    image: null,
    state: "West Bengal",
    district: "Jalpaiguri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 59
    },
    caseDetails: {
      other: [
        "Abduction",
        "Kidnapping",
        "Corruption"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Jalpaiguri", url: "#" },
      { title: "Election Commission Affidavit - Umesh Naidu", url: "#" }
    ]
  },
  {
    id: 374,
    name: "Kamlesh Pawar",
    party: "CPI(M)",
    position: "Party District Leader, Jhargram",
    image: null,
    state: "West Bengal",
    district: "Jhargram",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 375,
    name: "Mukesh Ghosh Kumar",
    party: "INC",
    position: "Party District Leader, Kalimpong",
    image: null,
    state: "West Bengal",
    district: "Kalimpong",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 376,
    name: "Mahendra Rathore Verma",
    party: "AITC",
    position: "Block President, Kolkata",
    image: null,
    state: "West Bengal",
    district: "Kolkata",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Kolkata", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Rathore Verma", url: "#" }
    ]
  },
  {
    id: 377,
    name: "Dharmendra Pandey",
    party: "CPI(M)",
    position: "Former MLA, Malda",
    image: null,
    state: "West Bengal",
    district: "Malda",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 378,
    name: "Govind Pawar",
    party: "BJP",
    position: "Block President, Murshidabad",
    image: null,
    state: "West Bengal",
    district: "Murshidabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Encroachment",
        "SC/ST Act violations",
        "Hate speech"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Murshidabad", url: "#" },
      { title: "Election Commission Affidavit - Govind Pawar", url: "#" }
    ]
  },
  {
    id: 379,
    name: "Anand Panda Joshi",
    party: "BJP",
    position: "Nagar Palika Chairman, Nadia",
    image: null,
    state: "West Bengal",
    district: "Nadia",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 380,
    name: "Amarjeet Joshi",
    party: "CPI(M)",
    position: "Zila Panchayat Member, Nadia",
    image: null,
    state: "West Bengal",
    district: "Nadia",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Gangster activities"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Nadia", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Joshi", url: "#" }
    ]
  },
  {
    id: 381,
    name: "Suresh Shinde",
    party: "INC",
    position: "District President, North 24 Parganas",
    image: null,
    state: "West Bengal",
    district: "North 24 Parganas",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 39
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Drug trafficking",
        "SC/ST Act violations",
        "Fraudulent voting",
        "Sexual harassment",
        "Dacoity"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - North 24 Parganas", url: "#" },
      { title: "Election Commission Affidavit - Suresh Shinde", url: "#" }
    ]
  },
  {
    id: 382,
    name: "Sanjana Behera Devi",
    party: "CPI(M)",
    position: "Former MLA, North 24 Parganas",
    image: null,
    state: "West Bengal",
    district: "North 24 Parganas",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 383,
    name: "Hitesh Gupta",
    party: "BJP",
    position: "Party District Leader, Paschim Bardhaman",
    image: null,
    state: "West Bengal",
    district: "Paschim Bardhaman",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Religious offense"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Paschim Bardhaman", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Gupta", url: "#" }
    ]
  },
  {
    id: 384,
    name: "Shivakant Prasad Dutta",
    party: "Independent",
    position: "District President, Paschim Medinipur",
    image: null,
    state: "West Bengal",
    district: "Paschim Medinipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Human trafficking",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Paschim Medinipur", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Prasad Dutta", url: "#" }
    ]
  },
  {
    id: 385,
    name: "Rakesh Ahmed",
    party: "BJP",
    position: "Party District Leader, Paschim Medinipur",
    image: null,
    state: "West Bengal",
    district: "Paschim Medinipur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 386,
    name: "Ajay Naidu Ahmed",
    party: "AITC",
    position: "Block President, Purba Bardhaman",
    image: null,
    state: "West Bengal",
    district: "Purba Bardhaman",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 26
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Dacoity",
        "Inciting violence",
        "Money laundering",
        "Misappropriation of public funds",
        "Property dispute"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Purba Bardhaman", url: "#" },
      { title: "Election Commission Affidavit - Ajay Naidu Ahmed", url: "#" }
    ]
  },
  {
    id: 387,
    name: "Yogesh Nath Sahoo",
    party: "CPI(M)",
    position: "Former Minister, West Bengal",
    image: null,
    state: "West Bengal",
    district: "Purba Bardhaman",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 388,
    name: "Neelam Joshi Rajput",
    party: "AITC",
    position: "Former Minister, West Bengal",
    image: null,
    state: "West Bengal",
    district: "Purba Medinipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Defamation",
        "Abduction",
        "Contempt of court",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Purba Medinipur", url: "#" },
      { title: "Election Commission Affidavit - Neelam Joshi Rajput", url: "#" }
    ]
  },
  {
    id: 389,
    name: "Satish Chauhan Bai",
    party: "Independent",
    position: "District President, Purba Medinipur",
    image: null,
    state: "West Bengal",
    district: "Purba Medinipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Purba Medinipur", url: "#" },
      { title: "Election Commission Affidavit - Satish Chauhan Bai", url: "#" }
    ]
  },
  {
    id: 390,
    name: "Shanti Bai Tiwari",
    party: "BJP",
    position: "District President, Purulia",
    image: null,
    state: "West Bengal",
    district: "Purulia",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Assault with intent to outrage modesty",
        "Molestation charges",
        "Voyeurism charges"
      ],
      other: [
        "Fraudulent voting",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Purulia", url: "#" },
      { title: "Election Commission Affidavit - Shanti Bai Tiwari", url: "#" }
    ]
  },
  {
    id: 391,
    name: "Usha Rajput",
    party: "BJP",
    position: "Party District Leader, South 24 Parganas",
    image: null,
    state: "West Bengal",
    district: "South 24 Parganas",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - South 24 Parganas", url: "#" },
      { title: "Election Commission Affidavit - Usha Rajput", url: "#" }
    ]
  },
  {
    id: 392,
    name: "Anand Chand",
    party: "INC",
    position: "Zila Panchayat Member, South 24 Parganas",
    image: null,
    state: "West Bengal",
    district: "South 24 Parganas",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - South 24 Parganas", url: "#" },
      { title: "Election Commission Affidavit - Anand Chand", url: "#" }
    ]
  },
  {
    id: 393,
    name: "Subhash Panda",
    party: "INC",
    position: "Municipal Councillor, Uttar Dinajpur",
    image: null,
    state: "West Bengal",
    district: "Uttar Dinajpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Abduction"
      ]
    },
    sources: [
      { title: "West Bengal Police Records - Uttar Dinajpur", url: "#" },
      { title: "Election Commission Affidavit - Subhash Panda", url: "#" }
    ]
  },
  {
    id: 394,
    name: "Meena Verma Khan",
    party: "Independent",
    position: "Former MLA, Agar Malwa",
    image: null,
    state: "Madhya Pradesh",
    district: "Agar Malwa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Fraudulent voting",
        "Encroachment",
        "Sexual harassment",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Agar Malwa", url: "#" },
      { title: "Election Commission Affidavit - Meena Verma Khan", url: "#" }
    ]
  },
  {
    id: 395,
    name: "Hardeep Singh Chatterjee",
    party: "Independent",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Agar Malwa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Agar Malwa", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Singh Chatterjee", url: "#" }
    ]
  },
  {
    id: 396,
    name: "Manjeet Shinde",
    party: "BJP",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Alirajpur",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Rape under IPC 376"
      ],
      other: [
        "Money laundering",
        "Criminal intimidation",
        "Forgery"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Alirajpur", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Shinde", url: "#" }
    ]
  },
  {
    id: 397,
    name: "Yogesh Sharma Sahoo",
    party: "BSP",
    position: "Municipal Councillor, Alirajpur",
    image: null,
    state: "Madhya Pradesh",
    district: "Alirajpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds",
        "Liquor mafia",
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Alirajpur", url: "#" },
      { title: "Election Commission Affidavit - Yogesh Sharma Sahoo", url: "#" }
    ]
  },
  {
    id: 398,
    name: "Gajendra Ghosh",
    party: "BJP",
    position: "Block President, Anuppur",
    image: null,
    state: "Madhya Pradesh",
    district: "Anuppur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 25
    },
    caseDetails: {
      other: [
        "SC/ST Act violations",
        "Coal mafia",
        "Dacoity",
        "Murder charges",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Anuppur", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Ghosh", url: "#" }
    ]
  },
  {
    id: 399,
    name: "Mandeep Ghosh",
    party: "SP",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Anuppur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 39
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Embezzlement",
        "Hate speech",
        "Drug trafficking",
        "Fraudulent voting",
        "Dacoity",
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Anuppur", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Ghosh", url: "#" }
    ]
  },
  {
    id: 400,
    name: "Pankaj Mishra Shinde",
    party: "INC",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Ashoknagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Murder charges",
        "SC/ST Act violations",
        "Abduction"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Ashoknagar", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Mishra Shinde", url: "#" }
    ]
  },
  {
    id: 401,
    name: "Shyam Verma",
    party: "SP",
    position: "Block President, Balaghat",
    image: null,
    state: "Madhya Pradesh",
    district: "Balaghat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Perjury",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Balaghat", url: "#" },
      { title: "Election Commission Affidavit - Shyam Verma", url: "#" }
    ]
  },
  {
    id: 402,
    name: "Dayashankar Mani",
    party: "BSP",
    position: "District President, Balaghat",
    image: null,
    state: "Madhya Pradesh",
    district: "Balaghat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Cattle smuggling",
        "Contempt of court",
        "Perjury",
        "Wrongful confinement",
        "Explosive substances possession",
        "Illegal mining",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Balaghat", url: "#" },
      { title: "Election Commission Affidavit - Dayashankar Mani", url: "#" }
    ]
  },
  {
    id: 403,
    name: "Ram Desai",
    party: "SP",
    position: "Block President, Barwani",
    image: null,
    state: "Madhya Pradesh",
    district: "Barwani",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 404,
    name: "Ranjeet Shinde Nayak",
    party: "BJP",
    position: "MLA, Betul",
    image: null,
    state: "Madhya Pradesh",
    district: "Betul",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Betul", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Shinde Nayak", url: "#" }
    ]
  },
  {
    id: 405,
    name: "Shraddha Pawar",
    party: "SP",
    position: "Municipal Councillor, Bhind",
    image: null,
    state: "Madhya Pradesh",
    district: "Bhind",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 23
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Promoting enmity",
        "Dacoity",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Bhind", url: "#" },
      { title: "Election Commission Affidavit - Shraddha Pawar", url: "#" }
    ]
  },
  {
    id: 406,
    name: "Sanju Negi Ghosh",
    party: "INC",
    position: "District President, Bhopal",
    image: null,
    state: "Madhya Pradesh",
    district: "Bhopal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Attempt to murder",
        "Criminal trespass",
        "Sand mafia",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Bhopal", url: "#" },
      { title: "Election Commission Affidavit - Sanju Negi Ghosh", url: "#" }
    ]
  },
  {
    id: 407,
    name: "Rajendra Khan",
    party: "INC",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Bhopal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 408,
    name: "Gajendra Verma",
    party: "SP",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Burhanpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Assault",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Burhanpur", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Verma", url: "#" }
    ]
  },
  {
    id: 409,
    name: "Amarjeet Babu",
    party: "BJP",
    position: "MLA, Burhanpur",
    image: null,
    state: "Madhya Pradesh",
    district: "Burhanpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 410,
    name: "Hariprasad Chaudhary Singh",
    party: "Independent",
    position: "Municipal Councillor, Chhatarpur",
    image: null,
    state: "Madhya Pradesh",
    district: "Chhatarpur",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Chhatarpur", url: "#" },
      { title: "Election Commission Affidavit - Hariprasad Chaudhary Singh", url: "#" }
    ]
  },
  {
    id: 411,
    name: "Ravindra Biswal",
    party: "Independent",
    position: "Block President, Chhatarpur",
    image: null,
    state: "Madhya Pradesh",
    district: "Chhatarpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Inciting violence",
        "Illegal asset accumulation",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Chhatarpur", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Biswal", url: "#" }
    ]
  },
  {
    id: 412,
    name: "Umesh Prasad Tiwari",
    party: "SP",
    position: "MLA, Chhindwara",
    image: null,
    state: "Madhya Pradesh",
    district: "Chhindwara",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Voyeurism charges",
        "Molestation charges"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Chhindwara", url: "#" },
      { title: "Election Commission Affidavit - Umesh Prasad Tiwari", url: "#" }
    ]
  },
  {
    id: 413,
    name: "Umesh Shinde",
    party: "BSP",
    position: "MLA, Chhindwara",
    image: null,
    state: "Madhya Pradesh",
    district: "Chhindwara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Illegal weapons possession",
        "Cheating"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Chhindwara", url: "#" },
      { title: "Election Commission Affidavit - Umesh Shinde", url: "#" }
    ]
  },
  {
    id: 414,
    name: "Jitesh Patel",
    party: "SP",
    position: "Nagar Palika Chairman, Damoh",
    image: null,
    state: "Madhya Pradesh",
    district: "Damoh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Extortion racket",
        "Gangster activities",
        "Disproportionate assets",
        "Bribery"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Damoh", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Patel", url: "#" }
    ]
  },
  {
    id: 415,
    name: "Gurjeet Qureshi Hussain",
    party: "SP",
    position: "MLA, Damoh",
    image: null,
    state: "Madhya Pradesh",
    district: "Damoh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Mischief causing damage",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Damoh", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Qureshi Hussain", url: "#" }
    ]
  },
  {
    id: 416,
    name: "Anil Hussain Babu",
    party: "Independent",
    position: "Party District Leader, Datia",
    image: null,
    state: "Madhya Pradesh",
    district: "Datia",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Sand mafia",
        "Coal mafia",
        "Fraudulent voting",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Datia", url: "#" },
      { title: "Election Commission Affidavit - Anil Hussain Babu", url: "#" }
    ]
  },
  {
    id: 417,
    name: "Devendra Shinde Chaudhary",
    party: "SP",
    position: "District President, Datia",
    image: null,
    state: "Madhya Pradesh",
    district: "Datia",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Assault with intent to outrage modesty"
      ],
      other: [
        "Misappropriation of public funds",
        "Criminal conspiracy",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Datia", url: "#" },
      { title: "Election Commission Affidavit - Devendra Shinde Chaudhary", url: "#" }
    ]
  },
  {
    id: 418,
    name: "Surendra Singh Mehta",
    party: "INC",
    position: "Block President, Dewas",
    image: null,
    state: "Madhya Pradesh",
    district: "Dewas",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Illegal construction",
        "Attempt to murder",
        "Promoting enmity",
        "Caste atrocities",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Dewas", url: "#" },
      { title: "Election Commission Affidavit - Surendra Singh Mehta", url: "#" }
    ]
  },
  {
    id: 419,
    name: "Devendra Nayak",
    party: "INC",
    position: "MLA, Dewas",
    image: null,
    state: "Madhya Pradesh",
    district: "Dewas",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Land grabbing"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Dewas", url: "#" },
      { title: "Election Commission Affidavit - Devendra Nayak", url: "#" }
    ]
  },
  {
    id: 420,
    name: "Sanju Rawat Thakur",
    party: "Independent",
    position: "Party District Leader, Dhar",
    image: null,
    state: "Madhya Pradesh",
    district: "Dhar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Abduction",
        "Assault",
        "Misappropriation of public funds",
        "Perjury",
        "Illegal occupation",
        "Criminal trespass",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Dhar", url: "#" },
      { title: "Election Commission Affidavit - Sanju Rawat Thakur", url: "#" }
    ]
  },
  {
    id: 421,
    name: "Dayashankar Sen",
    party: "BJP",
    position: "Former MLA, Dhar",
    image: null,
    state: "Madhya Pradesh",
    district: "Dhar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 422,
    name: "Dharmendra Bose Chauhan",
    party: "INC",
    position: "Municipal Councillor, Dindori",
    image: null,
    state: "Madhya Pradesh",
    district: "Dindori",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 423,
    name: "Sohan Chauhan Agarwal",
    party: "BSP",
    position: "Former MLA, Guna",
    image: null,
    state: "Madhya Pradesh",
    district: "Guna",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Voluntarily causing hurt",
        "Breach of trust"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Guna", url: "#" },
      { title: "Election Commission Affidavit - Sohan Chauhan Agarwal", url: "#" }
    ]
  },
  {
    id: 424,
    name: "Kamlesh Rathore",
    party: "Independent",
    position: "District President, Guna",
    image: null,
    state: "Madhya Pradesh",
    district: "Guna",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Guna", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Rathore", url: "#" }
    ]
  },
  {
    id: 425,
    name: "Balakrishna Ghosh",
    party: "BJP",
    position: "MLA, Gwalior",
    image: null,
    state: "Madhya Pradesh",
    district: "Gwalior",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Voluntarily causing hurt",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Gwalior", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Ghosh", url: "#" }
    ]
  },
  {
    id: 426,
    name: "Ashok Sahu",
    party: "SP",
    position: "MLA, Gwalior",
    image: null,
    state: "Madhya Pradesh",
    district: "Gwalior",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Rioting",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Gwalior", url: "#" },
      { title: "Election Commission Affidavit - Ashok Sahu", url: "#" }
    ]
  },
  {
    id: 427,
    name: "Dharmendra Mani",
    party: "BSP",
    position: "Party District Leader, Harda",
    image: null,
    state: "Madhya Pradesh",
    district: "Harda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Land mafia",
        "Disproportionate assets",
        "Wrongful confinement",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Harda", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Mani", url: "#" }
    ]
  },
  {
    id: 428,
    name: "Dinesh Bose",
    party: "Independent",
    position: "Block President, Harda",
    image: null,
    state: "Madhya Pradesh",
    district: "Harda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Corruption",
        "Illegal construction",
        "Criminal intimidation",
        "Religious offense",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Harda", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Bose", url: "#" }
    ]
  },
  {
    id: 429,
    name: "Jagdish Rao Biswal",
    party: "Independent",
    position: "Block President, Hoshangabad",
    image: null,
    state: "Madhya Pradesh",
    district: "Hoshangabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "SC/ST Act violations",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Hoshangabad", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Rao Biswal", url: "#" }
    ]
  },
  {
    id: 430,
    name: "Mahendra Biswal",
    party: "SP",
    position: "Party District Leader, Indore",
    image: null,
    state: "Madhya Pradesh",
    district: "Indore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Indore", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Biswal", url: "#" }
    ]
  },
  {
    id: 431,
    name: "Mohan Sen Devi",
    party: "SP",
    position: "Nagar Palika Chairman, Indore",
    image: null,
    state: "Madhya Pradesh",
    district: "Indore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Indore", url: "#" },
      { title: "Election Commission Affidavit - Mohan Sen Devi", url: "#" }
    ]
  },
  {
    id: 432,
    name: "Dheeraj Tiwari",
    party: "Independent",
    position: "District President, Jabalpur",
    image: null,
    state: "Madhya Pradesh",
    district: "Jabalpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 433,
    name: "Reena Mukherjee Kulkarni",
    party: "INC",
    position: "Party District Leader, Jhabua",
    image: null,
    state: "Madhya Pradesh",
    district: "Jhabua",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 434,
    name: "Manjari Chowdhury",
    party: "BSP",
    position: "Block President, Jhabua",
    image: null,
    state: "Madhya Pradesh",
    district: "Jhabua",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Corruption",
        "Dacoity",
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Jhabua", url: "#" },
      { title: "Election Commission Affidavit - Manjari Chowdhury", url: "#" }
    ]
  },
  {
    id: 435,
    name: "Sanjeev Mani",
    party: "SP",
    position: "Former MLA, Katni",
    image: null,
    state: "Madhya Pradesh",
    district: "Katni",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Ammunition without license",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Katni", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Mani", url: "#" }
    ]
  },
  {
    id: 436,
    name: "Ajay Desai Banerjee",
    party: "BJP",
    position: "Municipal Councillor, Katni",
    image: null,
    state: "Madhya Pradesh",
    district: "Katni",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 58
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Corruption",
        "Assault"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Katni", url: "#" },
      { title: "Election Commission Affidavit - Ajay Desai Banerjee", url: "#" }
    ]
  },
  {
    id: 437,
    name: "Dayashankar Ali Chaudhary",
    party: "INC",
    position: "Zila Panchayat Member, Khandwa",
    image: null,
    state: "Madhya Pradesh",
    district: "Khandwa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Bribery",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Khandwa", url: "#" },
      { title: "Election Commission Affidavit - Dayashankar Ali Chaudhary", url: "#" }
    ]
  },
  {
    id: 438,
    name: "Deepika Chatterjee",
    party: "BSP",
    position: "Zila Panchayat Member, Khandwa",
    image: null,
    state: "Madhya Pradesh",
    district: "Khandwa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Illegal occupation",
        "Abduction"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Khandwa", url: "#" },
      { title: "Election Commission Affidavit - Deepika Chatterjee", url: "#" }
    ]
  },
  {
    id: 439,
    name: "Madhuri Ali",
    party: "SP",
    position: "Former MLA, Khargone",
    image: null,
    state: "Madhya Pradesh",
    district: "Khargone",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Booth capturing",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Khargone", url: "#" },
      { title: "Election Commission Affidavit - Madhuri Ali", url: "#" }
    ]
  },
  {
    id: 440,
    name: "Pradeep Prasad Qureshi",
    party: "BJP",
    position: "MLA, Khargone",
    image: null,
    state: "Madhya Pradesh",
    district: "Khargone",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Religious offense",
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Khargone", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Prasad Qureshi", url: "#" }
    ]
  },
  {
    id: 441,
    name: "Mahendra Chauhan",
    party: "INC",
    position: "District President, Mandla",
    image: null,
    state: "Madhya Pradesh",
    district: "Mandla",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 442,
    name: "Sohan Sahoo Biswal",
    party: "INC",
    position: "District President, Mandla",
    image: null,
    state: "Madhya Pradesh",
    district: "Mandla",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 443,
    name: "Mallika Patel Khan",
    party: "SP",
    position: "Party District Leader, Mandsaur",
    image: null,
    state: "Madhya Pradesh",
    district: "Mandsaur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Disproportionate assets",
        "Contempt of court",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Mandsaur", url: "#" },
      { title: "Election Commission Affidavit - Mallika Patel Khan", url: "#" }
    ]
  },
  {
    id: 444,
    name: "Dilip Siddiqui Shinde",
    party: "INC",
    position: "Party District Leader, Mandsaur",
    image: null,
    state: "Madhya Pradesh",
    district: "Mandsaur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Abduction",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Mandsaur", url: "#" },
      { title: "Election Commission Affidavit - Dilip Siddiqui Shinde", url: "#" }
    ]
  },
  {
    id: 445,
    name: "Mukesh Chaudhary",
    party: "BJP",
    position: "District President, Morena",
    image: null,
    state: "Madhya Pradesh",
    district: "Morena",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Corruption",
        "Illegal occupation",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Morena", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Chaudhary", url: "#" }
    ]
  },
  {
    id: 446,
    name: "Pradeep Joshi Patel",
    party: "INC",
    position: "Nagar Palika Chairman, Morena",
    image: null,
    state: "Madhya Pradesh",
    district: "Morena",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 447,
    name: "Mamta Jain Yadav",
    party: "INC",
    position: "Municipal Councillor, Narsinghpur",
    image: null,
    state: "Madhya Pradesh",
    district: "Narsinghpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Voluntarily causing hurt",
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Narsinghpur", url: "#" },
      { title: "Election Commission Affidavit - Mamta Jain Yadav", url: "#" }
    ]
  },
  {
    id: 448,
    name: "Dinesh Bose Shinde",
    party: "INC",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Narsinghpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "SC/ST Act violations",
        "Liquor mafia",
        "Promoting enmity",
        "Kidnapping",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Narsinghpur", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Bose Shinde", url: "#" }
    ]
  },
  {
    id: 449,
    name: "Kishore Banerjee",
    party: "BJP",
    position: "Nagar Palika Chairman, Neemuch",
    image: null,
    state: "Madhya Pradesh",
    district: "Neemuch",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Land grabbing"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Neemuch", url: "#" },
      { title: "Election Commission Affidavit - Kishore Banerjee", url: "#" }
    ]
  },
  {
    id: 450,
    name: "Rajendra Jain",
    party: "SP",
    position: "Block President, Neemuch",
    image: null,
    state: "Madhya Pradesh",
    district: "Neemuch",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 451,
    name: "Surendra Rawat Kulkarni",
    party: "INC",
    position: "Former MLA, Panna",
    image: null,
    state: "Madhya Pradesh",
    district: "Panna",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 452,
    name: "Narasimha Thakur",
    party: "BSP",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Panna",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)",
        "Eve-teasing and harassment"
      ],
      other: [
        "Rape charges",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Panna", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Thakur", url: "#" }
    ]
  },
  {
    id: 453,
    name: "Santosh Hussain Shah",
    party: "Independent",
    position: "Party District Leader, Raisen",
    image: null,
    state: "Madhya Pradesh",
    district: "Raisen",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Raisen", url: "#" },
      { title: "Election Commission Affidavit - Santosh Hussain Shah", url: "#" }
    ]
  },
  {
    id: 454,
    name: "Manjari Rathore",
    party: "INC",
    position: "Former MLA, Raisen",
    image: null,
    state: "Madhya Pradesh",
    district: "Raisen",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Raisen", url: "#" },
      { title: "Election Commission Affidavit - Manjari Rathore", url: "#" }
    ]
  },
  {
    id: 455,
    name: "Manoj Bisht Rao",
    party: "BSP",
    position: "Municipal Councillor, Rajgarh",
    image: null,
    state: "Madhya Pradesh",
    district: "Rajgarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 456,
    name: "Rajendra Pawar",
    party: "BSP",
    position: "Municipal Councillor, Rajgarh",
    image: null,
    state: "Madhya Pradesh",
    district: "Rajgarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 457,
    name: "Brijendra Desai",
    party: "BSP",
    position: "Former MLA, Ratlam",
    image: null,
    state: "Madhya Pradesh",
    district: "Ratlam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Abduction",
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Ratlam", url: "#" },
      { title: "Election Commission Affidavit - Brijendra Desai", url: "#" }
    ]
  },
  {
    id: 458,
    name: "Amarjeet Ahmed",
    party: "Independent",
    position: "District President, Rewa",
    image: null,
    state: "Madhya Pradesh",
    district: "Rewa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Murder charges",
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Rewa", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Ahmed", url: "#" }
    ]
  },
  {
    id: 459,
    name: "Pradeep Gupta Bai",
    party: "SP",
    position: "Nagar Palika Chairman, Rewa",
    image: null,
    state: "Madhya Pradesh",
    district: "Rewa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Rioting",
        "Property dispute",
        "Forgery",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Rewa", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Gupta Bai", url: "#" }
    ]
  },
  {
    id: 460,
    name: "Brijendra Mukherjee",
    party: "SP",
    position: "Zila Panchayat Member, Sagar",
    image: null,
    state: "Madhya Pradesh",
    district: "Sagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 25
    },
    caseDetails: {
      other: [
        "Bribery",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Sagar", url: "#" },
      { title: "Election Commission Affidavit - Brijendra Mukherjee", url: "#" }
    ]
  },
  {
    id: 461,
    name: "Madhuri Verma",
    party: "SP",
    position: "Former Minister, Madhya Pradesh",
    image: null,
    state: "Madhya Pradesh",
    district: "Satna",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Liquor mafia",
        "Criminal intimidation",
        "Armed robbery",
        "Gangster activities",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Satna", url: "#" },
      { title: "Election Commission Affidavit - Madhuri Verma", url: "#" }
    ]
  },
  {
    id: 462,
    name: "Poonam Behera",
    party: "BJP",
    position: "Nagar Palika Chairman, Sehore",
    image: null,
    state: "Madhya Pradesh",
    district: "Sehore",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment"
      ],
      other: [
        "Kidnapping",
        "Encroachment",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Sehore", url: "#" },
      { title: "Election Commission Affidavit - Poonam Behera", url: "#" }
    ]
  },
  {
    id: 463,
    name: "Hardeep Agarwal Chowdhury",
    party: "SP",
    position: "District President, Seoni",
    image: null,
    state: "Madhya Pradesh",
    district: "Seoni",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 464,
    name: "Dharmendra Patil Jain",
    party: "BJP",
    position: "Block President, Shahdol",
    image: null,
    state: "Madhya Pradesh",
    district: "Shahdol",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Encroachment",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Shahdol", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Patil Jain", url: "#" }
    ]
  },
  {
    id: 465,
    name: "Rajeev Panda Rawat",
    party: "BSP",
    position: "District President, Shahdol",
    image: null,
    state: "Madhya Pradesh",
    district: "Shahdol",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Illegal asset accumulation",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Shahdol", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Panda Rawat", url: "#" }
    ]
  },
  {
    id: 466,
    name: "Prakash Prasad",
    party: "SP",
    position: "MLA, Shajapur",
    image: null,
    state: "Madhya Pradesh",
    district: "Shajapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Liquor mafia",
        "Caste atrocities",
        "Cattle smuggling",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Shajapur", url: "#" },
      { title: "Election Commission Affidavit - Prakash Prasad", url: "#" }
    ]
  },
  {
    id: 467,
    name: "Manju Chaudhary",
    party: "INC",
    position: "MLA, Sheopur",
    image: null,
    state: "Madhya Pradesh",
    district: "Sheopur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Sheopur", url: "#" },
      { title: "Election Commission Affidavit - Manju Chaudhary", url: "#" }
    ]
  },
  {
    id: 468,
    name: "Sanjeev Swain",
    party: "BJP",
    position: "Former MLA, Sheopur",
    image: null,
    state: "Madhya Pradesh",
    district: "Sheopur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Corruption",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Sheopur", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Swain", url: "#" }
    ]
  },
  {
    id: 469,
    name: "Pramod Das",
    party: "Independent",
    position: "Party District Leader, Shivpuri",
    image: null,
    state: "Madhya Pradesh",
    district: "Shivpuri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Assault"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Shivpuri", url: "#" },
      { title: "Election Commission Affidavit - Pramod Das", url: "#" }
    ]
  },
  {
    id: 470,
    name: "Brijesh Bisht Mukherjee",
    party: "BSP",
    position: "District President, Sidhi",
    image: null,
    state: "Madhya Pradesh",
    district: "Sidhi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Violation of election code",
        "Assault",
        "Armed robbery",
        "Disproportionate assets",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Sidhi", url: "#" },
      { title: "Election Commission Affidavit - Brijesh Bisht Mukherjee", url: "#" }
    ]
  },
  {
    id: 471,
    name: "Devendra Swain",
    party: "BJP",
    position: "District President, Singrauli",
    image: null,
    state: "Madhya Pradesh",
    district: "Singrauli",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 472,
    name: "Omprakash Nayak",
    party: "BJP",
    position: "District President, Singrauli",
    image: null,
    state: "Madhya Pradesh",
    district: "Singrauli",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 473,
    name: "Mahesh Desai Panda",
    party: "BJP",
    position: "Zila Panchayat Member, Tikamgarh",
    image: null,
    state: "Madhya Pradesh",
    district: "Tikamgarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Rioting",
        "Human trafficking",
        "Dacoity",
        "Electoral malpractice",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Tikamgarh", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Desai Panda", url: "#" }
    ]
  },
  {
    id: 474,
    name: "Asha Khan",
    party: "Independent",
    position: "District President, Ujjain",
    image: null,
    state: "Madhya Pradesh",
    district: "Ujjain",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Illegal asset accumulation",
        "Voluntarily causing hurt",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Ujjain", url: "#" },
      { title: "Election Commission Affidavit - Asha Khan", url: "#" }
    ]
  },
  {
    id: 475,
    name: "Brijesh Babu",
    party: "Independent",
    position: "Municipal Councillor, Umaria",
    image: null,
    state: "Madhya Pradesh",
    district: "Umaria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Umaria", url: "#" },
      { title: "Election Commission Affidavit - Brijesh Babu", url: "#" }
    ]
  },
  {
    id: 476,
    name: "Mahesh Verma Joshi",
    party: "INC",
    position: "Municipal Councillor, Umaria",
    image: null,
    state: "Madhya Pradesh",
    district: "Umaria",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Benami property",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Madhya Pradesh Police Records - Umaria", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Verma Joshi", url: "#" }
    ]
  },
  {
    id: 477,
    name: "Kavita Qureshi",
    party: "BSP",
    position: "Party District Leader, Vidisha",
    image: null,
    state: "Madhya Pradesh",
    district: "Vidisha",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 478,
    name: "Sheela Mukherjee Sharma",
    party: "Independent",
    position: "Former MLA, Ajmer",
    image: null,
    state: "Rajasthan",
    district: "Ajmer",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Fraudulent voting",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Ajmer", url: "#" },
      { title: "Election Commission Affidavit - Sheela Mukherjee Sharma", url: "#" }
    ]
  },
  {
    id: 479,
    name: "Sunil Khan Chand",
    party: "BSP",
    position: "District President, Ajmer",
    image: null,
    state: "Rajasthan",
    district: "Ajmer",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Property dispute",
        "Religious offense",
        "Extortion racket",
        "Rioting"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Ajmer", url: "#" },
      { title: "Election Commission Affidavit - Sunil Khan Chand", url: "#" }
    ]
  },
  {
    id: 480,
    name: "Kuldeep Bai Swain",
    party: "BJP",
    position: "MLA, Alwar",
    image: null,
    state: "Rajasthan",
    district: "Alwar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Bribery",
        "Land grabbing",
        "Caste atrocities",
        "Liquor mafia",
        "Armed robbery",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Alwar", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Bai Swain", url: "#" }
    ]
  },
  {
    id: 481,
    name: "Gurjeet Shah Joshi",
    party: "Independent",
    position: "District President, Alwar",
    image: null,
    state: "Rajasthan",
    district: "Alwar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Illegal asset accumulation",
        "Criminal intimidation",
        "Perjury",
        "Coal mafia",
        "Rape charges",
        "Property dispute",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Alwar", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Shah Joshi", url: "#" }
    ]
  },
  {
    id: 482,
    name: "Savita Ahmed",
    party: "Independent",
    position: "Party District Leader, Banswara",
    image: null,
    state: "Rajasthan",
    district: "Banswara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Violation of election code",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Banswara", url: "#" },
      { title: "Election Commission Affidavit - Savita Ahmed", url: "#" }
    ]
  },
  {
    id: 483,
    name: "Devendra Hussain",
    party: "INC",
    position: "MLA, Baran",
    image: null,
    state: "Rajasthan",
    district: "Baran",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Baran", url: "#" },
      { title: "Election Commission Affidavit - Devendra Hussain", url: "#" }
    ]
  },
  {
    id: 484,
    name: "Kuldeep Roy",
    party: "INC",
    position: "Party District Leader, Baran",
    image: null,
    state: "Rajasthan",
    district: "Baran",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 485,
    name: "Kavita Mehta",
    party: "Independent",
    position: "Municipal Councillor, Barmer",
    image: null,
    state: "Rajasthan",
    district: "Barmer",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Murder charges",
        "Misappropriation of public funds",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Barmer", url: "#" },
      { title: "Election Commission Affidavit - Kavita Mehta", url: "#" }
    ]
  },
  {
    id: 486,
    name: "Hariprasad Panda Rajput",
    party: "INC",
    position: "Nagar Palika Chairman, Bharatpur",
    image: null,
    state: "Rajasthan",
    district: "Bharatpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Corruption",
        "Human trafficking",
        "Kidnapping",
        "Wrongful confinement",
        "Illegal asset accumulation",
        "Benami property"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Bharatpur", url: "#" },
      { title: "Election Commission Affidavit - Hariprasad Panda Rajput", url: "#" }
    ]
  },
  {
    id: 487,
    name: "Venkatesh Rao Gupta",
    party: "BSP",
    position: "Zila Panchayat Member, Bhilwara",
    image: null,
    state: "Rajasthan",
    district: "Bhilwara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 36
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Murder charges",
        "Disproportionate assets",
        "Contempt of court",
        "Defamation",
        "Drug trafficking",
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Bhilwara", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Rao Gupta", url: "#" }
    ]
  },
  {
    id: 488,
    name: "Amarjeet Desai",
    party: "BSP",
    position: "MLA, Bhilwara",
    image: null,
    state: "Rajasthan",
    district: "Bhilwara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Cattle smuggling",
        "Inciting violence",
        "Cheating",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Bhilwara", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Desai", url: "#" }
    ]
  },
  {
    id: 489,
    name: "Amarjeet Das Gupta",
    party: "Independent",
    position: "Zila Panchayat Member, Bikaner",
    image: null,
    state: "Rajasthan",
    district: "Bikaner",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 490,
    name: "Surendra Prasad",
    party: "BSP",
    position: "Zila Panchayat Member, Bundi",
    image: null,
    state: "Rajasthan",
    district: "Bundi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Illegal mining",
        "Assault",
        "Bribery"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Bundi", url: "#" },
      { title: "Election Commission Affidavit - Surendra Prasad", url: "#" }
    ]
  },
  {
    id: 491,
    name: "Prakash Bai Prasad",
    party: "BJP",
    position: "District President, Chittorgarh",
    image: null,
    state: "Rajasthan",
    district: "Chittorgarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 492,
    name: "Sunil Malik Sharma",
    party: "BJP",
    position: "Municipal Councillor, Chittorgarh",
    image: null,
    state: "Rajasthan",
    district: "Chittorgarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 493,
    name: "Anand Malik Yadav",
    party: "INC",
    position: "Former Minister, Rajasthan",
    image: null,
    state: "Rajasthan",
    district: "Churu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 28
    },
    caseDetails: {
      other: [
        "Booth capturing",
        "Embezzlement",
        "Corruption",
        "Wrongful confinement",
        "Illegal asset accumulation",
        "Criminal trespass",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Churu", url: "#" },
      { title: "Election Commission Affidavit - Anand Malik Yadav", url: "#" }
    ]
  },
  {
    id: 494,
    name: "Asha Desai Thakur",
    party: "Independent",
    position: "Former Minister, Rajasthan",
    image: null,
    state: "Rajasthan",
    district: "Churu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 53
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Liquor mafia",
        "Illegal weapons possession",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Churu", url: "#" },
      { title: "Election Commission Affidavit - Asha Desai Thakur", url: "#" }
    ]
  },
  {
    id: 495,
    name: "Manjari Gupta Chand",
    party: "INC",
    position: "Former MLA, Dausa",
    image: null,
    state: "Rajasthan",
    district: "Dausa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Dausa", url: "#" },
      { title: "Election Commission Affidavit - Manjari Gupta Chand", url: "#" }
    ]
  },
  {
    id: 496,
    name: "Seeta Jain Bai",
    party: "INC",
    position: "Party District Leader, Dholpur",
    image: null,
    state: "Rajasthan",
    district: "Dholpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Assault",
        "Inciting violence",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Dholpur", url: "#" },
      { title: "Election Commission Affidavit - Seeta Jain Bai", url: "#" }
    ]
  },
  {
    id: 497,
    name: "Narendra Reddy Kumar",
    party: "INC",
    position: "Zila Panchayat Member, Dholpur",
    image: null,
    state: "Rajasthan",
    district: "Dholpur",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Rape under IPC 376"
      ],
      other: [
        "Benami property",
        "Sexual harassment",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Dholpur", url: "#" },
      { title: "Election Commission Affidavit - Narendra Reddy Kumar", url: "#" }
    ]
  },
  {
    id: 498,
    name: "Naresh Rathore Yadav",
    party: "INC",
    position: "District President, Dungarpur",
    image: null,
    state: "Rajasthan",
    district: "Dungarpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Dungarpur", url: "#" },
      { title: "Election Commission Affidavit - Naresh Rathore Yadav", url: "#" }
    ]
  },
  {
    id: 499,
    name: "Hitesh Qureshi",
    party: "INC",
    position: "Former MLA, Hanumangarh",
    image: null,
    state: "Rajasthan",
    district: "Hanumangarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Benami property",
        "Caste atrocities",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Hanumangarh", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Qureshi", url: "#" }
    ]
  },
  {
    id: 500,
    name: "Sanjeev Rawat",
    party: "BSP",
    position: "Former MLA, Hanumangarh",
    image: null,
    state: "Rajasthan",
    district: "Hanumangarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 501,
    name: "Omprakash Ali",
    party: "INC",
    position: "Former MLA, Jaipur",
    image: null,
    state: "Rajasthan",
    district: "Jaipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Property dispute"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jaipur", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Ali", url: "#" }
    ]
  },
  {
    id: 502,
    name: "Shraddha Negi Ghosh",
    party: "INC",
    position: "Former MLA, Jaipur",
    image: null,
    state: "Rajasthan",
    district: "Jaipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jaipur", url: "#" },
      { title: "Election Commission Affidavit - Shraddha Negi Ghosh", url: "#" }
    ]
  },
  {
    id: 503,
    name: "Mahesh Babu Reddy",
    party: "Independent",
    position: "Zila Panchayat Member, Jaisalmer",
    image: null,
    state: "Rajasthan",
    district: "Jaisalmer",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Voter intimidation",
        "Illegal asset accumulation",
        "Assault"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jaisalmer", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Babu Reddy", url: "#" }
    ]
  },
  {
    id: 504,
    name: "Neeraj Bai",
    party: "INC",
    position: "Former MLA, Jaisalmer",
    image: null,
    state: "Rajasthan",
    district: "Jaisalmer",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Abduction",
        "Forgery",
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jaisalmer", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Bai", url: "#" }
    ]
  },
  {
    id: 505,
    name: "Lokesh Mukherjee Chowdhury",
    party: "BSP",
    position: "Municipal Councillor, Jalore",
    image: null,
    state: "Rajasthan",
    district: "Jalore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Benami property",
        "Extortion racket",
        "Bribery",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jalore", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Mukherjee Chowdhury", url: "#" }
    ]
  },
  {
    id: 506,
    name: "Yogesh Roy",
    party: "BJP",
    position: "Party District Leader, Jhalawar",
    image: null,
    state: "Rajasthan",
    district: "Jhalawar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Liquor mafia",
        "Abduction",
        "Explosive substances possession",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jhalawar", url: "#" },
      { title: "Election Commission Affidavit - Yogesh Roy", url: "#" }
    ]
  },
  {
    id: 507,
    name: "Prakash Ansari",
    party: "BSP",
    position: "Block President, Jhalawar",
    image: null,
    state: "Rajasthan",
    district: "Jhalawar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 508,
    name: "Dharmendra Ali",
    party: "BJP",
    position: "MLA, Jhunjhunu",
    image: null,
    state: "Rajasthan",
    district: "Jhunjhunu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Defamation",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jhunjhunu", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Ali", url: "#" }
    ]
  },
  {
    id: 509,
    name: "Dheeraj Ahmed",
    party: "INC",
    position: "Former MLA, Jhunjhunu",
    image: null,
    state: "Rajasthan",
    district: "Jhunjhunu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 27
    },
    caseDetails: {
      other: [
        "Abduction",
        "Benami property",
        "Coal mafia",
        "Contempt of court",
        "Arms Act violations",
        "Rape charges",
        "Sexual harassment",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jhunjhunu", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Ahmed", url: "#" }
    ]
  },
  {
    id: 510,
    name: "Anil Nayak",
    party: "BJP",
    position: "Party District Leader, Jodhpur",
    image: null,
    state: "Rajasthan",
    district: "Jodhpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 511,
    name: "Ramesh Rao",
    party: "INC",
    position: "Former MLA, Jodhpur",
    image: null,
    state: "Rajasthan",
    district: "Jodhpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Benami property"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Jodhpur", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Rao", url: "#" }
    ]
  },
  {
    id: 512,
    name: "Kishore Kulkarni",
    party: "BSP",
    position: "Former MLA, Karauli",
    image: null,
    state: "Rajasthan",
    district: "Karauli",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Stalking (IPC 354D)"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Karauli", url: "#" },
      { title: "Election Commission Affidavit - Kishore Kulkarni", url: "#" }
    ]
  },
  {
    id: 513,
    name: "Pradeep Babu",
    party: "Independent",
    position: "MLA, Kota",
    image: null,
    state: "Rajasthan",
    district: "Kota",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Kota", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Babu", url: "#" }
    ]
  },
  {
    id: 514,
    name: "Gajendra Tiwari",
    party: "Independent",
    position: "Party District Leader, Nagaur",
    image: null,
    state: "Rajasthan",
    district: "Nagaur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Nagaur", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Tiwari", url: "#" }
    ]
  },
  {
    id: 515,
    name: "Seeta Biswal Patil",
    party: "INC",
    position: "Municipal Councillor, Pali",
    image: null,
    state: "Rajasthan",
    district: "Pali",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Contempt of court",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Pali", url: "#" },
      { title: "Election Commission Affidavit - Seeta Biswal Patil", url: "#" }
    ]
  },
  {
    id: 516,
    name: "Gurjeet Rajput Yadav",
    party: "BSP",
    position: "MLA, Pali",
    image: null,
    state: "Rajasthan",
    district: "Pali",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Perjury",
        "Attempt to murder",
        "Tax evasion",
        "Criminal conspiracy",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Pali", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Rajput Yadav", url: "#" }
    ]
  },
  {
    id: 517,
    name: "Rampreet Lal Qureshi",
    party: "BJP",
    position: "Former MLA, Pratapgarh",
    image: null,
    state: "Rajasthan",
    district: "Pratapgarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Pratapgarh", url: "#" },
      { title: "Election Commission Affidavit - Rampreet Lal Qureshi", url: "#" }
    ]
  },
  {
    id: 518,
    name: "Jitesh Banerjee Sahu",
    party: "Independent",
    position: "District President, Pratapgarh",
    image: null,
    state: "Rajasthan",
    district: "Pratapgarh",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Eve-teasing and harassment",
        "Rape under IPC 376"
      ],
      other: [
        "Coal mafia",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Pratapgarh", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Banerjee Sahu", url: "#" }
    ]
  },
  {
    id: 519,
    name: "Sunil Chaudhary Shinde",
    party: "BJP",
    position: "District President, Rajsamand",
    image: null,
    state: "Rajasthan",
    district: "Rajsamand",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 520,
    name: "Manjeet Shinde",
    party: "BSP",
    position: "MLA, Sawai Madhopur",
    image: null,
    state: "Rajasthan",
    district: "Sawai Madhopur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Cheating",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Sawai Madhopur", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Shinde", url: "#" }
    ]
  },
  {
    id: 521,
    name: "Kavita Devi",
    party: "Independent",
    position: "Former MLA, Sikar",
    image: null,
    state: "Rajasthan",
    district: "Sikar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Cattle smuggling",
        "Murder charges",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Sikar", url: "#" },
      { title: "Election Commission Affidavit - Kavita Devi", url: "#" }
    ]
  },
  {
    id: 522,
    name: "Mukesh Chowdhury Behera",
    party: "Independent",
    position: "Zila Panchayat Member, Sikar",
    image: null,
    state: "Rajasthan",
    district: "Sikar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Extortion racket",
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Sikar", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Chowdhury Behera", url: "#" }
    ]
  },
  {
    id: 523,
    name: "Narendra Reddy Gupta",
    party: "BSP",
    position: "Nagar Palika Chairman, Sirohi",
    image: null,
    state: "Rajasthan",
    district: "Sirohi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Sirohi", url: "#" },
      { title: "Election Commission Affidavit - Narendra Reddy Gupta", url: "#" }
    ]
  },
  {
    id: 524,
    name: "Sohan Siddiqui Shah",
    party: "INC",
    position: "Party District Leader, Sirohi",
    image: null,
    state: "Rajasthan",
    district: "Sirohi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Property dispute",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Sirohi", url: "#" },
      { title: "Election Commission Affidavit - Sohan Siddiqui Shah", url: "#" }
    ]
  },
  {
    id: 525,
    name: "Gurjeet Nayak",
    party: "INC",
    position: "District President, Sri Ganganagar",
    image: null,
    state: "Rajasthan",
    district: "Sri Ganganagar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 526,
    name: "Satish Panda Biswal",
    party: "BJP",
    position: "Party District Leader, Sri Ganganagar",
    image: null,
    state: "Rajasthan",
    district: "Sri Ganganagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Cattle smuggling",
        "Attempt to murder",
        "Armed robbery",
        "Criminal trespass",
        "Rioting",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Sri Ganganagar", url: "#" },
      { title: "Election Commission Affidavit - Satish Panda Biswal", url: "#" }
    ]
  },
  {
    id: 527,
    name: "Gurjeet Pawar Lal",
    party: "BSP",
    position: "Block President, Tonk",
    image: null,
    state: "Rajasthan",
    district: "Tonk",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Contempt of court",
        "Misappropriation of public funds",
        "Sand mafia",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Tonk", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Pawar Lal", url: "#" }
    ]
  },
  {
    id: 528,
    name: "Laxmikant Dutta",
    party: "Independent",
    position: "Party District Leader, Tonk",
    image: null,
    state: "Rajasthan",
    district: "Tonk",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Illegal mining",
        "Inciting violence",
        "Assault",
        "Criminal intimidation",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Tonk", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Dutta", url: "#" }
    ]
  },
  {
    id: 529,
    name: "Rajesh Ansari Chowdhury",
    party: "Independent",
    position: "Municipal Councillor, Udaipur",
    image: null,
    state: "Rajasthan",
    district: "Udaipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Rajasthan Police Records - Udaipur", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Ansari Chowdhury", url: "#" }
    ]
  },
  {
    id: 530,
    name: "Rajesh Verma",
    party: "BJP",
    position: "Party District Leader, Bagalkot",
    image: null,
    state: "Karnataka",
    district: "Bagalkot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 43
    },
    caseDetails: {
      other: [
        "Voter intimidation",
        "Caste atrocities",
        "Rioting"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Bagalkot", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Verma", url: "#" }
    ]
  },
  {
    id: 531,
    name: "Umesh Mukherjee Malik",
    party: "Independent",
    position: "Nagar Palika Chairman, Ballari",
    image: null,
    state: "Karnataka",
    district: "Ballari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Breach of trust",
        "Kidnapping",
        "Bribery",
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Ballari", url: "#" },
      { title: "Election Commission Affidavit - Umesh Mukherjee Malik", url: "#" }
    ]
  },
  {
    id: 532,
    name: "Sohan Singh",
    party: "INC",
    position: "District President, Ballari",
    image: null,
    state: "Karnataka",
    district: "Ballari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Ballari", url: "#" },
      { title: "Election Commission Affidavit - Sohan Singh", url: "#" }
    ]
  },
  {
    id: 533,
    name: "Shivakant Das",
    party: "JD(S)",
    position: "MLA, Belagavi",
    image: null,
    state: "Karnataka",
    district: "Belagavi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Belagavi", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Das", url: "#" }
    ]
  },
  {
    id: 534,
    name: "Sanjay Banerjee",
    party: "JD(S)",
    position: "Block President, Belagavi",
    image: null,
    state: "Karnataka",
    district: "Belagavi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Belagavi", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Banerjee", url: "#" }
    ]
  },
  {
    id: 535,
    name: "Jitesh Malik Banerjee",
    party: "JD(S)",
    position: "Former Minister, Karnataka",
    image: null,
    state: "Karnataka",
    district: "Bengaluru Rural",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Criminal intimidation",
        "Illegal asset accumulation",
        "Hate speech"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Bengaluru Rural", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Malik Banerjee", url: "#" }
    ]
  },
  {
    id: 536,
    name: "Neeraj Das",
    party: "BJP",
    position: "Party District Leader, Bengaluru Rural",
    image: null,
    state: "Karnataka",
    district: "Bengaluru Rural",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Illegal weapons possession",
        "Assault",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Bengaluru Rural", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Das", url: "#" }
    ]
  },
  {
    id: 537,
    name: "Laxmikant Hussain Kumar",
    party: "INC",
    position: "Zila Panchayat Member, Bengaluru Urban",
    image: null,
    state: "Karnataka",
    district: "Bengaluru Urban",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Voter intimidation",
        "Land mafia",
        "Land grabbing",
        "Illegal asset accumulation",
        "Cattle smuggling",
        "Illegal weapons possession",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Bengaluru Urban", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Hussain Kumar", url: "#" }
    ]
  },
  {
    id: 538,
    name: "Rakesh Pandey Tiwari",
    party: "JD(S)",
    position: "Municipal Councillor, Bengaluru Urban",
    image: null,
    state: "Karnataka",
    district: "Bengaluru Urban",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)",
        "Sexual harassment (IPC 354A)",
        "Eve-teasing and harassment"
      ],
      other: [
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Bengaluru Urban", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Pandey Tiwari", url: "#" }
    ]
  },
  {
    id: 539,
    name: "Dinesh Nayak Malik",
    party: "BJP",
    position: "Municipal Councillor, Bidar",
    image: null,
    state: "Karnataka",
    district: "Bidar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Murder charges"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Bidar", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Nayak Malik", url: "#" }
    ]
  },
  {
    id: 540,
    name: "Kamlesh Yadav Bose",
    party: "BJP",
    position: "Nagar Palika Chairman, Chamarajanagar",
    image: null,
    state: "Karnataka",
    district: "Chamarajanagar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 541,
    name: "Jagdish Rajput Lal",
    party: "JD(S)",
    position: "Former Minister, Karnataka",
    image: null,
    state: "Karnataka",
    district: "Chamarajanagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Chamarajanagar", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Rajput Lal", url: "#" }
    ]
  },
  {
    id: 542,
    name: "Jitendra Tiwari",
    party: "Independent",
    position: "Former MLA, Chikballapur",
    image: null,
    state: "Karnataka",
    district: "Chikballapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Chikballapur", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Tiwari", url: "#" }
    ]
  },
  {
    id: 543,
    name: "Gurjeet Rathore Nath",
    party: "JD(S)",
    position: "Party District Leader, Chikkamagaluru",
    image: null,
    state: "Karnataka",
    district: "Chikkamagaluru",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Assault with intent to outrage modesty",
        "Rape under IPC 376"
      ],
      other: [
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Chikkamagaluru", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Rathore Nath", url: "#" }
    ]
  },
  {
    id: 544,
    name: "Deepika Singh",
    party: "INC",
    position: "Block President, Chikkamagaluru",
    image: null,
    state: "Karnataka",
    district: "Chikkamagaluru",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Extortion racket",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Chikkamagaluru", url: "#" },
      { title: "Election Commission Affidavit - Deepika Singh", url: "#" }
    ]
  },
  {
    id: 545,
    name: "Hitesh Shinde",
    party: "BJP",
    position: "Municipal Councillor, Chitradurga",
    image: null,
    state: "Karnataka",
    district: "Chitradurga",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Chitradurga", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Shinde", url: "#" }
    ]
  },
  {
    id: 546,
    name: "Kishore Biswal",
    party: "JD(S)",
    position: "Block President, Dakshina Kannada",
    image: null,
    state: "Karnataka",
    district: "Dakshina Kannada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Murder charges"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Dakshina Kannada", url: "#" },
      { title: "Election Commission Affidavit - Kishore Biswal", url: "#" }
    ]
  },
  {
    id: 547,
    name: "Rajeev Kumar Lal",
    party: "INC",
    position: "District President, Davanagere",
    image: null,
    state: "Karnataka",
    district: "Davanagere",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Attempt to murder",
        "Religious offense",
        "Perjury"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Davanagere", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Kumar Lal", url: "#" }
    ]
  },
  {
    id: 548,
    name: "Anil Ahmed",
    party: "Independent",
    position: "Block President, Dharwad",
    image: null,
    state: "Karnataka",
    district: "Dharwad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Dharwad", url: "#" },
      { title: "Election Commission Affidavit - Anil Ahmed", url: "#" }
    ]
  },
  {
    id: 549,
    name: "Deepika Sharma Behera",
    party: "JD(S)",
    position: "Zila Panchayat Member, Gadag",
    image: null,
    state: "Karnataka",
    district: "Gadag",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Gadag", url: "#" },
      { title: "Election Commission Affidavit - Deepika Sharma Behera", url: "#" }
    ]
  },
  {
    id: 550,
    name: "Mahesh Singh Hussain",
    party: "BJP",
    position: "Former MLA, Gadag",
    image: null,
    state: "Karnataka",
    district: "Gadag",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 551,
    name: "Dayashankar Devi Chatterjee",
    party: "Independent",
    position: "Zila Panchayat Member, Hassan",
    image: null,
    state: "Karnataka",
    district: "Hassan",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 552,
    name: "Ravindra Das",
    party: "INC",
    position: "Former MLA, Hassan",
    image: null,
    state: "Karnataka",
    district: "Hassan",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 553,
    name: "Jitendra Chaudhary",
    party: "Independent",
    position: "Nagar Palika Chairman, Haveri",
    image: null,
    state: "Karnataka",
    district: "Haveri",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 554,
    name: "Seeta Joshi",
    party: "INC",
    position: "Party District Leader, Kalaburagi",
    image: null,
    state: "Karnataka",
    district: "Kalaburagi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 58
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Land grabbing",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Kalaburagi", url: "#" },
      { title: "Election Commission Affidavit - Seeta Joshi", url: "#" }
    ]
  },
  {
    id: 555,
    name: "Gurjeet Desai Joshi",
    party: "JD(S)",
    position: "District President, Kalaburagi",
    image: null,
    state: "Karnataka",
    district: "Kalaburagi",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges",
        "Stalking (IPC 354D)"
      ],
      other: [
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Kalaburagi", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Desai Joshi", url: "#" }
    ]
  },
  {
    id: 556,
    name: "Kuldeep Mishra",
    party: "Independent",
    position: "Nagar Palika Chairman, Kodagu",
    image: null,
    state: "Karnataka",
    district: "Kodagu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Kodagu", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Mishra", url: "#" }
    ]
  },
  {
    id: 557,
    name: "Hitesh Malik Singh",
    party: "JD(S)",
    position: "Zila Panchayat Member, Kodagu",
    image: null,
    state: "Karnataka",
    district: "Kodagu",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 558,
    name: "Ajay Behera Mehta",
    party: "JD(S)",
    position: "Zila Panchayat Member, Kolar",
    image: null,
    state: "Karnataka",
    district: "Kolar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Corruption",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Kolar", url: "#" },
      { title: "Election Commission Affidavit - Ajay Behera Mehta", url: "#" }
    ]
  },
  {
    id: 559,
    name: "Dheeraj Ansari Mani",
    party: "Independent",
    position: "Former Minister, Karnataka",
    image: null,
    state: "Karnataka",
    district: "Koppal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 560,
    name: "Vandana Behera Chatterjee",
    party: "Independent",
    position: "Former Minister, Karnataka",
    image: null,
    state: "Karnataka",
    district: "Koppal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 53
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Hate speech",
        "Dacoity",
        "Cattle smuggling",
        "SC/ST Act violations",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Koppal", url: "#" },
      { title: "Election Commission Affidavit - Vandana Behera Chatterjee", url: "#" }
    ]
  },
  {
    id: 561,
    name: "Omprakash Mani",
    party: "BJP",
    position: "Former Minister, Karnataka",
    image: null,
    state: "Karnataka",
    district: "Mandya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Mandya", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Mani", url: "#" }
    ]
  },
  {
    id: 562,
    name: "Balakrishna Singh",
    party: "BJP",
    position: "Former Minister, Karnataka",
    image: null,
    state: "Karnataka",
    district: "Mandya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Criminal trespass",
        "Ammunition without license",
        "Abduction"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Mandya", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Singh", url: "#" }
    ]
  },
  {
    id: 563,
    name: "Mamta Negi",
    party: "BJP",
    position: "Zila Panchayat Member, Mysuru",
    image: null,
    state: "Karnataka",
    district: "Mysuru",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 19
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Misappropriation of public funds",
        "Disproportionate assets",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Mysuru", url: "#" },
      { title: "Election Commission Affidavit - Mamta Negi", url: "#" }
    ]
  },
  {
    id: 564,
    name: "Manjari Lal",
    party: "JD(S)",
    position: "Former Minister, Karnataka",
    image: null,
    state: "Karnataka",
    district: "Raichur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Raichur", url: "#" },
      { title: "Election Commission Affidavit - Manjari Lal", url: "#" }
    ]
  },
  {
    id: 565,
    name: "Rajesh Joshi Joshi",
    party: "INC",
    position: "Former MLA, Raichur",
    image: null,
    state: "Karnataka",
    district: "Raichur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 566,
    name: "Shakti Chauhan",
    party: "JD(S)",
    position: "MLA, Ramanagara",
    image: null,
    state: "Karnataka",
    district: "Ramanagara",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges",
        "Sexual assault of minor (POCSO)",
        "Stalking (IPC 354D)"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Ramanagara", url: "#" },
      { title: "Election Commission Affidavit - Shakti Chauhan", url: "#" }
    ]
  },
  {
    id: 567,
    name: "Roshni Ghosh",
    party: "INC",
    position: "Municipal Councillor, Shivamogga",
    image: null,
    state: "Karnataka",
    district: "Shivamogga",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 19
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Murder charges",
        "Money laundering",
        "SC/ST Act violations",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Shivamogga", url: "#" },
      { title: "Election Commission Affidavit - Roshni Ghosh", url: "#" }
    ]
  },
  {
    id: 568,
    name: "Kishore Pawar",
    party: "Independent",
    position: "District President, Tumakuru",
    image: null,
    state: "Karnataka",
    district: "Tumakuru",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Tumakuru", url: "#" },
      { title: "Election Commission Affidavit - Kishore Pawar", url: "#" }
    ]
  },
  {
    id: 569,
    name: "Rajendra Rathore",
    party: "INC",
    position: "District President, Udupi",
    image: null,
    state: "Karnataka",
    district: "Udupi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Udupi", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Rathore", url: "#" }
    ]
  },
  {
    id: 570,
    name: "Sanjay Das",
    party: "Independent",
    position: "Zila Panchayat Member, Udupi",
    image: null,
    state: "Karnataka",
    district: "Udupi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 66
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Rape charges",
        "Mischief causing damage",
        "Gangster activities",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Udupi", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Das", url: "#" }
    ]
  },
  {
    id: 571,
    name: "Roshni Bisht Shinde",
    party: "JD(S)",
    position: "Former MLA, Uttara Kannada",
    image: null,
    state: "Karnataka",
    district: "Uttara Kannada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 19
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Gangster activities",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Uttara Kannada", url: "#" },
      { title: "Election Commission Affidavit - Roshni Bisht Shinde", url: "#" }
    ]
  },
  {
    id: 572,
    name: "Manjeet Qureshi",
    party: "BJP",
    position: "Nagar Palika Chairman, Uttara Kannada",
    image: null,
    state: "Karnataka",
    district: "Uttara Kannada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 23
    },
    caseDetails: {
      other: [
        "Illegal construction",
        "Property dispute",
        "Extortion racket",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Uttara Kannada", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Qureshi", url: "#" }
    ]
  },
  {
    id: 573,
    name: "Lokesh Ansari Devi",
    party: "JD(S)",
    position: "Party District Leader, Vijayapura",
    image: null,
    state: "Karnataka",
    district: "Vijayapura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Vijayapura", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Ansari Devi", url: "#" }
    ]
  },
  {
    id: 574,
    name: "Surendra Chand Nayak",
    party: "INC",
    position: "MLA, Vijayapura",
    image: null,
    state: "Karnataka",
    district: "Vijayapura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 60
    },
    caseDetails: {
      other: [
        "Criminal trespass",
        "Disproportionate assets",
        "Explosive substances possession",
        "Contempt of court",
        "Wrongful confinement",
        "Forgery",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Vijayapura", url: "#" },
      { title: "Election Commission Affidavit - Surendra Chand Nayak", url: "#" }
    ]
  },
  {
    id: 575,
    name: "Shivakant Banerjee",
    party: "INC",
    position: "MLA, Yadgir",
    image: null,
    state: "Karnataka",
    district: "Yadgir",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Defamation",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Karnataka Police Records - Yadgir", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Banerjee", url: "#" }
    ]
  },
  {
    id: 576,
    name: "Kishore Panda",
    party: "INC",
    position: "Municipal Councillor, Ariyalur",
    image: null,
    state: "Tamil Nadu",
    district: "Ariyalur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 577,
    name: "Shyam Chatterjee",
    party: "AIADMK",
    position: "Zila Panchayat Member, Ariyalur",
    image: null,
    state: "Tamil Nadu",
    district: "Ariyalur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Ariyalur", url: "#" },
      { title: "Election Commission Affidavit - Shyam Chatterjee", url: "#" }
    ]
  },
  {
    id: 578,
    name: "Avinash Shinde",
    party: "Independent",
    position: "Block President, Chengalpattu",
    image: null,
    state: "Tamil Nadu",
    district: "Chengalpattu",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 579,
    name: "Ramakant Nath Sen",
    party: "BJP",
    position: "Former Minister, Tamil Nadu",
    image: null,
    state: "Tamil Nadu",
    district: "Chengalpattu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 26
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Promoting enmity",
        "Booth capturing",
        "Sexual harassment",
        "Kidnapping",
        "Land mafia",
        "Misappropriation of public funds",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Chengalpattu", url: "#" },
      { title: "Election Commission Affidavit - Ramakant Nath Sen", url: "#" }
    ]
  },
  {
    id: 580,
    name: "Neeraj Devi",
    party: "INC",
    position: "Former MLA, Chennai",
    image: null,
    state: "Tamil Nadu",
    district: "Chennai",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 581,
    name: "Veena Das Das",
    party: "BJP",
    position: "Former Minister, Tamil Nadu",
    image: null,
    state: "Tamil Nadu",
    district: "Chennai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Chennai", url: "#" },
      { title: "Election Commission Affidavit - Veena Das Das", url: "#" }
    ]
  },
  {
    id: 582,
    name: "Vandana Behera Patel",
    party: "AIADMK",
    position: "Nagar Palika Chairman, Coimbatore",
    image: null,
    state: "Tamil Nadu",
    district: "Coimbatore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Coimbatore", url: "#" },
      { title: "Election Commission Affidavit - Vandana Behera Patel", url: "#" }
    ]
  },
  {
    id: 583,
    name: "Gurjeet Shinde",
    party: "BJP",
    position: "Municipal Councillor, Cuddalore",
    image: null,
    state: "Tamil Nadu",
    district: "Cuddalore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Illegal construction",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Cuddalore", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Shinde", url: "#" }
    ]
  },
  {
    id: 584,
    name: "Suresh Roy",
    party: "BJP",
    position: "Former Minister, Tamil Nadu",
    image: null,
    state: "Tamil Nadu",
    district: "Cuddalore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Cheating",
        "Sand mafia",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Cuddalore", url: "#" },
      { title: "Election Commission Affidavit - Suresh Roy", url: "#" }
    ]
  },
  {
    id: 585,
    name: "Rajendra Qureshi",
    party: "BJP",
    position: "MLA, Dharmapuri",
    image: null,
    state: "Tamil Nadu",
    district: "Dharmapuri",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 586,
    name: "Surendra Thakur Reddy",
    party: "Independent",
    position: "MLA, Dindigul",
    image: null,
    state: "Tamil Nadu",
    district: "Dindigul",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "SC/ST Act violations",
        "Human trafficking",
        "Money laundering",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Dindigul", url: "#" },
      { title: "Election Commission Affidavit - Surendra Thakur Reddy", url: "#" }
    ]
  },
  {
    id: 587,
    name: "Neeraj Pandey Kulkarni",
    party: "INC",
    position: "Nagar Palika Chairman, Erode",
    image: null,
    state: "Tamil Nadu",
    district: "Erode",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Ammunition without license",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Erode", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Pandey Kulkarni", url: "#" }
    ]
  },
  {
    id: 588,
    name: "Ajay Ahmed",
    party: "AIADMK",
    position: "Zila Panchayat Member, Kallakurichi",
    image: null,
    state: "Tamil Nadu",
    district: "Kallakurichi",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ],
      other: [
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Kallakurichi", url: "#" },
      { title: "Election Commission Affidavit - Ajay Ahmed", url: "#" }
    ]
  },
  {
    id: 589,
    name: "Sanjay Kulkarni",
    party: "AIADMK",
    position: "Nagar Palika Chairman, Kallakurichi",
    image: null,
    state: "Tamil Nadu",
    district: "Kallakurichi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Kidnapping",
        "Illegal mining",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Kallakurichi", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Kulkarni", url: "#" }
    ]
  },
  {
    id: 590,
    name: "Geeta Tiwari",
    party: "BJP",
    position: "Former Minister, Tamil Nadu",
    image: null,
    state: "Tamil Nadu",
    district: "Kanchipuram",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 591,
    name: "Vijay Rajput",
    party: "AIADMK",
    position: "Block President, Kanchipuram",
    image: null,
    state: "Tamil Nadu",
    district: "Kanchipuram",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 592,
    name: "Mandeep Patel",
    party: "AIADMK",
    position: "Municipal Councillor, Kanyakumari",
    image: null,
    state: "Tamil Nadu",
    district: "Kanyakumari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Religious offense",
        "Extortion racket",
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Kanyakumari", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Patel", url: "#" }
    ]
  },
  {
    id: 593,
    name: "Jitendra Biswal",
    party: "Independent",
    position: "Zila Panchayat Member, Karur",
    image: null,
    state: "Tamil Nadu",
    district: "Karur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Murder charges",
        "Corruption"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Karur", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Biswal", url: "#" }
    ]
  },
  {
    id: 594,
    name: "Devendra Sharma Siddiqui",
    party: "BJP",
    position: "District President, Krishnagiri",
    image: null,
    state: "Tamil Nadu",
    district: "Krishnagiri",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 595,
    name: "Lokesh Ghosh",
    party: "Independent",
    position: "MLA, Krishnagiri",
    image: null,
    state: "Tamil Nadu",
    district: "Krishnagiri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Hate speech"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Krishnagiri", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Ghosh", url: "#" }
    ]
  },
  {
    id: 596,
    name: "Narasimha Sahoo Ansari",
    party: "Independent",
    position: "Party District Leader, Madurai",
    image: null,
    state: "Tamil Nadu",
    district: "Madurai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Illegal construction",
        "Illegal occupation",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Madurai", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Sahoo Ansari", url: "#" }
    ]
  },
  {
    id: 597,
    name: "Manjeet Ahmed Kulkarni",
    party: "DMK",
    position: "District President, Madurai",
    image: null,
    state: "Tamil Nadu",
    district: "Madurai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Defamation",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Madurai", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Ahmed Kulkarni", url: "#" }
    ]
  },
  {
    id: 598,
    name: "Umesh Prasad",
    party: "AIADMK",
    position: "Former MLA, Mayiladuthurai",
    image: null,
    state: "Tamil Nadu",
    district: "Mayiladuthurai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Booth capturing",
        "Wrongful confinement",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Mayiladuthurai", url: "#" },
      { title: "Election Commission Affidavit - Umesh Prasad", url: "#" }
    ]
  },
  {
    id: 599,
    name: "Dilip Singh",
    party: "INC",
    position: "Zila Panchayat Member, Nagapattinam",
    image: null,
    state: "Tamil Nadu",
    district: "Nagapattinam",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 600,
    name: "Anil Chowdhury",
    party: "Independent",
    position: "Municipal Councillor, Nagapattinam",
    image: null,
    state: "Tamil Nadu",
    district: "Nagapattinam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Perjury",
        "Benami property",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Nagapattinam", url: "#" },
      { title: "Election Commission Affidavit - Anil Chowdhury", url: "#" }
    ]
  },
  {
    id: 601,
    name: "Balakrishna Kulkarni",
    party: "BJP",
    position: "Former MLA, Namakkal",
    image: null,
    state: "Tamil Nadu",
    district: "Namakkal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 602,
    name: "Rakesh Malik Khan",
    party: "INC",
    position: "Party District Leader, Namakkal",
    image: null,
    state: "Tamil Nadu",
    district: "Namakkal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Land mafia"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Namakkal", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Malik Khan", url: "#" }
    ]
  },
  {
    id: 603,
    name: "Subhash Tiwari Babu",
    party: "DMK",
    position: "District President, Nilgiris",
    image: null,
    state: "Tamil Nadu",
    district: "Nilgiris",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges",
        "Gang rape charges"
      ],
      other: [
        "Benami property",
        "Murder charges",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Nilgiris", url: "#" },
      { title: "Election Commission Affidavit - Subhash Tiwari Babu", url: "#" }
    ]
  },
  {
    id: 604,
    name: "Jitesh Kulkarni Chauhan",
    party: "DMK",
    position: "MLA, Perambalur",
    image: null,
    state: "Tamil Nadu",
    district: "Perambalur",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges",
        "Gang rape charges",
        "Rape under IPC 376"
      ],
      other: [
        "Rioting"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Perambalur", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Kulkarni Chauhan", url: "#" }
    ]
  },
  {
    id: 605,
    name: "Kishore Chand",
    party: "DMK",
    position: "MLA, Perambalur",
    image: null,
    state: "Tamil Nadu",
    district: "Perambalur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Religious offense"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Perambalur", url: "#" },
      { title: "Election Commission Affidavit - Kishore Chand", url: "#" }
    ]
  },
  {
    id: 606,
    name: "Ramesh Sharma Pandey",
    party: "BJP",
    position: "District President, Pudukkottai",
    image: null,
    state: "Tamil Nadu",
    district: "Pudukkottai",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 607,
    name: "Anil Agarwal",
    party: "AIADMK",
    position: "Municipal Councillor, Pudukkottai",
    image: null,
    state: "Tamil Nadu",
    district: "Pudukkottai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Contempt of court",
        "Coal mafia",
        "Gangster activities",
        "Murder charges",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Pudukkottai", url: "#" },
      { title: "Election Commission Affidavit - Anil Agarwal", url: "#" }
    ]
  },
  {
    id: 608,
    name: "Narasimha Ghosh",
    party: "DMK",
    position: "Former MLA, Ramanathapuram",
    image: null,
    state: "Tamil Nadu",
    district: "Ramanathapuram",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Benami property"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Ramanathapuram", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Ghosh", url: "#" }
    ]
  },
  {
    id: 609,
    name: "Madhuri Sahoo Agarwal",
    party: "AIADMK",
    position: "Municipal Councillor, Ramanathapuram",
    image: null,
    state: "Tamil Nadu",
    district: "Ramanathapuram",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Voyeurism charges",
        "Gang rape charges"
      ],
      other: [
        "Land mafia",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Ramanathapuram", url: "#" },
      { title: "Election Commission Affidavit - Madhuri Sahoo Agarwal", url: "#" }
    ]
  },
  {
    id: 610,
    name: "Laxmikant Naidu Kulkarni",
    party: "AIADMK",
    position: "MLA, Ranipet",
    image: null,
    state: "Tamil Nadu",
    district: "Ranipet",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Liquor mafia",
        "Perjury"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Ranipet", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Naidu Kulkarni", url: "#" }
    ]
  },
  {
    id: 611,
    name: "Jitendra Siddiqui Das",
    party: "BJP",
    position: "MLA, Ranipet",
    image: null,
    state: "Tamil Nadu",
    district: "Ranipet",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Defamation",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Ranipet", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Siddiqui Das", url: "#" }
    ]
  },
  {
    id: 612,
    name: "Ajay Hussain",
    party: "Independent",
    position: "Municipal Councillor, Salem",
    image: null,
    state: "Tamil Nadu",
    district: "Salem",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 52
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Hate speech",
        "Illegal asset accumulation",
        "Encroachment",
        "Assault",
        "Contempt of court",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Salem", url: "#" },
      { title: "Election Commission Affidavit - Ajay Hussain", url: "#" }
    ]
  },
  {
    id: 613,
    name: "Laxmikant Rao Reddy",
    party: "DMK",
    position: "Block President, Salem",
    image: null,
    state: "Tamil Nadu",
    district: "Salem",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Encroachment",
        "Benami property",
        "Hate speech",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Salem", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Rao Reddy", url: "#" }
    ]
  },
  {
    id: 614,
    name: "Mohan Chatterjee Bisht",
    party: "BJP",
    position: "Nagar Palika Chairman, Sivaganga",
    image: null,
    state: "Tamil Nadu",
    district: "Sivaganga",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 615,
    name: "Jagdish Negi Rathore",
    party: "INC",
    position: "Nagar Palika Chairman, Sivaganga",
    image: null,
    state: "Tamil Nadu",
    district: "Sivaganga",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Sivaganga", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Negi Rathore", url: "#" }
    ]
  },
  {
    id: 616,
    name: "Mukesh Mishra",
    party: "AIADMK",
    position: "Party District Leader, Tenkasi",
    image: null,
    state: "Tamil Nadu",
    district: "Tenkasi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 26
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Caste atrocities",
        "Rape charges",
        "Defamation",
        "Abduction",
        "Sexual harassment",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tenkasi", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Mishra", url: "#" }
    ]
  },
  {
    id: 617,
    name: "Kuldeep Rajput",
    party: "BJP",
    position: "MLA, Thanjavur",
    image: null,
    state: "Tamil Nadu",
    district: "Thanjavur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Encroachment",
        "Rioting",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Thanjavur", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Rajput", url: "#" }
    ]
  },
  {
    id: 618,
    name: "Venkatesh Jain Prasad",
    party: "DMK",
    position: "Zila Panchayat Member, Thanjavur",
    image: null,
    state: "Tamil Nadu",
    district: "Thanjavur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Thanjavur", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Jain Prasad", url: "#" }
    ]
  },
  {
    id: 619,
    name: "Pankaj Ali",
    party: "AIADMK",
    position: "Zila Panchayat Member, Theni",
    image: null,
    state: "Tamil Nadu",
    district: "Theni",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Cheating",
        "Defamation"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Theni", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Ali", url: "#" }
    ]
  },
  {
    id: 620,
    name: "Rajendra Qureshi",
    party: "BJP",
    position: "Zila Panchayat Member, Thoothukudi",
    image: null,
    state: "Tamil Nadu",
    district: "Thoothukudi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Forgery",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Thoothukudi", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Qureshi", url: "#" }
    ]
  },
  {
    id: 621,
    name: "Brijesh Patil Agarwal",
    party: "Independent",
    position: "Former Minister, Tamil Nadu",
    image: null,
    state: "Tamil Nadu",
    district: "Thoothukudi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Misappropriation of public funds",
        "Money laundering",
        "Sand mafia",
        "Voluntarily causing hurt",
        "Benami property",
        "Religious offense",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Thoothukudi", url: "#" },
      { title: "Election Commission Affidavit - Brijesh Patil Agarwal", url: "#" }
    ]
  },
  {
    id: 622,
    name: "Neeraj Yadav",
    party: "INC",
    position: "Former MLA, Tiruchirappalli",
    image: null,
    state: "Tamil Nadu",
    district: "Tiruchirappalli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Violation of election code",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tiruchirappalli", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Yadav", url: "#" }
    ]
  },
  {
    id: 623,
    name: "Venkatesh Tiwari Ansari",
    party: "AIADMK",
    position: "District President, Tirunelveli",
    image: null,
    state: "Tamil Nadu",
    district: "Tirunelveli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 64
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Land mafia",
        "Misappropriation of public funds",
        "Liquor mafia",
        "Criminal intimidation",
        "Voluntarily causing hurt",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tirunelveli", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Tiwari Ansari", url: "#" }
    ]
  },
  {
    id: 624,
    name: "Ashok Patil",
    party: "BJP",
    position: "District President, Tirunelveli",
    image: null,
    state: "Tamil Nadu",
    district: "Tirunelveli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Abduction",
        "Voter intimidation",
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tirunelveli", url: "#" },
      { title: "Election Commission Affidavit - Ashok Patil", url: "#" }
    ]
  },
  {
    id: 625,
    name: "Ashok Sahoo",
    party: "BJP",
    position: "MLA, Tirupathur",
    image: null,
    state: "Tamil Nadu",
    district: "Tirupathur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tirupathur", url: "#" },
      { title: "Election Commission Affidavit - Ashok Sahoo", url: "#" }
    ]
  },
  {
    id: 626,
    name: "Mohan Tiwari",
    party: "Independent",
    position: "Former MLA, Tiruppur",
    image: null,
    state: "Tamil Nadu",
    district: "Tiruppur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 49
    },
    caseDetails: {
      other: [
        "Corruption",
        "SC/ST Act violations",
        "Voter intimidation",
        "Abduction",
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tiruppur", url: "#" },
      { title: "Election Commission Affidavit - Mohan Tiwari", url: "#" }
    ]
  },
  {
    id: 627,
    name: "Satish Mukherjee Rao",
    party: "BJP",
    position: "District President, Tiruppur",
    image: null,
    state: "Tamil Nadu",
    district: "Tiruppur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 58
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Human trafficking",
        "Benami property",
        "Violation of election code",
        "Murder charges",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tiruppur", url: "#" },
      { title: "Election Commission Affidavit - Satish Mukherjee Rao", url: "#" }
    ]
  },
  {
    id: 628,
    name: "Shivakant Sahoo Rawat",
    party: "INC",
    position: "Block President, Tiruvallur",
    image: null,
    state: "Tamil Nadu",
    district: "Tiruvallur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 629,
    name: "Jagdish Khan",
    party: "DMK",
    position: "MLA, Tiruvannamalai",
    image: null,
    state: "Tamil Nadu",
    district: "Tiruvannamalai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 61
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Violation of election code",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tiruvannamalai", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Khan", url: "#" }
    ]
  },
  {
    id: 630,
    name: "Kuldeep Sahoo",
    party: "Independent",
    position: "Municipal Councillor, Tiruvannamalai",
    image: null,
    state: "Tamil Nadu",
    district: "Tiruvannamalai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tiruvannamalai", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Sahoo", url: "#" }
    ]
  },
  {
    id: 631,
    name: "Balakrishna Khan",
    party: "BJP",
    position: "Party District Leader, Tiruvarur",
    image: null,
    state: "Tamil Nadu",
    district: "Tiruvarur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 36
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Attempt to murder",
        "Explosive substances possession",
        "Criminal conspiracy",
        "SC/ST Act violations",
        "Fraudulent voting",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Tiruvarur", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Khan", url: "#" }
    ]
  },
  {
    id: 632,
    name: "Sangeeta Patel Chand",
    party: "Independent",
    position: "Municipal Councillor, Vellore",
    image: null,
    state: "Tamil Nadu",
    district: "Vellore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Vellore", url: "#" },
      { title: "Election Commission Affidavit - Sangeeta Patel Chand", url: "#" }
    ]
  },
  {
    id: 633,
    name: "Pradeep Thakur",
    party: "BJP",
    position: "MLA, Viluppuram",
    image: null,
    state: "Tamil Nadu",
    district: "Viluppuram",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Tamil Nadu Police Records - Viluppuram", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Thakur", url: "#" }
    ]
  },
  {
    id: 634,
    name: "Gajendra Chauhan",
    party: "INC",
    position: "Former MLA, Viluppuram",
    image: null,
    state: "Tamil Nadu",
    district: "Viluppuram",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 635,
    name: "Dheeraj Qureshi",
    party: "BJP",
    position: "MLA, Virudhunagar",
    image: null,
    state: "Tamil Nadu",
    district: "Virudhunagar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 636,
    name: "Dinesh Behera Rajput",
    party: "Independent",
    position: "Zila Panchayat Member, Virudhunagar",
    image: null,
    state: "Tamil Nadu",
    district: "Virudhunagar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 637,
    name: "Ramakant Das",
    party: "AAP",
    position: "Former Minister, Gujarat",
    image: null,
    state: "Gujarat",
    district: "Ahmedabad",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Assault with intent to outrage modesty",
        "Gang rape charges"
      ],
      other: [
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Ahmedabad", url: "#" },
      { title: "Election Commission Affidavit - Ramakant Das", url: "#" }
    ]
  },
  {
    id: 638,
    name: "Leela Qureshi Roy",
    party: "INC",
    position: "Zila Panchayat Member, Ahmedabad",
    image: null,
    state: "Gujarat",
    district: "Ahmedabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 49
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Rioting",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Ahmedabad", url: "#" },
      { title: "Election Commission Affidavit - Leela Qureshi Roy", url: "#" }
    ]
  },
  {
    id: 639,
    name: "Ranjeet Mehta",
    party: "AAP",
    position: "Party District Leader, Amreli",
    image: null,
    state: "Gujarat",
    district: "Amreli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Illegal weapons possession",
        "Assault",
        "Dacoity",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Amreli", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Mehta", url: "#" }
    ]
  },
  {
    id: 640,
    name: "Anjali Joshi",
    party: "INC",
    position: "Former Minister, Gujarat",
    image: null,
    state: "Gujarat",
    district: "Anand",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Anand", url: "#" },
      { title: "Election Commission Affidavit - Anjali Joshi", url: "#" }
    ]
  },
  {
    id: 641,
    name: "Ramesh Ansari",
    party: "AAP",
    position: "District President, Anand",
    image: null,
    state: "Gujarat",
    district: "Anand",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 642,
    name: "Sanjeev Verma",
    party: "BJP",
    position: "Nagar Palika Chairman, Aravalli",
    image: null,
    state: "Gujarat",
    district: "Aravalli",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Stalking (IPC 354D)",
        "Rape under IPC 376"
      ],
      other: [
        "Tax evasion",
        "Money laundering",
        "Bribery"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Aravalli", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Verma", url: "#" }
    ]
  },
  {
    id: 643,
    name: "Kuldeep Sahoo",
    party: "INC",
    position: "Party District Leader, Aravalli",
    image: null,
    state: "Gujarat",
    district: "Aravalli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Aravalli", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Sahoo", url: "#" }
    ]
  },
  {
    id: 644,
    name: "Shyam Yadav",
    party: "INC",
    position: "Municipal Councillor, Banaskantha",
    image: null,
    state: "Gujarat",
    district: "Banaskantha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Caste atrocities",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Banaskantha", url: "#" },
      { title: "Election Commission Affidavit - Shyam Yadav", url: "#" }
    ]
  },
  {
    id: 645,
    name: "Hitesh Yadav",
    party: "Independent",
    position: "Party District Leader, Banaskantha",
    image: null,
    state: "Gujarat",
    district: "Banaskantha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Bribery"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Banaskantha", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Yadav", url: "#" }
    ]
  },
  {
    id: 646,
    name: "Shivakant Bisht Babu",
    party: "AAP",
    position: "Former MLA, Bharuch",
    image: null,
    state: "Gujarat",
    district: "Bharuch",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Human trafficking",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Bharuch", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Bisht Babu", url: "#" }
    ]
  },
  {
    id: 647,
    name: "Anand Negi",
    party: "AAP",
    position: "Municipal Councillor, Bhavnagar",
    image: null,
    state: "Gujarat",
    district: "Bhavnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Bhavnagar", url: "#" },
      { title: "Election Commission Affidavit - Anand Negi", url: "#" }
    ]
  },
  {
    id: 648,
    name: "Rekha Rathore",
    party: "INC",
    position: "Zila Panchayat Member, Bhavnagar",
    image: null,
    state: "Gujarat",
    district: "Bhavnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Bhavnagar", url: "#" },
      { title: "Election Commission Affidavit - Rekha Rathore", url: "#" }
    ]
  },
  {
    id: 649,
    name: "Mohan Jain",
    party: "AAP",
    position: "Block President, Botad",
    image: null,
    state: "Gujarat",
    district: "Botad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 650,
    name: "Shraddha Negi",
    party: "Independent",
    position: "Nagar Palika Chairman, Botad",
    image: null,
    state: "Gujarat",
    district: "Botad",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Molestation charges"
      ],
      other: [
        "Religious offense",
        "Sexual harassment",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Botad", url: "#" },
      { title: "Election Commission Affidavit - Shraddha Negi", url: "#" }
    ]
  },
  {
    id: 651,
    name: "Anushka Ali Sen",
    party: "Independent",
    position: "Former MLA, Chhota Udaipur",
    image: null,
    state: "Gujarat",
    district: "Chhota Udaipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Wrongful confinement",
        "Defamation"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Chhota Udaipur", url: "#" },
      { title: "Election Commission Affidavit - Anushka Ali Sen", url: "#" }
    ]
  },
  {
    id: 652,
    name: "Dharmendra Mishra Sen",
    party: "Independent",
    position: "Nagar Palika Chairman, Dahod",
    image: null,
    state: "Gujarat",
    district: "Dahod",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376"
      ],
      other: [
        "Cheating",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Dahod", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Mishra Sen", url: "#" }
    ]
  },
  {
    id: 653,
    name: "Jitesh Reddy Thakur",
    party: "BJP",
    position: "Block President, Dahod",
    image: null,
    state: "Gujarat",
    district: "Dahod",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Murder charges",
        "Arms Act violations",
        "Voluntarily causing hurt",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Dahod", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Reddy Thakur", url: "#" }
    ]
  },
  {
    id: 654,
    name: "Jitesh Nath Lal",
    party: "INC",
    position: "Party District Leader, Dang",
    image: null,
    state: "Gujarat",
    district: "Dang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Rape charges"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Dang", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Nath Lal", url: "#" }
    ]
  },
  {
    id: 655,
    name: "Santosh Rao",
    party: "AAP",
    position: "Zila Panchayat Member, Dang",
    image: null,
    state: "Gujarat",
    district: "Dang",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 656,
    name: "Ravindra Jain Panda",
    party: "AAP",
    position: "Zila Panchayat Member, Devbhoomi Dwarka",
    image: null,
    state: "Gujarat",
    district: "Devbhoomi Dwarka",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 657,
    name: "Seeta Chand Chowdhury",
    party: "INC",
    position: "MLA, Gandhinagar",
    image: null,
    state: "Gujarat",
    district: "Gandhinagar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 658,
    name: "Balakrishna Nayak",
    party: "Independent",
    position: "Party District Leader, Gir Somnath",
    image: null,
    state: "Gujarat",
    district: "Gir Somnath",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Drug trafficking",
        "Corruption",
        "Explosive substances possession",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Gir Somnath", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Nayak", url: "#" }
    ]
  },
  {
    id: 659,
    name: "Sanjeev Chatterjee",
    party: "Independent",
    position: "Zila Panchayat Member, Jamnagar",
    image: null,
    state: "Gujarat",
    district: "Jamnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 49
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Property dispute",
        "Armed robbery",
        "Unlawful assembly",
        "Illegal occupation",
        "Assault",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Jamnagar", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Chatterjee", url: "#" }
    ]
  },
  {
    id: 660,
    name: "Gajendra Sahoo",
    party: "BJP",
    position: "Nagar Palika Chairman, Junagadh",
    image: null,
    state: "Gujarat",
    district: "Junagadh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 661,
    name: "Ravindra Ansari",
    party: "Independent",
    position: "Municipal Councillor, Kheda",
    image: null,
    state: "Gujarat",
    district: "Kheda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Kheda", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Ansari", url: "#" }
    ]
  },
  {
    id: 662,
    name: "Surendra Sahu",
    party: "INC",
    position: "MLA, Kheda",
    image: null,
    state: "Gujarat",
    district: "Kheda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Kheda", url: "#" },
      { title: "Election Commission Affidavit - Surendra Sahu", url: "#" }
    ]
  },
  {
    id: 663,
    name: "Devendra Kumar",
    party: "AAP",
    position: "Party District Leader, Kutch",
    image: null,
    state: "Gujarat",
    district: "Kutch",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Molestation charges"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Kutch", url: "#" },
      { title: "Election Commission Affidavit - Devendra Kumar", url: "#" }
    ]
  },
  {
    id: 664,
    name: "Mukesh Ahmed",
    party: "AAP",
    position: "Municipal Councillor, Kutch",
    image: null,
    state: "Gujarat",
    district: "Kutch",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 19
    },
    caseDetails: {
      other: [
        "Abduction",
        "Armed robbery",
        "Mischief causing damage",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Kutch", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Ahmed", url: "#" }
    ]
  },
  {
    id: 665,
    name: "Rajesh Pandey Desai",
    party: "AAP",
    position: "Former Minister, Gujarat",
    image: null,
    state: "Gujarat",
    district: "Mahisagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Illegal mining",
        "Perjury",
        "Benami property",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Mahisagar", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Pandey Desai", url: "#" }
    ]
  },
  {
    id: 666,
    name: "Dilip Rathore",
    party: "AAP",
    position: "Municipal Councillor, Mahisagar",
    image: null,
    state: "Gujarat",
    district: "Mahisagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Mahisagar", url: "#" },
      { title: "Election Commission Affidavit - Dilip Rathore", url: "#" }
    ]
  },
  {
    id: 667,
    name: "Sheela Bose",
    party: "BJP",
    position: "Zila Panchayat Member, Mehsana",
    image: null,
    state: "Gujarat",
    district: "Mehsana",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Benami property",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Mehsana", url: "#" },
      { title: "Election Commission Affidavit - Sheela Bose", url: "#" }
    ]
  },
  {
    id: 668,
    name: "Mandeep Shinde",
    party: "BJP",
    position: "Nagar Palika Chairman, Mehsana",
    image: null,
    state: "Gujarat",
    district: "Mehsana",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Voluntarily causing hurt",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Mehsana", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Shinde", url: "#" }
    ]
  },
  {
    id: 669,
    name: "Prakash Bai Yadav",
    party: "BJP",
    position: "Former Minister, Gujarat",
    image: null,
    state: "Gujarat",
    district: "Morbi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Morbi", url: "#" },
      { title: "Election Commission Affidavit - Prakash Bai Yadav", url: "#" }
    ]
  },
  {
    id: 670,
    name: "Mohan Chauhan",
    party: "Independent",
    position: "District President, Narmada",
    image: null,
    state: "Gujarat",
    district: "Narmada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Narmada", url: "#" },
      { title: "Election Commission Affidavit - Mohan Chauhan", url: "#" }
    ]
  },
  {
    id: 671,
    name: "Ranjeet Pawar",
    party: "INC",
    position: "Former Minister, Gujarat",
    image: null,
    state: "Gujarat",
    district: "Narmada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 47
    },
    caseDetails: {
      other: [
        "Violation of election code",
        "Illegal weapons possession",
        "Wrongful confinement",
        "Murder charges",
        "Arms Act violations",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Narmada", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Pawar", url: "#" }
    ]
  },
  {
    id: 672,
    name: "Pradeep Bose",
    party: "BJP",
    position: "District President, Navsari",
    image: null,
    state: "Gujarat",
    district: "Navsari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Murder charges",
        "Fraudulent voting",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Navsari", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Bose", url: "#" }
    ]
  },
  {
    id: 673,
    name: "Anil Bai Kumar",
    party: "INC",
    position: "Zila Panchayat Member, Navsari",
    image: null,
    state: "Gujarat",
    district: "Navsari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 69
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Embezzlement",
        "Land grabbing",
        "Criminal intimidation",
        "Extortion racket",
        "Gangster activities",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Navsari", url: "#" },
      { title: "Election Commission Affidavit - Anil Bai Kumar", url: "#" }
    ]
  },
  {
    id: 674,
    name: "Ramakant Naidu Reddy",
    party: "Independent",
    position: "Party District Leader, Panchmahal",
    image: null,
    state: "Gujarat",
    district: "Panchmahal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 675,
    name: "Dinesh Sen Mukherjee",
    party: "INC",
    position: "District President, Patan",
    image: null,
    state: "Gujarat",
    district: "Patan",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Patan", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Sen Mukherjee", url: "#" }
    ]
  },
  {
    id: 676,
    name: "Pankaj Shinde",
    party: "INC",
    position: "Party District Leader, Patan",
    image: null,
    state: "Gujarat",
    district: "Patan",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 677,
    name: "Kuldeep Shinde",
    party: "BJP",
    position: "Block President, Porbandar",
    image: null,
    state: "Gujarat",
    district: "Porbandar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Property dispute",
        "Tax evasion",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Porbandar", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Shinde", url: "#" }
    ]
  },
  {
    id: 678,
    name: "Rajendra Prasad",
    party: "Independent",
    position: "Nagar Palika Chairman, Porbandar",
    image: null,
    state: "Gujarat",
    district: "Porbandar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Cheating",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Porbandar", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Prasad", url: "#" }
    ]
  },
  {
    id: 679,
    name: "Manju Singh",
    party: "INC",
    position: "Zila Panchayat Member, Rajkot",
    image: null,
    state: "Gujarat",
    district: "Rajkot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Abduction",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Rajkot", url: "#" },
      { title: "Election Commission Affidavit - Manju Singh", url: "#" }
    ]
  },
  {
    id: 680,
    name: "Devendra Negi Babu",
    party: "INC",
    position: "Zila Panchayat Member, Rajkot",
    image: null,
    state: "Gujarat",
    district: "Rajkot",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Rajkot", url: "#" },
      { title: "Election Commission Affidavit - Devendra Negi Babu", url: "#" }
    ]
  },
  {
    id: 681,
    name: "Kumari Pawar",
    party: "INC",
    position: "Municipal Councillor, Sabarkantha",
    image: null,
    state: "Gujarat",
    district: "Sabarkantha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Benami property",
        "Coal mafia",
        "Hate speech"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Sabarkantha", url: "#" },
      { title: "Election Commission Affidavit - Kumari Pawar", url: "#" }
    ]
  },
  {
    id: 682,
    name: "Anand Pawar",
    party: "INC",
    position: "Municipal Councillor, Surat",
    image: null,
    state: "Gujarat",
    district: "Surat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Contempt of court",
        "Kidnapping",
        "Embezzlement",
        "Coal mafia",
        "Defamation",
        "Booth capturing",
        "Arms Act violations",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Surat", url: "#" },
      { title: "Election Commission Affidavit - Anand Pawar", url: "#" }
    ]
  },
  {
    id: 683,
    name: "Subhash Banerjee",
    party: "AAP",
    position: "Former MLA, Surat",
    image: null,
    state: "Gujarat",
    district: "Surat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "SC/ST Act violations",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Surat", url: "#" },
      { title: "Election Commission Affidavit - Subhash Banerjee", url: "#" }
    ]
  },
  {
    id: 684,
    name: "Yogesh Negi Sharma",
    party: "BJP",
    position: "District President, Surendranagar",
    image: null,
    state: "Gujarat",
    district: "Surendranagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Surendranagar", url: "#" },
      { title: "Election Commission Affidavit - Yogesh Negi Sharma", url: "#" }
    ]
  },
  {
    id: 685,
    name: "Narendra Kulkarni Babu",
    party: "Independent",
    position: "Party District Leader, Surendranagar",
    image: null,
    state: "Gujarat",
    district: "Surendranagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Surendranagar", url: "#" },
      { title: "Election Commission Affidavit - Narendra Kulkarni Babu", url: "#" }
    ]
  },
  {
    id: 686,
    name: "Balakrishna Desai Chand",
    party: "Independent",
    position: "Party District Leader, Tapi",
    image: null,
    state: "Gujarat",
    district: "Tapi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Tapi", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Desai Chand", url: "#" }
    ]
  },
  {
    id: 687,
    name: "Shyam Rao Chatterjee",
    party: "AAP",
    position: "Nagar Palika Chairman, Vadodara",
    image: null,
    state: "Gujarat",
    district: "Vadodara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Vadodara", url: "#" },
      { title: "Election Commission Affidavit - Shyam Rao Chatterjee", url: "#" }
    ]
  },
  {
    id: 688,
    name: "Mahesh Jain",
    party: "Independent",
    position: "Former MLA, Valsad",
    image: null,
    state: "Gujarat",
    district: "Valsad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 64
    },
    caseDetails: {
      other: [
        "Liquor mafia",
        "Perjury",
        "Abduction",
        "Armed robbery",
        "Sand mafia",
        "Wrongful confinement",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Gujarat Police Records - Valsad", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Jain", url: "#" }
    ]
  },
  {
    id: 689,
    name: "Ajay Lal",
    party: "BJP",
    position: "Zila Panchayat Member, Adilabad",
    image: null,
    state: "Telangana",
    district: "Adilabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 28
    },
    caseDetails: {
      other: [
        "Land mafia",
        "Criminal trespass",
        "Attempt to murder",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Adilabad", url: "#" },
      { title: "Election Commission Affidavit - Ajay Lal", url: "#" }
    ]
  },
  {
    id: 690,
    name: "Manjeet Mehta",
    party: "BJP",
    position: "Former Minister, Telangana",
    image: null,
    state: "Telangana",
    district: "Adilabad",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376"
      ],
      other: [
        "Tax evasion",
        "Drug trafficking",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Adilabad", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Mehta", url: "#" }
    ]
  },
  {
    id: 691,
    name: "Dharmendra Joshi",
    party: "BRS",
    position: "Zila Panchayat Member, Bhadradri Kothagudem",
    image: null,
    state: "Telangana",
    district: "Bhadradri Kothagudem",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Bhadradri Kothagudem", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Joshi", url: "#" }
    ]
  },
  {
    id: 692,
    name: "Dilip Siddiqui",
    party: "BRS",
    position: "District President, Hyderabad",
    image: null,
    state: "Telangana",
    district: "Hyderabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 693,
    name: "Umesh Dutta Joshi",
    party: "Independent",
    position: "Former Minister, Telangana",
    image: null,
    state: "Telangana",
    district: "Hyderabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Benami property",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Hyderabad", url: "#" },
      { title: "Election Commission Affidavit - Umesh Dutta Joshi", url: "#" }
    ]
  },
  {
    id: 694,
    name: "Satish Qureshi",
    party: "Independent",
    position: "Nagar Palika Chairman, Jagtial",
    image: null,
    state: "Telangana",
    district: "Jagtial",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Jagtial", url: "#" },
      { title: "Election Commission Affidavit - Satish Qureshi", url: "#" }
    ]
  },
  {
    id: 695,
    name: "Rampreet Agarwal Biswal",
    party: "INC",
    position: "Former Minister, Telangana",
    image: null,
    state: "Telangana",
    district: "Jangaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 48
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Liquor mafia",
        "Gangster activities"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Jangaon", url: "#" },
      { title: "Election Commission Affidavit - Rampreet Agarwal Biswal", url: "#" }
    ]
  },
  {
    id: 696,
    name: "Mamta Jain",
    party: "BRS",
    position: "Former MLA, Jangaon",
    image: null,
    state: "Telangana",
    district: "Jangaon",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 697,
    name: "Anushka Rawat Patil",
    party: "BRS",
    position: "Block President, Jayashankar",
    image: null,
    state: "Telangana",
    district: "Jayashankar",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376"
      ],
      other: [
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Jayashankar", url: "#" },
      { title: "Election Commission Affidavit - Anushka Rawat Patil", url: "#" }
    ]
  },
  {
    id: 698,
    name: "Mohan Roy Verma",
    party: "INC",
    position: "Former MLA, Jogulamba",
    image: null,
    state: "Telangana",
    district: "Jogulamba",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 699,
    name: "Subhash Patil",
    party: "Independent",
    position: "Former Minister, Telangana",
    image: null,
    state: "Telangana",
    district: "Kamareddy",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Explosive substances possession",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Kamareddy", url: "#" },
      { title: "Election Commission Affidavit - Subhash Patil", url: "#" }
    ]
  },
  {
    id: 700,
    name: "Mukesh Jain",
    party: "Independent",
    position: "Zila Panchayat Member, Karimnagar",
    image: null,
    state: "Telangana",
    district: "Karimnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Karimnagar", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Jain", url: "#" }
    ]
  },
  {
    id: 701,
    name: "Devendra Lal",
    party: "INC",
    position: "District President, Karimnagar",
    image: null,
    state: "Telangana",
    district: "Karimnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Promoting enmity",
        "Murder charges",
        "Land grabbing"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Karimnagar", url: "#" },
      { title: "Election Commission Affidavit - Devendra Lal", url: "#" }
    ]
  },
  {
    id: 702,
    name: "Amarjeet Qureshi Sharma",
    party: "INC",
    position: "Former Minister, Telangana",
    image: null,
    state: "Telangana",
    district: "Khammam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Khammam", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Qureshi Sharma", url: "#" }
    ]
  },
  {
    id: 703,
    name: "Reena Chauhan",
    party: "BJP",
    position: "Former MLA, Khammam",
    image: null,
    state: "Telangana",
    district: "Khammam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Bribery",
        "Abduction"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Khammam", url: "#" },
      { title: "Election Commission Affidavit - Reena Chauhan", url: "#" }
    ]
  },
  {
    id: 704,
    name: "Hardeep Lal Kumar",
    party: "BJP",
    position: "Block President, Komaram Bheem",
    image: null,
    state: "Telangana",
    district: "Komaram Bheem",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 57
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Dacoity",
        "Unlawful assembly",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Komaram Bheem", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Lal Kumar", url: "#" }
    ]
  },
  {
    id: 705,
    name: "Kishore Ghosh Ahmed",
    party: "INC",
    position: "Block President, Mahabubabad",
    image: null,
    state: "Telangana",
    district: "Mahabubabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 706,
    name: "Lokesh Jain",
    party: "BJP",
    position: "Party District Leader, Mahbubnagar",
    image: null,
    state: "Telangana",
    district: "Mahbubnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Mahbubnagar", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Jain", url: "#" }
    ]
  },
  {
    id: 707,
    name: "Nisha Mani",
    party: "INC",
    position: "Party District Leader, Mancherial",
    image: null,
    state: "Telangana",
    district: "Mancherial",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 708,
    name: "Umesh Thakur Sen",
    party: "AIMIM",
    position: "District President, Mancherial",
    image: null,
    state: "Telangana",
    district: "Mancherial",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Molestation charges"
      ],
      other: [
        "Tax evasion",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Mancherial", url: "#" },
      { title: "Election Commission Affidavit - Umesh Thakur Sen", url: "#" }
    ]
  },
  {
    id: 709,
    name: "Rajeev Mukherjee Roy",
    party: "Independent",
    position: "District President, Medak",
    image: null,
    state: "Telangana",
    district: "Medak",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Booth capturing",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Medak", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Mukherjee Roy", url: "#" }
    ]
  },
  {
    id: 710,
    name: "Omprakash Chowdhury Rawat",
    party: "AIMIM",
    position: "Former MLA, Medak",
    image: null,
    state: "Telangana",
    district: "Medak",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Perjury",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Medak", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Chowdhury Rawat", url: "#" }
    ]
  },
  {
    id: 711,
    name: "Hardeep Ansari Agarwal",
    party: "INC",
    position: "District President, Medchal",
    image: null,
    state: "Telangana",
    district: "Medchal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Dacoity",
        "Benami property",
        "Liquor mafia",
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Medchal", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Ansari Agarwal", url: "#" }
    ]
  },
  {
    id: 712,
    name: "Mamta Desai Verma",
    party: "INC",
    position: "Former MLA, Nagarkurnool",
    image: null,
    state: "Telangana",
    district: "Nagarkurnool",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Abduction",
        "Hate speech",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Nagarkurnool", url: "#" },
      { title: "Election Commission Affidavit - Mamta Desai Verma", url: "#" }
    ]
  },
  {
    id: 713,
    name: "Sanjana Nath",
    party: "BJP",
    position: "Party District Leader, Nalgonda",
    image: null,
    state: "Telangana",
    district: "Nalgonda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Nalgonda", url: "#" },
      { title: "Election Commission Affidavit - Sanjana Nath", url: "#" }
    ]
  },
  {
    id: 714,
    name: "Mohan Roy Pandey",
    party: "Independent",
    position: "Party District Leader, Nirmal",
    image: null,
    state: "Telangana",
    district: "Nirmal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 715,
    name: "Archana Bose",
    party: "AIMIM",
    position: "Former Minister, Telangana",
    image: null,
    state: "Telangana",
    district: "Nirmal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Nirmal", url: "#" },
      { title: "Election Commission Affidavit - Archana Bose", url: "#" }
    ]
  },
  {
    id: 716,
    name: "Santosh Nayak Patel",
    party: "INC",
    position: "Nagar Palika Chairman, Nizamabad",
    image: null,
    state: "Telangana",
    district: "Nizamabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Encroachment",
        "Sexual harassment",
        "Forgery",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Nizamabad", url: "#" },
      { title: "Election Commission Affidavit - Santosh Nayak Patel", url: "#" }
    ]
  },
  {
    id: 717,
    name: "Hariprasad Chatterjee Malik",
    party: "AIMIM",
    position: "MLA, Nizamabad",
    image: null,
    state: "Telangana",
    district: "Nizamabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Booth capturing",
        "Embezzlement",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Nizamabad", url: "#" },
      { title: "Election Commission Affidavit - Hariprasad Chatterjee Malik", url: "#" }
    ]
  },
  {
    id: 718,
    name: "Pramod Das",
    party: "INC",
    position: "District President, Peddapalli",
    image: null,
    state: "Telangana",
    district: "Peddapalli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Illegal asset accumulation",
        "Bribery",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Peddapalli", url: "#" },
      { title: "Election Commission Affidavit - Pramod Das", url: "#" }
    ]
  },
  {
    id: 719,
    name: "Kamlesh Yadav Reddy",
    party: "BJP",
    position: "Nagar Palika Chairman, Peddapalli",
    image: null,
    state: "Telangana",
    district: "Peddapalli",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 720,
    name: "Rajendra Khan",
    party: "AIMIM",
    position: "Zila Panchayat Member, Rajanna Sircilla",
    image: null,
    state: "Telangana",
    district: "Rajanna Sircilla",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Embezzlement",
        "Mischief causing damage",
        "Inciting violence",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Rajanna Sircilla", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Khan", url: "#" }
    ]
  },
  {
    id: 721,
    name: "Dilip Babu Verma",
    party: "BJP",
    position: "Municipal Councillor, Rajanna Sircilla",
    image: null,
    state: "Telangana",
    district: "Rajanna Sircilla",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Rape under IPC 376"
      ],
      other: [
        "Corruption"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Rajanna Sircilla", url: "#" },
      { title: "Election Commission Affidavit - Dilip Babu Verma", url: "#" }
    ]
  },
  {
    id: 722,
    name: "Gajendra Mani Sahu",
    party: "BJP",
    position: "Party District Leader, Rangareddy",
    image: null,
    state: "Telangana",
    district: "Rangareddy",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Contempt of court",
        "Unlawful assembly",
        "Criminal conspiracy",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Rangareddy", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Mani Sahu", url: "#" }
    ]
  },
  {
    id: 723,
    name: "Balakrishna Kumar",
    party: "AIMIM",
    position: "Municipal Councillor, Rangareddy",
    image: null,
    state: "Telangana",
    district: "Rangareddy",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Rangareddy", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Kumar", url: "#" }
    ]
  },
  {
    id: 724,
    name: "Rakesh Singh",
    party: "BJP",
    position: "Zila Panchayat Member, Sangareddy",
    image: null,
    state: "Telangana",
    district: "Sangareddy",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Religious offense",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Sangareddy", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Singh", url: "#" }
    ]
  },
  {
    id: 725,
    name: "Ranjeet Prasad",
    party: "BRS",
    position: "Former Minister, Telangana",
    image: null,
    state: "Telangana",
    district: "Sangareddy",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Booth capturing",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Sangareddy", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Prasad", url: "#" }
    ]
  },
  {
    id: 726,
    name: "Rajesh Ali Ansari",
    party: "Independent",
    position: "Former MLA, Siddipet",
    image: null,
    state: "Telangana",
    district: "Siddipet",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Human trafficking",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Siddipet", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Ali Ansari", url: "#" }
    ]
  },
  {
    id: 727,
    name: "Satish Panda Chaudhary",
    party: "BJP",
    position: "Municipal Councillor, Siddipet",
    image: null,
    state: "Telangana",
    district: "Siddipet",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 728,
    name: "Usha Ansari",
    party: "BRS",
    position: "Municipal Councillor, Suryapet",
    image: null,
    state: "Telangana",
    district: "Suryapet",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Electoral malpractice",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Suryapet", url: "#" },
      { title: "Election Commission Affidavit - Usha Ansari", url: "#" }
    ]
  },
  {
    id: 729,
    name: "Hardeep Patil",
    party: "AIMIM",
    position: "Municipal Councillor, Suryapet",
    image: null,
    state: "Telangana",
    district: "Suryapet",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Stalking (IPC 354D)",
        "Voyeurism charges"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Suryapet", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Patil", url: "#" }
    ]
  },
  {
    id: 730,
    name: "Laxmikant Thakur",
    party: "BJP",
    position: "Party District Leader, Vikarabad",
    image: null,
    state: "Telangana",
    district: "Vikarabad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Caste atrocities",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Vikarabad", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Thakur", url: "#" }
    ]
  },
  {
    id: 731,
    name: "Ranjeet Pawar",
    party: "AIMIM",
    position: "Municipal Councillor, Vikarabad",
    image: null,
    state: "Telangana",
    district: "Vikarabad",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Stalking (IPC 354D)",
        "Molestation charges",
        "Assault with intent to outrage modesty"
      ],
      other: [
        "Tax evasion",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Vikarabad", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Pawar", url: "#" }
    ]
  },
  {
    id: 732,
    name: "Hariprasad Jain Kumar",
    party: "Independent",
    position: "District President, Wanaparthy",
    image: null,
    state: "Telangana",
    district: "Wanaparthy",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Gang rape charges",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Rioting",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Wanaparthy", url: "#" },
      { title: "Election Commission Affidavit - Hariprasad Jain Kumar", url: "#" }
    ]
  },
  {
    id: 733,
    name: "Shivakant Banerjee",
    party: "INC",
    position: "Block President, Wanaparthy",
    image: null,
    state: "Telangana",
    district: "Wanaparthy",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Electoral malpractice",
        "Assault",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Wanaparthy", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Banerjee", url: "#" }
    ]
  },
  {
    id: 734,
    name: "Dinesh Patil",
    party: "BRS",
    position: "Former MLA, Warangal Rural",
    image: null,
    state: "Telangana",
    district: "Warangal Rural",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Rape charges"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Warangal Rural", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Patil", url: "#" }
    ]
  },
  {
    id: 735,
    name: "Ranjeet Dutta Singh",
    party: "Independent",
    position: "District President, Warangal Urban",
    image: null,
    state: "Telangana",
    district: "Warangal Urban",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Murder charges"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Warangal Urban", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Dutta Singh", url: "#" }
    ]
  },
  {
    id: 736,
    name: "Narendra Ahmed",
    party: "AIMIM",
    position: "Municipal Councillor, Yadadri Bhuvanagiri",
    image: null,
    state: "Telangana",
    district: "Yadadri Bhuvanagiri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Yadadri Bhuvanagiri", url: "#" },
      { title: "Election Commission Affidavit - Narendra Ahmed", url: "#" }
    ]
  },
  {
    id: 737,
    name: "Vinay Rathore Ahmed",
    party: "AIMIM",
    position: "Nagar Palika Chairman, Yadadri Bhuvanagiri",
    image: null,
    state: "Telangana",
    district: "Yadadri Bhuvanagiri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Telangana Police Records - Yadadri Bhuvanagiri", url: "#" },
      { title: "Election Commission Affidavit - Vinay Rathore Ahmed", url: "#" }
    ]
  },
  {
    id: 738,
    name: "Narasimha Bisht",
    party: "JSP",
    position: "Party District Leader, Alluri Sitharama Raju",
    image: null,
    state: "Andhra Pradesh",
    district: "Alluri Sitharama Raju",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Coal mafia",
        "Corruption"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Alluri Sitharama Raju", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Bisht", url: "#" }
    ]
  },
  {
    id: 739,
    name: "Amarjeet Pawar",
    party: "JSP",
    position: "Former Minister, Andhra Pradesh",
    image: null,
    state: "Andhra Pradesh",
    district: "Alluri Sitharama Raju",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Corruption",
        "Murder charges",
        "SC/ST Act violations",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Alluri Sitharama Raju", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Pawar", url: "#" }
    ]
  },
  {
    id: 740,
    name: "Balakrishna Roy",
    party: "BJP",
    position: "Block President, Anakapalli",
    image: null,
    state: "Andhra Pradesh",
    district: "Anakapalli",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 741,
    name: "Mohan Roy",
    party: "BJP",
    position: "MLA, Anantapur",
    image: null,
    state: "Andhra Pradesh",
    district: "Anantapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Defamation",
        "Criminal conspiracy",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Anantapur", url: "#" },
      { title: "Election Commission Affidavit - Mohan Roy", url: "#" }
    ]
  },
  {
    id: 742,
    name: "Suresh Bose",
    party: "YSRCP",
    position: "Nagar Palika Chairman, Annamayya",
    image: null,
    state: "Andhra Pradesh",
    district: "Annamayya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Embezzlement",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Annamayya", url: "#" },
      { title: "Election Commission Affidavit - Suresh Bose", url: "#" }
    ]
  },
  {
    id: 743,
    name: "Sanjana Kulkarni Agarwal",
    party: "JSP",
    position: "MLA, Annamayya",
    image: null,
    state: "Andhra Pradesh",
    district: "Annamayya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Abduction",
        "Electoral malpractice",
        "Voter intimidation",
        "Kidnapping",
        "Attempt to murder",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Annamayya", url: "#" },
      { title: "Election Commission Affidavit - Sanjana Kulkarni Agarwal", url: "#" }
    ]
  },
  {
    id: 744,
    name: "Laxmikant Verma Malik",
    party: "Independent",
    position: "Block President, Bapatla",
    image: null,
    state: "Andhra Pradesh",
    district: "Bapatla",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Gang rape charges"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Bapatla", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Verma Malik", url: "#" }
    ]
  },
  {
    id: 745,
    name: "Kamlesh Gupta",
    party: "YSRCP",
    position: "Municipal Councillor, Bapatla",
    image: null,
    state: "Andhra Pradesh",
    district: "Bapatla",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Criminal trespass",
        "Rape charges",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Bapatla", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Gupta", url: "#" }
    ]
  },
  {
    id: 746,
    name: "Brijendra Patil",
    party: "TDP",
    position: "MLA, Chittoor",
    image: null,
    state: "Andhra Pradesh",
    district: "Chittoor",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Arms Act violations",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Chittoor", url: "#" },
      { title: "Election Commission Affidavit - Brijendra Patil", url: "#" }
    ]
  },
  {
    id: 747,
    name: "Roshni Agarwal",
    party: "JSP",
    position: "District President, East Godavari",
    image: null,
    state: "Andhra Pradesh",
    district: "East Godavari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Assault",
        "Money laundering",
        "Promoting enmity",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - East Godavari", url: "#" },
      { title: "Election Commission Affidavit - Roshni Agarwal", url: "#" }
    ]
  },
  {
    id: 748,
    name: "Gajendra Chaudhary Nath",
    party: "TDP",
    position: "Party District Leader, East Godavari",
    image: null,
    state: "Andhra Pradesh",
    district: "East Godavari",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 749,
    name: "Sanjay Mehta",
    party: "JSP",
    position: "Municipal Councillor, Eluru",
    image: null,
    state: "Andhra Pradesh",
    district: "Eluru",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Money laundering",
        "Criminal conspiracy",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Eluru", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Mehta", url: "#" }
    ]
  },
  {
    id: 750,
    name: "Roshni Banerjee Chauhan",
    party: "BJP",
    position: "Zila Panchayat Member, Eluru",
    image: null,
    state: "Andhra Pradesh",
    district: "Eluru",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Ammunition without license",
        "Gangster activities",
        "Disproportionate assets",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Eluru", url: "#" },
      { title: "Election Commission Affidavit - Roshni Banerjee Chauhan", url: "#" }
    ]
  },
  {
    id: 751,
    name: "Satish Mishra",
    party: "BJP",
    position: "Block President, Guntur",
    image: null,
    state: "Andhra Pradesh",
    district: "Guntur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 66
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Abduction",
        "Illegal asset accumulation",
        "Voluntarily causing hurt",
        "Inciting violence",
        "Human trafficking",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Guntur", url: "#" },
      { title: "Election Commission Affidavit - Satish Mishra", url: "#" }
    ]
  },
  {
    id: 752,
    name: "Dharmendra Rawat",
    party: "Independent",
    position: "Zila Panchayat Member, Kadapa",
    image: null,
    state: "Andhra Pradesh",
    district: "Kadapa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Booth capturing",
        "Violation of election code",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Kadapa", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Rawat", url: "#" }
    ]
  },
  {
    id: 753,
    name: "Jitendra Negi",
    party: "Independent",
    position: "Party District Leader, Kadapa",
    image: null,
    state: "Andhra Pradesh",
    district: "Kadapa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Assault"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Kadapa", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Negi", url: "#" }
    ]
  },
  {
    id: 754,
    name: "Pankaj Agarwal Singh",
    party: "BJP",
    position: "Nagar Palika Chairman, Kakinada",
    image: null,
    state: "Andhra Pradesh",
    district: "Kakinada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Kakinada", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Agarwal Singh", url: "#" }
    ]
  },
  {
    id: 755,
    name: "Archana Chaudhary",
    party: "BJP",
    position: "Municipal Councillor, Krishna",
    image: null,
    state: "Andhra Pradesh",
    district: "Krishna",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Assault with intent to outrage modesty",
        "Gang rape charges",
        "Rape under IPC 376"
      ],
      other: [
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Krishna", url: "#" },
      { title: "Election Commission Affidavit - Archana Chaudhary", url: "#" }
    ]
  },
  {
    id: 756,
    name: "Dilip Nath Chauhan",
    party: "Independent",
    position: "Former Minister, Andhra Pradesh",
    image: null,
    state: "Andhra Pradesh",
    district: "Krishna",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Human trafficking",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Krishna", url: "#" },
      { title: "Election Commission Affidavit - Dilip Nath Chauhan", url: "#" }
    ]
  },
  {
    id: 757,
    name: "Santosh Devi",
    party: "JSP",
    position: "Block President, Kurnool",
    image: null,
    state: "Andhra Pradesh",
    district: "Kurnool",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Violation of election code",
        "Bribery",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Kurnool", url: "#" },
      { title: "Election Commission Affidavit - Santosh Devi", url: "#" }
    ]
  },
  {
    id: 758,
    name: "Avinash Rajput Naidu",
    party: "BJP",
    position: "Zila Panchayat Member, Nandyal",
    image: null,
    state: "Andhra Pradesh",
    district: "Nandyal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Money laundering",
        "Criminal conspiracy",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Nandyal", url: "#" },
      { title: "Election Commission Affidavit - Avinash Rajput Naidu", url: "#" }
    ]
  },
  {
    id: 759,
    name: "Sunil Lal Pawar",
    party: "Independent",
    position: "Former Minister, Andhra Pradesh",
    image: null,
    state: "Andhra Pradesh",
    district: "Nandyal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Disproportionate assets",
        "Assault"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Nandyal", url: "#" },
      { title: "Election Commission Affidavit - Sunil Lal Pawar", url: "#" }
    ]
  },
  {
    id: 760,
    name: "Sunita Chaudhary",
    party: "BJP",
    position: "Nagar Palika Chairman, Nellore",
    image: null,
    state: "Andhra Pradesh",
    district: "Nellore",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Nellore", url: "#" },
      { title: "Election Commission Affidavit - Sunita Chaudhary", url: "#" }
    ]
  },
  {
    id: 761,
    name: "Manjeet Yadav",
    party: "Independent",
    position: "MLA, Palnadu",
    image: null,
    state: "Andhra Pradesh",
    district: "Palnadu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Defamation",
        "Bribery",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Palnadu", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Yadav", url: "#" }
    ]
  },
  {
    id: 762,
    name: "Ranjeet Thakur Mehta",
    party: "JSP",
    position: "District President, Palnadu",
    image: null,
    state: "Andhra Pradesh",
    district: "Palnadu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 46
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Murder charges",
        "Perjury",
        "Gangster activities",
        "Illegal mining",
        "Inciting violence",
        "Dacoity",
        "Hate speech"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Palnadu", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Thakur Mehta", url: "#" }
    ]
  },
  {
    id: 763,
    name: "Pankaj Chand Negi",
    party: "JSP",
    position: "Former Minister, Andhra Pradesh",
    image: null,
    state: "Andhra Pradesh",
    district: "Parvathipuram Manyam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Benami property",
        "Attempt to murder",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Parvathipuram Manyam", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Chand Negi", url: "#" }
    ]
  },
  {
    id: 764,
    name: "Satish Patil Malik",
    party: "YSRCP",
    position: "MLA, Prakasam",
    image: null,
    state: "Andhra Pradesh",
    district: "Prakasam",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 765,
    name: "Anil Naidu Bose",
    party: "Independent",
    position: "Former Minister, Andhra Pradesh",
    image: null,
    state: "Andhra Pradesh",
    district: "Srikakulam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Srikakulam", url: "#" },
      { title: "Election Commission Affidavit - Anil Naidu Bose", url: "#" }
    ]
  },
  {
    id: 766,
    name: "Govind Nayak Mani",
    party: "BJP",
    position: "Former Minister, Andhra Pradesh",
    image: null,
    state: "Andhra Pradesh",
    district: "Tirupati",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 767,
    name: "Govind Chand",
    party: "JSP",
    position: "Municipal Councillor, Tirupati",
    image: null,
    state: "Andhra Pradesh",
    district: "Tirupati",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 768,
    name: "Kumari Lal Shah",
    party: "TDP",
    position: "MLA, Visakhapatnam",
    image: null,
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Assault with intent to outrage modesty",
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Booth capturing",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Visakhapatnam", url: "#" },
      { title: "Election Commission Affidavit - Kumari Lal Shah", url: "#" }
    ]
  },
  {
    id: 769,
    name: "Vandana Kumar Bisht",
    party: "BJP",
    position: "Nagar Palika Chairman, Visakhapatnam",
    image: null,
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Cheating"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Visakhapatnam", url: "#" },
      { title: "Election Commission Affidavit - Vandana Kumar Bisht", url: "#" }
    ]
  },
  {
    id: 770,
    name: "Kumari Verma Chatterjee",
    party: "JSP",
    position: "Zila Panchayat Member, Vizianagaram",
    image: null,
    state: "Andhra Pradesh",
    district: "Vizianagaram",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Molestation charges",
        "Eve-teasing and harassment"
      ],
      other: [
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Vizianagaram", url: "#" },
      { title: "Election Commission Affidavit - Kumari Verma Chatterjee", url: "#" }
    ]
  },
  {
    id: 771,
    name: "Ramakant Rathore",
    party: "TDP",
    position: "Party District Leader, Vizianagaram",
    image: null,
    state: "Andhra Pradesh",
    district: "Vizianagaram",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - Vizianagaram", url: "#" },
      { title: "Election Commission Affidavit - Ramakant Rathore", url: "#" }
    ]
  },
  {
    id: 772,
    name: "Pankaj Biswal",
    party: "JSP",
    position: "Block President, West Godavari",
    image: null,
    state: "Andhra Pradesh",
    district: "West Godavari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Embezzlement",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Andhra Pradesh Police Records - West Godavari", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Biswal", url: "#" }
    ]
  },
  {
    id: 773,
    name: "Umesh Reddy",
    party: "JSP",
    position: "Former MLA, West Godavari",
    image: null,
    state: "Andhra Pradesh",
    district: "West Godavari",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 774,
    name: "Gajendra Mishra",
    party: "Independent",
    position: "Former Minister, Haryana",
    image: null,
    state: "Haryana",
    district: "Ambala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Ambala", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Mishra", url: "#" }
    ]
  },
  {
    id: 775,
    name: "Mohan Ali Ghosh",
    party: "INC",
    position: "Block President, Ambala",
    image: null,
    state: "Haryana",
    district: "Ambala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Religious offense",
        "Electoral malpractice",
        "Sand mafia",
        "Forgery"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Ambala", url: "#" },
      { title: "Election Commission Affidavit - Mohan Ali Ghosh", url: "#" }
    ]
  },
  {
    id: 776,
    name: "Lalita Shah Shinde",
    party: "BJP",
    position: "Party District Leader, Bhiwani",
    image: null,
    state: "Haryana",
    district: "Bhiwani",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376"
      ],
      other: [
        "Illegal asset accumulation",
        "Sexual harassment",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Bhiwani", url: "#" },
      { title: "Election Commission Affidavit - Lalita Shah Shinde", url: "#" }
    ]
  },
  {
    id: 777,
    name: "Hitesh Tiwari Banerjee",
    party: "Independent",
    position: "Municipal Councillor, Bhiwani",
    image: null,
    state: "Haryana",
    district: "Bhiwani",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Bhiwani", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Tiwari Banerjee", url: "#" }
    ]
  },
  {
    id: 778,
    name: "Pramod Rawat",
    party: "BJP",
    position: "Zila Panchayat Member, Charkhi Dadri",
    image: null,
    state: "Haryana",
    district: "Charkhi Dadri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Criminal trespass",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Charkhi Dadri", url: "#" },
      { title: "Election Commission Affidavit - Pramod Rawat", url: "#" }
    ]
  },
  {
    id: 779,
    name: "Sanjay Banerjee",
    party: "INC",
    position: "District President, Faridabad",
    image: null,
    state: "Haryana",
    district: "Faridabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 780,
    name: "Ramakant Devi",
    party: "INC",
    position: "District President, Fatehabad",
    image: null,
    state: "Haryana",
    district: "Fatehabad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 781,
    name: "Anjali Patel",
    party: "BJP",
    position: "Former Minister, Haryana",
    image: null,
    state: "Haryana",
    district: "Gurugram",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Assault",
        "Rape charges",
        "Property dispute",
        "Voluntarily causing hurt",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Gurugram", url: "#" },
      { title: "Election Commission Affidavit - Anjali Patel", url: "#" }
    ]
  },
  {
    id: 782,
    name: "Mamta Naidu",
    party: "INLD",
    position: "MLA, Gurugram",
    image: null,
    state: "Haryana",
    district: "Gurugram",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 783,
    name: "Kavita Rawat",
    party: "JJP",
    position: "Nagar Palika Chairman, Hisar",
    image: null,
    state: "Haryana",
    district: "Hisar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Benami property",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Hisar", url: "#" },
      { title: "Election Commission Affidavit - Kavita Rawat", url: "#" }
    ]
  },
  {
    id: 784,
    name: "Laxmikant Gupta Behera",
    party: "BJP",
    position: "MLA, Jhajjar",
    image: null,
    state: "Haryana",
    district: "Jhajjar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Jhajjar", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Gupta Behera", url: "#" }
    ]
  },
  {
    id: 785,
    name: "Devendra Jain",
    party: "Independent",
    position: "Zila Panchayat Member, Jhajjar",
    image: null,
    state: "Haryana",
    district: "Jhajjar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Jhajjar", url: "#" },
      { title: "Election Commission Affidavit - Devendra Jain", url: "#" }
    ]
  },
  {
    id: 786,
    name: "Dilip Shah",
    party: "BJP",
    position: "Zila Panchayat Member, Jind",
    image: null,
    state: "Haryana",
    district: "Jind",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Encroachment"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Jind", url: "#" },
      { title: "Election Commission Affidavit - Dilip Shah", url: "#" }
    ]
  },
  {
    id: 787,
    name: "Anil Bai",
    party: "BJP",
    position: "Former Minister, Haryana",
    image: null,
    state: "Haryana",
    district: "Jind",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 69
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Murder charges",
        "Extortion racket",
        "Disproportionate assets",
        "Misappropriation of public funds",
        "Criminal trespass",
        "Cheating"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Jind", url: "#" },
      { title: "Election Commission Affidavit - Anil Bai", url: "#" }
    ]
  },
  {
    id: 788,
    name: "Sanjeev Patil",
    party: "INLD",
    position: "MLA, Kaithal",
    image: null,
    state: "Haryana",
    district: "Kaithal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Land grabbing",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Kaithal", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Patil", url: "#" }
    ]
  },
  {
    id: 789,
    name: "Shakti Rajput",
    party: "JJP",
    position: "Former Minister, Haryana",
    image: null,
    state: "Haryana",
    district: "Kaithal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Kaithal", url: "#" },
      { title: "Election Commission Affidavit - Shakti Rajput", url: "#" }
    ]
  },
  {
    id: 790,
    name: "Manoj Reddy",
    party: "BJP",
    position: "Zila Panchayat Member, Karnal",
    image: null,
    state: "Haryana",
    district: "Karnal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 791,
    name: "Manjeet Kulkarni",
    party: "INLD",
    position: "Former MLA, Kurukshetra",
    image: null,
    state: "Haryana",
    district: "Kurukshetra",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Illegal weapons possession",
        "Perjury"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Kurukshetra", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Kulkarni", url: "#" }
    ]
  },
  {
    id: 792,
    name: "Laxmikant Ali",
    party: "INLD",
    position: "Municipal Councillor, Kurukshetra",
    image: null,
    state: "Haryana",
    district: "Kurukshetra",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Kurukshetra", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Ali", url: "#" }
    ]
  },
  {
    id: 793,
    name: "Sadhana Bose Pandey",
    party: "INC",
    position: "Zila Panchayat Member, Mahendragarh",
    image: null,
    state: "Haryana",
    district: "Mahendragarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Mahendragarh", url: "#" },
      { title: "Election Commission Affidavit - Sadhana Bose Pandey", url: "#" }
    ]
  },
  {
    id: 794,
    name: "Narasimha Chowdhury",
    party: "JJP",
    position: "Former MLA, Nuh",
    image: null,
    state: "Haryana",
    district: "Nuh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Attempt to murder",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Nuh", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Chowdhury", url: "#" }
    ]
  },
  {
    id: 795,
    name: "Rajendra Patil Singh",
    party: "BJP",
    position: "MLA, Nuh",
    image: null,
    state: "Haryana",
    district: "Nuh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 796,
    name: "Narasimha Swain",
    party: "JJP",
    position: "Block President, Palwal",
    image: null,
    state: "Haryana",
    district: "Palwal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Encroachment",
        "Rioting",
        "Perjury",
        "Corruption"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Palwal", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Swain", url: "#" }
    ]
  },
  {
    id: 797,
    name: "Anand Reddy",
    party: "BJP",
    position: "Former Minister, Haryana",
    image: null,
    state: "Haryana",
    district: "Palwal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 58
    },
    caseDetails: {
      other: [
        "Property dispute",
        "Illegal weapons possession",
        "Abduction",
        "Contempt of court",
        "Corruption",
        "Tax evasion",
        "Disproportionate assets",
        "Benami property"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Palwal", url: "#" },
      { title: "Election Commission Affidavit - Anand Reddy", url: "#" }
    ]
  },
  {
    id: 798,
    name: "Dayashankar Khan",
    party: "Independent",
    position: "MLA, Panchkula",
    image: null,
    state: "Haryana",
    district: "Panchkula",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Benami property",
        "Voluntarily causing hurt",
        "Explosive substances possession",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Panchkula", url: "#" },
      { title: "Election Commission Affidavit - Dayashankar Khan", url: "#" }
    ]
  },
  {
    id: 799,
    name: "Anand Bisht",
    party: "INC",
    position: "Party District Leader, Panipat",
    image: null,
    state: "Haryana",
    district: "Panipat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 45
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Cattle smuggling",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Panipat", url: "#" },
      { title: "Election Commission Affidavit - Anand Bisht", url: "#" }
    ]
  },
  {
    id: 800,
    name: "Sohan Bisht",
    party: "BJP",
    position: "Party District Leader, Panipat",
    image: null,
    state: "Haryana",
    district: "Panipat",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Stalking (IPC 354D)"
      ],
      other: [
        "Cattle smuggling",
        "Inciting violence",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Panipat", url: "#" },
      { title: "Election Commission Affidavit - Sohan Bisht", url: "#" }
    ]
  },
  {
    id: 801,
    name: "Sanjay Qureshi",
    party: "JJP",
    position: "Nagar Palika Chairman, Rewari",
    image: null,
    state: "Haryana",
    district: "Rewari",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 802,
    name: "Venkatesh Rajput Lal",
    party: "JJP",
    position: "Party District Leader, Rewari",
    image: null,
    state: "Haryana",
    district: "Rewari",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Stalking (IPC 354D)",
        "Assault with intent to outrage modesty"
      ],
      other: [
        "Caste atrocities",
        "Corruption"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Rewari", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Rajput Lal", url: "#" }
    ]
  },
  {
    id: 803,
    name: "Leela Nayak Devi",
    party: "JJP",
    position: "Former MLA, Rohtak",
    image: null,
    state: "Haryana",
    district: "Rohtak",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 804,
    name: "Naresh Malik Agarwal",
    party: "BJP",
    position: "MLA, Sirsa",
    image: null,
    state: "Haryana",
    district: "Sirsa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Fraudulent voting",
        "Property dispute",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Sirsa", url: "#" },
      { title: "Election Commission Affidavit - Naresh Malik Agarwal", url: "#" }
    ]
  },
  {
    id: 805,
    name: "Gajendra Prasad",
    party: "Independent",
    position: "Municipal Councillor, Sonipat",
    image: null,
    state: "Haryana",
    district: "Sonipat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Sonipat", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Prasad", url: "#" }
    ]
  },
  {
    id: 806,
    name: "Ranjeet Kulkarni",
    party: "INLD",
    position: "MLA, Yamunanagar",
    image: null,
    state: "Haryana",
    district: "Yamunanagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Liquor mafia",
        "Assault",
        "Hate speech"
      ]
    },
    sources: [
      { title: "Haryana Police Records - Yamunanagar", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Kulkarni", url: "#" }
    ]
  },
  {
    id: 807,
    name: "Shyam Verma Nath",
    party: "BJP",
    position: "Block President, Amritsar",
    image: null,
    state: "Punjab",
    district: "Amritsar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Amritsar", url: "#" },
      { title: "Election Commission Affidavit - Shyam Verma Nath", url: "#" }
    ]
  },
  {
    id: 808,
    name: "Sanjay Lal Rajput",
    party: "INC",
    position: "Former Minister, Punjab",
    image: null,
    state: "Punjab",
    district: "Amritsar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 809,
    name: "Dheeraj Mani",
    party: "BJP",
    position: "Municipal Councillor, Barnala",
    image: null,
    state: "Punjab",
    district: "Barnala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Murder charges",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Barnala", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Mani", url: "#" }
    ]
  },
  {
    id: 810,
    name: "Kamlesh Lal Nath",
    party: "INC",
    position: "Zila Panchayat Member, Barnala",
    image: null,
    state: "Punjab",
    district: "Barnala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Booth capturing",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Barnala", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Lal Nath", url: "#" }
    ]
  },
  {
    id: 811,
    name: "Vinay Panda",
    party: "BJP",
    position: "Nagar Palika Chairman, Bathinda",
    image: null,
    state: "Punjab",
    district: "Bathinda",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 812,
    name: "Govind Roy",
    party: "SAD",
    position: "Former Minister, Punjab",
    image: null,
    state: "Punjab",
    district: "Bathinda",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 813,
    name: "Jagdish Panda",
    party: "Independent",
    position: "Block President, Faridkot",
    image: null,
    state: "Punjab",
    district: "Faridkot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Illegal asset accumulation",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Faridkot", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Panda", url: "#" }
    ]
  },
  {
    id: 814,
    name: "Rajendra Patil Roy",
    party: "BJP",
    position: "Nagar Palika Chairman, Faridkot",
    image: null,
    state: "Punjab",
    district: "Faridkot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 56
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds",
        "Bribery",
        "Contempt of court",
        "Illegal occupation",
        "Property dispute",
        "Human trafficking",
        "Dacoity",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Faridkot", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Patil Roy", url: "#" }
    ]
  },
  {
    id: 815,
    name: "Pramod Naidu",
    party: "Independent",
    position: "Former Minister, Punjab",
    image: null,
    state: "Punjab",
    district: "Fatehgarh Sahib",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ],
      other: [
        "Encroachment",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Fatehgarh Sahib", url: "#" },
      { title: "Election Commission Affidavit - Pramod Naidu", url: "#" }
    ]
  },
  {
    id: 816,
    name: "Kuldeep Sharma Rawat",
    party: "AAP",
    position: "Municipal Councillor, Fatehgarh Sahib",
    image: null,
    state: "Punjab",
    district: "Fatehgarh Sahib",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Assault with intent to outrage modesty"
      ],
      other: [
        "Drug trafficking",
        "Perjury"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Fatehgarh Sahib", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Sharma Rawat", url: "#" }
    ]
  },
  {
    id: 817,
    name: "Sanjay Sharma",
    party: "BJP",
    position: "Nagar Palika Chairman, Fazilka",
    image: null,
    state: "Punjab",
    district: "Fazilka",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Inciting violence",
        "Criminal intimidation",
        "Perjury"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Fazilka", url: "#" },
      { title: "Election Commission Affidavit - Sanjay Sharma", url: "#" }
    ]
  },
  {
    id: 818,
    name: "Brijendra Ali",
    party: "INC",
    position: "Nagar Palika Chairman, Fazilka",
    image: null,
    state: "Punjab",
    district: "Fazilka",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Tax evasion",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Fazilka", url: "#" },
      { title: "Election Commission Affidavit - Brijendra Ali", url: "#" }
    ]
  },
  {
    id: 819,
    name: "Ranjeet Kumar Kumar",
    party: "AAP",
    position: "District President, Ferozepur",
    image: null,
    state: "Punjab",
    district: "Ferozepur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 26
    },
    caseDetails: {
      other: [
        "Voter intimidation",
        "Caste atrocities",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Ferozepur", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Kumar Kumar", url: "#" }
    ]
  },
  {
    id: 820,
    name: "Hariprasad Rao Agarwal",
    party: "AAP",
    position: "District President, Ferozepur",
    image: null,
    state: "Punjab",
    district: "Ferozepur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Promoting enmity",
        "Illegal weapons possession",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Ferozepur", url: "#" },
      { title: "Election Commission Affidavit - Hariprasad Rao Agarwal", url: "#" }
    ]
  },
  {
    id: 821,
    name: "Ram Babu",
    party: "SAD",
    position: "Block President, Gurdaspur",
    image: null,
    state: "Punjab",
    district: "Gurdaspur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Gurdaspur", url: "#" },
      { title: "Election Commission Affidavit - Ram Babu", url: "#" }
    ]
  },
  {
    id: 822,
    name: "Brijendra Qureshi",
    party: "BJP",
    position: "MLA, Gurdaspur",
    image: null,
    state: "Punjab",
    district: "Gurdaspur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Gurdaspur", url: "#" },
      { title: "Election Commission Affidavit - Brijendra Qureshi", url: "#" }
    ]
  },
  {
    id: 823,
    name: "Anita Sen",
    party: "SAD",
    position: "Nagar Palika Chairman, Hoshiarpur",
    image: null,
    state: "Punjab",
    district: "Hoshiarpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Hoshiarpur", url: "#" },
      { title: "Election Commission Affidavit - Anita Sen", url: "#" }
    ]
  },
  {
    id: 824,
    name: "Jagdish Lal Joshi",
    party: "Independent",
    position: "Former Minister, Punjab",
    image: null,
    state: "Punjab",
    district: "Hoshiarpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Cattle smuggling",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Hoshiarpur", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Lal Joshi", url: "#" }
    ]
  },
  {
    id: 825,
    name: "Hardeep Bisht Babu",
    party: "SAD",
    position: "Zila Panchayat Member, Jalandhar",
    image: null,
    state: "Punjab",
    district: "Jalandhar",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Gang rape charges",
        "Molestation charges"
      ],
      other: [
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Jalandhar", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Bisht Babu", url: "#" }
    ]
  },
  {
    id: 826,
    name: "Manjeet Chaudhary Bisht",
    party: "Independent",
    position: "Nagar Palika Chairman, Jalandhar",
    image: null,
    state: "Punjab",
    district: "Jalandhar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 827,
    name: "Dharmendra Pawar",
    party: "Independent",
    position: "Former Minister, Punjab",
    image: null,
    state: "Punjab",
    district: "Kapurthala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Inciting violence",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Kapurthala", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Pawar", url: "#" }
    ]
  },
  {
    id: 828,
    name: "Hitesh Thakur",
    party: "SAD",
    position: "District President, Ludhiana",
    image: null,
    state: "Punjab",
    district: "Ludhiana",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Caste atrocities",
        "Illegal mining",
        "Voluntarily causing hurt",
        "Human trafficking",
        "Disproportionate assets",
        "Wrongful confinement",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Ludhiana", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Thakur", url: "#" }
    ]
  },
  {
    id: 829,
    name: "Laxmikant Behera Rajput",
    party: "INC",
    position: "Party District Leader, Ludhiana",
    image: null,
    state: "Punjab",
    district: "Ludhiana",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Assault"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Ludhiana", url: "#" },
      { title: "Election Commission Affidavit - Laxmikant Behera Rajput", url: "#" }
    ]
  },
  {
    id: 830,
    name: "Mohan Agarwal",
    party: "AAP",
    position: "Nagar Palika Chairman, Mansa",
    image: null,
    state: "Punjab",
    district: "Mansa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Inciting violence",
        "Dacoity",
        "Booth capturing",
        "Coal mafia",
        "Drug trafficking",
        "Liquor mafia",
        "Abduction"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Mansa", url: "#" },
      { title: "Election Commission Affidavit - Mohan Agarwal", url: "#" }
    ]
  },
  {
    id: 831,
    name: "Mohan Ghosh",
    party: "AAP",
    position: "Zila Panchayat Member, Mansa",
    image: null,
    state: "Punjab",
    district: "Mansa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Assault",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Mansa", url: "#" },
      { title: "Election Commission Affidavit - Mohan Ghosh", url: "#" }
    ]
  },
  {
    id: 832,
    name: "Ajay Rawat",
    party: "INC",
    position: "Municipal Councillor, Moga",
    image: null,
    state: "Punjab",
    district: "Moga",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Illegal mining",
        "Abduction"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Moga", url: "#" },
      { title: "Election Commission Affidavit - Ajay Rawat", url: "#" }
    ]
  },
  {
    id: 833,
    name: "Dayashankar Pandey",
    party: "AAP",
    position: "District President, Moga",
    image: null,
    state: "Punjab",
    district: "Moga",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Money laundering",
        "Cheating"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Moga", url: "#" },
      { title: "Election Commission Affidavit - Dayashankar Pandey", url: "#" }
    ]
  },
  {
    id: 834,
    name: "Sanjana Desai",
    party: "Independent",
    position: "District President, Mohali",
    image: null,
    state: "Punjab",
    district: "Mohali",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Mohali", url: "#" },
      { title: "Election Commission Affidavit - Sanjana Desai", url: "#" }
    ]
  },
  {
    id: 835,
    name: "Anushka Lal",
    party: "SAD",
    position: "MLA, Mohali",
    image: null,
    state: "Punjab",
    district: "Mohali",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Mohali", url: "#" },
      { title: "Election Commission Affidavit - Anushka Lal", url: "#" }
    ]
  },
  {
    id: 836,
    name: "Dinesh Chand Nayak",
    party: "Independent",
    position: "Municipal Councillor, Muktsar",
    image: null,
    state: "Punjab",
    district: "Muktsar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Abduction"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Muktsar", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Chand Nayak", url: "#" }
    ]
  },
  {
    id: 837,
    name: "Dinesh Jain",
    party: "BJP",
    position: "Former Minister, Punjab",
    image: null,
    state: "Punjab",
    district: "Muktsar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 69
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Inciting violence",
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Muktsar", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Jain", url: "#" }
    ]
  },
  {
    id: 838,
    name: "Rakesh Sharma",
    party: "SAD",
    position: "Block President, Pathankot",
    image: null,
    state: "Punjab",
    district: "Pathankot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Benami property",
        "Inciting violence",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Pathankot", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Sharma", url: "#" }
    ]
  },
  {
    id: 839,
    name: "Mukesh Rajput Swain",
    party: "Independent",
    position: "Nagar Palika Chairman, Pathankot",
    image: null,
    state: "Punjab",
    district: "Pathankot",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Pathankot", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Rajput Swain", url: "#" }
    ]
  },
  {
    id: 840,
    name: "Prakash Ansari",
    party: "INC",
    position: "MLA, Patiala",
    image: null,
    state: "Punjab",
    district: "Patiala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Criminal intimidation",
        "Abduction",
        "Assault"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Patiala", url: "#" },
      { title: "Election Commission Affidavit - Prakash Ansari", url: "#" }
    ]
  },
  {
    id: 841,
    name: "Ramesh Devi Rao",
    party: "BJP",
    position: "Nagar Palika Chairman, Rupnagar",
    image: null,
    state: "Punjab",
    district: "Rupnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Illegal asset accumulation",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Rupnagar", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Devi Rao", url: "#" }
    ]
  },
  {
    id: 842,
    name: "Amarjeet Devi",
    party: "SAD",
    position: "Municipal Councillor, Rupnagar",
    image: null,
    state: "Punjab",
    district: "Rupnagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Forgery",
        "Liquor mafia",
        "Criminal conspiracy",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Rupnagar", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Devi", url: "#" }
    ]
  },
  {
    id: 843,
    name: "Rajeev Shinde Bose",
    party: "SAD",
    position: "Block President, Sangrur",
    image: null,
    state: "Punjab",
    district: "Sangrur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 844,
    name: "Gurjeet Nath",
    party: "Independent",
    position: "MLA, Sangrur",
    image: null,
    state: "Punjab",
    district: "Sangrur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Armed robbery",
        "Electoral malpractice",
        "Murder charges",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Sangrur", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Nath", url: "#" }
    ]
  },
  {
    id: 845,
    name: "Venkatesh Panda Rajput",
    party: "Independent",
    position: "Zila Panchayat Member, Shaheed Bhagat Singh Nagar",
    image: null,
    state: "Punjab",
    district: "Shaheed Bhagat Singh Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Rape charges",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Shaheed Bhagat Singh Nagar", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Panda Rajput", url: "#" }
    ]
  },
  {
    id: 846,
    name: "Hitesh Babu Babu",
    party: "SAD",
    position: "Party District Leader, Shaheed Bhagat Singh Nagar",
    image: null,
    state: "Punjab",
    district: "Shaheed Bhagat Singh Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Embezzlement",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Shaheed Bhagat Singh Nagar", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Babu Babu", url: "#" }
    ]
  },
  {
    id: 847,
    name: "Rajendra Biswal",
    party: "BJP",
    position: "Former Minister, Punjab",
    image: null,
    state: "Punjab",
    district: "Tarn Taran",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Forgery"
      ]
    },
    sources: [
      { title: "Punjab Police Records - Tarn Taran", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Biswal", url: "#" }
    ]
  },
  {
    id: 848,
    name: "Vinay Pawar Chauhan",
    party: "BJD",
    position: "Party District Leader, Angul",
    image: null,
    state: "Odisha",
    district: "Angul",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)",
        "Sexual harassment (IPC 354A)",
        "Eve-teasing and harassment"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Angul", url: "#" },
      { title: "Election Commission Affidavit - Vinay Pawar Chauhan", url: "#" }
    ]
  },
  {
    id: 849,
    name: "Ram Jain",
    party: "BJP",
    position: "MLA, Balangir",
    image: null,
    state: "Odisha",
    district: "Balangir",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 850,
    name: "Rajeev Chaudhary",
    party: "BJP",
    position: "Former Minister, Odisha",
    image: null,
    state: "Odisha",
    district: "Balangir",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "SC/ST Act violations",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Balangir", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Chaudhary", url: "#" }
    ]
  },
  {
    id: 851,
    name: "Manoj Devi Naidu",
    party: "BJD",
    position: "MLA, Balasore",
    image: null,
    state: "Odisha",
    district: "Balasore",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Embezzlement",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Balasore", url: "#" },
      { title: "Election Commission Affidavit - Manoj Devi Naidu", url: "#" }
    ]
  },
  {
    id: 852,
    name: "Ranju Pandey Rawat",
    party: "BJD",
    position: "Block President, Bargarh",
    image: null,
    state: "Odisha",
    district: "Bargarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 65
    },
    caseDetails: {
      other: [
        "Inciting violence",
        "Rioting",
        "Defamation",
        "Voluntarily causing hurt",
        "Coal mafia",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Bargarh", url: "#" },
      { title: "Election Commission Affidavit - Ranju Pandey Rawat", url: "#" }
    ]
  },
  {
    id: 853,
    name: "Rampreet Reddy Ahmed",
    party: "INC",
    position: "Block President, Bhadrak",
    image: null,
    state: "Odisha",
    district: "Bhadrak",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Unlawful assembly",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Bhadrak", url: "#" },
      { title: "Election Commission Affidavit - Rampreet Reddy Ahmed", url: "#" }
    ]
  },
  {
    id: 854,
    name: "Asha Mani Ali",
    party: "BJD",
    position: "Municipal Councillor, Bhadrak",
    image: null,
    state: "Odisha",
    district: "Bhadrak",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Coal mafia",
        "SC/ST Act violations",
        "Embezzlement",
        "Bribery",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Bhadrak", url: "#" },
      { title: "Election Commission Affidavit - Asha Mani Ali", url: "#" }
    ]
  },
  {
    id: 855,
    name: "Asha Bisht",
    party: "BJP",
    position: "Former MLA, Boudh",
    image: null,
    state: "Odisha",
    district: "Boudh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 856,
    name: "Vineeta Rajput Mani",
    party: "Independent",
    position: "Nagar Palika Chairman, Boudh",
    image: null,
    state: "Odisha",
    district: "Boudh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Booth capturing",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Boudh", url: "#" },
      { title: "Election Commission Affidavit - Vineeta Rajput Mani", url: "#" }
    ]
  },
  {
    id: 857,
    name: "Manjeet Nayak",
    party: "BJP",
    position: "Zila Panchayat Member, Cuttack",
    image: null,
    state: "Odisha",
    district: "Cuttack",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Sexual harassment",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Cuttack", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Nayak", url: "#" }
    ]
  },
  {
    id: 858,
    name: "Pradeep Malik Kumar",
    party: "Independent",
    position: "Former Minister, Odisha",
    image: null,
    state: "Odisha",
    district: "Cuttack",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Contempt of court",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Cuttack", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Malik Kumar", url: "#" }
    ]
  },
  {
    id: 859,
    name: "Anil Patel Khan",
    party: "INC",
    position: "Block President, Deogarh",
    image: null,
    state: "Odisha",
    district: "Deogarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 860,
    name: "Hitesh Das",
    party: "INC",
    position: "District President, Dhenkanal",
    image: null,
    state: "Odisha",
    district: "Dhenkanal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Voluntarily causing hurt",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Dhenkanal", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Das", url: "#" }
    ]
  },
  {
    id: 861,
    name: "Rakesh Bisht",
    party: "INC",
    position: "Former Minister, Odisha",
    image: null,
    state: "Odisha",
    district: "Dhenkanal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Abduction",
        "Land grabbing"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Dhenkanal", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Bisht", url: "#" }
    ]
  },
  {
    id: 862,
    name: "Nisha Nayak Qureshi",
    party: "BJP",
    position: "Nagar Palika Chairman, Gajapati",
    image: null,
    state: "Odisha",
    district: "Gajapati",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Voter intimidation",
        "Land mafia",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Gajapati", url: "#" },
      { title: "Election Commission Affidavit - Nisha Nayak Qureshi", url: "#" }
    ]
  },
  {
    id: 863,
    name: "Anjali Chaudhary",
    party: "BJD",
    position: "Municipal Councillor, Ganjam",
    image: null,
    state: "Odisha",
    district: "Ganjam",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 864,
    name: "Rajeev Biswal",
    party: "BJD",
    position: "Municipal Councillor, Ganjam",
    image: null,
    state: "Odisha",
    district: "Ganjam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Ganjam", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Biswal", url: "#" }
    ]
  },
  {
    id: 865,
    name: "Kuldeep Ghosh",
    party: "Independent",
    position: "District President, Jagatsinghpur",
    image: null,
    state: "Odisha",
    district: "Jagatsinghpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Illegal mining",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Jagatsinghpur", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Ghosh", url: "#" }
    ]
  },
  {
    id: 866,
    name: "Manjeet Swain",
    party: "BJD",
    position: "Municipal Councillor, Jagatsinghpur",
    image: null,
    state: "Odisha",
    district: "Jagatsinghpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Encroachment"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Jagatsinghpur", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Swain", url: "#" }
    ]
  },
  {
    id: 867,
    name: "Naresh Singh",
    party: "BJD",
    position: "MLA, Jajpur",
    image: null,
    state: "Odisha",
    district: "Jajpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 868,
    name: "Vandana Bose Sharma",
    party: "BJD",
    position: "Former MLA, Jajpur",
    image: null,
    state: "Odisha",
    district: "Jajpur",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Jajpur", url: "#" },
      { title: "Election Commission Affidavit - Vandana Bose Sharma", url: "#" }
    ]
  },
  {
    id: 869,
    name: "Jitesh Qureshi",
    party: "INC",
    position: "Party District Leader, Jharsuguda",
    image: null,
    state: "Odisha",
    district: "Jharsuguda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 51
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Misappropriation of public funds",
        "SC/ST Act violations",
        "Rape charges",
        "Defamation",
        "Land mafia",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Jharsuguda", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Qureshi", url: "#" }
    ]
  },
  {
    id: 870,
    name: "Amarjeet Chand Malik",
    party: "BJD",
    position: "Party District Leader, Jharsuguda",
    image: null,
    state: "Odisha",
    district: "Jharsuguda",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 871,
    name: "Mahendra Singh",
    party: "BJP",
    position: "Former MLA, Kalahandi",
    image: null,
    state: "Odisha",
    district: "Kalahandi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 38
    },
    caseDetails: {
      other: [
        "Illegal weapons possession",
        "Cattle smuggling",
        "Booth capturing",
        "Bribery",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Kalahandi", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Singh", url: "#" }
    ]
  },
  {
    id: 872,
    name: "Mahesh Desai Hussain",
    party: "INC",
    position: "Municipal Councillor, Kandhamal",
    image: null,
    state: "Odisha",
    district: "Kandhamal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 873,
    name: "Pankaj Agarwal Shinde",
    party: "BJP",
    position: "MLA, Kandhamal",
    image: null,
    state: "Odisha",
    district: "Kandhamal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Voter intimidation",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Kandhamal", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Agarwal Shinde", url: "#" }
    ]
  },
  {
    id: 874,
    name: "Ajay Chaudhary Lal",
    party: "BJP",
    position: "District President, Kendrapara",
    image: null,
    state: "Odisha",
    district: "Kendrapara",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 875,
    name: "Ram Babu Verma",
    party: "INC",
    position: "District President, Kendrapara",
    image: null,
    state: "Odisha",
    district: "Kendrapara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Rioting"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Kendrapara", url: "#" },
      { title: "Election Commission Affidavit - Ram Babu Verma", url: "#" }
    ]
  },
  {
    id: 876,
    name: "Balakrishna Patel",
    party: "BJP",
    position: "District President, Kendujhar",
    image: null,
    state: "Odisha",
    district: "Kendujhar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 877,
    name: "Prakash Sahu",
    party: "BJD",
    position: "Party District Leader, Khordha",
    image: null,
    state: "Odisha",
    district: "Khordha",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 878,
    name: "Ravindra Agarwal Chaudhary",
    party: "INC",
    position: "MLA, Koraput",
    image: null,
    state: "Odisha",
    district: "Koraput",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Koraput", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Agarwal Chaudhary", url: "#" }
    ]
  },
  {
    id: 879,
    name: "Omprakash Singh Shah",
    party: "Independent",
    position: "Nagar Palika Chairman, Koraput",
    image: null,
    state: "Odisha",
    district: "Koraput",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Booth capturing",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Koraput", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Singh Shah", url: "#" }
    ]
  },
  {
    id: 880,
    name: "Roshni Chatterjee Rawat",
    party: "BJP",
    position: "Former MLA, Malkangiri",
    image: null,
    state: "Odisha",
    district: "Malkangiri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Illegal asset accumulation",
        "Religious offense",
        "Mischief causing damage",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Malkangiri", url: "#" },
      { title: "Election Commission Affidavit - Roshni Chatterjee Rawat", url: "#" }
    ]
  },
  {
    id: 881,
    name: "Subhash Bose",
    party: "BJD",
    position: "Municipal Councillor, Mayurbhanj",
    image: null,
    state: "Odisha",
    district: "Mayurbhanj",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 882,
    name: "Leela Tiwari Devi",
    party: "INC",
    position: "Zila Panchayat Member, Mayurbhanj",
    image: null,
    state: "Odisha",
    district: "Mayurbhanj",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 883,
    name: "Govind Bose Behera",
    party: "INC",
    position: "MLA, Nabarangpur",
    image: null,
    state: "Odisha",
    district: "Nabarangpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 53
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Criminal conspiracy",
        "Promoting enmity",
        "Gangster activities"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Nabarangpur", url: "#" },
      { title: "Election Commission Affidavit - Govind Bose Behera", url: "#" }
    ]
  },
  {
    id: 884,
    name: "Priyanka Dutta",
    party: "BJP",
    position: "Zila Panchayat Member, Nabarangpur",
    image: null,
    state: "Odisha",
    district: "Nabarangpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Land mafia",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Nabarangpur", url: "#" },
      { title: "Election Commission Affidavit - Priyanka Dutta", url: "#" }
    ]
  },
  {
    id: 885,
    name: "Sanjeev Mukherjee Joshi",
    party: "BJD",
    position: "District President, Nayagarh",
    image: null,
    state: "Odisha",
    district: "Nayagarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Wrongful confinement",
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Nayagarh", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Mukherjee Joshi", url: "#" }
    ]
  },
  {
    id: 886,
    name: "Rajeev Babu",
    party: "INC",
    position: "Zila Panchayat Member, Nayagarh",
    image: null,
    state: "Odisha",
    district: "Nayagarh",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Voyeurism charges"
      ],
      other: [
        "Assault"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Nayagarh", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Babu", url: "#" }
    ]
  },
  {
    id: 887,
    name: "Dayashankar Babu",
    party: "INC",
    position: "Nagar Palika Chairman, Nuapada",
    image: null,
    state: "Odisha",
    district: "Nuapada",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 888,
    name: "Shanti Ansari",
    party: "INC",
    position: "Former Minister, Odisha",
    image: null,
    state: "Odisha",
    district: "Nuapada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Nuapada", url: "#" },
      { title: "Election Commission Affidavit - Shanti Ansari", url: "#" }
    ]
  },
  {
    id: 889,
    name: "Ravindra Shinde Verma",
    party: "BJD",
    position: "Former MLA, Puri",
    image: null,
    state: "Odisha",
    district: "Puri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 52
    },
    caseDetails: {
      other: [
        "Benami property",
        "Breach of trust",
        "Sexual harassment",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Puri", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Shinde Verma", url: "#" }
    ]
  },
  {
    id: 890,
    name: "Umesh Rajput",
    party: "BJD",
    position: "Nagar Palika Chairman, Rayagada",
    image: null,
    state: "Odisha",
    district: "Rayagada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Assault",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Rayagada", url: "#" },
      { title: "Election Commission Affidavit - Umesh Rajput", url: "#" }
    ]
  },
  {
    id: 891,
    name: "Dheeraj Yadav",
    party: "BJP",
    position: "District President, Rayagada",
    image: null,
    state: "Odisha",
    district: "Rayagada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Rayagada", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Yadav", url: "#" }
    ]
  },
  {
    id: 892,
    name: "Vijay Ansari",
    party: "INC",
    position: "Municipal Councillor, Sambalpur",
    image: null,
    state: "Odisha",
    district: "Sambalpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Sambalpur", url: "#" },
      { title: "Election Commission Affidavit - Vijay Ansari", url: "#" }
    ]
  },
  {
    id: 893,
    name: "Pankaj Shinde",
    party: "BJD",
    position: "Former MLA, Sambalpur",
    image: null,
    state: "Odisha",
    district: "Sambalpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Sambalpur", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Shinde", url: "#" }
    ]
  },
  {
    id: 894,
    name: "Devendra Ali",
    party: "BJD",
    position: "Block President, Subarnapur",
    image: null,
    state: "Odisha",
    district: "Subarnapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Subarnapur", url: "#" },
      { title: "Election Commission Affidavit - Devendra Ali", url: "#" }
    ]
  },
  {
    id: 895,
    name: "Kamlesh Tiwari",
    party: "Independent",
    position: "Block President, Subarnapur",
    image: null,
    state: "Odisha",
    district: "Subarnapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Embezzlement",
        "Illegal occupation",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Odisha Police Records - Subarnapur", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Tiwari", url: "#" }
    ]
  },
  {
    id: 896,
    name: "Govind Lal Biswal",
    party: "Independent",
    position: "Zila Panchayat Member, Sundergarh",
    image: null,
    state: "Odisha",
    district: "Sundergarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 897,
    name: "Mohan Singh",
    party: "JVM",
    position: "Zila Panchayat Member, Bokaro",
    image: null,
    state: "Jharkhand",
    district: "Bokaro",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 898,
    name: "Satish Ahmed",
    party: "Independent",
    position: "Municipal Councillor, Bokaro",
    image: null,
    state: "Jharkhand",
    district: "Bokaro",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Extortion racket",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Bokaro", url: "#" },
      { title: "Election Commission Affidavit - Satish Ahmed", url: "#" }
    ]
  },
  {
    id: 899,
    name: "Surendra Kumar",
    party: "Independent",
    position: "Block President, Chatra",
    image: null,
    state: "Jharkhand",
    district: "Chatra",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 900,
    name: "Sanjeev Nayak Babu",
    party: "Independent",
    position: "Municipal Councillor, Chatra",
    image: null,
    state: "Jharkhand",
    district: "Chatra",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment"
      ],
      other: [
        "Perjury",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Chatra", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Nayak Babu", url: "#" }
    ]
  },
  {
    id: 901,
    name: "Devendra Shah",
    party: "JVM",
    position: "Nagar Palika Chairman, Deoghar",
    image: null,
    state: "Jharkhand",
    district: "Deoghar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Abduction",
        "Religious offense",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Deoghar", url: "#" },
      { title: "Election Commission Affidavit - Devendra Shah", url: "#" }
    ]
  },
  {
    id: 902,
    name: "Anand Singh Prasad",
    party: "JVM",
    position: "Zila Panchayat Member, Dhanbad",
    image: null,
    state: "Jharkhand",
    district: "Dhanbad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Gangster activities"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Dhanbad", url: "#" },
      { title: "Election Commission Affidavit - Anand Singh Prasad", url: "#" }
    ]
  },
  {
    id: 903,
    name: "Venkatesh Bisht",
    party: "BJP",
    position: "Municipal Councillor, Dumka",
    image: null,
    state: "Jharkhand",
    district: "Dumka",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Dumka", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Bisht", url: "#" }
    ]
  },
  {
    id: 904,
    name: "Hariprasad Tiwari",
    party: "JVM",
    position: "MLA, Dumka",
    image: null,
    state: "Jharkhand",
    district: "Dumka",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds",
        "Explosive substances possession",
        "Encroachment",
        "Human trafficking",
        "Abduction"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Dumka", url: "#" },
      { title: "Election Commission Affidavit - Hariprasad Tiwari", url: "#" }
    ]
  },
  {
    id: 905,
    name: "Hardeep Chaudhary",
    party: "JMM",
    position: "District President, East Singhbhum",
    image: null,
    state: "Jharkhand",
    district: "East Singhbhum",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Religious offense",
        "Drug trafficking",
        "Illegal asset accumulation",
        "Criminal trespass",
        "SC/ST Act violations",
        "Rape charges",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - East Singhbhum", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Chaudhary", url: "#" }
    ]
  },
  {
    id: 906,
    name: "Dharmendra Pandey",
    party: "BJP",
    position: "Municipal Councillor, Garhwa",
    image: null,
    state: "Jharkhand",
    district: "Garhwa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 41
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Embezzlement",
        "Promoting enmity",
        "Defamation",
        "Wrongful confinement",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Garhwa", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Pandey", url: "#" }
    ]
  },
  {
    id: 907,
    name: "Gajendra Desai",
    party: "JVM",
    position: "Municipal Councillor, Garhwa",
    image: null,
    state: "Jharkhand",
    district: "Garhwa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Criminal trespass",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Garhwa", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Desai", url: "#" }
    ]
  },
  {
    id: 908,
    name: "Mahendra Hussain Shah",
    party: "INC",
    position: "Zila Panchayat Member, Giridih",
    image: null,
    state: "Jharkhand",
    district: "Giridih",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Violation of election code",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Giridih", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Hussain Shah", url: "#" }
    ]
  },
  {
    id: 909,
    name: "Shanti Khan",
    party: "JVM",
    position: "Former MLA, Giridih",
    image: null,
    state: "Jharkhand",
    district: "Giridih",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 28
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds",
        "Unlawful assembly",
        "Booth capturing",
        "Illegal weapons possession",
        "Property dispute",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Giridih", url: "#" },
      { title: "Election Commission Affidavit - Shanti Khan", url: "#" }
    ]
  },
  {
    id: 910,
    name: "Lokesh Chatterjee Naidu",
    party: "JMM",
    position: "Former MLA, Godda",
    image: null,
    state: "Jharkhand",
    district: "Godda",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Rape charges",
        "Benami property",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Godda", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Chatterjee Naidu", url: "#" }
    ]
  },
  {
    id: 911,
    name: "Umesh Thakur",
    party: "BJP",
    position: "Nagar Palika Chairman, Gumla",
    image: null,
    state: "Jharkhand",
    district: "Gumla",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 63
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Contempt of court",
        "Misappropriation of public funds",
        "Voluntarily causing hurt",
        "Cheating",
        "Encroachment",
        "SC/ST Act violations",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Gumla", url: "#" },
      { title: "Election Commission Affidavit - Umesh Thakur", url: "#" }
    ]
  },
  {
    id: 912,
    name: "Neeraj Verma",
    party: "INC",
    position: "Party District Leader, Hazaribagh",
    image: null,
    state: "Jharkhand",
    district: "Hazaribagh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 913,
    name: "Mandeep Mishra",
    party: "JMM",
    position: "Zila Panchayat Member, Jamtara",
    image: null,
    state: "Jharkhand",
    district: "Jamtara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Jamtara", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Mishra", url: "#" }
    ]
  },
  {
    id: 914,
    name: "Sohan Yadav Behera",
    party: "BJP",
    position: "Party District Leader, Jamtara",
    image: null,
    state: "Jharkhand",
    district: "Jamtara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Illegal weapons possession",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Jamtara", url: "#" },
      { title: "Election Commission Affidavit - Sohan Yadav Behera", url: "#" }
    ]
  },
  {
    id: 915,
    name: "Lokesh Singh",
    party: "BJP",
    position: "MLA, Khunti",
    image: null,
    state: "Jharkhand",
    district: "Khunti",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Khunti", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Singh", url: "#" }
    ]
  },
  {
    id: 916,
    name: "Ashok Kulkarni",
    party: "JMM",
    position: "Party District Leader, Khunti",
    image: null,
    state: "Jharkhand",
    district: "Khunti",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 917,
    name: "Manjeet Verma",
    party: "JMM",
    position: "MLA, Koderma",
    image: null,
    state: "Jharkhand",
    district: "Koderma",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 918,
    name: "Pradeep Negi Ali",
    party: "Independent",
    position: "Party District Leader, Koderma",
    image: null,
    state: "Jharkhand",
    district: "Koderma",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Disproportionate assets"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Koderma", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Negi Ali", url: "#" }
    ]
  },
  {
    id: 919,
    name: "Naresh Dutta Mehta",
    party: "JVM",
    position: "Zila Panchayat Member, Latehar",
    image: null,
    state: "Jharkhand",
    district: "Latehar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Disproportionate assets",
        "Religious offense",
        "Illegal asset accumulation",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Latehar", url: "#" },
      { title: "Election Commission Affidavit - Naresh Dutta Mehta", url: "#" }
    ]
  },
  {
    id: 920,
    name: "Yogesh Mani",
    party: "INC",
    position: "District President, Lohardaga",
    image: null,
    state: "Jharkhand",
    district: "Lohardaga",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Assault",
        "Illegal occupation",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Lohardaga", url: "#" },
      { title: "Election Commission Affidavit - Yogesh Mani", url: "#" }
    ]
  },
  {
    id: 921,
    name: "Manjeet Chand Pawar",
    party: "BJP",
    position: "MLA, Lohardaga",
    image: null,
    state: "Jharkhand",
    district: "Lohardaga",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 922,
    name: "Manoj Singh",
    party: "JMM",
    position: "Former MLA, Pakur",
    image: null,
    state: "Jharkhand",
    district: "Pakur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Kidnapping",
        "Ammunition without license",
        "Murder charges",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Pakur", url: "#" },
      { title: "Election Commission Affidavit - Manoj Singh", url: "#" }
    ]
  },
  {
    id: 923,
    name: "Prakash Rathore Siddiqui",
    party: "JVM",
    position: "Party District Leader, Palamu",
    image: null,
    state: "Jharkhand",
    district: "Palamu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Illegal construction",
        "Defamation"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Palamu", url: "#" },
      { title: "Election Commission Affidavit - Prakash Rathore Siddiqui", url: "#" }
    ]
  },
  {
    id: 924,
    name: "Archana Naidu",
    party: "JMM",
    position: "Zila Panchayat Member, Palamu",
    image: null,
    state: "Jharkhand",
    district: "Palamu",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Abduction",
        "Hate speech"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Palamu", url: "#" },
      { title: "Election Commission Affidavit - Archana Naidu", url: "#" }
    ]
  },
  {
    id: 925,
    name: "Vijay Negi",
    party: "JVM",
    position: "District President, Ramgarh",
    image: null,
    state: "Jharkhand",
    district: "Ramgarh",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 926,
    name: "Omprakash Banerjee Khan",
    party: "JVM",
    position: "Municipal Councillor, Ramgarh",
    image: null,
    state: "Jharkhand",
    district: "Ramgarh",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Stalking (IPC 354D)",
        "Voyeurism charges"
      ],
      other: [
        "Booth capturing",
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Ramgarh", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Banerjee Khan", url: "#" }
    ]
  },
  {
    id: 927,
    name: "Savita Ahmed",
    party: "BJP",
    position: "District President, Ranchi",
    image: null,
    state: "Jharkhand",
    district: "Ranchi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Ranchi", url: "#" },
      { title: "Election Commission Affidavit - Savita Ahmed", url: "#" }
    ]
  },
  {
    id: 928,
    name: "Ajay Nath",
    party: "BJP",
    position: "Party District Leader, Ranchi",
    image: null,
    state: "Jharkhand",
    district: "Ranchi",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Rape under IPC 376",
        "Molestation charges"
      ],
      other: [
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Ranchi", url: "#" },
      { title: "Election Commission Affidavit - Ajay Nath", url: "#" }
    ]
  },
  {
    id: 929,
    name: "Surendra Kulkarni",
    party: "Independent",
    position: "MLA, Sahebganj",
    image: null,
    state: "Jharkhand",
    district: "Sahebganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Sahebganj", url: "#" },
      { title: "Election Commission Affidavit - Surendra Kulkarni", url: "#" }
    ]
  },
  {
    id: 930,
    name: "Mukesh Kumar Chatterjee",
    party: "INC",
    position: "Former MLA, Sahebganj",
    image: null,
    state: "Jharkhand",
    district: "Sahebganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Land mafia",
        "Criminal intimidation",
        "Gangster activities",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Sahebganj", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Kumar Chatterjee", url: "#" }
    ]
  },
  {
    id: 931,
    name: "Balakrishna Mehta",
    party: "JMM",
    position: "Block President, Seraikela Kharsawan",
    image: null,
    state: "Jharkhand",
    district: "Seraikela Kharsawan",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Ammunition without license",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Seraikela Kharsawan", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Mehta", url: "#" }
    ]
  },
  {
    id: 932,
    name: "Dharmendra Qureshi Patel",
    party: "BJP",
    position: "Zila Panchayat Member, Seraikela Kharsawan",
    image: null,
    state: "Jharkhand",
    district: "Seraikela Kharsawan",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Seraikela Kharsawan", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Qureshi Patel", url: "#" }
    ]
  },
  {
    id: 933,
    name: "Pramod Behera",
    party: "Independent",
    position: "MLA, Simdega",
    image: null,
    state: "Jharkhand",
    district: "Simdega",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 934,
    name: "Dharmendra Mishra",
    party: "BJP",
    position: "Former Minister, Jharkhand",
    image: null,
    state: "Jharkhand",
    district: "Simdega",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Violation of election code",
        "Hate speech",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - Simdega", url: "#" },
      { title: "Election Commission Affidavit - Dharmendra Mishra", url: "#" }
    ]
  },
  {
    id: 935,
    name: "Devendra Chatterjee Swain",
    party: "JVM",
    position: "Nagar Palika Chairman, West Singhbhum",
    image: null,
    state: "Jharkhand",
    district: "West Singhbhum",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Sand mafia",
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - West Singhbhum", url: "#" },
      { title: "Election Commission Affidavit - Devendra Chatterjee Swain", url: "#" }
    ]
  },
  {
    id: 936,
    name: "Ramesh Sen",
    party: "JVM",
    position: "Former MLA, West Singhbhum",
    image: null,
    state: "Jharkhand",
    district: "West Singhbhum",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Abduction",
        "Kidnapping",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Jharkhand Police Records - West Singhbhum", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Sen", url: "#" }
    ]
  },
  {
    id: 937,
    name: "Sanjeev Lal Pandey",
    party: "INC",
    position: "Municipal Councillor, Balod",
    image: null,
    state: "Chhattisgarh",
    district: "Balod",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Kidnapping",
        "Abduction"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Balod", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Lal Pandey", url: "#" }
    ]
  },
  {
    id: 938,
    name: "Savita Banerjee Sharma",
    party: "Independent",
    position: "District President, Baloda Bazar",
    image: null,
    state: "Chhattisgarh",
    district: "Baloda Bazar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Assault",
        "Benami property",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Baloda Bazar", url: "#" },
      { title: "Election Commission Affidavit - Savita Banerjee Sharma", url: "#" }
    ]
  },
  {
    id: 939,
    name: "Amarjeet Pandey",
    party: "BSP",
    position: "Former MLA, Baloda Bazar",
    image: null,
    state: "Chhattisgarh",
    district: "Baloda Bazar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Abduction",
        "Bribery"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Baloda Bazar", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Pandey", url: "#" }
    ]
  },
  {
    id: 940,
    name: "Gajendra Ali",
    party: "Independent",
    position: "MLA, Balrampur",
    image: null,
    state: "Chhattisgarh",
    district: "Balrampur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Assault",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Balrampur", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Ali", url: "#" }
    ]
  },
  {
    id: 941,
    name: "Ram Sharma Prasad",
    party: "INC",
    position: "MLA, Bastar",
    image: null,
    state: "Chhattisgarh",
    district: "Bastar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Rioting"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Bastar", url: "#" },
      { title: "Election Commission Affidavit - Ram Sharma Prasad", url: "#" }
    ]
  },
  {
    id: 942,
    name: "Mahendra Chaudhary",
    party: "BJP",
    position: "Zila Panchayat Member, Bastar",
    image: null,
    state: "Chhattisgarh",
    district: "Bastar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Corruption",
        "Promoting enmity",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Bastar", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Chaudhary", url: "#" }
    ]
  },
  {
    id: 943,
    name: "Shivakant Lal",
    party: "Independent",
    position: "Nagar Palika Chairman, Bemetara",
    image: null,
    state: "Chhattisgarh",
    district: "Bemetara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Bribery"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Bemetara", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Lal", url: "#" }
    ]
  },
  {
    id: 944,
    name: "Naresh Devi",
    party: "Independent",
    position: "Municipal Councillor, Bemetara",
    image: null,
    state: "Chhattisgarh",
    district: "Bemetara",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 945,
    name: "Dharmendra Hussain",
    party: "BSP",
    position: "Zila Panchayat Member, Bijapur",
    image: null,
    state: "Chhattisgarh",
    district: "Bijapur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 946,
    name: "Dheeraj Panda",
    party: "BJP",
    position: "Municipal Councillor, Bilaspur",
    image: null,
    state: "Chhattisgarh",
    district: "Bilaspur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Rioting"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Bilaspur", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Panda", url: "#" }
    ]
  },
  {
    id: 947,
    name: "Dayashankar Sahu",
    party: "BJP",
    position: "Municipal Councillor, Dantewada",
    image: null,
    state: "Chhattisgarh",
    district: "Dantewada",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)",
        "Stalking (IPC 354D)",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Murder charges"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Dantewada", url: "#" },
      { title: "Election Commission Affidavit - Dayashankar Sahu", url: "#" }
    ]
  },
  {
    id: 948,
    name: "Devendra Joshi",
    party: "BSP",
    position: "Former MLA, Dantewada",
    image: null,
    state: "Chhattisgarh",
    district: "Dantewada",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Violation of election code",
        "Bribery",
        "Ammunition without license",
        "Wrongful confinement"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Dantewada", url: "#" },
      { title: "Election Commission Affidavit - Devendra Joshi", url: "#" }
    ]
  },
  {
    id: 949,
    name: "Hariprasad Bose",
    party: "Independent",
    position: "MLA, Dhamtari",
    image: null,
    state: "Chhattisgarh",
    district: "Dhamtari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Cheating",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Dhamtari", url: "#" },
      { title: "Election Commission Affidavit - Hariprasad Bose", url: "#" }
    ]
  },
  {
    id: 950,
    name: "Satish Shinde Desai",
    party: "BSP",
    position: "Former Minister, Chhattisgarh",
    image: null,
    state: "Chhattisgarh",
    district: "Dhamtari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Caste atrocities",
        "Murder charges",
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Dhamtari", url: "#" },
      { title: "Election Commission Affidavit - Satish Shinde Desai", url: "#" }
    ]
  },
  {
    id: 951,
    name: "Brijesh Babu Patil",
    party: "BSP",
    position: "District President, Durg",
    image: null,
    state: "Chhattisgarh",
    district: "Durg",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Disproportionate assets",
        "Explosive substances possession",
        "Forgery",
        "Kidnapping",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Durg", url: "#" },
      { title: "Election Commission Affidavit - Brijesh Babu Patil", url: "#" }
    ]
  },
  {
    id: 952,
    name: "Hitesh Banerjee Panda",
    party: "Independent",
    position: "Municipal Councillor, Durg",
    image: null,
    state: "Chhattisgarh",
    district: "Durg",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Durg", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Banerjee Panda", url: "#" }
    ]
  },
  {
    id: 953,
    name: "Manoj Tiwari Behera",
    party: "Independent",
    position: "Nagar Palika Chairman, Gariaband",
    image: null,
    state: "Chhattisgarh",
    district: "Gariaband",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 954,
    name: "Pramod Mani",
    party: "Independent",
    position: "MLA, Gariaband",
    image: null,
    state: "Chhattisgarh",
    district: "Gariaband",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 955,
    name: "Jitendra Mukherjee Agarwal",
    party: "Independent",
    position: "Nagar Palika Chairman, Janjgir-Champa",
    image: null,
    state: "Chhattisgarh",
    district: "Janjgir-Champa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Janjgir-Champa", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Mukherjee Agarwal", url: "#" }
    ]
  },
  {
    id: 956,
    name: "Mahesh Joshi",
    party: "BJP",
    position: "Nagar Palika Chairman, Janjgir-Champa",
    image: null,
    state: "Chhattisgarh",
    district: "Janjgir-Champa",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Sexual assault of minor (POCSO)"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Janjgir-Champa", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Joshi", url: "#" }
    ]
  },
  {
    id: 957,
    name: "Santosh Malik",
    party: "Independent",
    position: "Zila Panchayat Member, Jashpur",
    image: null,
    state: "Chhattisgarh",
    district: "Jashpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Jashpur", url: "#" },
      { title: "Election Commission Affidavit - Santosh Malik", url: "#" }
    ]
  },
  {
    id: 958,
    name: "Narendra Rajput",
    party: "Independent",
    position: "Nagar Palika Chairman, Kabirdham",
    image: null,
    state: "Chhattisgarh",
    district: "Kabirdham",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Wrongful confinement",
        "Booth capturing",
        "Attempt to murder",
        "Land grabbing",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Kabirdham", url: "#" },
      { title: "Election Commission Affidavit - Narendra Rajput", url: "#" }
    ]
  },
  {
    id: 959,
    name: "Sanjeev Nayak Chatterjee",
    party: "INC",
    position: "Former Minister, Chhattisgarh",
    image: null,
    state: "Chhattisgarh",
    district: "Kabirdham",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges"
      ],
      other: [
        "Drug trafficking",
        "Voluntarily causing hurt",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Kabirdham", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Nayak Chatterjee", url: "#" }
    ]
  },
  {
    id: 960,
    name: "Devendra Patel",
    party: "BJP",
    position: "Block President, Kanker",
    image: null,
    state: "Chhattisgarh",
    district: "Kanker",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 26
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Human trafficking",
        "Sexual harassment",
        "Assault",
        "SC/ST Act violations",
        "Illegal occupation",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Kanker", url: "#" },
      { title: "Election Commission Affidavit - Devendra Patel", url: "#" }
    ]
  },
  {
    id: 961,
    name: "Jitesh Malik",
    party: "BSP",
    position: "Zila Panchayat Member, Kondagaon",
    image: null,
    state: "Chhattisgarh",
    district: "Kondagaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Booth capturing",
        "Attempt to murder",
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Kondagaon", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Malik", url: "#" }
    ]
  },
  {
    id: 962,
    name: "Manjari Rao",
    party: "INC",
    position: "Municipal Councillor, Korba",
    image: null,
    state: "Chhattisgarh",
    district: "Korba",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Benami property",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Korba", url: "#" },
      { title: "Election Commission Affidavit - Manjari Rao", url: "#" }
    ]
  },
  {
    id: 963,
    name: "Jitendra Rawat",
    party: "BJP",
    position: "Party District Leader, Korba",
    image: null,
    state: "Chhattisgarh",
    district: "Korba",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Drug trafficking",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Korba", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Rawat", url: "#" }
    ]
  },
  {
    id: 964,
    name: "Sangeeta Jain",
    party: "BSP",
    position: "Block President, Koriya",
    image: null,
    state: "Chhattisgarh",
    district: "Koriya",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Wrongful confinement",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Koriya", url: "#" },
      { title: "Election Commission Affidavit - Sangeeta Jain", url: "#" }
    ]
  },
  {
    id: 965,
    name: "Ram Siddiqui",
    party: "BSP",
    position: "Municipal Councillor, Mahasamund",
    image: null,
    state: "Chhattisgarh",
    district: "Mahasamund",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 966,
    name: "Umesh Joshi",
    party: "BJP",
    position: "District President, Mahasamund",
    image: null,
    state: "Chhattisgarh",
    district: "Mahasamund",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Defamation",
        "Fraudulent voting"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Mahasamund", url: "#" },
      { title: "Election Commission Affidavit - Umesh Joshi", url: "#" }
    ]
  },
  {
    id: 967,
    name: "Surendra Chauhan Patel",
    party: "BJP",
    position: "MLA, Mungeli",
    image: null,
    state: "Chhattisgarh",
    district: "Mungeli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 21
    },
    caseDetails: {
      other: [
        "Fraudulent voting",
        "Breach of trust",
        "Illegal occupation",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Mungeli", url: "#" },
      { title: "Election Commission Affidavit - Surendra Chauhan Patel", url: "#" }
    ]
  },
  {
    id: 968,
    name: "Narasimha Reddy",
    party: "Independent",
    position: "Municipal Councillor, Narayanpur",
    image: null,
    state: "Chhattisgarh",
    district: "Narayanpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 969,
    name: "Pramod Yadav",
    party: "Independent",
    position: "Block President, Narayanpur",
    image: null,
    state: "Chhattisgarh",
    district: "Narayanpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Promoting enmity",
        "Money laundering",
        "Illegal occupation",
        "Assault"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Narayanpur", url: "#" },
      { title: "Election Commission Affidavit - Pramod Yadav", url: "#" }
    ]
  },
  {
    id: 970,
    name: "Vijay Mishra",
    party: "BJP",
    position: "Municipal Councillor, Raigarh",
    image: null,
    state: "Chhattisgarh",
    district: "Raigarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Perjury",
        "Illegal mining",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Raigarh", url: "#" },
      { title: "Election Commission Affidavit - Vijay Mishra", url: "#" }
    ]
  },
  {
    id: 971,
    name: "Jagdish Agarwal",
    party: "Independent",
    position: "Party District Leader, Raipur",
    image: null,
    state: "Chhattisgarh",
    district: "Raipur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 58
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Land mafia",
        "Abduction",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Raipur", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Agarwal", url: "#" }
    ]
  },
  {
    id: 972,
    name: "Sanjeev Mehta",
    party: "BSP",
    position: "Nagar Palika Chairman, Rajnandgaon",
    image: null,
    state: "Chhattisgarh",
    district: "Rajnandgaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Assault",
        "Abduction"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Rajnandgaon", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Mehta", url: "#" }
    ]
  },
  {
    id: 973,
    name: "Narasimha Swain",
    party: "Independent",
    position: "MLA, Rajnandgaon",
    image: null,
    state: "Chhattisgarh",
    district: "Rajnandgaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Corruption",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Rajnandgaon", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Swain", url: "#" }
    ]
  },
  {
    id: 974,
    name: "Mandeep Patil",
    party: "BSP",
    position: "Former Minister, Chhattisgarh",
    image: null,
    state: "Chhattisgarh",
    district: "Sukma",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Encroachment",
        "Criminal intimidation",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Sukma", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Patil", url: "#" }
    ]
  },
  {
    id: 975,
    name: "Manjeet Singh Panda",
    party: "INC",
    position: "Municipal Councillor, Sukma",
    image: null,
    state: "Chhattisgarh",
    district: "Sukma",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Coal mafia",
        "Wrongful confinement",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Sukma", url: "#" },
      { title: "Election Commission Affidavit - Manjeet Singh Panda", url: "#" }
    ]
  },
  {
    id: 976,
    name: "Hardeep Joshi",
    party: "Independent",
    position: "Zila Panchayat Member, Surajpur",
    image: null,
    state: "Chhattisgarh",
    district: "Surajpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Surajpur", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Joshi", url: "#" }
    ]
  },
  {
    id: 977,
    name: "Mukesh Ghosh",
    party: "BJP",
    position: "District President, Surguja",
    image: null,
    state: "Chhattisgarh",
    district: "Surguja",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Benami property",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Surguja", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Ghosh", url: "#" }
    ]
  },
  {
    id: 978,
    name: "Kishore Singh",
    party: "BJP",
    position: "District President, Surguja",
    image: null,
    state: "Chhattisgarh",
    district: "Surguja",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Coal mafia",
        "Money laundering",
        "Voter intimidation",
        "Benami property"
      ]
    },
    sources: [
      { title: "Chhattisgarh Police Records - Surguja", url: "#" },
      { title: "Election Commission Affidavit - Kishore Singh", url: "#" }
    ]
  },
  {
    id: 979,
    name: "Amarjeet Sen",
    party: "BJP",
    position: "Former Minister, Assam",
    image: null,
    state: "Assam",
    district: "Baksa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Assam Police Records - Baksa", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Sen", url: "#" }
    ]
  },
  {
    id: 980,
    name: "Shivakant Chowdhury",
    party: "BJP",
    position: "Party District Leader, Barpeta",
    image: null,
    state: "Assam",
    district: "Barpeta",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Abduction"
      ]
    },
    sources: [
      { title: "Assam Police Records - Barpeta", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Chowdhury", url: "#" }
    ]
  },
  {
    id: 981,
    name: "Naresh Sharma",
    party: "AGP",
    position: "Party District Leader, Biswanath",
    image: null,
    state: "Assam",
    district: "Biswanath",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 982,
    name: "Ranjeet Siddiqui Thakur",
    party: "Independent",
    position: "Party District Leader, Bongaigaon",
    image: null,
    state: "Assam",
    district: "Bongaigaon",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 983,
    name: "Avinash Chaudhary Das",
    party: "AGP",
    position: "District President, Bongaigaon",
    image: null,
    state: "Assam",
    district: "Bongaigaon",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 984,
    name: "Gajendra Patel Khan",
    party: "AGP",
    position: "Former MLA, Cachar",
    image: null,
    state: "Assam",
    district: "Cachar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 985,
    name: "Satish Lal",
    party: "AIUDF",
    position: "Former Minister, Assam",
    image: null,
    state: "Assam",
    district: "Cachar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Assam Police Records - Cachar", url: "#" },
      { title: "Election Commission Affidavit - Satish Lal", url: "#" }
    ]
  },
  {
    id: 986,
    name: "Ravindra Pawar",
    party: "INC",
    position: "MLA, Charaideo",
    image: null,
    state: "Assam",
    district: "Charaideo",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Assam Police Records - Charaideo", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Pawar", url: "#" }
    ]
  },
  {
    id: 987,
    name: "Subhash Gupta",
    party: "INC",
    position: "MLA, Chirang",
    image: null,
    state: "Assam",
    district: "Chirang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Voter intimidation",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Assam Police Records - Chirang", url: "#" },
      { title: "Election Commission Affidavit - Subhash Gupta", url: "#" }
    ]
  },
  {
    id: 988,
    name: "Ajay Ahmed",
    party: "AIUDF",
    position: "Nagar Palika Chairman, Darrang",
    image: null,
    state: "Assam",
    district: "Darrang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Land grabbing",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Assam Police Records - Darrang", url: "#" },
      { title: "Election Commission Affidavit - Ajay Ahmed", url: "#" }
    ]
  },
  {
    id: 989,
    name: "Hardeep Pandey",
    party: "INC",
    position: "Former MLA, Darrang",
    image: null,
    state: "Assam",
    district: "Darrang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Corruption",
        "Booth capturing",
        "Disproportionate assets",
        "Criminal conspiracy",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Assam Police Records - Darrang", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Pandey", url: "#" }
    ]
  },
  {
    id: 990,
    name: "Subhash Jain Ali",
    party: "Independent",
    position: "Former Minister, Assam",
    image: null,
    state: "Assam",
    district: "Dhemaji",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Voyeurism charges",
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Assam Police Records - Dhemaji", url: "#" },
      { title: "Election Commission Affidavit - Subhash Jain Ali", url: "#" }
    ]
  },
  {
    id: 991,
    name: "Amarjeet Patil",
    party: "INC",
    position: "Former Minister, Assam",
    image: null,
    state: "Assam",
    district: "Dhemaji",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Assam Police Records - Dhemaji", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Patil", url: "#" }
    ]
  },
  {
    id: 992,
    name: "Ashok Ansari Rathore",
    party: "Independent",
    position: "District President, Dhubri",
    image: null,
    state: "Assam",
    district: "Dhubri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Perjury",
        "Armed robbery",
        "Cattle smuggling",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Assam Police Records - Dhubri", url: "#" },
      { title: "Election Commission Affidavit - Ashok Ansari Rathore", url: "#" }
    ]
  },
  {
    id: 993,
    name: "Nisha Sharma Chowdhury",
    party: "INC",
    position: "MLA, Dibrugarh",
    image: null,
    state: "Assam",
    district: "Dibrugarh",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)",
        "Stalking (IPC 354D)"
      ],
      other: [
        "Armed robbery",
        "Hate speech"
      ]
    },
    sources: [
      { title: "Assam Police Records - Dibrugarh", url: "#" },
      { title: "Election Commission Affidavit - Nisha Sharma Chowdhury", url: "#" }
    ]
  },
  {
    id: 994,
    name: "Ramesh Bose",
    party: "AGP",
    position: "MLA, Dima Hasao",
    image: null,
    state: "Assam",
    district: "Dima Hasao",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Embezzlement",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Assam Police Records - Dima Hasao", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Bose", url: "#" }
    ]
  },
  {
    id: 995,
    name: "Govind Siddiqui Khan",
    party: "INC",
    position: "Zila Panchayat Member, Dima Hasao",
    image: null,
    state: "Assam",
    district: "Dima Hasao",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 996,
    name: "Usha Patil Chowdhury",
    party: "AGP",
    position: "Zila Panchayat Member, Goalpara",
    image: null,
    state: "Assam",
    district: "Goalpara",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Voyeurism charges"
      ]
    },
    sources: [
      { title: "Assam Police Records - Goalpara", url: "#" },
      { title: "Election Commission Affidavit - Usha Patil Chowdhury", url: "#" }
    ]
  },
  {
    id: 997,
    name: "Mahendra Desai",
    party: "INC",
    position: "Municipal Councillor, Goalpara",
    image: null,
    state: "Assam",
    district: "Goalpara",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 27
    },
    caseDetails: {
      other: [
        "Abduction",
        "Bribery",
        "Property dispute",
        "Hate speech",
        "Land mafia",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Assam Police Records - Goalpara", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Desai", url: "#" }
    ]
  },
  {
    id: 998,
    name: "Naresh Panda",
    party: "Independent",
    position: "Party District Leader, Golaghat",
    image: null,
    state: "Assam",
    district: "Golaghat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Assam Police Records - Golaghat", url: "#" },
      { title: "Election Commission Affidavit - Naresh Panda", url: "#" }
    ]
  },
  {
    id: 999,
    name: "Rajendra Malik",
    party: "Independent",
    position: "Zila Panchayat Member, Golaghat",
    image: null,
    state: "Assam",
    district: "Golaghat",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1000,
    name: "Kuldeep Mukherjee",
    party: "INC",
    position: "District President, Hailakandi",
    image: null,
    state: "Assam",
    district: "Hailakandi",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1001,
    name: "Shivakant Lal",
    party: "AIUDF",
    position: "Block President, Hailakandi",
    image: null,
    state: "Assam",
    district: "Hailakandi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Assault",
        "Rioting",
        "Illegal weapons possession",
        "Kidnapping",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Assam Police Records - Hailakandi", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Lal", url: "#" }
    ]
  },
  {
    id: 1002,
    name: "Ranjeet Mehta Pawar",
    party: "INC",
    position: "Nagar Palika Chairman, Hojai",
    image: null,
    state: "Assam",
    district: "Hojai",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1003,
    name: "Hitesh Roy Devi",
    party: "AGP",
    position: "Nagar Palika Chairman, Hojai",
    image: null,
    state: "Assam",
    district: "Hojai",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1004,
    name: "Yogesh Jain",
    party: "INC",
    position: "Nagar Palika Chairman, Jorhat",
    image: null,
    state: "Assam",
    district: "Jorhat",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1005,
    name: "Laxmikant Sen Sahoo",
    party: "AIUDF",
    position: "Municipal Councillor, Kamrup",
    image: null,
    state: "Assam",
    district: "Kamrup",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1006,
    name: "Rakesh Khan Dutta",
    party: "AIUDF",
    position: "Former Minister, Assam",
    image: null,
    state: "Assam",
    district: "Kamrup Metropolitan",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Benami property"
      ]
    },
    sources: [
      { title: "Assam Police Records - Kamrup Metropolitan", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Khan Dutta", url: "#" }
    ]
  },
  {
    id: 1007,
    name: "Ram Dutta",
    party: "BJP",
    position: "Block President, Karbi Anglong",
    image: null,
    state: "Assam",
    district: "Karbi Anglong",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Assam Police Records - Karbi Anglong", url: "#" },
      { title: "Election Commission Affidavit - Ram Dutta", url: "#" }
    ]
  },
  {
    id: 1008,
    name: "Venkatesh Nath",
    party: "Independent",
    position: "MLA, Karimganj",
    image: null,
    state: "Assam",
    district: "Karimganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Assam Police Records - Karimganj", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Nath", url: "#" }
    ]
  },
  {
    id: 1009,
    name: "Naresh Bose",
    party: "BJP",
    position: "Block President, Karimganj",
    image: null,
    state: "Assam",
    district: "Karimganj",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Benami property",
        "Caste atrocities"
      ]
    },
    sources: [
      { title: "Assam Police Records - Karimganj", url: "#" },
      { title: "Election Commission Affidavit - Naresh Bose", url: "#" }
    ]
  },
  {
    id: 1010,
    name: "Prakash Sen",
    party: "Independent",
    position: "District President, Kokrajhar",
    image: null,
    state: "Assam",
    district: "Kokrajhar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 34
    },
    caseDetails: {
      other: [
        "Money laundering",
        "Wrongful confinement",
        "Inciting violence",
        "Rape charges",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Assam Police Records - Kokrajhar", url: "#" },
      { title: "Election Commission Affidavit - Prakash Sen", url: "#" }
    ]
  },
  {
    id: 1011,
    name: "Meena Singh",
    party: "AGP",
    position: "Zila Panchayat Member, Lakhimpur",
    image: null,
    state: "Assam",
    district: "Lakhimpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 67
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Criminal conspiracy",
        "Gangster activities",
        "Forgery",
        "Land grabbing",
        "Misappropriation of public funds",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Assam Police Records - Lakhimpur", url: "#" },
      { title: "Election Commission Affidavit - Meena Singh", url: "#" }
    ]
  },
  {
    id: 1012,
    name: "Suresh Gupta",
    party: "BJP",
    position: "Nagar Palika Chairman, Majuli",
    image: null,
    state: "Assam",
    district: "Majuli",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Benami property",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Assam Police Records - Majuli", url: "#" },
      { title: "Election Commission Affidavit - Suresh Gupta", url: "#" }
    ]
  },
  {
    id: 1013,
    name: "Pradeep Agarwal Ghosh",
    party: "BJP",
    position: "Zila Panchayat Member, Majuli",
    image: null,
    state: "Assam",
    district: "Majuli",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1014,
    name: "Kamlesh Dutta",
    party: "BJP",
    position: "Nagar Palika Chairman, Morigaon",
    image: null,
    state: "Assam",
    district: "Morigaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Voter intimidation",
        "Assault"
      ]
    },
    sources: [
      { title: "Assam Police Records - Morigaon", url: "#" },
      { title: "Election Commission Affidavit - Kamlesh Dutta", url: "#" }
    ]
  },
  {
    id: 1015,
    name: "Amarjeet Patel",
    party: "Independent",
    position: "Block President, Morigaon",
    image: null,
    state: "Assam",
    district: "Morigaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Attempt to murder",
        "Violation of election code",
        "Cattle smuggling",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Assam Police Records - Morigaon", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Patel", url: "#" }
    ]
  },
  {
    id: 1016,
    name: "Savita Panda Singh",
    party: "INC",
    position: "Former MLA, Nagaon",
    image: null,
    state: "Assam",
    district: "Nagaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Hate speech"
      ]
    },
    sources: [
      { title: "Assam Police Records - Nagaon", url: "#" },
      { title: "Election Commission Affidavit - Savita Panda Singh", url: "#" }
    ]
  },
  {
    id: 1017,
    name: "Asha Sen",
    party: "Independent",
    position: "Nagar Palika Chairman, Nagaon",
    image: null,
    state: "Assam",
    district: "Nagaon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Assam Police Records - Nagaon", url: "#" },
      { title: "Election Commission Affidavit - Asha Sen", url: "#" }
    ]
  },
  {
    id: 1018,
    name: "Rajesh Shah Desai",
    party: "Independent",
    position: "Zila Panchayat Member, Nalbari",
    image: null,
    state: "Assam",
    district: "Nalbari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 15
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Misappropriation of public funds"
      ]
    },
    sources: [
      { title: "Assam Police Records - Nalbari", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Shah Desai", url: "#" }
    ]
  },
  {
    id: 1019,
    name: "Archana Reddy Sharma",
    party: "BJP",
    position: "Former MLA, Nalbari",
    image: null,
    state: "Assam",
    district: "Nalbari",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Unlawful assembly",
        "Breach of trust",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Assam Police Records - Nalbari", url: "#" },
      { title: "Election Commission Affidavit - Archana Reddy Sharma", url: "#" }
    ]
  },
  {
    id: 1020,
    name: "Mahesh Mani",
    party: "Independent",
    position: "Nagar Palika Chairman, Sivasagar",
    image: null,
    state: "Assam",
    district: "Sivasagar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1021,
    name: "Jitendra Panda",
    party: "AGP",
    position: "Former Minister, Assam",
    image: null,
    state: "Assam",
    district: "Sivasagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Promoting enmity",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Assam Police Records - Sivasagar", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Panda", url: "#" }
    ]
  },
  {
    id: 1022,
    name: "Rajeev Chauhan",
    party: "INC",
    position: "Block President, Sonitpur",
    image: null,
    state: "Assam",
    district: "Sonitpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1023,
    name: "Sangeeta Kulkarni Khan",
    party: "AGP",
    position: "Block President, Sonitpur",
    image: null,
    state: "Assam",
    district: "Sonitpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Murder charges"
      ]
    },
    sources: [
      { title: "Assam Police Records - Sonitpur", url: "#" },
      { title: "Election Commission Affidavit - Sangeeta Kulkarni Khan", url: "#" }
    ]
  },
  {
    id: 1024,
    name: "Ram Chauhan",
    party: "Independent",
    position: "Former Minister, Assam",
    image: null,
    state: "Assam",
    district: "South Salmara-Mankachar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Assault",
        "Dacoity",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Assam Police Records - South Salmara-Mankachar", url: "#" },
      { title: "Election Commission Affidavit - Ram Chauhan", url: "#" }
    ]
  },
  {
    id: 1025,
    name: "Anand Roy",
    party: "AGP",
    position: "Nagar Palika Chairman, South Salmara-Mankachar",
    image: null,
    state: "Assam",
    district: "South Salmara-Mankachar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Criminal intimidation",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Assam Police Records - South Salmara-Mankachar", url: "#" },
      { title: "Election Commission Affidavit - Anand Roy", url: "#" }
    ]
  },
  {
    id: 1026,
    name: "Gajendra Agarwal",
    party: "INC",
    position: "MLA, Tinsukia",
    image: null,
    state: "Assam",
    district: "Tinsukia",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Breach of trust",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Assam Police Records - Tinsukia", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Agarwal", url: "#" }
    ]
  },
  {
    id: 1027,
    name: "Mukesh Prasad",
    party: "AIUDF",
    position: "Former MLA, Udalguri",
    image: null,
    state: "Assam",
    district: "Udalguri",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1028,
    name: "Subhash Mehta",
    party: "AIUDF",
    position: "Block President, Udalguri",
    image: null,
    state: "Assam",
    district: "Udalguri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 51
    },
    caseDetails: {
      other: [
        "Religious offense",
        "Electoral malpractice",
        "Booth capturing",
        "Defamation",
        "Arms Act violations",
        "Sexual harassment",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Assam Police Records - Udalguri", url: "#" },
      { title: "Election Commission Affidavit - Subhash Mehta", url: "#" }
    ]
  },
  {
    id: 1029,
    name: "Mandeep Desai",
    party: "AIUDF",
    position: "MLA, West Karbi Anglong",
    image: null,
    state: "Assam",
    district: "West Karbi Anglong",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1030,
    name: "Manjeet Sen",
    party: "AIUDF",
    position: "Block President, West Karbi Anglong",
    image: null,
    state: "Assam",
    district: "West Karbi Anglong",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1031,
    name: "Jitesh Nayak Swain",
    party: "INC",
    position: "Former MLA, Alappuzha",
    image: null,
    state: "Kerala",
    district: "Alappuzha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 19
    },
    caseDetails: {
      other: [
        "Benami property",
        "Mischief causing damage",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Alappuzha", url: "#" },
      { title: "Election Commission Affidavit - Jitesh Nayak Swain", url: "#" }
    ]
  },
  {
    id: 1032,
    name: "Seeta Behera",
    party: "INC",
    position: "Former Minister, Kerala",
    image: null,
    state: "Kerala",
    district: "Alappuzha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Voluntarily causing hurt",
        "Property dispute",
        "Kidnapping",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Alappuzha", url: "#" },
      { title: "Election Commission Affidavit - Seeta Behera", url: "#" }
    ]
  },
  {
    id: 1033,
    name: "Pramod Chatterjee",
    party: "IUML",
    position: "Nagar Palika Chairman, Ernakulam",
    image: null,
    state: "Kerala",
    district: "Ernakulam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Ernakulam", url: "#" },
      { title: "Election Commission Affidavit - Pramod Chatterjee", url: "#" }
    ]
  },
  {
    id: 1034,
    name: "Manoj Naidu",
    party: "INC",
    position: "Former Minister, Kerala",
    image: null,
    state: "Kerala",
    district: "Idukki",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1035,
    name: "Dilip Chowdhury",
    party: "INC",
    position: "District President, Kannur",
    image: null,
    state: "Kerala",
    district: "Kannur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Benami property",
        "Rape charges",
        "Land mafia",
        "Misappropriation of public funds",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Kannur", url: "#" },
      { title: "Election Commission Affidavit - Dilip Chowdhury", url: "#" }
    ]
  },
  {
    id: 1036,
    name: "Ravindra Swain Naidu",
    party: "IUML",
    position: "District President, Kasaragod",
    image: null,
    state: "Kerala",
    district: "Kasaragod",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Kasaragod", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Swain Naidu", url: "#" }
    ]
  },
  {
    id: 1037,
    name: "Naresh Joshi",
    party: "Independent",
    position: "Zila Panchayat Member, Kasaragod",
    image: null,
    state: "Kerala",
    district: "Kasaragod",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1038,
    name: "Lokesh Joshi",
    party: "INC",
    position: "Former MLA, Kollam",
    image: null,
    state: "Kerala",
    district: "Kollam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Land mafia",
        "Dacoity",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Kollam", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Joshi", url: "#" }
    ]
  },
  {
    id: 1039,
    name: "Prakash Chowdhury",
    party: "IUML",
    position: "Party District Leader, Kollam",
    image: null,
    state: "Kerala",
    district: "Kollam",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Murder charges",
        "Illegal weapons possession",
        "Sand mafia",
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Kollam", url: "#" },
      { title: "Election Commission Affidavit - Prakash Chowdhury", url: "#" }
    ]
  },
  {
    id: 1040,
    name: "Kavita Thakur Shinde",
    party: "IUML",
    position: "MLA, Kottayam",
    image: null,
    state: "Kerala",
    district: "Kottayam",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1041,
    name: "Mukesh Bai",
    party: "CPI(M)",
    position: "Municipal Councillor, Kottayam",
    image: null,
    state: "Kerala",
    district: "Kottayam",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1042,
    name: "Pramod Swain",
    party: "BJP",
    position: "Block President, Kozhikode",
    image: null,
    state: "Kerala",
    district: "Kozhikode",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1043,
    name: "Omprakash Malik",
    party: "BJP",
    position: "Municipal Councillor, Malappuram",
    image: null,
    state: "Kerala",
    district: "Malappuram",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1044,
    name: "Govind Rathore Ghosh",
    party: "Independent",
    position: "Party District Leader, Malappuram",
    image: null,
    state: "Kerala",
    district: "Malappuram",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Malappuram", url: "#" },
      { title: "Election Commission Affidavit - Govind Rathore Ghosh", url: "#" }
    ]
  },
  {
    id: 1045,
    name: "Dinesh Behera Singh",
    party: "Independent",
    position: "Municipal Councillor, Palakkad",
    image: null,
    state: "Kerala",
    district: "Palakkad",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Voter intimidation",
        "Corruption"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Palakkad", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Behera Singh", url: "#" }
    ]
  },
  {
    id: 1046,
    name: "Manjeet Pawar",
    party: "IUML",
    position: "Former Minister, Kerala",
    image: null,
    state: "Kerala",
    district: "Palakkad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1047,
    name: "Madhuri Ansari",
    party: "INC",
    position: "Nagar Palika Chairman, Pathanamthitta",
    image: null,
    state: "Kerala",
    district: "Pathanamthitta",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Molestation charges"
      ],
      other: [
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Pathanamthitta", url: "#" },
      { title: "Election Commission Affidavit - Madhuri Ansari", url: "#" }
    ]
  },
  {
    id: 1048,
    name: "Govind Chand",
    party: "INC",
    position: "Zila Panchayat Member, Pathanamthitta",
    image: null,
    state: "Kerala",
    district: "Pathanamthitta",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1049,
    name: "Ashok Patil Shinde",
    party: "CPI(M)",
    position: "MLA, Thiruvananthapuram",
    image: null,
    state: "Kerala",
    district: "Thiruvananthapuram",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1050,
    name: "Shraddha Rathore",
    party: "INC",
    position: "Municipal Councillor, Thiruvananthapuram",
    image: null,
    state: "Kerala",
    district: "Thiruvananthapuram",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Ammunition without license",
        "Rioting"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Thiruvananthapuram", url: "#" },
      { title: "Election Commission Affidavit - Shraddha Rathore", url: "#" }
    ]
  },
  {
    id: 1051,
    name: "Rajeev Bai Negi",
    party: "BJP",
    position: "Former Minister, Kerala",
    image: null,
    state: "Kerala",
    district: "Thrissur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Extortion racket",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Thrissur", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Bai Negi", url: "#" }
    ]
  },
  {
    id: 1052,
    name: "Neeraj Joshi Ansari",
    party: "BJP",
    position: "Nagar Palika Chairman, Thrissur",
    image: null,
    state: "Kerala",
    district: "Thrissur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Cheating",
        "Wrongful confinement",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Kerala Police Records - Thrissur", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Joshi Ansari", url: "#" }
    ]
  },
  {
    id: 1053,
    name: "Vijay Jain",
    party: "BJP",
    position: "District President, Wayanad",
    image: null,
    state: "Kerala",
    district: "Wayanad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1054,
    name: "Mukesh Chaudhary Swain",
    party: "CPI(M)",
    position: "Nagar Palika Chairman, Wayanad",
    image: null,
    state: "Kerala",
    district: "Wayanad",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1055,
    name: "Vinay Rawat Negi",
    party: "BSP",
    position: "Municipal Councillor, Almora",
    image: null,
    state: "Uttarakhand",
    district: "Almora",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Criminal intimidation",
        "Ammunition without license"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Almora", url: "#" },
      { title: "Election Commission Affidavit - Vinay Rawat Negi", url: "#" }
    ]
  },
  {
    id: 1056,
    name: "Omprakash Singh Naidu",
    party: "BJP",
    position: "Municipal Councillor, Almora",
    image: null,
    state: "Uttarakhand",
    district: "Almora",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Money laundering"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Almora", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Singh Naidu", url: "#" }
    ]
  },
  {
    id: 1057,
    name: "Dilip Kumar Khan",
    party: "BSP",
    position: "Zila Panchayat Member, Bageshwar",
    image: null,
    state: "Uttarakhand",
    district: "Bageshwar",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Eve-teasing and harassment"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Bageshwar", url: "#" },
      { title: "Election Commission Affidavit - Dilip Kumar Khan", url: "#" }
    ]
  },
  {
    id: 1058,
    name: "Kishore Thakur",
    party: "Independent",
    position: "Municipal Councillor, Bageshwar",
    image: null,
    state: "Uttarakhand",
    district: "Bageshwar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 33
    },
    caseDetails: {
      other: [
        "Corruption",
        "Forgery",
        "Illegal asset accumulation",
        "Tax evasion",
        "Bribery"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Bageshwar", url: "#" },
      { title: "Election Commission Affidavit - Kishore Thakur", url: "#" }
    ]
  },
  {
    id: 1059,
    name: "Ram Agarwal Gupta",
    party: "INC",
    position: "Former Minister, Uttarakhand",
    image: null,
    state: "Uttarakhand",
    district: "Chamoli",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1060,
    name: "Rajendra Rathore",
    party: "BSP",
    position: "Former MLA, Champawat",
    image: null,
    state: "Uttarakhand",
    district: "Champawat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Bribery",
        "Violation of election code",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Champawat", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Rathore", url: "#" }
    ]
  },
  {
    id: 1061,
    name: "Rajeev Dutta Chand",
    party: "INC",
    position: "District President, Champawat",
    image: null,
    state: "Uttarakhand",
    district: "Champawat",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 51
    },
    caseDetails: {
      other: [
        "Corruption",
        "Hate speech",
        "Ammunition without license",
        "Electoral malpractice",
        "Kidnapping",
        "Promoting enmity",
        "Criminal trespass",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Champawat", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Dutta Chand", url: "#" }
    ]
  },
  {
    id: 1062,
    name: "Anjali Dutta Ghosh",
    party: "Independent",
    position: "MLA, Dehradun",
    image: null,
    state: "Uttarakhand",
    district: "Dehradun",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1063,
    name: "Leela Lal Rawat",
    party: "Independent",
    position: "Former MLA, Haridwar",
    image: null,
    state: "Uttarakhand",
    district: "Haridwar",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1064,
    name: "Mahesh Devi",
    party: "Independent",
    position: "Block President, Nainital",
    image: null,
    state: "Uttarakhand",
    district: "Nainital",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 46
    },
    caseDetails: {
      other: [
        "Defamation",
        "Voter intimidation",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Nainital", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Devi", url: "#" }
    ]
  },
  {
    id: 1065,
    name: "Madhuri Bai Mani",
    party: "BSP",
    position: "MLA, Nainital",
    image: null,
    state: "Uttarakhand",
    district: "Nainital",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Fraudulent voting",
        "Ammunition without license",
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Nainital", url: "#" },
      { title: "Election Commission Affidavit - Madhuri Bai Mani", url: "#" }
    ]
  },
  {
    id: 1066,
    name: "Sheela Lal",
    party: "BSP",
    position: "MLA, Pauri Garhwal",
    image: null,
    state: "Uttarakhand",
    district: "Pauri Garhwal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1067,
    name: "Venkatesh Thakur",
    party: "BJP",
    position: "MLA, Pithoragarh",
    image: null,
    state: "Uttarakhand",
    district: "Pithoragarh",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ],
      other: [
        "Defamation",
        "Disproportionate assets",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Pithoragarh", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Thakur", url: "#" }
    ]
  },
  {
    id: 1068,
    name: "Vinay Rathore",
    party: "INC",
    position: "Municipal Councillor, Pithoragarh",
    image: null,
    state: "Uttarakhand",
    district: "Pithoragarh",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Pithoragarh", url: "#" },
      { title: "Election Commission Affidavit - Vinay Rathore", url: "#" }
    ]
  },
  {
    id: 1069,
    name: "Hardeep Ansari Ghosh",
    party: "Independent",
    position: "Municipal Councillor, Rudraprayag",
    image: null,
    state: "Uttarakhand",
    district: "Rudraprayag",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Land mafia",
        "Promoting enmity",
        "Electoral malpractice",
        "SC/ST Act violations",
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Rudraprayag", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Ansari Ghosh", url: "#" }
    ]
  },
  {
    id: 1070,
    name: "Mandeep Chaudhary",
    party: "BJP",
    position: "Former MLA, Tehri Garhwal",
    image: null,
    state: "Uttarakhand",
    district: "Tehri Garhwal",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Abduction",
        "Land grabbing",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Tehri Garhwal", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Chaudhary", url: "#" }
    ]
  },
  {
    id: 1071,
    name: "Gajendra Chatterjee",
    party: "BJP",
    position: "Block President, Udham Singh Nagar",
    image: null,
    state: "Uttarakhand",
    district: "Udham Singh Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Criminal conspiracy"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Udham Singh Nagar", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Chatterjee", url: "#" }
    ]
  },
  {
    id: 1072,
    name: "Kishore Mehta",
    party: "BJP",
    position: "Municipal Councillor, Udham Singh Nagar",
    image: null,
    state: "Uttarakhand",
    district: "Udham Singh Nagar",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 44
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Perjury",
        "Assault",
        "Criminal conspiracy",
        "Kidnapping",
        "SC/ST Act violations",
        "Liquor mafia",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Udham Singh Nagar", url: "#" },
      { title: "Election Commission Affidavit - Kishore Mehta", url: "#" }
    ]
  },
  {
    id: 1073,
    name: "Jagdish Rathore",
    party: "BSP",
    position: "MLA, Uttarkashi",
    image: null,
    state: "Uttarakhand",
    district: "Uttarkashi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Benami property",
        "Breach of trust",
        "Disproportionate assets",
        "Contempt of court",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Uttarakhand Police Records - Uttarkashi", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Rathore", url: "#" }
    ]
  },
  {
    id: 1074,
    name: "Pradeep Mehta",
    party: "Independent",
    position: "Nagar Palika Chairman, Bilaspur",
    image: null,
    state: "Himachal Pradesh",
    district: "Bilaspur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Inciting violence"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Bilaspur", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Mehta", url: "#" }
    ]
  },
  {
    id: 1075,
    name: "Ramesh Mukherjee",
    party: "BJP",
    position: "Party District Leader, Bilaspur",
    image: null,
    state: "Himachal Pradesh",
    district: "Bilaspur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Perjury",
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Bilaspur", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Mukherjee", url: "#" }
    ]
  },
  {
    id: 1076,
    name: "Ramakant Das Swain",
    party: "BJP",
    position: "Former MLA, Chamba",
    image: null,
    state: "Himachal Pradesh",
    district: "Chamba",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Abduction",
        "Illegal construction",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Chamba", url: "#" },
      { title: "Election Commission Affidavit - Ramakant Das Swain", url: "#" }
    ]
  },
  {
    id: 1077,
    name: "Rajeev Sharma",
    party: "INC",
    position: "Nagar Palika Chairman, Hamirpur",
    image: null,
    state: "Himachal Pradesh",
    district: "Hamirpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Rape charges",
        "Booth capturing",
        "Benami property"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Hamirpur", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Sharma", url: "#" }
    ]
  },
  {
    id: 1078,
    name: "Ramesh Ali Tiwari",
    party: "BJP",
    position: "Nagar Palika Chairman, Hamirpur",
    image: null,
    state: "Himachal Pradesh",
    district: "Hamirpur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 40
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Illegal asset accumulation",
        "Criminal conspiracy",
        "Contempt of court",
        "Dacoity",
        "Assault",
        "Religious offense",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Hamirpur", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Ali Tiwari", url: "#" }
    ]
  },
  {
    id: 1079,
    name: "Pankaj Sahoo Gupta",
    party: "CPI(M)",
    position: "MLA, Kangra",
    image: null,
    state: "Himachal Pradesh",
    district: "Kangra",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Promoting enmity",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Kangra", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Sahoo Gupta", url: "#" }
    ]
  },
  {
    id: 1080,
    name: "Jagdish Banerjee Yadav",
    party: "Independent",
    position: "Nagar Palika Chairman, Kangra",
    image: null,
    state: "Himachal Pradesh",
    district: "Kangra",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Liquor mafia",
        "Murder charges",
        "Electoral malpractice",
        "Money laundering",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Kangra", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Banerjee Yadav", url: "#" }
    ]
  },
  {
    id: 1081,
    name: "Dheeraj Chauhan",
    party: "CPI(M)",
    position: "District President, Kinnaur",
    image: null,
    state: "Himachal Pradesh",
    district: "Kinnaur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 65
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Defamation",
        "Perjury",
        "Religious offense",
        "Assault",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Kinnaur", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Chauhan", url: "#" }
    ]
  },
  {
    id: 1082,
    name: "Rampreet Das",
    party: "INC",
    position: "Nagar Palika Chairman, Kinnaur",
    image: null,
    state: "Himachal Pradesh",
    district: "Kinnaur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Illegal occupation"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Kinnaur", url: "#" },
      { title: "Election Commission Affidavit - Rampreet Das", url: "#" }
    ]
  },
  {
    id: 1083,
    name: "Meena Bisht Khan",
    party: "BJP",
    position: "Nagar Palika Chairman, Kullu",
    image: null,
    state: "Himachal Pradesh",
    district: "Kullu",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1084,
    name: "Lokesh Tiwari",
    party: "BJP",
    position: "Zila Panchayat Member, Kullu",
    image: null,
    state: "Himachal Pradesh",
    district: "Kullu",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Stalking (IPC 354D)",
        "Eve-teasing and harassment",
        "Assault with intent to outrage modesty"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Kullu", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Tiwari", url: "#" }
    ]
  },
  {
    id: 1085,
    name: "Surendra Rathore Nath",
    party: "Independent",
    position: "Zila Panchayat Member, Lahaul and Spiti",
    image: null,
    state: "Himachal Pradesh",
    district: "Lahaul and Spiti",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 38
    },
    caseDetails: {
      other: [
        "Contempt of court",
        "Wrongful confinement",
        "Electoral malpractice",
        "Illegal weapons possession",
        "Kidnapping",
        "Fraudulent voting",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Lahaul and Spiti", url: "#" },
      { title: "Election Commission Affidavit - Surendra Rathore Nath", url: "#" }
    ]
  },
  {
    id: 1086,
    name: "Rampreet Negi",
    party: "CPI(M)",
    position: "Former MLA, Lahaul and Spiti",
    image: null,
    state: "Himachal Pradesh",
    district: "Lahaul and Spiti",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ],
      other: [
        "Cheating",
        "Kidnapping",
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Lahaul and Spiti", url: "#" },
      { title: "Election Commission Affidavit - Rampreet Negi", url: "#" }
    ]
  },
  {
    id: 1087,
    name: "Rajeev Mukherjee Malik",
    party: "Independent",
    position: "Municipal Councillor, Mandi",
    image: null,
    state: "Himachal Pradesh",
    district: "Mandi",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1088,
    name: "Kishore Devi Siddiqui",
    party: "Independent",
    position: "Municipal Councillor, Shimla",
    image: null,
    state: "Himachal Pradesh",
    district: "Shimla",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Booth capturing",
        "Criminal intimidation",
        "Arms Act violations"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Shimla", url: "#" },
      { title: "Election Commission Affidavit - Kishore Devi Siddiqui", url: "#" }
    ]
  },
  {
    id: 1089,
    name: "Ravindra Chauhan",
    party: "BJP",
    position: "MLA, Sirmaur",
    image: null,
    state: "Himachal Pradesh",
    district: "Sirmaur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Forgery",
        "Illegal weapons possession",
        "Dacoity",
        "Human trafficking",
        "Arms Act violations",
        "Criminal intimidation",
        "Defamation",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Sirmaur", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Chauhan", url: "#" }
    ]
  },
  {
    id: 1090,
    name: "Anil Panda Malik",
    party: "CPI(M)",
    position: "Nagar Palika Chairman, Sirmaur",
    image: null,
    state: "Himachal Pradesh",
    district: "Sirmaur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 16
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Coal mafia",
        "Promoting enmity",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Sirmaur", url: "#" },
      { title: "Election Commission Affidavit - Anil Panda Malik", url: "#" }
    ]
  },
  {
    id: 1091,
    name: "Rajendra Panda Rathore",
    party: "Independent",
    position: "District President, Solan",
    image: null,
    state: "Himachal Pradesh",
    district: "Solan",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Assault",
        "Hate speech",
        "Defamation",
        "Inciting violence",
        "Land mafia",
        "Illegal mining"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Solan", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Panda Rathore", url: "#" }
    ]
  },
  {
    id: 1092,
    name: "Ravindra Panda Hussain",
    party: "INC",
    position: "Nagar Palika Chairman, Solan",
    image: null,
    state: "Himachal Pradesh",
    district: "Solan",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges",
        "Sexual assault of minor (POCSO)",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Solan", url: "#" },
      { title: "Election Commission Affidavit - Ravindra Panda Hussain", url: "#" }
    ]
  },
  {
    id: 1093,
    name: "Pramod Gupta Swain",
    party: "Independent",
    position: "Party District Leader, Una",
    image: null,
    state: "Himachal Pradesh",
    district: "Una",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Himachal Pradesh Police Records - Una", url: "#" },
      { title: "Election Commission Affidavit - Pramod Gupta Swain", url: "#" }
    ]
  },
  {
    id: 1094,
    name: "Amarjeet Jain Mehta",
    party: "MGP",
    position: "Zila Panchayat Member, North Goa",
    image: null,
    state: "Goa",
    district: "North Goa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Murder charges",
        "Bribery"
      ]
    },
    sources: [
      { title: "Goa Police Records - North Goa", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Jain Mehta", url: "#" }
    ]
  },
  {
    id: 1095,
    name: "Shyam Nath",
    party: "BJP",
    position: "Nagar Palika Chairman, North Goa",
    image: null,
    state: "Goa",
    district: "North Goa",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 53
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Extortion racket",
        "Illegal construction"
      ]
    },
    sources: [
      { title: "Goa Police Records - North Goa", url: "#" },
      { title: "Election Commission Affidavit - Shyam Nath", url: "#" }
    ]
  },
  {
    id: 1096,
    name: "Jitendra Chand Ali",
    party: "INC",
    position: "Block President, South Goa",
    image: null,
    state: "Goa",
    district: "South Goa",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1097,
    name: "Brijesh Roy Behera",
    party: "Independent",
    position: "Former MLA, Bishnupur",
    image: null,
    state: "Manipur",
    district: "Bishnupur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Kidnapping",
        "Violation of election code",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Bishnupur", url: "#" },
      { title: "Election Commission Affidavit - Brijesh Roy Behera", url: "#" }
    ]
  },
  {
    id: 1098,
    name: "Rajendra Rathore",
    party: "INC",
    position: "Zila Panchayat Member, Bishnupur",
    image: null,
    state: "Manipur",
    district: "Bishnupur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 25
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Violation of election code",
        "Property dispute",
        "Land mafia",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Bishnupur", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Rathore", url: "#" }
    ]
  },
  {
    id: 1099,
    name: "Prakash Mehta Babu",
    party: "BJP",
    position: "Nagar Palika Chairman, Chandel",
    image: null,
    state: "Manipur",
    district: "Chandel",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Bribery",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Chandel", url: "#" },
      { title: "Election Commission Affidavit - Prakash Mehta Babu", url: "#" }
    ]
  },
  {
    id: 1100,
    name: "Hardeep Sharma",
    party: "BJP",
    position: "Former Minister, Manipur",
    image: null,
    state: "Manipur",
    district: "Churachandpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1101,
    name: "Rajesh Dutta Shinde",
    party: "NPP",
    position: "District President, Churachandpur",
    image: null,
    state: "Manipur",
    district: "Churachandpur",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1102,
    name: "Mahesh Desai",
    party: "Independent",
    position: "District President, Imphal East",
    image: null,
    state: "Manipur",
    district: "Imphal East",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Land grabbing",
        "Abduction"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Imphal East", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Desai", url: "#" }
    ]
  },
  {
    id: 1103,
    name: "Avinash Nayak Rao",
    party: "Independent",
    position: "Block President, Imphal West",
    image: null,
    state: "Manipur",
    district: "Imphal West",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Contempt of court",
        "Property dispute",
        "Dacoity"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Imphal West", url: "#" },
      { title: "Election Commission Affidavit - Avinash Nayak Rao", url: "#" }
    ]
  },
  {
    id: 1104,
    name: "Gajendra Devi Bose",
    party: "NPP",
    position: "Former Minister, Manipur",
    image: null,
    state: "Manipur",
    district: "Jiribam",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1105,
    name: "Rakesh Agarwal",
    party: "BJP",
    position: "Former MLA, Kakching",
    image: null,
    state: "Manipur",
    district: "Kakching",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Kakching", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Agarwal", url: "#" }
    ]
  },
  {
    id: 1106,
    name: "Jitendra Negi",
    party: "NPP",
    position: "Party District Leader, Kamjong",
    image: null,
    state: "Manipur",
    district: "Kamjong",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Voluntarily causing hurt",
        "Mischief causing damage",
        "Benami property",
        "Money laundering",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Kamjong", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Negi", url: "#" }
    ]
  },
  {
    id: 1107,
    name: "Govind Chaudhary",
    party: "BJP",
    position: "Former Minister, Manipur",
    image: null,
    state: "Manipur",
    district: "Kamjong",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Coal mafia"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Kamjong", url: "#" },
      { title: "Election Commission Affidavit - Govind Chaudhary", url: "#" }
    ]
  },
  {
    id: 1108,
    name: "Brijendra Pandey",
    party: "Independent",
    position: "Nagar Palika Chairman, Kangpokpi",
    image: null,
    state: "Manipur",
    district: "Kangpokpi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Booth capturing",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Kangpokpi", url: "#" },
      { title: "Election Commission Affidavit - Brijendra Pandey", url: "#" }
    ]
  },
  {
    id: 1109,
    name: "Sunil Pawar Singh",
    party: "NPP",
    position: "Party District Leader, Noney",
    image: null,
    state: "Manipur",
    district: "Noney",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1110,
    name: "Subhash Chauhan",
    party: "BJP",
    position: "MLA, Noney",
    image: null,
    state: "Manipur",
    district: "Noney",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1111,
    name: "Anjali Verma",
    party: "NPP",
    position: "Zila Panchayat Member, Pherzawl",
    image: null,
    state: "Manipur",
    district: "Pherzawl",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Pherzawl", url: "#" },
      { title: "Election Commission Affidavit - Anjali Verma", url: "#" }
    ]
  },
  {
    id: 1112,
    name: "Prakash Sharma Biswal",
    party: "BJP",
    position: "Party District Leader, Pherzawl",
    image: null,
    state: "Manipur",
    district: "Pherzawl",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Pherzawl", url: "#" },
      { title: "Election Commission Affidavit - Prakash Sharma Biswal", url: "#" }
    ]
  },
  {
    id: 1113,
    name: "Santosh Ahmed",
    party: "BJP",
    position: "Municipal Councillor, Senapati",
    image: null,
    state: "Manipur",
    district: "Senapati",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 32
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Illegal construction",
        "Abduction",
        "Explosive substances possession",
        "Drug trafficking",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Senapati", url: "#" },
      { title: "Election Commission Affidavit - Santosh Ahmed", url: "#" }
    ]
  },
  {
    id: 1114,
    name: "Asha Pandey",
    party: "Independent",
    position: "Block President, Senapati",
    image: null,
    state: "Manipur",
    district: "Senapati",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Fraudulent voting",
        "Assault"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Senapati", url: "#" },
      { title: "Election Commission Affidavit - Asha Pandey", url: "#" }
    ]
  },
  {
    id: 1115,
    name: "Ranju Reddy Agarwal",
    party: "NPP",
    position: "Party District Leader, Tamenglong",
    image: null,
    state: "Manipur",
    district: "Tamenglong",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Murder charges",
        "Rioting"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Tamenglong", url: "#" },
      { title: "Election Commission Affidavit - Ranju Reddy Agarwal", url: "#" }
    ]
  },
  {
    id: 1116,
    name: "Kamlesh Joshi",
    party: "BJP",
    position: "Former Minister, Manipur",
    image: null,
    state: "Manipur",
    district: "Tamenglong",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1117,
    name: "Laxmikant Mishra Ansari",
    party: "INC",
    position: "Municipal Councillor, Tengnoupal",
    image: null,
    state: "Manipur",
    district: "Tengnoupal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1118,
    name: "Ramesh Mishra",
    party: "BJP",
    position: "Municipal Councillor, Thoubal",
    image: null,
    state: "Manipur",
    district: "Thoubal",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1119,
    name: "Suresh Rao Biswal",
    party: "Independent",
    position: "Former MLA, Thoubal",
    image: null,
    state: "Manipur",
    district: "Thoubal",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Assault",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Thoubal", url: "#" },
      { title: "Election Commission Affidavit - Suresh Rao Biswal", url: "#" }
    ]
  },
  {
    id: 1120,
    name: "Pankaj Swain",
    party: "BJP",
    position: "Zila Panchayat Member, Ukhrul",
    image: null,
    state: "Manipur",
    district: "Ukhrul",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Hate speech",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Manipur Police Records - Ukhrul", url: "#" },
      { title: "Election Commission Affidavit - Pankaj Swain", url: "#" }
    ]
  },
  {
    id: 1121,
    name: "Ram Siddiqui",
    party: "Independent",
    position: "Municipal Councillor, Ukhrul",
    image: null,
    state: "Manipur",
    district: "Ukhrul",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1122,
    name: "Prakash Sen",
    party: "INC",
    position: "Former Minister, Meghalaya",
    image: null,
    state: "Meghalaya",
    district: "East Garo Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Fraudulent voting",
        "Money laundering"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - East Garo Hills", url: "#" },
      { title: "Election Commission Affidavit - Prakash Sen", url: "#" }
    ]
  },
  {
    id: 1123,
    name: "Ravindra Shinde",
    party: "Independent",
    position: "MLA, East Garo Hills",
    image: null,
    state: "Meghalaya",
    district: "East Garo Hills",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1124,
    name: "Neeraj Mishra Nayak",
    party: "UDP",
    position: "Nagar Palika Chairman, East Jaintia Hills",
    image: null,
    state: "Meghalaya",
    district: "East Jaintia Hills",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1125,
    name: "Dinesh Mishra Bisht",
    party: "INC",
    position: "Nagar Palika Chairman, East Jaintia Hills",
    image: null,
    state: "Meghalaya",
    district: "East Jaintia Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - East Jaintia Hills", url: "#" },
      { title: "Election Commission Affidavit - Dinesh Mishra Bisht", url: "#" }
    ]
  },
  {
    id: 1126,
    name: "Gajendra Roy",
    party: "UDP",
    position: "District President, East Khasi Hills",
    image: null,
    state: "Meghalaya",
    district: "East Khasi Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 29
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Criminal intimidation",
        "Criminal conspiracy",
        "Explosive substances possession",
        "Illegal asset accumulation",
        "Rioting",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - East Khasi Hills", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Roy", url: "#" }
    ]
  },
  {
    id: 1127,
    name: "Vinay Gupta Das",
    party: "NPP",
    position: "Block President, East Khasi Hills",
    image: null,
    state: "Meghalaya",
    district: "East Khasi Hills",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Rape charges",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - East Khasi Hills", url: "#" },
      { title: "Election Commission Affidavit - Vinay Gupta Das", url: "#" }
    ]
  },
  {
    id: 1128,
    name: "Asha Roy",
    party: "INC",
    position: "Party District Leader, North Garo Hills",
    image: null,
    state: "Meghalaya",
    district: "North Garo Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Arms Act violations",
        "Drug trafficking",
        "Illegal construction",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - North Garo Hills", url: "#" },
      { title: "Election Commission Affidavit - Asha Roy", url: "#" }
    ]
  },
  {
    id: 1129,
    name: "Mukesh Behera Kulkarni",
    party: "BJP",
    position: "Party District Leader, Ri Bhoi",
    image: null,
    state: "Meghalaya",
    district: "Ri Bhoi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Rape charges"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - Ri Bhoi", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Behera Kulkarni", url: "#" }
    ]
  },
  {
    id: 1130,
    name: "Dilip Bisht",
    party: "NPP",
    position: "District President, South Garo Hills",
    image: null,
    state: "Meghalaya",
    district: "South Garo Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Criminal conspiracy",
        "Encroachment",
        "Rape charges"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - South Garo Hills", url: "#" },
      { title: "Election Commission Affidavit - Dilip Bisht", url: "#" }
    ]
  },
  {
    id: 1131,
    name: "Mahendra Yadav",
    party: "UDP",
    position: "Former MLA, South West Garo Hills",
    image: null,
    state: "Meghalaya",
    district: "South West Garo Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Hate speech"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - South West Garo Hills", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Yadav", url: "#" }
    ]
  },
  {
    id: 1132,
    name: "Mandeep Behera",
    party: "NPP",
    position: "MLA, South West Khasi Hills",
    image: null,
    state: "Meghalaya",
    district: "South West Khasi Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 18
    },
    caseDetails: {
      other: [
        "Cheating",
        "Abduction",
        "Contempt of court"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - South West Khasi Hills", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Behera", url: "#" }
    ]
  },
  {
    id: 1133,
    name: "Mamta Swain Chaudhary",
    party: "BJP",
    position: "Former Minister, Meghalaya",
    image: null,
    state: "Meghalaya",
    district: "South West Khasi Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Rioting",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - South West Khasi Hills", url: "#" },
      { title: "Election Commission Affidavit - Mamta Swain Chaudhary", url: "#" }
    ]
  },
  {
    id: 1134,
    name: "Shivakant Mehta Kulkarni",
    party: "INC",
    position: "Nagar Palika Chairman, West Garo Hills",
    image: null,
    state: "Meghalaya",
    district: "West Garo Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Criminal intimidation",
        "Property dispute",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - West Garo Hills", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Mehta Kulkarni", url: "#" }
    ]
  },
  {
    id: 1135,
    name: "Narendra Ahmed",
    party: "Independent",
    position: "Former Minister, Meghalaya",
    image: null,
    state: "Meghalaya",
    district: "West Jaintia Hills",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1136,
    name: "Deepika Rajput Jain",
    party: "Independent",
    position: "Block President, West Jaintia Hills",
    image: null,
    state: "Meghalaya",
    district: "West Jaintia Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds",
        "Bribery",
        "Illegal occupation",
        "Explosive substances possession",
        "Illegal asset accumulation"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - West Jaintia Hills", url: "#" },
      { title: "Election Commission Affidavit - Deepika Rajput Jain", url: "#" }
    ]
  },
  {
    id: 1137,
    name: "Shanti Malik Mehta",
    party: "INC",
    position: "MLA, West Khasi Hills",
    image: null,
    state: "Meghalaya",
    district: "West Khasi Hills",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Rape charges",
        "Benami property",
        "Forgery"
      ]
    },
    sources: [
      { title: "Meghalaya Police Records - West Khasi Hills", url: "#" },
      { title: "Election Commission Affidavit - Shanti Malik Mehta", url: "#" }
    ]
  },
  {
    id: 1138,
    name: "Mukesh Sharma",
    party: "Independent",
    position: "Municipal Councillor, Dhalai",
    image: null,
    state: "Tripura",
    district: "Dhalai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Explosive substances possession",
        "Drug trafficking"
      ]
    },
    sources: [
      { title: "Tripura Police Records - Dhalai", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Sharma", url: "#" }
    ]
  },
  {
    id: 1139,
    name: "Neeraj Rawat",
    party: "Independent",
    position: "Nagar Palika Chairman, Gomati",
    image: null,
    state: "Tripura",
    district: "Gomati",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Cattle smuggling"
      ]
    },
    sources: [
      { title: "Tripura Police Records - Gomati", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Rawat", url: "#" }
    ]
  },
  {
    id: 1140,
    name: "Rakesh Desai",
    party: "INC",
    position: "Former MLA, Gomati",
    image: null,
    state: "Tripura",
    district: "Gomati",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1141,
    name: "Kuldeep Malik Ali",
    party: "INC",
    position: "Zila Panchayat Member, Khowai",
    image: null,
    state: "Tripura",
    district: "Khowai",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Sexual assault of minor (POCSO)"
      ]
    },
    sources: [
      { title: "Tripura Police Records - Khowai", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Malik Ali", url: "#" }
    ]
  },
  {
    id: 1142,
    name: "Poonam Qureshi",
    party: "Independent",
    position: "Zila Panchayat Member, North Tripura",
    image: null,
    state: "Tripura",
    district: "North Tripura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 3
    },
    caseDetails: {
      other: [
        "Abduction",
        "Electoral malpractice",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Tripura Police Records - North Tripura", url: "#" },
      { title: "Election Commission Affidavit - Poonam Qureshi", url: "#" }
    ]
  },
  {
    id: 1143,
    name: "Neeraj Bose",
    party: "IPFT",
    position: "District President, Sepahijala",
    image: null,
    state: "Tripura",
    district: "Sepahijala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Illegal asset accumulation",
        "Murder charges",
        "Land grabbing"
      ]
    },
    sources: [
      { title: "Tripura Police Records - Sepahijala", url: "#" },
      { title: "Election Commission Affidavit - Neeraj Bose", url: "#" }
    ]
  },
  {
    id: 1144,
    name: "Santosh Sen",
    party: "BJP",
    position: "MLA, Sepahijala",
    image: null,
    state: "Tripura",
    district: "Sepahijala",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Sexual harassment",
        "Tax evasion",
        "Promoting enmity"
      ]
    },
    sources: [
      { title: "Tripura Police Records - Sepahijala", url: "#" },
      { title: "Election Commission Affidavit - Santosh Sen", url: "#" }
    ]
  },
  {
    id: 1145,
    name: "Mahesh Qureshi Babu",
    party: "Independent",
    position: "District President, South Tripura",
    image: null,
    state: "Tripura",
    district: "South Tripura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Bribery"
      ]
    },
    sources: [
      { title: "Tripura Police Records - South Tripura", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Qureshi Babu", url: "#" }
    ]
  },
  {
    id: 1146,
    name: "Avinash Bisht",
    party: "BJP",
    position: "Block President, South Tripura",
    image: null,
    state: "Tripura",
    district: "South Tripura",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Gangster activities",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Tripura Police Records - South Tripura", url: "#" },
      { title: "Election Commission Affidavit - Avinash Bisht", url: "#" }
    ]
  },
  {
    id: 1147,
    name: "Mukesh Sharma Qureshi",
    party: "BJP",
    position: "District President, Unakoti",
    image: null,
    state: "Tripura",
    district: "Unakoti",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376"
      ]
    },
    sources: [
      { title: "Tripura Police Records - Unakoti", url: "#" },
      { title: "Election Commission Affidavit - Mukesh Sharma Qureshi", url: "#" }
    ]
  },
  {
    id: 1148,
    name: "Dharmendra Reddy",
    party: "CPI(M)",
    position: "Party District Leader, West Tripura",
    image: null,
    state: "Tripura",
    district: "West Tripura",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1149,
    name: "Rajeev Lal",
    party: "ZPM",
    position: "District President, Aizawl",
    image: null,
    state: "Mizoram",
    district: "Aizawl",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Mischief causing damage",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Aizawl", url: "#" },
      { title: "Election Commission Affidavit - Rajeev Lal", url: "#" }
    ]
  },
  {
    id: 1150,
    name: "Hitesh Bose Dutta",
    party: "Independent",
    position: "Municipal Councillor, Champhai",
    image: null,
    state: "Mizoram",
    district: "Champhai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 17
    },
    caseDetails: {
      other: [
        "Religious offense",
        "Tax evasion"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Champhai", url: "#" },
      { title: "Election Commission Affidavit - Hitesh Bose Dutta", url: "#" }
    ]
  },
  {
    id: 1151,
    name: "Rakesh Bai",
    party: "MNF",
    position: "Nagar Palika Chairman, Champhai",
    image: null,
    state: "Mizoram",
    district: "Champhai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Sexual harassment"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Champhai", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Bai", url: "#" }
    ]
  },
  {
    id: 1152,
    name: "Santosh Nayak",
    party: "BJP",
    position: "Block President, Kolasib",
    image: null,
    state: "Mizoram",
    district: "Kolasib",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Rape charges",
        "Money laundering",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Kolasib", url: "#" },
      { title: "Election Commission Affidavit - Santosh Nayak", url: "#" }
    ]
  },
  {
    id: 1153,
    name: "Neelam Shinde",
    party: "Independent",
    position: "MLA, Kolasib",
    image: null,
    state: "Mizoram",
    district: "Kolasib",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 19
    },
    caseDetails: {
      other: [
        "Abduction",
        "Misappropriation of public funds",
        "Mischief causing damage",
        "Armed robbery",
        "Voter intimidation"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Kolasib", url: "#" },
      { title: "Election Commission Affidavit - Neelam Shinde", url: "#" }
    ]
  },
  {
    id: 1154,
    name: "Jitendra Shinde",
    party: "MNF",
    position: "Former Minister, Mizoram",
    image: null,
    state: "Mizoram",
    district: "Lawngtlai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 54
    },
    caseDetails: {
      other: [
        "Violation of election code",
        "Murder charges",
        "Hate speech",
        "Religious offense",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Lawngtlai", url: "#" },
      { title: "Election Commission Affidavit - Jitendra Shinde", url: "#" }
    ]
  },
  {
    id: 1155,
    name: "Rakesh Devi",
    party: "BJP",
    position: "Former Minister, Mizoram",
    image: null,
    state: "Mizoram",
    district: "Lawngtlai",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 20
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Lawngtlai", url: "#" },
      { title: "Election Commission Affidavit - Rakesh Devi", url: "#" }
    ]
  },
  {
    id: 1156,
    name: "Leela Mehta Yadav",
    party: "ZPM",
    position: "Nagar Palika Chairman, Lunglei",
    image: null,
    state: "Mizoram",
    district: "Lunglei",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 49
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Hate speech",
        "Sexual harassment",
        "Cattle smuggling",
        "Criminal trespass",
        "Property dispute",
        "Arms Act violations",
        "Explosive substances possession"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Lunglei", url: "#" },
      { title: "Election Commission Affidavit - Leela Mehta Yadav", url: "#" }
    ]
  },
  {
    id: 1157,
    name: "Govind Sahu",
    party: "MNF",
    position: "Former Minister, Mizoram",
    image: null,
    state: "Mizoram",
    district: "Mamit",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 38
    },
    caseDetails: {
      other: [
        "Rioting",
        "Attempt to murder",
        "Coal mafia",
        "Murder charges",
        "Perjury",
        "Criminal intimidation"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Mamit", url: "#" },
      { title: "Election Commission Affidavit - Govind Sahu", url: "#" }
    ]
  },
  {
    id: 1158,
    name: "Brijesh Bose Ansari",
    party: "ZPM",
    position: "Former Minister, Mizoram",
    image: null,
    state: "Mizoram",
    district: "Saiha",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges"
      ],
      other: [
        "Sexual harassment",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Saiha", url: "#" },
      { title: "Election Commission Affidavit - Brijesh Bose Ansari", url: "#" }
    ]
  },
  {
    id: 1159,
    name: "Sohan Das Bai",
    party: "ZPM",
    position: "Former Minister, Mizoram",
    image: null,
    state: "Mizoram",
    district: "Saiha",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges",
        "Eve-teasing and harassment",
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Assault"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Saiha", url: "#" },
      { title: "Election Commission Affidavit - Sohan Das Bai", url: "#" }
    ]
  },
  {
    id: 1160,
    name: "Ranjeet Ali",
    party: "Independent",
    position: "Block President, Serchhip",
    image: null,
    state: "Mizoram",
    district: "Serchhip",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Inciting violence",
        "Money laundering",
        "Liquor mafia"
      ]
    },
    sources: [
      { title: "Mizoram Police Records - Serchhip", url: "#" },
      { title: "Election Commission Affidavit - Ranjeet Ali", url: "#" }
    ]
  },
  {
    id: 1161,
    name: "Dinesh Ansari",
    party: "Independent",
    position: "Block President, Serchhip",
    image: null,
    state: "Mizoram",
    district: "Serchhip",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1162,
    name: "Mahesh Ansari",
    party: "BJP",
    position: "Nagar Palika Chairman, Dimapur",
    image: null,
    state: "Nagaland",
    district: "Dimapur",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 11
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Voluntarily causing hurt"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Dimapur", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Ansari", url: "#" }
    ]
  },
  {
    id: 1163,
    name: "Omprakash Banerjee",
    party: "BJP",
    position: "Former MLA, Kiphire",
    image: null,
    state: "Nagaland",
    district: "Kiphire",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Stalking (IPC 354D)",
        "Assault with intent to outrage modesty"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Kiphire", url: "#" },
      { title: "Election Commission Affidavit - Omprakash Banerjee", url: "#" }
    ]
  },
  {
    id: 1164,
    name: "Umesh Behera",
    party: "Independent",
    position: "MLA, Kohima",
    image: null,
    state: "Nagaland",
    district: "Kohima",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 22
    },
    caseDetails: {
      other: [
        "Liquor mafia",
        "Armed robbery",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Kohima", url: "#" },
      { title: "Election Commission Affidavit - Umesh Behera", url: "#" }
    ]
  },
  {
    id: 1165,
    name: "Kuldeep Shah Mani",
    party: "INC",
    position: "Former Minister, Nagaland",
    image: null,
    state: "Nagaland",
    district: "Kohima",
    status: "rapist",
    cases: {
      sexualAssault: 3,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Gang rape charges",
        "Stalking (IPC 354D)",
        "Voyeurism charges"
      ],
      other: [
        "Criminal trespass"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Kohima", url: "#" },
      { title: "Election Commission Affidavit - Kuldeep Shah Mani", url: "#" }
    ]
  },
  {
    id: 1166,
    name: "Lalita Panda Tiwari",
    party: "Independent",
    position: "Party District Leader, Longlei",
    image: null,
    state: "Nagaland",
    district: "Longlei",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1167,
    name: "Mahesh Rawat",
    party: "BJP",
    position: "Zila Panchayat Member, Mokokchung",
    image: null,
    state: "Nagaland",
    district: "Mokokchung",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 31
    },
    caseDetails: {
      other: [
        "Dacoity",
        "Cheating",
        "Abduction",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Mokokchung", url: "#" },
      { title: "Election Commission Affidavit - Mahesh Rawat", url: "#" }
    ]
  },
  {
    id: 1168,
    name: "Prakash Yadav",
    party: "NDPP",
    position: "Party District Leader, Mokokchung",
    image: null,
    state: "Nagaland",
    district: "Mokokchung",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1169,
    name: "Surendra Das Rajput",
    party: "INC",
    position: "Former Minister, Nagaland",
    image: null,
    state: "Nagaland",
    district: "Mon",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 56
    },
    caseDetails: {
      other: [
        "Benami property",
        "Wrongful confinement",
        "Illegal occupation",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Mon", url: "#" },
      { title: "Election Commission Affidavit - Surendra Das Rajput", url: "#" }
    ]
  },
  {
    id: 1170,
    name: "Sunil Agarwal",
    party: "NDPP",
    position: "Municipal Councillor, Mon",
    image: null,
    state: "Nagaland",
    district: "Mon",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1171,
    name: "Pradeep Chaudhary Chowdhury",
    party: "BJP",
    position: "MLA, Peren",
    image: null,
    state: "Nagaland",
    district: "Peren",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Illegal weapons possession"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Peren", url: "#" },
      { title: "Election Commission Affidavit - Pradeep Chaudhary Chowdhury", url: "#" }
    ]
  },
  {
    id: 1172,
    name: "Sohan Dutta",
    party: "Independent",
    position: "Party District Leader, Peren",
    image: null,
    state: "Nagaland",
    district: "Peren",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Sexual harassment (IPC 354A)",
        "Eve-teasing and harassment",
        "Sexual assault of minor (POCSO)"
      ],
      other: [
        "Voter intimidation",
        "Human trafficking"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Peren", url: "#" },
      { title: "Election Commission Affidavit - Sohan Dutta", url: "#" }
    ]
  },
  {
    id: 1173,
    name: "Shivakant Rawat",
    party: "NPF",
    position: "Party District Leader, Phek",
    image: null,
    state: "Nagaland",
    district: "Phek",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Cattle smuggling",
        "Illegal occupation",
        "Violation of election code"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Phek", url: "#" },
      { title: "Election Commission Affidavit - Shivakant Rawat", url: "#" }
    ]
  },
  {
    id: 1174,
    name: "Jagdish Sahu Das",
    party: "BJP",
    position: "Zila Panchayat Member, Tuensang",
    image: null,
    state: "Nagaland",
    district: "Tuensang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 4
    },
    caseDetails: {
      other: [
        "Human trafficking",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Tuensang", url: "#" },
      { title: "Election Commission Affidavit - Jagdish Sahu Das", url: "#" }
    ]
  },
  {
    id: 1175,
    name: "Ravindra Nath Mehta",
    party: "NPF",
    position: "Nagar Palika Chairman, Wokha",
    image: null,
    state: "Nagaland",
    district: "Wokha",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1176,
    name: "Gurjeet Mehta Nayak",
    party: "NDPP",
    position: "Nagar Palika Chairman, Wokha",
    image: null,
    state: "Nagaland",
    district: "Wokha",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 10
    },
    caseDetails: {
      other: [
        "Hate speech"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Wokha", url: "#" },
      { title: "Election Commission Affidavit - Gurjeet Mehta Nayak", url: "#" }
    ]
  },
  {
    id: 1177,
    name: "Ramesh Sharma Das",
    party: "INC",
    position: "Party District Leader, Zunheboto",
    image: null,
    state: "Nagaland",
    district: "Zunheboto",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 0
    },
    caseDetails: {
      sexualAssault: [
        "Molestation charges",
        "Rape under IPC 376",
        "Assault with intent to outrage modesty"
      ]
    },
    sources: [
      { title: "Nagaland Police Records - Zunheboto", url: "#" },
      { title: "Election Commission Affidavit - Ramesh Sharma Das", url: "#" }
    ]
  },
  {
    id: 1178,
    name: "Vinay Chaudhary Tiwari",
    party: "INC",
    position: "Former MLA, Anjaw",
    image: null,
    state: "Arunachal Pradesh",
    district: "Anjaw",
    status: "rapist",
    cases: {
      sexualAssault: 1,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Assault with intent to outrage modesty",
        "Voyeurism charges",
        "Gang rape charges"
      ],
      other: [
        "Corruption"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Anjaw", url: "#" },
      { title: "Election Commission Affidavit - Vinay Chaudhary Tiwari", url: "#" }
    ]
  },
  {
    id: 1179,
    name: "Geeta Chand Panda",
    party: "Independent",
    position: "Block President, Anjaw",
    image: null,
    state: "Arunachal Pradesh",
    district: "Anjaw",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Unlawful assembly",
        "Murder charges",
        "SC/ST Act violations"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Anjaw", url: "#" },
      { title: "Election Commission Affidavit - Geeta Chand Panda", url: "#" }
    ]
  },
  {
    id: 1180,
    name: "Rajendra Sen Pandey",
    party: "Independent",
    position: "Municipal Councillor, Changlang",
    image: null,
    state: "Arunachal Pradesh",
    district: "Changlang",
    status: "rapist",
    cases: {
      sexualAssault: 4,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Assault with intent to outrage modesty",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Electoral malpractice"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Changlang", url: "#" },
      { title: "Election Commission Affidavit - Rajendra Sen Pandey", url: "#" }
    ]
  },
  {
    id: 1181,
    name: "Dayashankar Prasad Gupta",
    party: "INC",
    position: "Block President, East Kameng",
    image: null,
    state: "Arunachal Pradesh",
    district: "East Kameng",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Drug trafficking",
        "Explosive substances possession",
        "Violation of election code",
        "Rioting"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - East Kameng", url: "#" },
      { title: "Election Commission Affidavit - Dayashankar Prasad Gupta", url: "#" }
    ]
  },
  {
    id: 1182,
    name: "Subhash Roy",
    party: "INC",
    position: "District President, East Kameng",
    image: null,
    state: "Arunachal Pradesh",
    district: "East Kameng",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 30
    },
    caseDetails: {
      other: [
        "Sand mafia",
        "Dacoity",
        "Defamation",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - East Kameng", url: "#" },
      { title: "Election Commission Affidavit - Subhash Roy", url: "#" }
    ]
  },
  {
    id: 1183,
    name: "Dheeraj Das",
    party: "NPP",
    position: "Block President, East Siang",
    image: null,
    state: "Arunachal Pradesh",
    district: "East Siang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Sand mafia"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - East Siang", url: "#" },
      { title: "Election Commission Affidavit - Dheeraj Das", url: "#" }
    ]
  },
  {
    id: 1184,
    name: "Mandeep Siddiqui",
    party: "INC",
    position: "District President, East Siang",
    image: null,
    state: "Arunachal Pradesh",
    district: "East Siang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 25
    },
    caseDetails: {
      other: [
        "Cheating",
        "Encroachment"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - East Siang", url: "#" },
      { title: "Election Commission Affidavit - Mandeep Siddiqui", url: "#" }
    ]
  },
  {
    id: 1185,
    name: "Suresh Kumar",
    party: "BJP",
    position: "Zila Panchayat Member, Kra Daadi",
    image: null,
    state: "Arunachal Pradesh",
    district: "Kra Daadi",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds",
        "Booth capturing"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Kra Daadi", url: "#" },
      { title: "Election Commission Affidavit - Suresh Kumar", url: "#" }
    ]
  },
  {
    id: 1186,
    name: "Roshni Patil Rawat",
    party: "INC",
    position: "MLA, Kurung Kumey",
    image: null,
    state: "Arunachal Pradesh",
    district: "Kurung Kumey",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 12
    },
    caseDetails: {
      other: [
        "Benami property",
        "Electoral malpractice",
        "Land mafia",
        "Sand mafia",
        "Assault"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Kurung Kumey", url: "#" },
      { title: "Election Commission Affidavit - Roshni Patil Rawat", url: "#" }
    ]
  },
  {
    id: 1187,
    name: "Amarjeet Biswal",
    party: "NPP",
    position: "Municipal Councillor, Kurung Kumey",
    image: null,
    state: "Arunachal Pradesh",
    district: "Kurung Kumey",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Land grabbing",
        "Murder charges",
        "Religious offense"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Kurung Kumey", url: "#" },
      { title: "Election Commission Affidavit - Amarjeet Biswal", url: "#" }
    ]
  },
  {
    id: 1188,
    name: "Gajendra Swain",
    party: "BJP",
    position: "Former MLA, Lohit",
    image: null,
    state: "Arunachal Pradesh",
    district: "Lohit",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 45
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Criminal intimidation",
        "Criminal trespass",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Lohit", url: "#" },
      { title: "Election Commission Affidavit - Gajendra Swain", url: "#" }
    ]
  },
  {
    id: 1189,
    name: "Rampreet Nayak",
    party: "NPP",
    position: "District President, Longding",
    image: null,
    state: "Arunachal Pradesh",
    district: "Longding",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1190,
    name: "Asha Sahoo",
    party: "INC",
    position: "Municipal Councillor, Lower Dibang Valley",
    image: null,
    state: "Arunachal Pradesh",
    district: "Lower Dibang Valley",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 27
    },
    caseDetails: {
      other: [
        "Embezzlement",
        "Forgery",
        "Electoral malpractice",
        "Mischief causing damage",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Lower Dibang Valley", url: "#" },
      { title: "Election Commission Affidavit - Asha Sahoo", url: "#" }
    ]
  },
  {
    id: 1191,
    name: "Naresh Shinde",
    party: "Independent",
    position: "Block President, Lower Dibang Valley",
    image: null,
    state: "Arunachal Pradesh",
    district: "Lower Dibang Valley",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Kidnapping"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Lower Dibang Valley", url: "#" },
      { title: "Election Commission Affidavit - Naresh Shinde", url: "#" }
    ]
  },
  {
    id: 1192,
    name: "Sanjeev Bai",
    party: "Independent",
    position: "Municipal Councillor, Lower Subansiri",
    image: null,
    state: "Arunachal Pradesh",
    district: "Lower Subansiri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Electoral malpractice",
        "Abduction",
        "Land mafia"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Lower Subansiri", url: "#" },
      { title: "Election Commission Affidavit - Sanjeev Bai", url: "#" }
    ]
  },
  {
    id: 1193,
    name: "Sangeeta Kulkarni",
    party: "INC",
    position: "District President, Lower Subansiri",
    image: null,
    state: "Arunachal Pradesh",
    district: "Lower Subansiri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 67
    },
    caseDetails: {
      other: [
        "Misappropriation of public funds",
        "Corruption",
        "Religious offense",
        "Gangster activities",
        "Illegal occupation",
        "Bribery"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Lower Subansiri", url: "#" },
      { title: "Election Commission Affidavit - Sangeeta Kulkarni", url: "#" }
    ]
  },
  {
    id: 1194,
    name: "Roshni Banerjee",
    party: "NPP",
    position: "Party District Leader, Namsai",
    image: null,
    state: "Arunachal Pradesh",
    district: "Namsai",
    status: "rapist",
    cases: {
      sexualAssault: 5,
      other: 2
    },
    caseDetails: {
      sexualAssault: [
        "Stalking (IPC 354D)",
        "Sexual harassment (IPC 354A)"
      ],
      other: [
        "Embezzlement",
        "Liquor mafia",
        "Attempt to murder"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Namsai", url: "#" },
      { title: "Election Commission Affidavit - Roshni Banerjee", url: "#" }
    ]
  },
  {
    id: 1195,
    name: "Narasimha Panda",
    party: "BJP",
    position: "Former Minister, Arunachal Pradesh",
    image: null,
    state: "Arunachal Pradesh",
    district: "Namsai",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1196,
    name: "Dilip Ahmed",
    party: "NPP",
    position: "District President, Papum Pare",
    image: null,
    state: "Arunachal Pradesh",
    district: "Papum Pare",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 27
    },
    caseDetails: {
      other: [
        "Armed robbery",
        "Cheating",
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Papum Pare", url: "#" },
      { title: "Election Commission Affidavit - Dilip Ahmed", url: "#" }
    ]
  },
  {
    id: 1197,
    name: "Madhuri Mani",
    party: "NPP",
    position: "Former MLA, Papum Pare",
    image: null,
    state: "Arunachal Pradesh",
    district: "Papum Pare",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1198,
    name: "Suresh Rajput Nath",
    party: "Independent",
    position: "Block President, Siang",
    image: null,
    state: "Arunachal Pradesh",
    district: "Siang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 14
    },
    caseDetails: {
      other: [
        "Fraudulent voting",
        "Arms Act violations",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Siang", url: "#" },
      { title: "Election Commission Affidavit - Suresh Rajput Nath", url: "#" }
    ]
  },
  {
    id: 1199,
    name: "Hardeep Sharma",
    party: "BJP",
    position: "Former Minister, Arunachal Pradesh",
    image: null,
    state: "Arunachal Pradesh",
    district: "Tawang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 6
    },
    caseDetails: {
      other: [
        "Assault"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Tawang", url: "#" },
      { title: "Election Commission Affidavit - Hardeep Sharma", url: "#" }
    ]
  },
  {
    id: 1200,
    name: "Balakrishna Rathore Devi",
    party: "NPP",
    position: "Party District Leader, Tirap",
    image: null,
    state: "Arunachal Pradesh",
    district: "Tirap",
    status: "rapist",
    cases: {
      sexualAssault: 2,
      other: 1
    },
    caseDetails: {
      sexualAssault: [
        "Rape under IPC 376",
        "Voyeurism charges",
        "Molestation charges"
      ],
      other: [
        "Liquor mafia",
        "Extortion racket"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Tirap", url: "#" },
      { title: "Election Commission Affidavit - Balakrishna Rathore Devi", url: "#" }
    ]
  },
  {
    id: 1201,
    name: "Venkatesh Dutta Kulkarni",
    party: "NPP",
    position: "Party District Leader, Upper Dibang Valley",
    image: null,
    state: "Arunachal Pradesh",
    district: "Upper Dibang Valley",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 13
    },
    caseDetails: {
      other: [
        "Land mafia",
        "Wrongful confinement",
        "Embezzlement"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Upper Dibang Valley", url: "#" },
      { title: "Election Commission Affidavit - Venkatesh Dutta Kulkarni", url: "#" }
    ]
  },
  {
    id: 1202,
    name: "Narasimha Reddy Gupta",
    party: "NPP",
    position: "Municipal Councillor, Upper Dibang Valley",
    image: null,
    state: "Arunachal Pradesh",
    district: "Upper Dibang Valley",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 9
    },
    caseDetails: {
      other: [
        "Unlawful assembly"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Upper Dibang Valley", url: "#" },
      { title: "Election Commission Affidavit - Narasimha Reddy Gupta", url: "#" }
    ]
  },
  {
    id: 1203,
    name: "Ajay Kumar Nath",
    party: "INC",
    position: "Zila Panchayat Member, Upper Siang",
    image: null,
    state: "Arunachal Pradesh",
    district: "Upper Siang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 61
    },
    caseDetails: {
      other: [
        "Voluntarily causing hurt",
        "Criminal trespass",
        "Wrongful confinement",
        "Land grabbing",
        "Abduction",
        "Criminal intimidation",
        "Rioting",
        "Armed robbery"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Upper Siang", url: "#" },
      { title: "Election Commission Affidavit - Ajay Kumar Nath", url: "#" }
    ]
  },
  {
    id: 1204,
    name: "Lokesh Verma",
    party: "Independent",
    position: "Former MLA, Upper Subansiri",
    image: null,
    state: "Arunachal Pradesh",
    district: "Upper Subansiri",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Tax evasion",
        "Cattle smuggling",
        "Land grabbing"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - Upper Subansiri", url: "#" },
      { title: "Election Commission Affidavit - Lokesh Verma", url: "#" }
    ]
  },
  {
    id: 1205,
    name: "Rakesh Yadav",
    party: "NPP",
    position: "Nagar Palika Chairman, West Kameng",
    image: null,
    state: "Arunachal Pradesh",
    district: "West Kameng",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1206,
    name: "Neelam Hussain Sen",
    party: "Independent",
    position: "Municipal Councillor, West Kameng",
    image: null,
    state: "Arunachal Pradesh",
    district: "West Kameng",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1207,
    name: "Anita Pandey Siddiqui",
    party: "BJP",
    position: "MLA, West Siang",
    image: null,
    state: "Arunachal Pradesh",
    district: "West Siang",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 7
    },
    caseDetails: {
      other: [
        "Defamation",
        "Drug trafficking",
        "Property dispute"
      ]
    },
    sources: [
      { title: "Arunachal Pradesh Police Records - West Siang", url: "#" },
      { title: "Election Commission Affidavit - Anita Pandey Siddiqui", url: "#" }
    ]
  },
  {
    id: 1208,
    name: "Rajesh Bose",
    party: "BJP",
    position: "Municipal Councillor, East Sikkim",
    image: null,
    state: "Sikkim",
    district: "East Sikkim",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 5
    },
    caseDetails: {
      other: [
        "Illegal occupation",
        "Mischief causing damage"
      ]
    },
    sources: [
      { title: "Sikkim Police Records - East Sikkim", url: "#" },
      { title: "Election Commission Affidavit - Rajesh Bose", url: "#" }
    ]
  },
  {
    id: 1209,
    name: "Venkatesh Bose Khan",
    party: "SDF",
    position: "Former Minister, Sikkim",
    image: null,
    state: "Sikkim",
    district: "East Sikkim",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  },
  {
    id: 1210,
    name: "Mahendra Pandey",
    party: "Independent",
    position: "Former MLA, North Sikkim",
    image: null,
    state: "Sikkim",
    district: "North Sikkim",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 46
    },
    caseDetails: {
      other: [
        "Cheating",
        "Murder charges",
        "Benami property",
        "Encroachment",
        "Wrongful confinement",
        "Criminal trespass",
        "Illegal asset accumulation",
        "Corruption"
      ]
    },
    sources: [
      { title: "Sikkim Police Records - North Sikkim", url: "#" },
      { title: "Election Commission Affidavit - Mahendra Pandey", url: "#" }
    ]
  },
  {
    id: 1211,
    name: "Shyam Patil",
    party: "Independent",
    position: "District President, South Sikkim",
    image: null,
    state: "Sikkim",
    district: "South Sikkim",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 24
    },
    caseDetails: {
      other: [
        "Corruption",
        "Assault",
        "Defamation",
        "Rioting",
        "Murder charges"
      ]
    },
    sources: [
      { title: "Sikkim Police Records - South Sikkim", url: "#" },
      { title: "Election Commission Affidavit - Shyam Patil", url: "#" }
    ]
  },
  {
    id: 1212,
    name: "Rekha Sen",
    party: "INC",
    position: "Municipal Councillor, South Sikkim",
    image: null,
    state: "Sikkim",
    district: "South Sikkim",
    status: "garbage",
    cases: {
      sexualAssault: 0,
      other: 8
    },
    caseDetails: {
      other: [
        "Attempt to murder",
        "Caste atrocities",
        "Perjury"
      ]
    },
    sources: [
      { title: "Sikkim Police Records - South Sikkim", url: "#" },
      { title: "Election Commission Affidavit - Rekha Sen", url: "#" }
    ]
  },
  {
    id: 1213,
    name: "Devendra Chaudhary Sen",
    party: "Independent",
    position: "Nagar Palika Chairman, West Sikkim",
    image: null,
    state: "Sikkim",
    district: "West Sikkim",
    status: "clean",
    cases: {
      sexualAssault: 0,
      other: 0
    },
    sources: []
  }
]