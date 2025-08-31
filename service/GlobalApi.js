import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL+"/api/",
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})


const CreateNewResume=(data)=>{
    // Mock response for demo
    return Promise.resolve({
        data: {
            data: {
                documentId: 'demo-resume-' + Date.now(),
                ...data.data
            }
        }
    });
};

const GetUserResumes=(userEmail)=>{
    // Mock response for demo
    return Promise.resolve({
        data: {
            data: [
                {
                    documentId: 'demo-resume-1',
                    title: 'Software Engineer Resume',
                    themeColor: '#9f5bff',
                    userEmail: userEmail
                },
                {
                    documentId: 'demo-resume-2', 
                    title: 'Frontend Developer Resume',
                    themeColor: '#ff6b6b',
                    userEmail: userEmail
                }
            ]
        }
    });
};

const UpdateResumeDetail=(id,data)=>{
    // Mock response for demo
    return Promise.resolve({
        data: {
            data: {
                documentId: id,
                ...data.data
            }
        }
    });
};

const GetResumeById=(id)=>{
    // Mock response for demo with sample data
    return Promise.resolve({
        data: {
            data: {
                documentId: id,
                title: 'Demo Resume',
                firstName: 'John',
                lastName: 'Doe',
                jobTitle: 'Software Engineer',
                address: '123 Main St, City, State 12345',
                phone: '(555) 123-4567',
                email: 'john.doe@email.com',
                themeColor: '#9f5bff',
                summery: 'Experienced software engineer with expertise in full-stack development, passionate about creating innovative solutions and delivering high-quality code.',
                Experience: [
                    {
                        title: 'Senior Software Engineer',
                        companyName: 'Tech Corp',
                        city: 'San Francisco',
                        state: 'CA',
                        startDate: '2022-01',
                        endDate: '',
                        currentlyWorking: true,
                        workSummery: '<ul><li>Led development of scalable web applications using React and Node.js</li><li>Mentored junior developers and conducted code reviews</li><li>Improved application performance by 40% through optimization</li></ul>'
                    }
                ],
                education: [
                    {
                        universityName: 'University of Technology',
                        degree: 'Bachelor',
                        major: 'Computer Science',
                        startDate: '2018-09',
                        endDate: '2022-05',
                        description: 'Graduated with honors, focused on software engineering and algorithms'
                    }
                ],
                skills: [
                    { name: 'JavaScript', rating: 5 },
                    { name: 'React', rating: 5 },
                    { name: 'Node.js', rating: 4 },
                    { name: 'Python', rating: 4 }
                ]
            }
        }
    });
};

const DeleteResumeById=(id)=>{
    // Mock response for demo
    return Promise.resolve({
        data: { success: true }
    });
};

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}