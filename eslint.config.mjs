import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript];

eslintConfig.push({
	rules: {
		"react-hooks/set-state-in-effect": "off",
		"react-hooks/immutability": "off",
		"react/jsx-no-comment-textnodes": "off",
	},
});

export default eslintConfig;
