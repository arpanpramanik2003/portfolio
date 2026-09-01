export const StructuredData = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://diyachanda.dev';

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Diya Chanda',
        givenName: 'Diya',
        familyName: 'Chanda',
        jobTitle: 'AI Researcher & Machine Learning Engineer',
        description:
          'Undergraduate AI researcher specializing in explainable deep learning, computer vision, and agricultural intelligence systems. Published author at IEEE ICRITO and Springer LNNS.',
        url: baseUrl,
        image: `${baseUrl}/images/profile.webp`,
        sameAs: [
          'https://github.com/chandadiya2004',
          'https://www.linkedin.com/in/diya-chanda2004/',
          'https://www.researchgate.net/profile/Diya-Chanda',
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'The Neotia University',
          department: 'Computer Science & Engineering (AI & ML)',
        },
        knowsAbout: [
          'Artificial Intelligence',
          'Deep Learning',
          'Computer Vision',
          'Explainable AI (XAI)',
          'Natural Language Processing',
          'Full-Stack Web Development',
          'PyTorch',
          'FastAPI',
          'Next.js',
          'PostgreSQL',
        ],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${baseUrl}/#profilepage`,
        url: baseUrl,
        name: 'Diya Chanda — AI Researcher & Machine Learning Engineer Portfolio',
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          name: 'Diya Chanda Portfolio',
          url: baseUrl,
        },
        about: {
          '@id': `${baseUrl}/#person`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/profile.webp`,
        },
      },
      /* Published Research Papers Schema */
      {
        '@type': 'ScholarlyArticle',
        headline:
          'FruitQ-GradeX: Explainable Deep Learning Framework for Fruit Quality Classification',
        name: 'FruitQ-GradeX: Explainable Deep Learning Framework for Fruit Quality Classification',
        author: [
          { '@type': 'Person', name: 'Diya Chanda' },
          { '@type': 'Person', name: 'Arpan Pramanik' },
          { '@type': 'Person', name: 'Sayan Banerjee' },
          { '@type': 'Person', name: 'Dr. Debasis De' },
        ],
        datePublished: '2025-05-15',
        publisher: { '@type': 'Organization', name: 'IEEE' },
        publication: 'IEEE ICRITO 2025',
        sameAs: 'https://doi.org/10.1109/ICRITO66076.2025.11241706',
        description:
          'Hybrid CNN-Vision Transformer architecture with Grad-CAM visual interpretability achieving 99.29% accuracy on fruit quality classification.',
      },
      {
        '@type': 'ScholarlyArticle',
        headline:
          'Hyperspectral Fruit and Vegetable Classification: A Deep Learning Approach with XAI',
        name: 'Hyperspectral Fruit and Vegetable Classification: A Deep Learning Approach with XAI',
        author: [
          { '@type': 'Person', name: 'Diya Chanda' },
          { '@type': 'Person', name: 'Arpan Pramanik' },
          { '@type': 'Person', name: 'Sayan Banerjee' },
          { '@type': 'Person', name: 'Dr. Debasis De' },
        ],
        datePublished: '2025-03-20',
        publisher: { '@type': 'Organization', name: 'Springer' },
        publication: 'Springer LNNS Vol. 1915 / ICDMIS 2025',
        sameAs: 'https://doi.org/10.1007/978-3-032-21901-5_35',
        description:
          'Deep convolutional neural network for hyperspectral agricultural crop classification with Grad-CAM and Integrated Gradients XAI.',
      },
      {
        '@type': 'ScholarlyArticle',
        headline:
          'CropSense: Multimodal Deep Learning for Crop Yield Estimation and Disease Identification',
        name: 'CropSense: Multimodal Deep Learning for Crop Yield Estimation and Disease Identification',
        author: [
          { '@type': 'Person', name: 'Arpan Pramanik' },
          { '@type': 'Person', name: 'Diya Chanda' },
          { '@type': 'Person', name: 'Sayan Banerjee' },
          { '@type': 'Person', name: 'Dr. Debasis De' },
        ],
        datePublished: '2025-05-15',
        publisher: { '@type': 'Organization', name: 'IEEE' },
        publication: 'IEEE ICRITO 2025',
        sameAs: 'https://doi.org/10.1109/ICRITO66076.2025.11241535',
        description:
          'Multimodal deep learning integrating multispectral aerial imagery and IoT soil telemetry for crop yield estimation.',
      },
      {
        '@type': 'ScholarlyArticle',
        headline:
          'Quality Assessment and Classification in Solanaceous Crops Using Deep Learning and Explainable AI',
        name: 'Quality Assessment and Classification in Solanaceous Crops Using Deep Learning and Explainable AI',
        author: [
          { '@type': 'Person', name: 'Sayan Banerjee' },
          { '@type': 'Person', name: 'Arpan Pramanik' },
          { '@type': 'Person', name: 'Diya Chanda' },
          { '@type': 'Person', name: 'Dr. Debasis De' },
        ],
        datePublished: '2025-01-18',
        publisher: { '@type': 'Organization', name: 'IEEE' },
        publication: 'IEEE COMPUTINGCON 2025',
        sameAs: 'https://doi.org/10.1109/COMPUTINGCON64838.2025.11376762',
        description:
          'Deep convolutional architectures for quality assessment in Solanaceous agricultural crops with explainable AI heatmap validation.',
      },
      /* Production Software Systems Schema */
      {
        '@type': 'SoftwareApplication',
        name: 'CampusSphere',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://ssh.arpanpramanik.dev/',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Enterprise-grade institutional credit banking and NAAC/NIRF accreditation compliance verification platform.',
      },
      {
        '@type': 'SoftwareSourceCode',
        name: 'JalDrishti (जलदृष्टि)',
        codeRepository: 'https://github.com/chandadiya2004/JalDrishti-AI',
        programmingLanguage: 'Python, PyTorch, OpenCV, FastAPI',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Deep learning computer vision platform for real-time aquatic ecosystem monitoring and species telemetry.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'RecipeAI',
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://recipe-ai-diya.vercel.app/',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Generative AI culinary assistant with ingredient-based vision recognition and macro-nutrient analysis.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'FruitQ-GradeX Platform',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Cloud / Web',
        url: 'https://fruitq-quality-classifier.streamlit.app/',
        author: { '@id': `${baseUrl}/#person` },
        description:
          'Interactive Streamlit web application providing real-time fruit grading inference and Grad-CAM visual heatmaps.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
