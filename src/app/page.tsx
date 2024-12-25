import Hero from "./components/layouts/Hero/Hero";
import ElegantFloatingCubes from "./components/3D/Cube/ElegantFloatingCubes";
import Stairs from "./components/Animation/StairsTransition/Stairs";

export default function Home() {
  return (
    <>
      <Stairs mode="wait">
        <div className="absolute inset-0 z-10 h-full w-full">
          <ElegantFloatingCubes />
        </div>
        <Hero />
      </Stairs>
    </>
  );
}
