import * as THREE from 'three'
import { Text } from "@react-three/drei"
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const FloatWord = ({children, ...props}) => {
    const color = new THREE.Color();
    const fontProps= { font: "/Eras_Bold_ITC.woff", fontSize: 3 }
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])

    useFrame(({ camera }) => {
        ref.current.quaternion.copy(camera.quaternion)
        ref.current.material.color.lerp(color.set(hovered ? '#E6BCCD' : '#D295BF'), 0.1)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps}>{children}</Text>
}

export default FloatWord;