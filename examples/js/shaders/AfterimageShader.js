console.warn( "THREE.AfterimageShader: As part of the transition to ES6 Modules, the files in 'examples/js' were deprecated in May 2020 (r117) and will be deleted in December 2020 (r124). You can find more information about developing using ES6 Modules in https://threejs.org/docs/#manual/en/introduction/Installation." );
/**
 * Afterimage shader
 * I created this effect inspired by a demo on codepen:
 * https://codepen.io/brunoimbrizi/pen/MoRJaN?page=1&
 */

THREE.AfterimageShader = {

	uniforms: {

		"damp": { value: 0.96 },
		"tOld": { value: null },
		"tNew": { value: null }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

		"	vUv = uv;",
		"	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform float damp;",

		"uniform sampler2D tOld;",
		"uniform sampler2D tNew;",

		"varying vec2 vUv;",

		"vec4 when_gt( vec4 x, float y ) {",

		"	return max( sign( x - y ), 0.0 );",

		"}",

		"vec2 rotate(vec2 v, float a) {",
			"float s = sin(a);",
			"float c = cos(a);",
			"mat2 m = mat2(c, -s, s, c);",
			"return m * v;",
		"}",

		"void main() {",

		"	vec4 texelOld = texture2D( tOld, vUv );",
		"	vec4 texelNew = texture2D( tNew, vUv );",

		"	texelOld *= 0.95 * when_gt( texelOld, 0.001 );",

		"	gl_FragColor = max(texelNew, texelOld);",

		"}"

	].join( "\n" )

};
