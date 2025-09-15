function ProfilePicture() {

    const imageURL = 'https://picsum.photos/200'
    const handleClick = () => {
        console.log("Image Clicked");
    }
    const handleClick2 = (e) => { 
        e.target.style.display = 'none';
        console.log("Image Clicked");
    };
    return (
        <img src={imageURL} alt="Random Image" onClick={(e) => handleClick2(e)}/>
    );
}

export default ProfilePicture;