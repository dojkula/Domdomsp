import { Suspense, useRef, Component, ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

class SceneErrorBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false }
  static getDerivedStateFromError() { return { error: true } }
  render() {
    if (this.state.error) return (
      <div className="h-[520px] flex flex-col items-center justify-center text-brand-violet/50 gap-3">
        <span className="text-5xl">🧹</span>
        <p className="font-display text-sm">3D scene unavailable in this browser</p>
      </div>
    )
    return this.props.children
  }
}

// ─── Toon Material helper ───────────────────────────────────────────────────
function toon(color: string, steps = 4) {
  const grad = new THREE.DataTexture(
    new Uint8Array(
      Array.from({ length: steps }, (_, i) =>
        [Math.round((i / (steps - 1)) * 120 + 135), 0, 0, 255]
      ).flat()
    ),
    steps,
    1,
    THREE.RGBAFormat
  )
  grad.needsUpdate = true
  return new THREE.MeshToonMaterial({ color: new THREE.Color(color), gradientMap: grad })
}

// ─── Martin (male) character ────────────────────────────────────────────────
function Martin({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  const armRef = useRef<THREE.Group>(null)

  useFrame((_) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(Date.now() * 0.0005) * 0.12
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(Date.now() * 0.003) * 0.25 - 0.3
    }
  })

  const skinMat = toon('#c68642')
  const uniformMat = toon('#7c3aed')
  const trouserMat = toon('#1e1b4b')
  const hairMat = toon('#2c1503')
  const beardMat = toon('#3d1c02')
  const whiteMat = toon('#ffffff')
  const shoeMat = toon('#111111')
  const toolMat = toon('#f59e0b')

  return (
    <group ref={groupRef} position={position}>
      {/* Shoes */}
      <mesh position={[-0.14, -1.85, 0.05]} material={shoeMat}>
        <boxGeometry args={[0.18, 0.1, 0.28]} />
      </mesh>
      <mesh position={[0.14, -1.85, 0.05]} material={shoeMat}>
        <boxGeometry args={[0.18, 0.1, 0.28]} />
      </mesh>
      {/* Trousers */}
      <mesh position={[-0.14, -1.3, 0]} material={trouserMat}>
        <cylinderGeometry args={[0.13, 0.12, 0.7, 12]} />
      </mesh>
      <mesh position={[0.14, -1.3, 0]} material={trouserMat}>
        <cylinderGeometry args={[0.13, 0.12, 0.7, 12]} />
      </mesh>
      {/* Torso — violet uniform */}
      <mesh position={[0, -0.55, 0]} material={uniformMat}>
        <boxGeometry args={[0.6, 0.8, 0.35]} />
      </mesh>
      {/* DomDom logo patch */}
      <mesh position={[0.18, -0.42, 0.18]} material={whiteMat} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.14, 0.07, 0.01]} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, -0.1, 0]} material={skinMat}>
        <cylinderGeometry args={[0.1, 0.1, 0.18, 12]} />
      </mesh>
      {/* Left arm (static) */}
      <mesh position={[-0.42, -0.55, 0]} material={uniformMat} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.1, 0.09, 0.55, 10]} />
      </mesh>
      <mesh position={[-0.55, -0.82, 0]} material={skinMat}>
        <sphereGeometry args={[0.1, 10, 10]} />
      </mesh>
      {/* Right arm — animated holding Karcher wand */}
      <group ref={armRef} position={[0.38, -0.3, 0]}>
        <mesh position={[0.12, -0.22, 0]} material={uniformMat}>
          <cylinderGeometry args={[0.1, 0.09, 0.55, 10]} />
        </mesh>
        <mesh position={[0.18, -0.5, 0]} material={skinMat}>
          <sphereGeometry args={[0.1, 10, 10]} />
        </mesh>
        {/* Karcher wand */}
        <mesh position={[0.3, -0.55, 0.22]} rotation={[0.4, 0, -0.8]} material={toolMat}>
          <cylinderGeometry args={[0.03, 0.025, 0.6, 8]} />
        </mesh>
        {/* Spray head */}
        <mesh position={[0.54, -0.62, 0.44]} material={toon('#374151')}>
          <boxGeometry args={[0.1, 0.06, 0.18]} />
        </mesh>
        {/* Water spray particles */}
        {[0, 1, 2, 3, 4].map(i => (
          <mesh
            key={i}
            position={[
              0.6 + i * 0.06 + Math.sin(i * 2.1) * 0.05,
              -0.68 - i * 0.03,
              0.52 + i * 0.05,
            ]}
            material={toon('#93c5fd', 2)}
          >
            <sphereGeometry args={[0.025 - i * 0.003, 6, 6]} />
          </mesh>
        ))}
      </group>
      {/* Head */}
      <mesh position={[0, 0.22, 0]} material={skinMat}>
        <sphereGeometry args={[0.3, 24, 24]} />
      </mesh>
      {/* Beard */}
      <mesh position={[0, 0.05, 0.15]} material={beardMat}>
        <sphereGeometry args={[0.22, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
      </mesh>
      {/* Curly hair — cluster of spheres */}
      {[
        [0, 0.5, 0],
        [-0.15, 0.46, -0.08],
        [0.15, 0.46, -0.08],
        [-0.22, 0.35, 0.02],
        [0.22, 0.35, 0.02],
        [-0.1, 0.52, 0.06],
        [0.1, 0.52, 0.06],
        [0, 0.42, -0.2],
      ].map(([x, y, z], i) => (
        <mesh key={i} position={[x as number, y as number, z as number]} material={hairMat}>
          <sphereGeometry args={[0.14, 10, 10]} />
        </mesh>
      ))}
      {/* Eyes */}
      <mesh position={[-0.1, 0.25, 0.27]} material={whiteMat}>
        <sphereGeometry args={[0.07, 10, 10]} />
      </mesh>
      <mesh position={[0.1, 0.25, 0.27]} material={whiteMat}>
        <sphereGeometry args={[0.07, 10, 10]} />
      </mesh>
      <mesh position={[-0.1, 0.25, 0.32]} material={toon('#111')}>
        <sphereGeometry args={[0.045, 8, 8]} />
      </mesh>
      <mesh position={[0.1, 0.25, 0.32]} material={toon('#111')}>
        <sphereGeometry args={[0.045, 8, 8]} />
      </mesh>
      {/* Smile */}
      <mesh position={[0, 0.08, 0.28]} rotation={[0, 0, 0]} material={toon('#7f1d1d')}>
        <torusGeometry args={[0.08, 0.018, 8, 12, Math.PI]} />
      </mesh>
    </group>
  )
}

