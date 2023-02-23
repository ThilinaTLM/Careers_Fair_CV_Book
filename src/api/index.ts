export async function getData() {
    const filename = 'data.json';
    const data = await fetch(filename);
    return await data.json();
}

export const preprocess = (raw: any) => {

    const data: any = {}

    // basic info
    data.firstName = raw['First Name']
    data.lastName = raw['Last Name']
    data.aboutMe = raw['About Me']
    data.index = raw['Index Number']
    data.profilePic = raw['Profile Picture']

    // contact info
    data.contacts = [
        {
            icon: 'telephone.png',
            label: raw['Contact Number'],
            link: `tel:${raw['Contact Number']}`,
        },
        {
            icon: 'email.png',
            label: raw['CSE Email'],
            link: `mailto:${raw['CSE Email']}`,
        },
        {
            icon: 'github.png',
            label: raw['GitHub Username'],
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
    data.awards = []
    for (let i = 1; i <= 3; i++) {
        const heading = raw[`Achievement 0${i} - Name`]
        const description = raw[`Achievement 0${i} - Highlight`]
        if (heading && description) {
            data.awards.push({
                heading,
                description,
            })
        }
    }

    // education
    data.education = [
        {
            heading: "University of Moratuwa",
            subheading: "B.Sc. in Computer Science and Engineering",
            description: `CGPA: ${raw['GPA']}`
        },
        {
            heading: raw['School Name'],
            subheading: "G.C.E. Advanced Level Examination 2017",
            description: `${raw['A/L Examination Results']} | IR - ${raw['A/L - Island Rank']}`
        }
    ]

    // experiences
    data.experiences = [ {
        heading: raw['Experience 01 - Internship Job Title'],
        subheading: raw['Experience 01 - Internship Company'],
        date: shortDateRange(raw['Experience 01 - Internship - Start Date'], raw['Experience 01 - Intenship - End Date']),
        description: raw['Experience 01 - Internship Description'],
    }]
    for (let i = 2; i <= 3; i++) {
        const heading = raw[`Experience 0${i} - Job Title`]
        const subheading = raw[`Experience 0${i} - Company Name`]
        const date = `${raw[`Experience 0${i} - Start Date`]} - ${raw[`Experience ${i} - End Date`]}`
        const description = raw[`Experience 0${i} - Description`]
        if (heading) {
            data.experiences.push({
                heading,
                subheading,
                date,
                description,
            })
        }
    }

    // projects
    data.projects = []
    for (let i = 1; i <= 5; i++) {
        const heading = raw[`Project 0${i} - Title`]
        const subheading = raw[`Project 0${i} - Tech Stack`]
        const description = raw[`Project 0${i} - Description`]
        if (heading) {
            data.projects.push({
                heading,
                subheading,
                description,
            })
        }
    }
    
    // activities
    data.activities = []
    for (let i = 1; i <= 5; i++) {
        const heading = raw[`Activity 0${i} - Name`]
        const description = raw[`Activity 0${i} - Description`]
        if (heading) {
            data.activities.push({
                heading,
                description,
            })
        }
    }

    return data
}

function shortMonthYear(date: string) {
    if (!date) return '';
    const d = new Date(date);
    return `${d.toLocaleString('default', { month: 'short' }).toUpperCase()} ${d.getFullYear()}`;
}

function shortDateRange(start: string, end: string) {
    const startDate = shortMonthYear(start);
    const endDate = shortMonthYear(end);
    return `${startDate} - ${endDate}`.trim();
}