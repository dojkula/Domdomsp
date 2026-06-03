import { Suspense, useRef, Component, ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Torus, Cylinder, Sphere, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

class SceneErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    if (this.state.failed) return null
    return this.props.children
  }
}

// ── Spray bottle ─────────────────────────────────────────────────────────────
function SprayBottle({ pos }: { pos: [number, number, number] }) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (g.current) g.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.25
  })
  const mat = new THREE.MeshPhysicalMaterial({ color: '#bfdbfe', roughness: 0.15, metalness: 0.05, transmission: 0.35, thickness: 0.5 })
  const cap = new THREE.MeshPhysicalMaterial({ color: '#2563eb', roughness: 0.25, metalness: 0.1 })
  const trigMat = new THREE.MeshStandardMaterial({ color: '#1d4ed8', roughness: 0.3 })
  return (
    <Float floatIntensity={0.6} speed={1.8} rotationIntensity={0.08} position={pos}>
      <group ref={g}>
        {/* Body */}
        <Cylinder args={[0.28, 0.25, 1.4, 32]} position={[0, 0, 0]} material={mat} castShadow />
        {/* Shoulder taper */}
        <Cylinder args={[0.12, 0.28, 0.32, 24]} position={[0, 0.86, 0]} material={mat} />
        {/* Neck */}
        <Cylinder args={[0.07, 0.07, 0.3, 16]} position={[0, 1.14, 0]} material={cap} />
        {/* Nozzle */}
        <Cylinder args={[0.09, 0.07, 0.14, 16]} position={[0, 1.32, 0]} material={cap} />
        {/* Trigger guard */}
        <Torus args={[0.2, 0.035, 8, 24, Math.PI]} position={[0.22, 0.65, 0]} rotation={[0, 0, -Math.PI * 0.18]} material={trigMat} />
        {/* Trigger */}
        <RoundedBox args={[0.06, 0.3, 0.06]} radius={0.02} position={[0.32, 0.6, 0]} rotation={[0, 0, 0.4]} material={trigMat} />
        {/* Label stripe */}
        <Cylinder args={[0.285, 0.285, 0.22, 32]} position={[0, 0.1, 0]}>
          <meshStandardMaterial color="#eff6ff" roughness={0.6} />
        </Cylinder>
      </group>
    </Float>
  )
}

