import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**", "next-env.d.ts"] },
  ...coreWebVitals,
  ...typescript,
  eslintConfigPrettier,
  {
    rules: {
      // R3F (useFrame) は material/camera の mutate が公式の標準パターンで
      // React Compiler 由来の immutability ルールと構造的に衝突するため無効化
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
