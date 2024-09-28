//listing element
var _a;
(_a = document.getElementById('resumedoc')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById('profilepicture');
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var fathernameElement = document.getElementById('fathername');
    var emailElement = document.getElementById('email');
    var contactnumberElement = document.getElementById('contactnumber');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && firstnameElement && lastnameElement && fathernameElement && emailElement && contactnumberElement && educationElement && experienceElement && skillsElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var fathername = fathernameElement.value;
        var email = emailElement.value;
        var contactnumber = contactnumberElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //create resume output
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"profilepicture\">") : '', "\n        <p><strong>First Name:</strong> ").concat(firstname, " </p>\n        <p><strong>Last Name:</strong> ").concat(lastname, " </p>\n        <p><strong>Father Name:</strong> ").concat(fathername, " </p>\n        <p><strong>Email:</strong> ").concat(email, " </p>\n        <p><strong>Contact Number:</strong> ").concat(contactnumber, " </p>\n        \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
    }
    else {
        console.error('one or more elements are missing');
    }
});