// ─── Dominika (female) character ────────────────────────────────────────────
function Dominika({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  const armRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(Date.now() * 0.0005 + 1.2) * 0.12
    }
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(Date.now() * 0.002 + 0.5) * 0.2 + 0.1
    }
  })

  const skinMat = toon('#f1c27d')
  const uniformMat = toon('#7c3aed')
  const trouserMat = toon('#1e1b4b')
  const hairMat = toon('#8b1a2a')
  const whiteMat = toon('#ffffff')
  const shoeMat = toon('#111111')
  const sprayMat = toon('#a78bfa')
  const glassMat = new THREE.MeshStandardMaterial({ color: '#94a3b8', transparent: true, opacity: 0.45, roughness: 0 })

  return (
    <group ref={groupRef} position={position}>
      {/* Shoes */}
      <mesh position={[-0.11, -1.85, 0.04]} material={shoeMat}>
        <boxGeometry args={[0.16, 0.09, 0.24]} />
      </mesh>
      <mesh position={[0.11, -1.85, 0.04]} material={shoeMat}>
        <boxGeometry args={[0.16, 0.09, 0.24]} />
      </mesh>
      {/* Trousers */}
      <mesh position={[-0.11, -1.3, 0]} material={trouserMat}>
        <cylinderGeometry args={[0.11, 0.1, 0.7, 12]} />
      </mesh>
      <mesh position={[0.11, -1.3, 0]} material={trouserMat}>
        <cylinderGeometry args={[0.11, 0.1, 0.7, 12]} />
      </mesh>
      {/* Torso — violet uniform */}
      <mesh position={[0, -0.55, 0]} material={uniformMat}>
        <boxGeometry args={[0.5, 0.78, 0.3]} />
      </mesh>
      {/* DomDom patch */}
      <mesh position={[0.14, -0.44, 0.16]} material={whiteMat}>
        <boxGeometry args={[0.12, 0.06, 0.01]} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, -0.12, 0]} material={skinMat}>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 10]} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-0.35, -0.55, 0]} material={uniformMat} rotation={[0, 0, 0.15]}>
        <cylinderGeometry args={[0.085, 0.075, 0.5, 10]} />
      </mesh>
      <mesh position={[-0.46, -0.8, 0]} material={skinMat}>
        <sphereGeometry args={[0.085, 10, 10]} />
      </mesh>
      {/* Right arm — holding spray bottle */}
      <group ref={armRef} position={[0.32, -0.32, 0]}>
        <mesh position={[0.1, -0.2, 0]} material={uniformMat}>
          <cylinderGeometry args={[0.085, 0.075, 0.5, 10]} />
        </mesh>
        <mesh position={[0.15, -0.46, 0]} material={skinMat}>
          <sphereGeometry args={[0.085, 10, 10]} />
        </mesh>
        {/* Spray bottle */}
        <mesh position={[0.22, -0.62, 0.1]} rotation={[0.3, 0, -0.4]} material={sprayMat}>
          <cylinderGeometry args={[0.06, 0.06, 0.28, 10]} />
        </mesh>
        <mesh position={[0.26, -0.47, 0.16]} material={toon('#ddd6fe')}>
          <boxGeometry args={[0.1, 0.06, 0.06]} />
        </mesh>
        {/* Spray mist */}
        {[0, 1, 2].map(i => (
          <mesh
            key={i}
            position={[0.34 + i * 0.05, -0.5 + i * 0.03, 0.22 + i * 0.04]}
            material={toon('#bfdbfe', 2)}
          >
            <sphereGeometry args={[0.025 - i * 0.005, 6, 6]} />
          </mesh>
        ))}
      </group>
      {/* Head */}
      <mesh position={[0, 0.2, 0]} material={skinMat}>
        <sphereGeometry args={[0.26, 22, 22]} />
      </mesh>
      {/* Auburn hair — top */}
      <mesh position={[0, 0.42, -0.04]} material={hairMat}>
        <sphereGeometry args={[0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
      </mesh>
      {/* Hair sides */}
      <mesh position={[-0.22, 0.12, -0.04]} material={hairMat}>
        <sphereGeometry args={[0.13, 12, 12]} />
      </mesh>
      <mesh position={[0.22, 0.12, -0.04]} material={hairMat}>
        <sphereGeometry args={[0.13, 12, 12]} />
      </mesh>
      {/* Hair back/length */}
      <mesh position={[0, 0.0, -0.22]} material={hairMat}>
        <sphereGeometry args={[0.22, 12, 12]} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.09, 0.22, 0.23]} material={whiteMat}>
        <sphereGeometry args={[0.06, 10, 10]} />
      </mesh>
      <mesh position={[0.09, 0.22, 0.23]} material={whiteMat}>
        <sphereGeometry args={[0.06, 10, 10]} />
      </mesh>
      <mesh position={[-0.09, 0.22, 0.27]} material={toon('#111')}>
        <sphereGeometry args={[0.038, 8, 8]} />
      </mesh>
      <mesh position={[0.09, 0.22, 0.27]} material={toon('#111')}>
        <sphereGeometry args={[0.038, 8, 8]} />
      </mesh>
      {/* Glasses frames */}
      <mesh position={[-0.09, 0.22, 0.28]} material={glassMat}>
        <torusGeometry args={[0.075, 0.012, 8, 24]} />
      </mesh>
      <mesh position={[0.09, 0.22, 0.28]} material={glassMat}>
        <torusGeometry args={[0.075, 0.012, 8, 24]} />
      </mesh>
      {/* Glasses bridge */}
      <mesh position={[0, 0.22, 0.27]} material={glassMat} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.008, 0.008, 0.07, 6]} />
      </mesh>
      {/* Nose piercing dot */}
      <mesh position={[0.0, 0.1, 0.255]} material={toon('#d4af37')}>
        <sphereGeometry args={[0.013, 6, 6]} />
      </mesh>
      {/* Smile */}
      <mesh position={[0, 0.07, 0.24]} material={toon('#7f1d1d')}>
        <torusGeometry args={[0.07, 0.015, 8, 12, Math.PI]} />
      </mesh>
    </group>
  )
}

