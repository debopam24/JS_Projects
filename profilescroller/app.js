const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Willam Johnson',
        age: 38,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    }
];
const profiles = profileIterator(data);
document.querySelector('#next').addEventListener('click',nextProfile);
nextProfile();
function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class = "list-group">
    <li class = "list-group-item">Name: ${currentProfile.name}</li>
    <li class = "list-group-item">Age: ${currentProfile.age}</li>
    <li class = "list-group-item">Gender: ${currentProfile.gender}</li>
    <li class = "list-group-item">Looking for: ${currentProfile.lookingfor}</li>
    <li class = "list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;
    document.querySelector('#imageDisplay').innerHTML = `<img src = "${currentProfile.image}">`;
    } else {
        window.location.reload();
    }
}
function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}