import { Parallax } from 'react-scroll-parallax'

const RotateIcon = () => {
    return (
        <Parallax
            rotateZ={[0, 360]}
            style={{ display: 'inline', width: 175, height: 175 }}
        >
                <img 
                src="Profile.JPG" 
                width={150}
                height={150}
                style={{ borderRadius: 75 }}
                />
        </Parallax>
    );
}

export default RotateIcon;