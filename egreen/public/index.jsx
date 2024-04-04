import css from "./styles/Home.modules.css";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.Canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      />

      <Canvas />
    </div>
  );
}
