import { Html, useProgress } from '@react-three/drei'

export function CustomLoader() {
    const { progress } = useProgress()
    return <Html center>{progress}%</Html>
}