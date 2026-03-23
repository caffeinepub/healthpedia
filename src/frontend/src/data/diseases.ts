export type DiseaseCategory = "common" | "serious";

export interface Disease {
  id: string;
  name: string;
  category: DiseaseCategory;
  tagline: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
  cardImage?: string;
}

export const diseases: Disease[] = [
  {
    id: "common-cold",
    name: "Common Cold",
    category: "common",
    tagline:
      "A viral respiratory tract infection affecting the nose and throat.",
    overview:
      "The common cold is a mild viral infection of the upper respiratory tract. It's the most frequent infectious disease in humans, with adults experiencing 2–3 colds per year. Most colds are caused by rhinoviruses and resolve on their own within 7–10 days.",
    symptoms: [
      "Runny or stuffy nose",
      "Sore or scratchy throat",
      "Cough",
      "Sneezing",
      "Mild body aches or headaches",
      "Low-grade fever (more common in children)",
      "Feeling generally unwell (malaise)",
    ],
    causes: [
      "Rhinovirus (most common cause, responsible for 40–50% of colds)",
      "Coronavirus strains (not COVID-19)",
      "Respiratory syncytial virus (RSV)",
      "Contact with infected persons or contaminated surfaces",
      "Touching eyes, nose, or mouth with unwashed hands",
    ],
    treatment: [
      "Rest and adequate sleep",
      "Drink plenty of fluids (water, hot teas, broths)",
      "Over-the-counter decongestants and antihistamines",
      "Throat lozenges or sprays for sore throat relief",
      "Pain relievers like acetaminophen or ibuprofen for aches and fever",
      "Saline nasal rinses to relieve congestion",
    ],
    prevention: [
      "Wash hands frequently with soap and water for at least 20 seconds",
      "Avoid close contact with sick individuals",
      "Don't touch your face, especially your eyes, nose, and mouth",
      "Clean and disinfect frequently touched surfaces",
      "Maintain a healthy immune system through diet and exercise",
    ],
    faqs: [
      {
        question: "How long does a cold last?",
        answer:
          "Most colds resolve within 7 to 10 days, though a cough may linger for up to 3 weeks.",
      },
      {
        question: "Should I take antibiotics for a cold?",
        answer:
          "No. Antibiotics treat bacterial infections, not viral ones. Taking them unnecessarily contributes to antibiotic resistance.",
      },
      {
        question: "When should I see a doctor?",
        answer:
          "See a doctor if symptoms worsen after 10 days, you have a high fever, severe sore throat, or ear pain.",
      },
    ],
    icon: "Wind",
  },
  {
    id: "influenza",
    name: "Influenza (Flu)",
    category: "common",
    tagline: "A contagious respiratory illness caused by influenza viruses.",
    overview:
      "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza A and B viruses. It can cause mild to severe illness, and in some cases, it can lead to hospitalization or death, particularly in high-risk groups.",
    symptoms: [
      "Sudden onset of high fever (100–104°F)",
      "Severe muscle aches and pains",
      "Intense fatigue and weakness",
      "Dry, persistent cough",
      "Headaches",
      "Chills and shaking",
      "Loss of appetite",
    ],
    causes: [
      "Influenza A virus (more common, can cause pandemics)",
      "Influenza B virus (generally less severe)",
      "Airborne transmission via respiratory droplets",
      "Direct contact with infected surfaces",
    ],
    treatment: [
      "Antiviral medications (oseltamivir/Tamiflu) if started early",
      "Rest and fluids",
      "Fever reducers and pain relievers",
      "Hospitalization in severe cases",
    ],
    prevention: [
      "Annual flu vaccination (most effective prevention)",
      "Frequent handwashing",
      "Avoid touching your face",
      "Stay home when sick to prevent spreading",
      "Wear a mask in crowded settings during flu season",
    ],
    faqs: [
      {
        question: "How is flu different from a cold?",
        answer:
          "Flu symptoms come on suddenly and are more severe than cold symptoms. Flu typically includes high fever, severe aches, and intense fatigue.",
      },
      {
        question: "Can the flu vaccine give you the flu?",
        answer:
          "No. The flu vaccine contains inactivated virus and cannot cause flu. Some people experience mild side effects like a sore arm.",
      },
    ],
    icon: "Thermometer",
    cardImage: "/assets/generated/card-flu.dim_400x240.jpg",
  },
  {
    id: "viral-infection",
    name: "Viral Infection",
    category: "common",
    tagline:
      "Infections caused by viruses that invade and replicate within body cells.",
    overview:
      "Viral infections occur when viruses invade the body's cells and use them to multiply, resulting in a range of illnesses. They can affect various body systems and range from mild (common cold) to life-threatening (Ebola). Treatment is primarily supportive, as antibiotics are ineffective.",
    symptoms: [
      "Fever",
      "Fatigue and general malaise",
      "Body aches",
      "Headache",
      "Swollen lymph nodes",
      "Skin rashes (in some viral infections)",
      "Gastrointestinal symptoms (nausea, vomiting, diarrhea)",
    ],
    causes: [
      "Direct contact with an infected person",
      "Respiratory droplets from coughing or sneezing",
      "Contact with contaminated surfaces",
      "Insect bites (mosquitoes, ticks)",
      "Contaminated food or water",
    ],
    treatment: [
      "Supportive care (rest, fluids, nutrition)",
      "Antiviral medications for specific viruses (herpes, HIV, flu)",
      "Symptomatic relief medications",
      "Immune-boosting strategies",
    ],
    prevention: [
      "Vaccination against preventable viral diseases",
      "Regular handwashing",
      "Safe food and water practices",
      "Use insect repellent and protective clothing",
      "Practice safe sex",
    ],
    faqs: [
      {
        question: "How long do viral infections last?",
        answer:
          "Duration varies widely — from a few days for a cold to weeks for mononucleosis, or chronically for HIV.",
      },
      {
        question: "Are viral infections contagious?",
        answer:
          "Most are, though the method of transmission varies by virus type.",
      },
    ],
    icon: "Activity",
  },
  {
    id: "allergies",
    name: "Allergies",
    category: "common",
    tagline: "Immune system overreactions to typically harmless substances.",
    overview:
      "Allergies occur when the immune system overreacts to substances (allergens) that are usually harmless. Common allergens include pollen, pet dander, dust mites, certain foods, and insect stings. Allergic reactions can range from mild discomfort to life-threatening anaphylaxis.",
    symptoms: [
      "Sneezing and runny nose",
      "Itchy, watery, or red eyes",
      "Skin rashes or hives",
      "Itching of the skin, nose, or throat",
      "Wheezing or difficulty breathing (in severe cases)",
      "Swelling of the lips, tongue, or throat",
    ],
    causes: [
      "Pollen from trees, grasses, and weeds",
      "Pet dander from cats, dogs, or other animals",
      "Dust mites in bedding and carpets",
      "Mold spores",
      "Insect stings",
      "Food allergens (nuts, shellfish, milk, eggs, wheat)",
    ],
    treatment: [
      "Antihistamines to relieve symptoms",
      "Nasal corticosteroids for nasal symptoms",
      "Allergen immunotherapy (allergy shots)",
      "Decongestants",
      "Epinephrine auto-injector for severe reactions (anaphylaxis)",
    ],
    prevention: [
      "Identify and avoid known allergens",
      "Keep windows closed during high pollen seasons",
      "Use HEPA filters in your home",
      "Wash bedding weekly in hot water",
      "Carry an epinephrine auto-injector if at risk for anaphylaxis",
    ],
    faqs: [
      {
        question: "Can allergies develop at any age?",
        answer:
          "Yes, allergies can develop at any age, even if you have eaten or been exposed to something for years without problems.",
      },
      {
        question: "Are allergies curable?",
        answer:
          "There's no complete cure, but immunotherapy can significantly reduce sensitivity over time.",
      },
    ],
    icon: "Flower2",
  },
  {
    id: "asthma",
    name: "Asthma",
    category: "common",
    tagline:
      "A chronic lung condition causing airway inflammation and breathing difficulties.",
    overview:
      "Asthma is a chronic respiratory condition in which the airways become inflamed, narrow, and swell, producing extra mucus. This makes breathing difficult and triggers coughing, a whistling sound (wheezing) when breathing out, and shortness of breath. Asthma affects people of all ages but often starts in childhood.",
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Wheezing when exhaling",
      "Coughing, especially at night or early morning",
      "Trouble sleeping due to breathing difficulty",
      "Worsening symptoms during exercise (exercise-induced asthma)",
    ],
    causes: [
      "Airway inflammation due to allergies or irritants",
      "Genetics (family history of asthma)",
      "Respiratory infections in childhood",
      "Exposure to air pollutants and irritants",
      "Exercise in cold or dry air",
      "Stress and strong emotions",
    ],
    treatment: [
      "Quick-relief (rescue) inhalers with bronchodilators",
      "Inhaled corticosteroids for long-term control",
      "Long-acting beta agonists (LABAs)",
      "Biologics for severe asthma",
      "Oral corticosteroids for severe exacerbations",
    ],
    prevention: [
      "Identify and avoid asthma triggers",
      "Follow your asthma action plan",
      "Take long-term control medications as prescribed",
      "Get vaccinated for flu and pneumonia",
      "Monitor air quality and stay indoors when it's poor",
    ],
    faqs: [
      {
        question: "Can asthma be cured?",
        answer:
          "Asthma has no cure but can be managed effectively with proper treatment and trigger avoidance.",
      },
      {
        question: "Can children outgrow asthma?",
        answer:
          "Some children experience fewer symptoms as they grow older, but asthma often continues into adulthood.",
      },
    ],
    icon: "Wind",
  },
  {
    id: "migraine",
    name: "Migraine",
    category: "common",
    tagline:
      "A neurological condition causing intense, debilitating headaches.",
    overview:
      "Migraine is a neurological condition characterized by recurrent, severe headaches often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Attacks can last from 4 to 72 hours and significantly impact daily life. Migraines affect about 1 in 7 people worldwide.",
    symptoms: [
      "Intense throbbing or pulsating headache, often on one side",
      "Nausea and vomiting",
      "Extreme sensitivity to light (photophobia)",
      "Sensitivity to sound (phonophobia)",
      "Visual disturbances or aura (flashing lights, blind spots)",
      "Tingling or numbness in the face or extremities",
    ],
    causes: [
      "Hormonal changes (especially in women)",
      "Stress and anxiety",
      "Certain foods and drinks (alcohol, caffeine, aged cheeses)",
      "Sleep disruptions",
      "Sensory stimuli (bright lights, loud sounds, strong smells)",
      "Weather or barometric pressure changes",
    ],
    treatment: [
      "Over-the-counter pain relievers (NSAIDs, acetaminophen)",
      "Triptans (sumatriptan) for acute attacks",
      "Anti-nausea medications",
      "Preventive medications (beta-blockers, antidepressants, anticonvulsants)",
      "Rest in a quiet, dark room during an attack",
    ],
    prevention: [
      "Keep a migraine diary to identify triggers",
      "Maintain regular sleep patterns",
      "Stay hydrated and maintain regular meals",
      "Manage stress through relaxation techniques",
      "Limit caffeine and alcohol intake",
    ],
    faqs: [
      {
        question: "Are migraines just bad headaches?",
        answer:
          "No. Migraines are a complex neurological condition. They involve additional symptoms like nausea, vomiting, and sensory sensitivity.",
      },
      {
        question: "How are migraines diagnosed?",
        answer:
          "Diagnosis is based on medical history, symptoms, and physical examination. Neurological tests may be done to rule out other conditions.",
      },
    ],
    icon: "Brain",
  },
  {
    id: "cancer",
    name: "Cancer",
    category: "serious",
    tagline:
      "A group of diseases involving abnormal cell growth with the potential to spread.",
    overview:
      "Cancer is a collection of related diseases in which some of the body's cells begin to divide without stopping and spread into surrounding tissues. It can start almost anywhere in the human body. There are more than 100 types of cancer, including breast cancer, lung cancer, colorectal cancer, and melanoma.",
    symptoms: [
      "Unexplained weight loss",
      "Persistent fatigue",
      "Lumps or areas of thickening under the skin",
      "Skin changes (yellowing, darkening, redness)",
      "Persistent cough or trouble breathing",
      "Difficulty swallowing",
      "Unexplained bleeding or bruising",
      "Persistent indigestion or discomfort after eating",
    ],
    causes: [
      "Genetic mutations (inherited or acquired)",
      "Carcinogens (tobacco smoke, radiation, chemicals)",
      "Chronic inflammation",
      "Viruses (HPV, Hepatitis B/C, EBV)",
      "Hormonal factors",
      "Obesity and poor diet",
    ],
    treatment: [
      "Surgery to remove tumors",
      "Chemotherapy",
      "Radiation therapy",
      "Immunotherapy",
      "Targeted therapy",
      "Hormone therapy",
      "Stem cell transplants",
    ],
    prevention: [
      "Avoid tobacco in all forms",
      "Maintain a healthy weight and diet",
      "Regular physical activity",
      "Protect skin from excessive sun exposure",
      "Get vaccinated (HPV, Hepatitis B)",
      "Regular cancer screening tests",
      "Limit alcohol consumption",
    ],
    faqs: [
      {
        question: "Is cancer hereditary?",
        answer:
          "Some cancers have a hereditary component, but most are caused by acquired genetic mutations due to environmental factors and aging.",
      },
      {
        question: "Can cancer be prevented?",
        answer:
          "While not all cancers can be prevented, healthy lifestyle choices and screenings can significantly reduce risk.",
      },
    ],
    icon: "Shield",
  },
  {
    id: "diabetes-type2",
    name: "Diabetes (Type 2)",
    category: "serious",
    tagline:
      "A metabolic disease causing high blood sugar due to insulin resistance.",
    overview:
      "Type 2 diabetes is a chronic metabolic condition where the body doesn't use insulin properly (insulin resistance). Over time, the pancreas can't make enough insulin to keep blood sugar at normal levels. It's the most common form of diabetes and is strongly linked to lifestyle factors.",
    symptoms: [
      "Increased thirst and frequent urination",
      "Unexplained fatigue",
      "Blurred vision",
      "Slow-healing sores or frequent infections",
      "Areas of darkened skin (acanthosis nigricans)",
      "Numbness or tingling in hands or feet",
      "Unexplained weight loss",
    ],
    causes: [
      "Insulin resistance",
      "Overweight or obesity (especially abdominal fat)",
      "Physical inactivity",
      "Genetics and family history",
      "Unhealthy diet (high sugar, processed foods)",
      "Age (risk increases after 45)",
    ],
    treatment: [
      "Healthy eating and weight management",
      "Regular physical exercise",
      "Blood sugar monitoring",
      "Oral diabetes medications (Metformin)",
      "Insulin therapy (in advanced cases)",
      "GLP-1 receptor agonists and SGLT2 inhibitors",
    ],
    prevention: [
      "Maintain healthy body weight",
      "Exercise regularly (at least 150 min/week)",
      "Eat a diet rich in fiber and whole grains",
      "Limit sugary beverages and processed foods",
      "Regular blood sugar monitoring if at risk",
    ],
    faqs: [
      {
        question: "Can Type 2 diabetes be reversed?",
        answer:
          "In some cases, significant weight loss and lifestyle changes can bring blood sugar to normal levels, though it requires ongoing management.",
      },
      {
        question: "How does Type 2 differ from Type 1?",
        answer:
          "Type 1 is an autoimmune disease where the body produces no insulin. Type 2 involves insulin resistance and usually develops gradually.",
      },
    ],
    icon: "Droplets",
    cardImage: "/assets/generated/card-diabetes.dim_400x240.jpg",
  },
  {
    id: "hypertension",
    name: "Hypertension",
    category: "serious",
    tagline:
      "High blood pressure, a silent risk factor for heart disease and stroke.",
    overview:
      "Hypertension, or high blood pressure, is a common condition where the long-term force of blood against artery walls is high enough to eventually cause health problems. Known as the 'silent killer,' it often has no symptoms but can lead to heart disease, stroke, and kidney failure.",
    symptoms: [
      "Often no symptoms (silent condition)",
      "Headaches (particularly in the morning)",
      "Dizziness or lightheadedness",
      "Nosebleeds",
      "Shortness of breath",
      "Chest pain (in severe cases)",
      "Visual changes",
    ],
    causes: [
      "Lifestyle factors (poor diet, inactivity, obesity)",
      "High sodium intake",
      "Excessive alcohol consumption",
      "Genetics and family history",
      "Aging",
      "Chronic stress",
      "Certain medications",
    ],
    treatment: [
      "Lifestyle modifications (diet, exercise, weight loss)",
      "ACE inhibitors and ARBs",
      "Beta-blockers",
      "Calcium channel blockers",
      "Diuretics",
      "Regular monitoring of blood pressure",
    ],
    prevention: [
      "Eat a heart-healthy, low-sodium diet (DASH diet)",
      "Regular aerobic exercise",
      "Limit alcohol and avoid smoking",
      "Manage stress through relaxation techniques",
      "Maintain a healthy weight",
      "Regular blood pressure checks",
    ],
    faqs: [
      {
        question: "What blood pressure is considered high?",
        answer:
          "Blood pressure above 130/80 mmHg is considered high. Above 180/120 is a hypertensive crisis requiring immediate care.",
      },
      {
        question: "Can hypertension be cured?",
        answer:
          "It cannot be cured but can be effectively controlled with medication and lifestyle changes.",
      },
    ],
    icon: "Heart",
    cardImage: "/assets/generated/card-hypertension.dim_400x240.jpg",
  },
  {
    id: "covid-19",
    name: "COVID-19",
    category: "serious",
    tagline: "A respiratory illness caused by the SARS-CoV-2 coronavirus.",
    overview:
      "COVID-19 is an infectious respiratory disease caused by the SARS-CoV-2 coronavirus, first identified in late 2019. It caused a global pandemic and can range from mild illness to severe respiratory failure. Long-term symptoms (Long COVID) can persist for months after initial infection.",
    symptoms: [
      "Fever or chills",
      "Dry cough",
      "Shortness of breath or difficulty breathing",
      "Fatigue",
      "Loss of taste or smell",
      "Sore throat",
      "Body aches",
      "Headache",
      "Nausea or vomiting",
    ],
    causes: [
      "SARS-CoV-2 virus",
      "Airborne transmission via respiratory droplets and aerosols",
      "Contact with contaminated surfaces (less common)",
      "Close contact with infected individuals",
    ],
    treatment: [
      "Supportive care (rest, fluids, monitoring)",
      "Antiviral medications (Paxlovid, remdesivir) for high-risk patients",
      "Anti-inflammatory drugs (dexamethasone for severe cases)",
      "Oxygen therapy or ventilation for severe respiratory failure",
      "Monoclonal antibodies",
    ],
    prevention: [
      "COVID-19 vaccination and boosters",
      "Wearing masks in high-risk settings",
      "Frequent handwashing",
      "Ventilating indoor spaces",
      "Staying home when sick",
      "Social distancing during outbreaks",
    ],
    faqs: [
      {
        question: "What is Long COVID?",
        answer:
          "Long COVID refers to symptoms that persist for 4+ weeks after initial infection, including fatigue, brain fog, and shortness of breath.",
      },
      {
        question: "Are COVID-19 vaccines effective?",
        answer:
          "Yes, vaccines significantly reduce the risk of severe illness, hospitalization, and death, though effectiveness varies by variant.",
      },
    ],
    icon: "Virus",
    cardImage: "/assets/generated/card-covid.dim_400x240.jpg",
  },
  {
    id: "heart-disease",
    name: "Heart Disease",
    category: "serious",
    tagline:
      "A range of conditions affecting the heart's structure and function.",
    overview:
      "Heart disease (cardiovascular disease) encompasses a range of conditions affecting the heart, including coronary artery disease, heart failure, and arrhythmias. It is the leading cause of death worldwide. Plaque buildup in arteries (atherosclerosis) is the most common cause.",
    symptoms: [
      "Chest pain, tightness, or pressure (angina)",
      "Shortness of breath",
      "Fatigue and weakness",
      "Pain or numbness in arms, jaw, neck, or back",
      "Fast or irregular heartbeat",
      "Swelling in legs, ankles, or feet",
      "Dizziness or lightheadedness",
    ],
    causes: [
      "Plaque buildup in coronary arteries (atherosclerosis)",
      "High blood pressure",
      "High cholesterol",
      "Smoking and tobacco use",
      "Diabetes",
      "Obesity and sedentary lifestyle",
      "Family history and genetics",
    ],
    treatment: [
      "Lifestyle changes (heart-healthy diet, exercise, quitting smoking)",
      "Medications (statins, beta-blockers, blood thinners)",
      "Angioplasty and stent placement",
      "Bypass surgery",
      "Heart valve repair or replacement",
      "Pacemakers for arrhythmias",
    ],
    prevention: [
      "Eat a heart-healthy diet low in saturated and trans fats",
      "Exercise regularly",
      "Don't smoke",
      "Control blood pressure, cholesterol, and blood sugar",
      "Maintain a healthy weight",
      "Manage stress",
    ],
    faqs: [
      {
        question:
          "What is the difference between a heart attack and cardiac arrest?",
        answer:
          "A heart attack is a circulation problem (blocked artery). Cardiac arrest is an electrical problem (heart stops beating). Both are emergencies.",
      },
      {
        question: "What are the warning signs of a heart attack?",
        answer:
          "Chest pain or pressure, pain radiating to the arm/jaw/neck, shortness of breath, sweating, nausea. Call emergency services immediately.",
      },
    ],
    icon: "HeartPulse",
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB)",
    category: "serious",
    tagline: "A serious bacterial infection primarily affecting the lungs.",
    overview:
      "Tuberculosis (TB) is a potentially serious infectious disease caused by the bacterium Mycobacterium tuberculosis. It mainly affects the lungs (pulmonary TB) but can also affect other organs. TB is one of the top infectious disease killers worldwide, though it is preventable and treatable.",
    symptoms: [
      "Persistent cough lasting 3+ weeks (sometimes with blood)",
      "Chest pain during breathing or coughing",
      "Unintentional weight loss",
      "Night sweats",
      "Fever and chills",
      "Extreme fatigue",
      "Loss of appetite",
    ],
    causes: [
      "Mycobacterium tuberculosis bacterium",
      "Airborne transmission when infected person coughs, sneezes, or speaks",
      "Prolonged close contact with infected individuals",
      "Weakened immune system (HIV, malnutrition, diabetes)",
      "Living in crowded or poorly ventilated conditions",
    ],
    treatment: [
      "Standard 6-month antibiotic regimen (isoniazid, rifampin, ethambutol, pyrazinamide)",
      "Directly Observed Therapy (DOT) to ensure completion",
      "Extended treatment for drug-resistant TB (18–24 months)",
      "Regular monitoring and follow-up chest X-rays",
    ],
    prevention: [
      "BCG vaccination (especially for children)",
      "Test and treat latent TB infection",
      "Improve ventilation in crowded settings",
      "Use N95 masks when caring for TB patients",
      "Complete the full course of treatment to prevent drug resistance",
    ],
    faqs: [
      {
        question: "What is latent TB?",
        answer:
          "Latent TB is when you have TB bacteria in your body but don't feel sick and can't spread it. It can become active later.",
      },
      {
        question: "Is TB still common?",
        answer:
          "TB remains one of the world's leading infectious killers, especially in low- and middle-income countries.",
      },
    ],
    icon: "Stethoscope",
  },
];

export function searchDiseases(query: string): Disease[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return diseases.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q) ||
      d.overview.toLowerCase().includes(q) ||
      d.symptoms.some((s) => s.toLowerCase().includes(q)) ||
      d.causes.some((c) => c.toLowerCase().includes(q)),
  );
}

export function getDiseasesByCategory(category: DiseaseCategory): Disease[] {
  return diseases.filter((d) => d.category === category);
}

export function getDiseaseById(id: string): Disease | undefined {
  return diseases.find((d) => d.id === id);
}
