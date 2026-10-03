"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, RoundedBox, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Desk({ position, screenColor = "#ffffff" }: { position: [number, number, number]; screenColor?: string }) {
  return (
    <group position={position}>
      {/* tabletop - light wood */}
      <RoundedBox args={[1.7, 0.07, 0.95]} radius={0.03} position={[0, 0.72, 0]}>
        <meshStandardMaterial color="#fdfbf7" roughness={0.85} />
      </RoundedBox>
      {/* legs */}
      <RoundedBox args={[0.06, 0.72, 0.06]} radius={0.02} position={[-0.7, 0.36, 0.35]}>
        <meshStandardMaterial color="#1c1917" />
      </RoundedBox>
      <RoundedBox args={[0.06, 0.72, 0.06]} radius={0.02} position={[0.7, 0.36, 0.35]}>
        <meshStandardMaterial color="#1c1917" />
      </RoundedBox>
      <RoundedBox args={[0.06, 0.72, 0.06]} radius={0.02} position={[-0.7, 0.36, -0.35]}>
        <meshStandardMaterial color="#1c1917" />
      </RoundedBox>
      <RoundedBox args={[0.06, 0.72, 0.06]} radius={0.02} position={[0.7, 0.36, -0.35]}>
        <meshStandardMaterial color="#1c1917" />
      </RoundedBox>
      {/* monitor stand */}
      <RoundedBox args={[0.18, 0.02, 0.18]} radius={0.01} position={[0, 0.76, -0.15]}>
        <meshStandardMaterial color="#e7e5e4" />
      </RoundedBox>
      <RoundedBox args={[0.04, 0.28, 0.04]} radius={0.015} position={[0, 0.9, -0.15]}>
        <meshStandardMaterial color="#d6d3d1" />
      </RoundedBox>
      {/* monitor frame */}
      <RoundedBox args={[0.9, 0.55, 0.04]} radius={0.03} position={[0, 1.18, -0.18]}>
        <meshStandardMaterial color="#1c1917" />
      </RoundedBox>
      {/* screen */}
      <mesh position={[0, 1.18, -0.155]}>
        <planeGeometry args={[0.82, 0.47]} />
        <meshStandardMaterial color={screenColor} emissive={screenColor} emissiveIntensity={0.18} roughness={0.4} />
      </mesh>
      {/* code lines on screen */}
      <mesh position={[0, 1.22, -0.145]}>
        <planeGeometry args={[0.65, 0.03]} />
        <meshBasicMaterial color="#a8a29e" transparent opacity={0.55} />
      </mesh>
      <mesh position={[-0.05, 1.16, -0.145]}>
        <planeGeometry args={[0.55, 0.025]} />
        <meshBasicMaterial color="#a8a29e" transparent opacity={0.35} />
      </mesh>
      <mesh position={[0.02, 1.1, -0.145]}>
        <planeGeometry args={[0.45, 0.025]} />
        <meshBasicMaterial color="#a8a29e" transparent opacity={0.28} />
      </mesh>
      {/* keyboard */}
      <RoundedBox args={[0.55, 0.02, 0.22]} radius={0.015} position={[0, 0.77, 0.15]}>
        <meshStandardMaterial color="#e7e5e4" />
      </RoundedBox>
      {/* mouse */}
      <RoundedBox args={[0.1, 0.02, 0.16]} radius={0.02} position={[0.45, 0.77, 0.18]}>
        <meshStandardMaterial color="#e7e5e4" />
      </RoundedBox>
      {/* small plant on desk */}
      <RoundedBox args={[0.14, 0.14, 0.14]} radius={0.02} position={[0.68, 0.83, -0.3]}>
        <meshStandardMaterial color="#f5f5f4" />
      </RoundedBox>
      <mesh position={[0.68, 0.96, -0.3]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial color="#86efac" roughness={0.9} />
      </mesh>
    </group>
  );
}

