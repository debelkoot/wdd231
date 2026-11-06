const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and functions) using Python.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually building and publishing several web pages.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more proficient in writing and debugging software by learning to write functions and call them by name. Additionally, students will learn to write programs that use files, lists, recursion, and exceptions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the concepts of object-oriented programming for students who have already introduced programming. Students will learn how to create and use classes, objects, inheritance, and encapsulation.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior web development fundamentals and introduces more advanced JS concepts including DOM manipulation, client storage, and JS modules.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior web development fundamentals and introduces more advanced JS, CSS, and accessibility standards for building responsive web applications.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseContainer = document.querySelector('#course-container');
const totalCreditsElement = document.querySelector('#total-credits');
const btnAll = document.querySelector('#all');
const btnWdd = document.querySelector('#wdd');
const btnCse = document.querySelector('#cse');

function displayCourses(filteredCourses) {
    courseContainer.innerHTML = '';
    
    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        if (course.completed) {
            card.classList.add('completed');
        }
        card.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
        courseContainer.appendChild(card);
    });

    // Calculate total credits using reduce()
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `Total Credits Required: ${totalCredits}`;
}

// Event Listeners for Filtering
btnAll.addEventListener('click', () => {
    displayCourses(courses);
    setActiveButton(btnAll);
});

btnWdd.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
    setActiveButton(btnWdd);
});

btnCse.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
    setActiveButton(btnCse);
});

function setActiveButton(activeBtn) {
    [btnAll, btnWdd, btnCse].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Initial load
displayCourses(courses);
btnAll.classList.add('active');
