import * as THREE from 'three'
import { useMemo } from "react"
import { Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import FloatWord from './FloatWord';

const WordCloud = ({ count = 4, radius = 15, wordList = [] }) => {
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        for (let i = 1; i < count + 1; i++)
        // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
        for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), wordList[(i - 1) * count + j]])
        return temp
    }, [count, radius]);
    return (
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} 
        style={{ height: 300, }}
        >
            <fog attach="fog" args={['#202025', 0, 80]} />
            {
                words.map(([pos, word], index) => <FloatWord key={index} position={pos} children={word} />)
            }
            <TrackballControls noZoom={true} noPan={true} />
        </Canvas>
    );
}

export default WordCloud;