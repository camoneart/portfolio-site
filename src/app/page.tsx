import Hero from "./components/layouts/Hero/Hero";
import ElegantFloatingCubes from "./components/3D/Cube/ElegantFloatingCubes";
// import StairsTransition from "./components/Animation/StairsTransition/StairsTransition";

export default function Home() {
  return (
    <>
      {/* <StairsTransition> */}
        <div className="absolute inset-0 z-10 h-full w-full">
          <ElegantFloatingCubes />
        </div>
        <Hero />
      {/* </StairsTransition> */}
    </>
  );
}
