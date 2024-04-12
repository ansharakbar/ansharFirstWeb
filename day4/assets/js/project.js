const dataProject = [];

function addProject(event) {
    event.preventDefault();

const name = document.getElementById('name').value;
const start = document.getElementById('startDate').value;
const end = document.getElementById('endDate').value;
const description = document.getElementById('description').value;
const tech = document.querySelectorAll('.selectTech').value;
const upload = document.getElementById('uploadImage').value;

if (name=='') {
    return alert `Please Enter Your Project Name!`;
}else if (start=='') {
    return alert `Please Enter Your Start Date Project`;
}else if (end=='') {
    return alert `Please Enter Your End Date Project`;
}else if (description=='') {
    return alert `Please Enter Your Description Project`
}else if (tech=='') {
    return alert `Please Select Your Technologies`;
}else if (upload=='') {
    return alert `Please Enter Your Image Project`;
};

dataProject.push ({
    Name: name,
    Date : {
        ["start"]: start,
        ["end"]: end    
    },
    Description: description,
    Tech: tech,
    Image: upload
});

console.log(dataProject);
}