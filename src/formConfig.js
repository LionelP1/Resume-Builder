export const formConfig = {
  information: {
      allowMultiple: false,
      fields: [
          { name: "fullName", type: "text", placeholder: "Full Name" },
          { name: "email", type: "text", placeholder: "Email" },
          { name: "phoneNumber", type: "text", placeholder: "Phone Number" },
          { name: "location", type: "text", placeholder: "Location" },
      ]
  },

  education: {
      allowMultiple: true,
      fields: [
          { name: "schoolName", type: "text", placeholder: "School Name" },
          { name: "degree", type: "text", placeholder: "Degree" },
          { name: "startDate", type: "text", placeholder: "Start Date" },
          { name: "endDate", type: "text", placeholder: "End Date" },
      ]
  },

  skills: {
      allowMultiple: true,
      fields: [
          { name: "skillName", type: "text", placeholder: "Skill" },
      ]
  },
  
  experience: {
      allowMultiple: true,
      fields: [
          { name: "jobTitle", type: "text", placeholder: "Job Title" },
          { name: "companyName", type: "text", placeholder: "Company Name" },
          { name: "startDate", type: "text", placeholder: "Start Date" },
          { name: "endDate", type: "text", placeholder: "End Date" },
          { name: "description", type: "textarea", placeholder: "Description" },
      ]
  },
};
