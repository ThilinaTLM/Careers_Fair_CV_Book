export async function getData() {
    const filename = 'data.json';
    const data = await fetch(filename);
    return await data.json();
}

export const preprocess = (raw: any) => {


    const AL = `G.C.E. AL Examination 2018 | ${raw['A/L Examination Results']} | IR - ${raw['A/L - Island Rank']}`

    const data: any = {}

    // basic info
    data.firstName = raw['First Name']
    data.lastName = raw['Last Name']
    data.aboutMe = raw['About Me']
    data.profilePic = raw['Profile Picture']

    // contact info
    data.contacts = [
        {
            icon: 'telephone.png',
            label: raw['Contact Number '],
            link: `tel:${raw['Contact Number ']}`,
        },
        {
            icon: 'email.png',
            label: raw['CSE Email'],
            link: `mailto:${raw['CSE Email']}`,
        },
        {
            icon: 'github.png',
            label: raw['GitHub Username '],
            link: raw['GitHub Link'],
        },
        {
            icon: 'linkedin.png',
            label: raw['LinkedIn Username'],
            link: raw['LinkedIn Link'],
        }
    ]

    // skills 
    data.skills = [
        {
            heading: 'Technical Fields',
            skills: raw['Technical Fields'].split(',').map((skill: string) => skill.trim()),
        },
        {
            heading: 'Programming Languages',
            skills: raw['Programming Languages'].split(',').map((skill: string) => skill.trim()),
        },
        {
            heading: 'Frameworks and Libraries',
            skills: raw['Frameworks and Libraries'].split(',').map((skill: string) => skill.trim()),
        },
        {
            heading: 'Tools and Other',
            skills: raw['Tools and Other'].split(',').map((skill: string) => skill.trim()),
        },
    ]

    // archivements

    const data: any = {
        archivements: [
            {
                name: raw['Achievement 01 - Name'],
                description: raw['Achievement 01 - Highlight'],
            },
            {
                name: raw['Achievement 02 - Name'],
                description: raw['Achievement 02 - Highlight'],
            },
        ],

        // right side
        
        education: {
            gpa: raw['GPA'],
            school: {
                heading: raw['School Name'],
                description: AL,
            }
        },
        experiences: [
            {
                heading: raw['Experience 01 - Internship Job Title'],
                subheading: raw['Experience 01 - Internship Company'],
                date: shortMonthYear(raw['Experience 01 - Internship - Start Date']) + ' - ' + shortMonthYear(raw['Experience 01 - Intenship - End Date']),
                description: raw['Experience 01 - Internship Description'],
            },
            {
                heading: raw['Experience 02 - Job Title'],
                subheading: raw['Experience 02 - Company Name'],
                date: shortMonthYear(raw['Experience 02 - Start Date']) + ' - ' + shortMonthYear(raw['Experience 02 - End Date']),
                description: raw['Experience 02 - Description'],
            },
        ],
        projects: [
            {
                heading: raw['Project 01 - Title'],
                subheading: raw['Project 01 - Tech Stack'],
                description: raw['Project 01 - Description'],
            },
            {
                heading: raw['Project 02 - Title'],
                subheading: raw['Project 02 - Tech Stack'],
                description: raw['Project 02 - Description'],
            },
            {
                heading: raw['Project 03 - Title'],
                subheading: raw['Project 03 - Tech Stack'],
                description: raw['Project 03 - Description'],
            },
            {
                heading: raw['Project 04 - Title'],
                subheading: raw['Project 04 - Tech Stack'],
                description: raw['Project 04 - Description'],
            },
        ],
        extra: [
            {
                name: raw['Activity 01 - Name'],
                description: raw['Activity 01 - Description'],
            },
            {
                name: raw['Activity 02 - Name'],
                description: raw['Activity 02 - Description'],
            },
        ],
    }

    return data
}

function shortMonthYear(date: string) {
    const d = new Date(date);
    return `${d.toLocaleString('default', { month: 'short' }).toUpperCase()} ${d.getFullYear()}`;
}