function AgentFigure({ position, color = "#e7e5e4", accent = "#a8a29e" }: { position: [number, number, number]; color?: string; accent?: string }) {
  return (
    <Float speed={1.0} rotationIntensity={0.05} floatIntensity={0.35}>
      <group position={position}>
        {/* chair */}
        <RoundedBox args={[0.5, 0.08, 0.5]} radius={0.04} position={[0, 0.45, 0.05]}>
          <meshStandardMaterial color="#d6d3d1" />
        </RoundedBox>
        <RoundedBox args={[0.5, 0.45, 0.06]} radius={0.02} position={[0, 0.7, -0.18]}>
          <meshStandardMaterial color="#d6d3d1" />
        </RoundedBox>
        {/* body */}
        <RoundedBox args={[0.36, 0.52, 0.24]} radius={0.08} position={[0, 0.86, 0]}>
          <meshStandardMaterial color={color} roughness={0.85} />
        </RoundedBox>
        {/* head */}
        <mesh position={[0, 1.24, 0]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#fdfbf7" roughness={0.5} />
        </mesh>
        {/* face hint - visor / glasses */}
        <RoundedBox args={[0.22, 0.06, 0.04]} radius={0.015} position={[0, 1.24, 0.15]}>
          <meshStandardMaterial color={accent} />
        </RoundedBox>
        {/* arms typing */}
        <RoundedBox args={[0.09, 0.28, 0.09]} radius={0.04} position={[-0.22, 0.86, 0.18]}>
          <meshStandardMaterial color={color} />
        </RoundedBox>
        <RoundedBox args={[0.09, 0.28, 0.09]} radius={0.04} position={[0.22, 0.86, 0.18]}>
          <meshStandardMaterial color={color} />
        </RoundedBox>
        {/* legs */}
        <RoundedBox args={[0.13, 0.4, 0.13]} radius={0.04} position={[-0.12, 0.35, 0.15]}>
          <meshStandardMaterial color="#57534e" />
        </RoundedBox>
        <RoundedBox args={[0.13, 0.4, 0.13]} radius={0.04} position={[0.12, 0.35, 0.15]}>
          <meshStandardMaterial color="#57534e" />
        </RoundedBox>
      </group>
    </Float>
  );
}

function Room() {
  return (
    <group>
      {/* floor - light wood */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#fafaf9" roughness={0.9} />
      </mesh>
      {/* subtle floor grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial color="#f5f5f4" transparent opacity={0.6} />
      </mesh>
      {/* back wall */}
      <mesh position={[0, 1.8, -3.2]}>
        <planeGeometry args={[12, 3.6]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
      {/* side wall right - glass hint */}
      <mesh position={[4.2, 1.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[8, 3]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.35} roughness={0.2} />
      </mesh>
      {/* baseboard */}
      <RoundedBox args={[12, 0.08, 0.06]} radius={0.01} position={[0, 0.08, -3.15]}>
        <meshStandardMaterial color="#e7e5e4" />
      </RoundedBox>
      {/* ceiling light strips */}
      <RoundedBox args={[4.5, 0.04, 0.14]} radius={0.02} position={[0, 3.1, -0.5]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.7} />
      </RoundedBox>
      <RoundedBox args={[4.5, 0.04, 0.14]} radius={0.02} position={[0, 3.1, 1.2]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </RoundedBox>
      {/* shelf on back wall */}
      <RoundedBox args={[2.2, 0.06, 0.28]} radius={0.02} position={[0, 2.15, -2.95]}>
        <meshStandardMaterial color="#fdfbf7" />
      </RoundedBox>
      <RoundedBox args={[0.18, 0.22, 0.18]} radius={0.02} position={[-0.7, 2.32, -2.95]}>
        <meshStandardMaterial color="#e7e5e4" />
      </RoundedBox>
      <RoundedBox args={[0.22, 0.18, 0.18]} radius={0.02} position={[-0.35, 2.3, -2.95]}>
        <meshStandardMaterial color="#ddd6fe" />
      </RoundedBox>
      <RoundedBox args={[0.18, 0.25, 0.18]} radius={0.02} position={[0.05, 2.335, -2.95]}>
        <meshStandardMaterial color="#fed7aa" />
      </RoundedBox>
      <mesh position={[0.45, 2.36, -2.95]}>
        <sphereGeometry args={[0.11, 8, 8]} />
        <meshStandardMaterial color="#86efac" />
      </mesh>
      {/* large plant corner */}
      <RoundedBox args={[0.4, 0.45, 0.4]} radius={0.06} position={[-3.6, 0.22, -2.6]}>
        <meshStandardMaterial color="#f5f5f4" />
      </RoundedBox>
      <mesh position={[-3.6, 0.85, -2.6]}>
        <sphereGeometry args={[0.42, 10, 10]} />
        <meshStandardMaterial color="#a7f3d0" roughness={0.85} />
      </mesh>
      <mesh position={[-3.55, 1.15, -2.55]}>
        <sphereGeometry args={[0.28, 8, 8]} />
        <meshStandardMaterial color="#6ee7b7" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, pointer.x * 0.22 + Math.sin(t * 0.08) * 0.06, 0.06);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, pointer.y * -0.07, 0.06);
  });
  return <group ref={ref}>{children}</group>;
}

export default function AiOfficeScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [3.8, 2.9, 3.8], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        shadows={false}
      >
        <ambientLight intensity={0.92} />
        <directionalLight position={[4, 6, 3]} intensity={0.85} />
        <directionalLight position={[-3, 4, -2]} intensity={0.35} />
        <Rig>
          <Room />
          {/* 3 desks + agents */}
          <Desk position={[-1.9, 0, -1.2]} screenColor="#e0f2fe" />
          <AgentFigure position={[-1.9, 0, -0.55]} color="#e7e5e4" accent="#94a3b8" />
          <Desk position={[0, 0, -1.35]} screenColor="#fef3c7" />
          <AgentFigure position={[0, 0, -0.7]} color="#f5f5f4" accent="#a8a29e" />
          <Desk position={[1.9, 0, -1.2]} screenColor="#dcfce7" />
          <AgentFigure position={[1.9, 0, -0.55]} color="#e7e5e4" accent="#6ee7b7" />
          {/* foreground empty desk for depth */}
          <Desk position={[0, 0, 1.1]} screenColor="#f5f5f4" />
        </Rig>
        <ContactShadows position={[0, 0.015, 0]} opacity={0.22} scale={9} blur={2.2} far={4} color="#1c1917" />
        <Environment preset="apartment" />
        <fog attach="fog" args={["#fafaf9", 7, 13]} />
      </Canvas>
    </div>
  );
}
