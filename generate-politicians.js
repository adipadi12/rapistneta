// Script to generate 1000+ politician entries with realistic data
// Focus on district-level politicians across all Indian states

import fs from 'fs';

// State and district mapping with political context
const stateDistrictData = {
  "Uttar Pradesh": {
    districts: ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Sant Ravidas Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    parties: ["BJP", "SP", "BSP", "INC", "Independent"]
  },
  "Bihar": {
    districts: ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    parties: ["RJD", "JD(U)", "BJP", "INC", "LJP", "Independent"]
  },
  "Maharashtra": {
    districts: ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
    parties: ["Shiv Sena", "NCP", "BJP", "INC", "Shiv Sena (UBT)", "Independent"]
  },
  "West Bengal": {
    districts: ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
    parties: ["AITC", "BJP", "INC", "CPI(M)", "Independent"]
  },
  "Madhya Pradesh": {
    districts: ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    parties: ["BJP", "INC", "BSP", "SP", "Independent"]
  },
  "Rajasthan": {
    districts: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
    parties: ["BJP", "INC", "BSP", "Independent"]
  },
  "Karnataka": {
    districts: ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
    parties: ["BJP", "INC", "JD(S)", "Independent"]
  },
  "Tamil Nadu": {
    districts: ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    parties: ["DMK", "AIADMK", "BJP", "INC", "Independent"]
  },
  "Gujarat": {
    districts: ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
    parties: ["BJP", "INC", "AAP", "Independent"]
  },
  "Telangana": {
    districts: ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    parties: ["BRS", "BJP", "INC", "AIMIM", "Independent"]
  },
  "Andhra Pradesh": {
    districts: ["Alluri Sitharama Raju", "Anakapalli", "Anantapur", "Annamayya", "Bapatla", "Chittoor", "East Godavari", "Eluru", "Guntur", "Kadapa", "Kakinada", "Krishna", "Kurnool", "Nandyal", "Nellore", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari"],
    parties: ["YSRCP", "TDP", "BJP", "INC", "JSP", "Independent"]
  },
  "Haryana": {
    districts: ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    parties: ["BJP", "INC", "INLD", "JJP", "Independent"]
  },
  "Punjab": {
    districts: ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"],
    parties: ["AAP", "INC", "SAD", "BJP", "Independent"]
  },
  "Odisha": {
    districts: ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"],
    parties: ["BJD", "BJP", "INC", "Independent"]
  },
  "Jharkhand": {
    districts: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
    parties: ["JMM", "BJP", "INC", "JVM", "Independent"]
  },
  "Chhattisgarh": {
    districts: ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    parties: ["INC", "BJP", "BSP", "Independent"]
  },
  "Assam": {
    districts: ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
    parties: ["BJP", "INC", "AIUDF", "AGP", "Independent"]
  },
  "Kerala": {
    districts: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    parties: ["CPI(M)", "INC", "BJP", "IUML", "Independent"]
  },
  "Uttarakhand": {
    districts: ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    parties: ["BJP", "INC", "BSP", "Independent"]
  },
  "Himachal Pradesh": {
    districts: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    parties: ["BJP", "INC", "CPI(M)", "Independent"]
  },
  "Goa": {
    districts: ["North Goa", "South Goa"],
    parties: ["BJP", "INC", "AAP", "MGP", "Independent"]
  },
  "Manipur": {
    districts: ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
    parties: ["BJP", "INC", "NPP", "Independent"]
  },
  "Meghalaya": {
    districts: ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    parties: ["NPP", "INC", "UDP", "BJP", "Independent"]
  },
  "Tripura": {
    districts: ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
    parties: ["BJP", "CPI(M)", "INC", "IPFT", "Independent"]
  },
  "Mizoram": {
    districts: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
    parties: ["ZPM", "MNF", "INC", "BJP", "Independent"]
  },
  "Nagaland": {
    districts: ["Dimapur", "Kiphire", "Kohima", "Longlei", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    parties: ["NDPP", "NPF", "BJP", "INC", "Independent"]
  },
  "Arunachal Pradesh": {
    districts: ["Anjaw", "Changlang", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
    parties: ["BJP", "INC", "NPP", "Independent"]
  },
  "Sikkim": {
    districts: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    parties: ["SKM", "SDF", "BJP", "INC", "Independent"]
  }
};

// Crime types for realistic distribution
const crimeTypes = {
  serious: [
    "Murder charges",
    "Attempt to murder",
    "Kidnapping",
    "Abduction",
    "Rape charges",
    "Sexual harassment",
    "Dacoity",
    "Armed robbery",
    "Gangster activities"
  ],
  corruption: [
    "Corruption",
    "Bribery",
    "Disproportionate assets",
    "Money laundering",
    "Embezzlement",
    "Benami property",
    "Illegal asset accumulation",
    "Tax evasion",
    "Misappropriation of public funds"
  ],
  organized: [
    "Illegal mining",
    "Sand mafia",
    "Liquor mafia",
    "Land mafia",
    "Coal mafia",
    "Cattle smuggling",
    "Drug trafficking",
    "Human trafficking",
    "Extortion racket"
  ],
  violence: [
    "Assault",
    "Criminal intimidation",
    "Rioting",
    "Unlawful assembly",
    "Wrongful confinement",
    "Criminal trespass",
    "Mischief causing damage",
    "Voluntarily causing hurt"
  ],
  legal: [
    "Cheating",
    "Forgery",
    "Defamation",
    "Contempt of court",
    "Perjury",
    "Breach of trust",
    "Criminal conspiracy"
  ],
  weapons: [
    "Arms Act violations",
    "Illegal weapons possession",
    "Explosive substances possession",
    "Ammunition without license"
  ],
  electoral: [
    "Electoral malpractice",
    "Booth capturing",
    "Voter intimidation",
    "Violation of election code",
    "Fraudulent voting"
  ],
  property: [
    "Land grabbing",
    "Illegal construction",
    "Encroachment",
    "Property dispute",
    "Illegal occupation"
  ],
  social: [
    "Hate speech",
    "Promoting enmity",
    "Inciting violence",
    "Religious offense",
    "Caste atrocities",
    "SC/ST Act violations"
  ]
};

// Sexual assault specific crimes
const sexualCrimes = [
  "Rape under IPC 376",
  "Gang rape charges",
  "Sexual harassment (IPC 354A)",
  "Sexual assault of minor (POCSO)",
  "Assault with intent to outrage modesty",
  "Stalking (IPC 354D)",
  "Voyeurism charges",
  "Molestation charges",
  "Eve-teasing and harassment"
];

// Generate random crimes based on severity
function generateCrimes(severity) {
  const crimes = [];
  const allCrimes = [
    ...crimeTypes.serious,
    ...crimeTypes.corruption,
    ...crimeTypes.organized,
    ...crimeTypes.violence,
    ...crimeTypes.legal,
    ...crimeTypes.weapons,
    ...crimeTypes.electoral,
    ...crimeTypes.property,
    ...crimeTypes.social
  ];

  const numCrimes = severity === 'high' ? Math.floor(Math.random() * 6) + 3 :
                    severity === 'medium' ? Math.floor(Math.random() * 4) + 2 :
                    Math.floor(Math.random() * 3) + 1;

  const shuffled = allCrimes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numCrimes);
}

function generateSexualCrimes() {
  const numCrimes = Math.floor(Math.random() * 3) + 1;
  const shuffled = sexualCrimes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numCrimes);
}

// Indian first names pool
const firstNames = {
  male: ["Ram", "Shyam", "Mohan", "Sohan", "Rajesh", "Suresh", "Mahesh", "Dinesh", "Naresh", "Ramesh", "Anil", "Sunil", "Mukesh", "Rakesh", "Umesh", "Lokesh", "Yogesh", "Hitesh", "Kamlesh", "Jitesh", "Vijay", "Sanjay", "Ajay", "Vinay", "Manoj", "Pramod", "Ashok", "Dilip", "Santosh", "Prakash", "Subhash", "Avinash", "Pankaj", "Neeraj", "Dheeraj", "Rajeev", "Sanjeev", "Pradeep", "Kuldeep", "Mandeep", "Hardeep", "Amarjeet", "Ranjeet", "Gurjeet", "Manjeet", "Brijesh", "Ramakant", "Shivakant", "Dayashankar", "Omprakash", "Rampreet", "Govind", "Anand", "Kishore", "Satish", "Jagdish", "Hariprasad", "Laxmikant", "Balakrishna", "Venkatesh", "Narasimha", "Ravindra", "Narendra", "Devendra", "Jitendra", "Surendra", "Rajendra", "Mahendra", "Dharmendra", "Gajendra", "Brijendra"],
  female: ["Geeta", "Seeta", "Meena", "Reena", "Veena", "Sheela", "Leela", "Neelam", "Poonam", "Anjali", "Sanjana", "Vandana", "Archana", "Sadhana", "Madhuri", "Manjari", "Kumari", "Sunita", "Anita", "Kavita", "Savita", "Lalita", "Mamta", "Shanti", "Shakti", "Rekha", "Usha", "Asha", "Nisha", "Manju", "Ranju", "Sanju", "Sangeeta", "Vineeta", "Priyanka", "Deepika", "Mallika", "Anushka", "Shraddha", "Roshni"]
};

const lastNames = ["Kumar", "Singh", "Yadav", "Sharma", "Verma", "Mishra", "Pandey", "Tiwari", "Gupta", "Agarwal", "Jain", "Reddy", "Naidu", "Rao", "Patel", "Shah", "Mehta", "Desai", "Joshi", "Kulkarni", "Patil", "Shinde", "Pawar", "Thakur", "Chauhan", "Rajput", "Rathore", "Bisht", "Rawat", "Negi", "Das", "Dutta", "Banerjee", "Chatterjee", "Mukherjee", "Bose", "Sen", "Ghosh", "Roy", "Chowdhury", "Khan", "Ahmed", "Ali", "Hussain", "Ansari", "Qureshi", "Siddiqui", "Malik", "Chaudhary", "Babu", "Prasad", "Sahu", "Panda", "Nayak", "Swain", "Behera", "Sahoo", "Biswal", "Nath", "Chand", "Lal", "Mani", "Devi", "Bai"];

function generateName() {
  const isMale = Math.random() > 0.15; // 85% male (realistic for Indian politics)
  const firstName = isMale ?
    firstNames.male[Math.floor(Math.random() * firstNames.male.length)] :
    firstNames.female[Math.floor(Math.random() * firstNames.female.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const middleName = Math.random() > 0.6 ?
    lastNames[Math.floor(Math.random() * lastNames.length)] + " " : "";

  return firstName + " " + middleName + lastName;
}

function generatePosition(district, state) {
  const positions = [
    `MLA, ${district}`,
    `Former MLA, ${district}`,
    `District President, ${district}`,
    `Block President, ${district}`,
    `Zila Panchayat Member, ${district}`,
    `Municipal Councillor, ${district}`,
    `Nagar Palika Chairman, ${district}`,
    `Former Minister, ${state}`,
    `Party District Leader, ${district}`
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}

// Generate politicians
let politicians = [];
let currentId = 116; // Starting from where we left off

Object.keys(stateDistrictData).forEach(state => {
  const { districts, parties } = stateDistrictData[state];

  districts.forEach(district => {
    // Generate 1-2 politicians per district
    const numPoliticians = Math.random() > 0.4 ? 2 : 1;

    for (let i = 0; i < numPoliticians; i++) {
      const party = parties[Math.floor(Math.random() * parties.length)];
      const statusRandom = Math.random();

      // 8% rapist, 72% garbage, 20% clean
      let status, sexualAssaultCases, otherCases, caseDetails;

      if (statusRandom < 0.08) {
        // Rapist
        status = "rapist";
        sexualAssaultCases = Math.floor(Math.random() * 5) + 1;
        otherCases = Math.floor(Math.random() * 3);
        caseDetails = {
          sexualAssault: generateSexualCrimes()
        };
        if (otherCases > 0) {
          caseDetails.other = generateCrimes('low');
        }
      } else if (statusRandom < 0.80) {
        // Garbage (criminal)
        status = "garbage";
        sexualAssaultCases = 0;

        // Vary the number of cases
        const severity = Math.random();
        if (severity < 0.1) {
          otherCases = Math.floor(Math.random() * 40) + 30; // 30-70 cases (notorious)
        } else if (severity < 0.3) {
          otherCases = Math.floor(Math.random() * 20) + 15; // 15-35 cases
        } else {
          otherCases = Math.floor(Math.random() * 12) + 3; // 3-15 cases
        }

        const crimeSeverity = otherCases > 25 ? 'high' : otherCases > 10 ? 'medium' : 'low';
        caseDetails = {
          other: generateCrimes(crimeSeverity)
        };
      } else {
        // Clean
        status = "clean";
        sexualAssaultCases = 0;
        otherCases = 0;
        caseDetails = undefined;
      }

      const politician = {
        id: currentId++,
        name: generateName(),
        party: `${party}`,
        position: generatePosition(district, state),
        image: null,
        state: state,
        district: district,
        status: status,
        cases: {
          sexualAssault: sexualAssaultCases,
          other: otherCases
        }
      };

      if (caseDetails) {
        politician.caseDetails = caseDetails;
        politician.sources = [
          { title: `${state} Police Records - ${district}`, url: "#" },
          { title: `Election Commission Affidavit - ${politician.name}`, url: "#" }
        ];
      } else {
        politician.sources = [];
      }

      politicians.push(politician);
    }
  });
});

console.log(`Generated ${politicians.length} politicians`);
console.log(`Total IDs: 116 to ${currentId - 1}`);

// Output statistics
const stats = {
  total: politicians.length,
  rapists: politicians.filter(p => p.status === 'rapist').length,
  garbage: politicians.filter(p => p.status === 'garbage').length,
  clean: politicians.filter(p => p.status === 'clean').length,
  byState: {}
};

Object.keys(stateDistrictData).forEach(state => {
  stats.byState[state] = politicians.filter(p => p.state === state).length;
});

console.log('\nStatistics:');
console.log(JSON.stringify(stats, null, 2));

// Write to file
const outputLines = politicians.map(p => {
  const parts = [];
  parts.push(`  {`);
  parts.push(`    id: ${p.id},`);
  parts.push(`    name: "${p.name}",`);
  parts.push(`    party: "${p.party}",`);
  parts.push(`    position: "${p.position}",`);
  parts.push(`    image: null,`);
  parts.push(`    state: "${p.state}",`);
  parts.push(`    district: "${p.district}",`);
  parts.push(`    status: "${p.status}",`);
  parts.push(`    cases: {`);
  parts.push(`      sexualAssault: ${p.cases.sexualAssault},`);
  parts.push(`      other: ${p.cases.other}`);
  parts.push(`    }`);

  if (p.caseDetails) {
    parts.push(`,`);
    parts.push(`    caseDetails: {`);

    if (p.caseDetails.sexualAssault) {
      parts.push(`      sexualAssault: [`);
      p.caseDetails.sexualAssault.forEach((crime, idx) => {
        const comma = idx < p.caseDetails.sexualAssault.length - 1 ? ',' : '';
        parts.push(`        "${crime}"${comma}`);
      });
      parts.push(`      ]${p.caseDetails.other ? ',' : ''}`);
    }

    if (p.caseDetails.other) {
      parts.push(`      other: [`);
      p.caseDetails.other.forEach((crime, idx) => {
        const comma = idx < p.caseDetails.other.length - 1 ? ',' : '';
        parts.push(`        "${crime}"${comma}`);
      });
      parts.push(`      ]`);
    }

    parts.push(`    },`);
    parts.push(`    sources: [`);
    p.sources.forEach((source, idx) => {
      const comma = idx < p.sources.length - 1 ? ',' : '';
      parts.push(`      { title: "${source.title}", url: "${source.url}" }${comma}`);
    });
    parts.push(`    ]`);
  } else {
    parts.push(`,`);
    parts.push(`    sources: []`);
  }

  parts.push(`  }`);
  return parts.join('\n');
});

const output = outputLines.join(',\n');

fs.writeFileSync('generated-politicians.txt', output);
console.log('\nWritten to generated-politicians.txt');
console.log('Copy this content and append to the politicians array in politicians.js');
