/*
   Maps a list of employees on a table
   Last worked on: 10/17/21 by Alex Keth, Sprint 7: IDxx, Display a Table of Employees
*/

const people = [
    {
        name: 'Alex Keth',
        title: 'Lead UX Designer/Developer',
        department: 'CSUS',
        role: 'Admin',
        email: 'alexketh@csus.edu',
        image:
            'https://media-exp1.licdn.com/dms/image/C5603AQFc_q0K62RdXw/profile-displayphoto-shrink_200_200/0/1624587258226?e=1640217600&v=beta&t=WtmnZV-QnxZqWQRzEVRGXDX1D1TKarNggKSbOT5pRgo',
    },
    {
        name: 'Sufyan Osman',
        title: 'Back-End Developer',
        department: 'CSUS',
        role: 'Admin',
        email: 'sufyanosman@csus.edu',
        image:
            'https://media-exp1.licdn.com/dms/image/C5603AQEgJzOT7cqjOQ/profile-displayphoto-shrink_200_200/0/1632984785057?e=1640217600&v=beta&t=orDutQhfrum-KuKD7FFGYF1SIOerrLbbT_-9HvQFMtc',
    },
    {
        name: 'Kareem Asfoor',
        title: 'Full-Stack Developer',
        department: 'CSUS',
        role: 'Admin',
        email: 'kareemasfoor@csus.edu',
        image:
            'https://media-exp1.licdn.com/dms/image/C5603AQF9TPkmY2JCZw/profile-displayphoto-shrink_200_200/0/1628068761843?e=1640217600&v=beta&t=2qsuJEFilb2lnYj3FSMJZW2a4UgJY7Rk3802I-XrJAU',
    },
    {
        name: 'Brandon Ho',
        title: 'Full-Stack Developer',
        department: 'CSUS',
        role: 'Admin',
        email: 'brandonho@csus.edu',
        image:
            'https://cdn.discordapp.com/attachments/643694716818554894/899565943867469884/Untitled2.png',
    },
    {
        name: 'Mark Cortez',
        title: 'UX Designer/Developer',
        department: 'CSUS',
        role: 'Admin',
        email: 'markcortez@csus.edu',
        image:
            'https://cdn.discordapp.com/attachments/643694716818554894/899565428664332328/Untitled.png',
    },
    {
        name: 'Leijan Legaspi',
        title: 'UX Designer/Developer',
        department: 'CSUS',
        role: 'Admin',
        email: 'leijanlegaspi@csus.edu',
        image:
            'https://media-exp1.licdn.com/dms/image/C5603AQGh3Zy3AuZ0Hw/profile-displayphoto-shrink_200_200/0/1632974927621?e=1640217600&v=beta&t=yDJkp0RaUphKso-taeBVb84xn0-dm-sZztavUw9Gws0',
    },
    {
        name: 'Louis Pham',
        title: 'THE GOD',
        department: 'CSUS',
        role: 'Admin',
        email: 'thegod@csus.edu',
        image:
            'https://media-exp1.licdn.com/dms/image/C4E03AQHE24mEzlya6g/profile-displayphoto-shrink_400_400/0/1583904475871?e=1640217600&v=beta&t=J5AHaKdc-SSLi-YSd5scl_tJ5DMUxxf-G3fw3Qpvarg',
    },
    // More people...
]

export default function EmployeeTable() {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                                    <div className="text-sm text-gray-500">{person.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{person.title}</div>
                                            <div className="text-sm text-gray-500">{person.department}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <a href="#" className="no-underline text-indigo-600 hover:text-indigo-900">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}