// ─── Floating sparkles ───────────────────────────────────────────────────────
function Sparkles() {
  const ref = useRef<THREE.Points>(null)
  const positions = new Float32Array(
    Array.from({ length: 60 }, () => [
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 4,
      (Math.random() - 0.5) * 2,
    ]).flat()
  )

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.06
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#a78bfa" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

// ─── Main exported scene ─────────────────────────────────────────────────────
export function CharacterScene() {
  return (
    <SceneErrorBoundary>
    <div className="w-full h-[520px] md:h-[600px]">
      <Canvas
        camera={{ position: [0, 0.2, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 6, 4]} intensity={1.2} castShadow />
        <pointLight position={[-3, 2, 2]} intensity={0.8} color="#a78bfa" />
        <pointLight position={[3, -1, 1]} intensity={0.4} color="#2563eb" />

        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.06} floatIntensity={0.4}>
            <Martin position={[-1.2, 0.1, 0]} />
          </Float>
          <Float speed={1.2} rotationIntensity={0.06} floatIntensity={0.4}>
            <Dominika position={[1.2, 0.0, 0]} />
          </Float>
          <Sparkles />
          <ContactShadows position={[0, -2.0, 0]} opacity={0.25} scale={6} blur={2} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI * 0.35}
          maxPolarAngle={Math.PI * 0.65}
          autoRotate={false}
        />
      </Canvas>
    </div>
    </SceneErrorBoundary>
  )
}