// ── Pressure washer gun ───────────────────────────────────────────────────────
function PressureGun({ pos }: { pos: [number, number, number] }) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (g.current) g.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.35 + 1.2) * 0.2
  })
  const body = new THREE.MeshStandardMaterial({ color: '#fbbf24', roughness: 0.3, metalness: 0.2 })
  const dark = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.4, metalness: 0.3 })
  const silver = new THREE.MeshStandardMaterial({ color: '#cbd5e1', roughness: 0.15, metalness: 0.6 })
  return (
    <Float floatIntensity={0.5} speed={2.1} rotationIntensity={0.06} position={pos}>
      <group ref={g} rotation={[0, 0.3, 0]}>
        {/* Main body */}
        <RoundedBox args={[0.42, 1.0, 0.32]} radius={0.08} position={[0, 0, 0]} material={body} castShadow />
        {/* Grip */}
        <Cylinder args={[0.12, 0.1, 0.82, 16]} position={[0, -0.8, 0]} rotation={[0.25, 0, 0]} material={dark} />
        {/* Nozzle barrel */}
        <Cylinder args={[0.07, 0.07, 1.1, 16]} position={[0.55, 0.2, 0]} rotation={[0, 0, -Math.PI / 2]} material={silver} />
        {/* Nozzle tip */}
        <Cylinder args={[0.05, 0.09, 0.18, 16]} position={[1.13, 0.2, 0]} rotation={[0, 0, -Math.PI / 2]} material={dark} />
        {/* Hose connector */}
        <Cylinder args={[0.09, 0.09, 0.28, 16]} position={[-0.26, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#475569" roughness={0.5} metalness={0.2} />
        </Cylinder>
        {/* Water spray dots */}
        {[0, 1, 2, 3].map(i => (
          <Sphere key={i} args={[0.03, 8, 8]} position={[1.35 + i * 0.14, 0.2 + Math.sin(i * 1.4) * 0.12, 0]}>
            <meshStandardMaterial color="#bfdbfe" transparent opacity={0.7 - i * 0.15} />
          </Sphere>
        ))}
      </group>
    </Float>
  )
}

// ── Squeegee ─────────────────────────────────────────────────────────────────
function Squeegee({ pos }: { pos: [number, number, number] }) {
  const g = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (g.current) g.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5 + 2.5) * 0.22
  })
  const handle = new THREE.MeshPhysicalMaterial({ color: '#2563eb', roughness: 0.25, metalness: 0.15 })
  const blade = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.5 })
  const rubber = new THREE.MeshStandardMaterial({ color: '#374151', roughness: 0.7 })
  return (
    <Float floatIntensity={0.7} speed={1.5} rotationIntensity={0.07} position={pos}>
      <group ref={g} rotation={[0.2, 0, 0.3]}>
        {/* Handle */}
        <Cylinder args={[0.07, 0.065, 2.0, 16]} position={[0, 0, 0]} rotation={[0, 0, 0.2]} material={handle} castShadow />
        {/* Connector */}
        <RoundedBox args={[0.22, 0.16, 0.14]} radius={0.04} position={[0.34, -1.06, 0]} material={blade} />
        {/* Blade bar */}
        <RoundedBox args={[1.1, 0.1, 0.12]} radius={0.03} position={[0.34, -1.22, 0]} material={blade} />
        {/* Rubber edge */}
        <RoundedBox args={[1.1, 0.055, 0.07]} radius={0.02} position={[0.34, -1.31, 0]} material={rubber} />
        {/* Rivets */}
        {[-0.44, 0, 0.44].map((x, i) => (
          <Cylinder key={i} args={[0.025, 0.025, 0.16, 8]} position={[0.34 + x, -1.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.2} />
          </Cylinder>
        ))}
      </group>
    </Float>
  )
}

// ── Soap bubbles ──────────────────────────────────────────────────────────────
function Bubbles() {
  const bubbles = [
    { pos: [-2.2, 1.4, -1.5] as [number,number,number], r: 0.18, speed: 1.2 },
    { pos: [2.8, -0.5, -1.2] as [number,number,number], r: 0.12, speed: 1.8 },
    { pos: [-1.8, -1.6, -0.8] as [number,number,number], r: 0.22, speed: 1.4 },
    { pos: [2.4, 1.8, -1.8] as [number,number,number], r: 0.09, speed: 2.1 },
    { pos: [0.6, 2.4, -2.2] as [number,number,number], r: 0.15, speed: 1.6 },
    { pos: [-2.8, 0.4, -2.0] as [number,number,number], r: 0.10, speed: 1.9 },
  ]
  return (
    <>
      {bubbles.map((b, i) => (
        <Float key={i} floatIntensity={0.5} speed={b.speed} position={b.pos}>
          <Sphere args={[b.r, 20, 20]}>
            <meshPhysicalMaterial
              color="#bfdbfe"
              transmission={0.92}
              roughness={0}
              metalness={0.05}
              thickness={0.3}
              transparent
              opacity={0.55}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

// ── Exported scene ────────────────────────────────────────────────────────────
export function ToolScene() {
  return (
    <SceneErrorBoundary>
      <div className="w-full h-[480px] md:h-[560px]">
        <Canvas
          camera={{ position: [0, 0.2, 6], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          shadows
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[4, 8, 5]} intensity={1.6} castShadow />
          <directionalLight position={[-4, 2, 3]} intensity={0.5} color="#dbeafe" />
          <pointLight position={[0, 4, 2]} intensity={0.6} color="#bfdbfe" />

          <Suspense fallback={null}>
            <SprayBottle pos={[-1.4, 0.1, 0]} />
            <PressureGun pos={[1.3, 0.2, 0]} />
            <Squeegee pos={[0, -0.3, 0.3]} />
            <Bubbles />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI * 0.35}
            maxPolarAngle={Math.PI * 0.65}
            autoRotate
            autoRotateSpeed={0.6}
          />
        </Canvas>
      </div>
    </SceneErrorBoundary>
  )
}
