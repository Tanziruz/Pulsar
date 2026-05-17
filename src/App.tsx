import { Canvas, useFrame} from "@react-three/fiber"
import { CameraControls, Stars } from "@react-three/drei"
import { useRef } from "react"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import * as THREE from "three"

// function DirectionalLightWithHelper() {
//   const light = useRef<DirectionalLight | null>(null)
//   useHelper(light, DirectionalLightHelper, 1, 'red')
//   return (
//     <directionalLight
//       // castShadow
//       intensity={5}
//       ref={light}
//       position={[5, 5, 5]}
//       color="white"
//     />
//   )
// }
function RotatingMesh() {
  const waveRotation = useRef<THREE.Mesh | null>(null)
  useFrame(() => {
    if (waveRotation.current) {
      waveRotation.current.rotation.y += 10;
    }
  })
    return (
       <group rotation={[0,0,-30.4 * Math.PI / 180]}>
         <mesh>
               <sphereGeometry args={[1, 64, 64]} />
            
               <meshBasicMaterial color="#509bdd" />
             </mesh>
          <mesh ref={waveRotation} rotation={[0,0, -3.4 * Math.PI/180]}>
            <cylinderGeometry args={[0.1, 0.1, 1000, 32]} />
            
            <meshStandardMaterial color="#ffffff" />
          </mesh>
 <pointLight intensity={12} distance={10} color="#88ccff" />

       </group>
    )
}

const App = () => {
 

  return (
    <div className="w-screen h-dvh">  
      <Canvas className="bg-black">

        <CameraControls />
        {/* <OrbitControls /> */}
  <ambientLight />
  <EffectComposer>
    <Bloom
      intensity={12}
      kernelSize={3}
      luminanceThreshold={0.05}
      luminanceSmoothing={0.025}
    />
  </EffectComposer>
  {/* <DirectionalLightWithHelper /> */}
  <RotatingMesh />

      
<Stars
  radius={100}
  depth={50}
  count={1000}
  factor={4}
/>
</Canvas>
    </div>
  )
}

export default App
