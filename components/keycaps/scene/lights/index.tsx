export function Lights() {
  return (
    <>
      <ambientLight intensity={2.8} />
      <directionalLight position={[0, 3, 0]} color="#fd69f6" intensity={3} />
      <directionalLight position={[-3, 3, 0]} color="#fd69f6" intensity={3} />
      <directionalLight position={[3, 3, 0]} color="#fd69f6" intensity={3} />
      <directionalLight position={[0, 0, 3]} color="#f8e2f7" intensity={0.2} />
    </>
  );
}
