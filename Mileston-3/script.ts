//listing element

document.getElementById('resumedoc')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // type assertion
    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const firstnameElement = document.getElementById('firstname') as HTMLInputElement;
    const lastnameElement = document.getElementById('lastname') as HTMLInputElement;
    const fathernameElement = document.getElementById('fathername') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactnumberElement = document.getElementById('contactnumber') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if(profilePictureInput && firstnameElement && lastnameElement && fathernameElement && emailElement && contactnumberElement && educationElement && experienceElement && skillsElement){

        const firstname = firstnameElement.value;
        const lastname = lastnameElement.value;
        const fathername = fathernameElement.value;
        const email = emailElement.value;
        const contactnumber = contactnumberElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        //picture element
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        //create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilepicture">` : ''}
        <p><strong>First Name:</strong> ${firstname} </p>
        <p><strong>Last Name:</strong> ${lastname} </p>
        <p><strong>Father Name:</strong> ${fathername} </p>
        <p><strong>Email:</strong> ${email} </p>
        <p><strong>Contact Number:</strong> ${contactnumber} </p>
        
        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        `;

        const resumeOutputElement = document.getElementById('resumeOutput')
        if(resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput
        }
    }else{
        console.error('one or more elements are missing')
    }
})