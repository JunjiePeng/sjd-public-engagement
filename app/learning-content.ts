export const sources = {
  overview: {
    name: 'NIAMS',
    url: 'https://www.niams.nih.gov/health-topics/sjogrens-disease',
  },
  nhs: { name: 'NHS', url: 'https://www.nhs.uk/conditions/sjogrens-syndrome/' },
  symptoms: {
    name: 'Sjögren’s Foundation',
    url: 'https://sjogrens.org/understanding-sjogrens/sjogrens-disease-signs-and-symptoms',
  },
  children: {
    name: 'Sjögren’s Foundation',
    url: 'https://sjogrens.org/living-with-sjogrens/sjogrens-in-children',
  },
  diagnosis: {
    name: 'NIAMS',
    url: 'https://www.niams.nih.gov/health-topics/sjogrens-disease/diagnosis-treatment-and-steps-to-take',
  },
  terminology: {
    name: 'NIHR ARC KSS',
    url: 'https://arc-kss.nihr.ac.uk/public-and-community-involvement/pcie-guide/introduction/terminology-and-pcie',
  },
  nihr: { name: 'NIHR', url: 'https://www.nihr.ac.uk/get-involved' },
  uk: { name: 'Sjögren’s UK', url: 'https://sjogrensuk.org/' },
};
type SourceId = keyof typeof sources;
export const topics: {
  id: string;
  label: string;
  kicker: string;
  heading: string;
  body: string;
  takeaway: string;
  source: SourceId;
}[] = [
  {
    id: 'basics',
    label: 'The basics',
    kicker: 'The bigger picture',
    heading: 'An immune system that gets its signals wrong.',
    body: 'Sjögren’s is a long-term autoimmune disease. The immune system normally protects us, but in Sjögren’s it attacks healthy tissue. Glands that make tears and saliva are often affected. Other parts of the body can be involved too.',
    takeaway:
      'There isn’t one single experience of Sjögren’s. Symptoms and their impact vary between people.',
    source: 'overview',
  },
  {
    id: 'eyes',
    label: 'Eyes & mouth',
    kicker: 'More than a dry feeling',
    heading: 'Moisture has an important job.',
    body: 'Tears and saliva help protect the eyes and mouth. Dry eyes can feel gritty or sore. A dry mouth can make swallowing harder and increase the risk of tooth decay.',
    takeaway:
      'Eye and dental care are part of looking after Sjögren’s. Tell your care team when dryness affects you.',
    source: 'nhs',
  },
  {
    id: 'fatigue',
    label: 'Fatigue & thinking',
    kicker: 'What others may not see',
    heading: 'Tiredness can be a big part of the picture.',
    body: 'Fatigue is a common experience in Sjögren’s. Some people also describe difficulty concentrating or thinking clearly, often called “brain fog”. These symptoms can affect daily activities even when someone looks well.',
    takeaway:
      'Invisible symptoms still matter. Describing their effect on everyday life can help others understand.',
    source: 'symptoms',
  },
  {
    id: 'pain',
    label: 'Joints & muscles',
    kicker: 'Movement and comfort',
    heading: 'Pain can change an ordinary day.',
    body: 'Aching muscles and joints can occur in Sjögren’s. Symptoms can vary over time and may affect work, school or usual activities.',
    takeaway:
      'Speak with your healthcare team if pain or other symptoms are making daily life difficult.',
    source: 'nhs',
  },
  {
    id: 'wider',
    label: 'The wider body',
    kicker: 'A whole-person view',
    heading: 'Sjögren’s can extend beyond the glands.',
    body: 'Some people have effects involving the skin, nerves, lungs or kidneys. These are possible features, not a prediction of what will happen to any one person.',
    takeaway:
      'A new symptom can have different causes. A clinician can assess it in the context of your health.',
    source: 'overview',
  },
];
export const audiencePaths = [
  {
    id: 'young',
    kicker: 'Your questions matter',
    heading: 'You can be part of the conversation.',
    intro:
      'You don’t need to know all the medical words to ask a good question. These prompts are a place to start.',
    items: [
      {
        id: 'young-body',
        title: 'What is happening in my body?',
        body: 'Sjögren’s can affect healthy parts of your body. Children may notice swelling near the cheeks, tiredness or pain. Your experience might differ from someone else’s.',
        prompt: 'Can you explain what Sjögren’s means for me?',
      },
      {
        id: 'young-school',
        title: 'How do I explain it at school?',
        body: 'Think about what you want a trusted adult to understand. You could talk together about learning, activities and the parts of the day you find difficult.',
        prompt: 'Who can I talk to when I need help during the school day?',
      },
      {
        id: 'young-visit',
        title: 'What if I forget what I wanted to ask?',
        body: 'You could write down a question before an appointment, or ask someone you trust to help you remember. It is okay to ask for a word to be explained again.',
        prompt:
          'Could you say that another way, and tell me what happens next?',
      },
    ],
  },
  {
    id: 'caregiver',
    kicker: 'Making room for their voice',
    heading: 'Support them, one question at a time.',
    intro:
      'Use these conversation starters with your child and their care team. Let your child help decide which questions matter most.',
    items: [
      {
        id: 'carer-different',
        title: 'How can childhood Sjögren’s be different?',
        body: 'Dryness may be less prominent. Adult tests do not always capture childhood disease well, so assessment can be challenging and may need a specialist.',
        prompt:
          'Would a paediatric rheumatology assessment help us understand these symptoms?',
      },
      {
        id: 'carer-prepare',
        title: 'What could we bring to an appointment?',
        body: 'A brief record of symptoms, their timing and impact can help a clinician understand the pattern.',
        prompt:
          'Which changes should we keep a record of between appointments?',
      },
      {
        id: 'carer-support',
        title: 'How can we talk about everyday life?',
        body: 'Ask your child what feels easy or difficult and what they want others to understand. Their priorities can help start conversations with school and the care team.',
        prompt: 'What would make an ordinary day feel more manageable for you?',
      },
    ],
  },
];
export const tests = [
  {
    id: 'blood',
    number: '01',
    title: 'Blood tests',
    body: 'Blood tests may look for immune proteins called antibodies. A result is one piece of the picture; antibodies alone do not establish a diagnosis.',
    prompt: 'What does this result tell us, and what can it not tell us?',
  },
  {
    id: 'eye',
    number: '02',
    title: 'Eye tests',
    body: 'Eye tests can assess tear production and look for effects of dryness on the eye surface.',
    prompt: 'What will this test feel like, and what are you measuring?',
  },
  {
    id: 'saliva',
    number: '03',
    title: 'Saliva and salivary gland tests',
    body: 'Tests can measure saliva production. An ultrasound or a small tissue sample (biopsy) can help assess changes in the glands.',
    prompt: 'Why is this test being suggested, and are there alternatives?',
  },
];
export const questions: {
  id: string;
  prompt: string;
  options: string[];
  correct: number;
  explanation: string;
  takeaway: string;
  source: SourceId;
}[] = [
  {
    id: 'beyond-dryness',
    prompt: 'Sjögren’s only affects the eyes and mouth. Is that right?',
    options: [
      'Yes, it only affects those areas.',
      'No, it can affect other parts of the body.',
    ],
    correct: 1,
    explanation:
      'Sjögren’s can affect more than tear and saliva glands. Fatigue, pain and other effects can be part of the picture.',
    takeaway: 'Sjögren’s goes beyond dryness.',
    source: 'overview',
  },
  {
    id: 'childhood',
    prompt: 'Can someone have Sjögren’s during childhood?',
    options: [
      'Yes, children can have Sjögren’s too.',
      'No, it only starts in adulthood.',
    ],
    correct: 0,
    explanation:
      'Children can have Sjögren’s. Their symptoms may differ from adults, with less noticeable dryness.',
    takeaway: 'Children can have Sjögren’s too.',
    source: 'children',
  },
  {
    id: 'diagnosis',
    prompt: 'Does one blood test give a definite answer about Sjögren’s?',
    options: [
      'Yes, one blood result settles it.',
      'No, clinicians consider several pieces of information.',
    ],
    correct: 1,
    explanation:
      'Diagnosis brings together symptoms, health history and test results. There is no single test that provides the whole answer.',
    takeaway: 'Diagnosis needs the wider picture.',
    source: 'diagnosis',
  },
  {
    id: 'same',
    prompt: 'Do two people with Sjögren’s always have the same experience?',
    options: [
      'Yes, the symptoms are the same for everyone.',
      'No, symptoms and their impact can vary.',
    ],
    correct: 1,
    explanation:
      'The combination of symptoms differs between people. Someone’s experience can also change over time.',
    takeaway: 'Every person’s experience is different.',
    source: 'symptoms',
  },
];
