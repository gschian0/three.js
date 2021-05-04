console.warn(
	"THREE.CopyShader: As part of the transition to ES6 Modules, the files in 'examples/js' were deprecated in May 2020 (r117) and will be deleted in December 2020 (r124). You can find more information about developing using ES6 Modules in https://threejs.org/docs/#manual/en/introduction/Installation."
);
/**
 * Full-screen textured quad shader
 */

THREE.CopyShader2 = {
	uniforms: {
		tDiffuse: { value: null },
		opacity: { value: 1.0 },
		buster: { value: 0 },
	},

	vertexShader: [
		"varying vec2 vUv;",

		"void main() {",

		"	vUv = uv;",
		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}",
	].join("\n"),

	fragmentShader: [
		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",
		"uniform float buster;",

		"varying vec2 vUv;",

		"void main() {",
		"vec2 coords = vUv;",
		"coords.x += 0.3*sin(11.0*coords.y+buster + sin(22.0*coords.x+buster))* 0.2 ;",
		"coords.y += cos(200.0*coords.y+buster)*0.1*sin(3.0*coords.y+buster + sin(2.0*coords.x+buster))* 0.2 ;",
		"	vec4 texel = texture2D( tDiffuse, coords );",
		// "texel.r += sin(texel.g);",
		// "texel.g -= cos(20.0*texel.b);",
		"	gl_FragColor = opacity*texel;",

		"}",
	].join("\n"),
};
