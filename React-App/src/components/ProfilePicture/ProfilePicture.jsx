function ProfilePicture() {

    const imageURL = 'https://picsum.photos/200'
    const handleClick = () => {
        console.log("Image Clicked");
    }
    const handleClick2 = async (e) => { 
        e.target.style.display = 'none';
        console.log("Image Clicked");
        await new Promise(resolve => setTimeout(resolve, 2000));
        e.target.style.display = 'block';
    };
    return (
        <img src={imageURL} alt="Random Image" onClick={(e) => handleClick2(e)}/>
    );
}

export default ProfilePicture;