/* eslint-disable */

function rotateX(m, angle) {
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var mv1 = m[1];
    var mv5 = m[5];
    var mv9 = m[9];

    m[1] = m[1] * c - m[2] * s;
    m[5] = m[5] * c - m[6] * s;
    m[9] = m[9] * c - m[10] * s;

    m[2] = m[2] * c + mv1 * s;
    m[6] = m[6] * c + mv5 * s;
    m[10] = m[10] * c + mv9 * s;
}

function rotateY(m, angle) {
    var c = Math.cos(angle);
    var s = Math.sin(angle);
    var mv0 = m[0];
    var mv4 = m[4];
    var mv8 = m[8];

    m[0] = c * m[0] + s * m[2];
    m[4] = c * m[4] + s * m[6];
    m[8] = c * m[8] + s * m[10];

    m[2] = c * m[2] - s * mv0;
    m[6] = c * m[6] - s * mv4;
    m[10] = c * m[10] - s * mv8;
}

function getRandom(value) {
    var floor = -value;
    return floor + Math.random() * value * 2;
}


// The amount of particles that will be created
var multiplier = 40000;

// Percentage of how long every particle will move
var duration = 0.9;

// Update value for every frame
var step = 0.01;

// Multiplier of the canvas resolution
var devicePixelRatio = 1;

// Every attribute must have:
// - Name (used in the shader)
// - Data (returns data for every particle)
// - Size (amount of variables in the data)
var attributes = [
    {
        name: 'aPositionStart',
        data: function data() { return [getRandom(0.5), getRandom(0.5), getRandom(0.5)]; },
        size: 3
    },

    {
        name: 'aPositionEnd',
        data: function data() { return [getRandom(5), getRandom(5), getRandom(5)]; },
        size: 3
    },

    {
        name: 'aColor',
        data: function data() { return [Math.random() + 0.5, Math.random() + 0.5, Math.random() + 0.5, 1]; },
        size: 3
    },

    {
        name: 'aOffset',
        data: function data(i) { return [i * ((1 - duration) / (multiplier - 1))]; },
        size: 1
    }];



// Every uniform must have:
// - Key (used in the shader)
// - Type (what kind of value)
// - Value (based on the type)
var uniforms = {
    uProgress: {
        type: 'float',
        value: 0.0
    }
};



// Vertex shader used to calculate the position
var vertex = '\n  attribute vec3 aPositionStart;\n  attribute vec3 aControlPointOne;  \n  attribute vec3 aControlPointTwo;  \n  attribute vec3 aPositionEnd;  \n  attribute vec3 aPosition;  \n  attribute vec3 aColor;  \n  attribute float aOffset;  \n\n  uniform float uProgress;\n  uniform mat4 uProjectionMatrix;\n  uniform mat4 uModelMatrix;\n  uniform mat4 uViewMatrix;\n\n  varying vec3 vColor;\n\n  float easeInOutQuint(float t){\n    return t < 0.5 ? 16.0 * t * t * t * t * t : 1.0 + 16.0 * (--t) * t * t * t * t;\n  }\n\n  void main(){\n    float tProgress = easeInOutQuint(min(1.0, max(0.0, (uProgress - aOffset)) / ' + duration + '));\n    vec3 newPosition = mix(aPositionStart, aPositionEnd, tProgress);\n    gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(newPosition + aPosition, 1.0);\n    gl_PointSize = 4.0;\n    vColor = aColor;\n  }\n';

// Fragment shader to draw the colored pixels to the canvas
var fragment = '\n  precision mediump float;\n\n  varying vec3 vColor;\n\n  void main(){\n    gl_FragColor = vec4(vColor, 1.0);\n  }\n';

// Boolean value to switch direction
var forward = true;

// Create the renderer
var phenomenon = new Phenomenon({
    settings: {
        devicePixelRatio: devicePixelRatio,
        position: { x: 0, y: 0, z: 3 },
        shouldRender: true,
        uniforms: uniforms,
        onRender: function onRender(r) {
            var _r$uniforms =
                r.uniforms, uProgress = _r$uniforms.uProgress, uModelMatrix = _r$uniforms.uModelMatrix;
            uProgress.value += forward ? step : -step;

            rotateY(uModelMatrix.value, step * 2);
            // rotateX(uModelMatrix.value, step * 2);
        }
    }
});



// Add an instance to the renderer
phenomenon.add('cube', {
    attributes: attributes,
    multiplier: multiplier,
    vertex: vertex,
    fragment: fragment
});