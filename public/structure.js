export const FramingStructure = (() => {
  const div = document.createElement('div')
  div.innerHTML = `
    
<svg width="262px" height="100px" viewBox="0 0 262 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <g id="structure-ref" transform="translate(-5.000000, -5.000000)" stroke="#B71B44" stroke-width="4">
        <path d="M7,40.317473 C22.8861857,31.0269891 39.6317003,23.8654577 57.2365436,18.8328787 C83.6438085,11.2840102 106.298633,7.84842583 131.220308,7.84842583 C156.141982,7.84842583 186.040128,4.93919382 220.678828,17.7852189 C255.317529,30.6312439 264.608879,53.3568863 264.608879,68.7203219 C264.608879,78.9626124 262.202986,90.1426957 257.391201,102.260572" id="Path"></path>
    </g>
</g>
</svg>
  `

  const path = div.querySelector('path')
  if (!path) {
    throw new Error('No path element found!')
  }

  const totalLength = path.getTotalLength()
  const rings = []
  for (let i = 0; i < 46; i++) {
    const pr = i / 45
    const l = pr * totalLength
    const pt = path.getPointAtLength(l)
    rings.push({ r: pt.x, y: 103 - pt.y, verts: /** @type {any[]} */ ([]) })
  }

  const threeWay = new Set([3, 8, 16])
  const faces = []
  for (const [k, ring] of rings.entries()) {
    if (k === 0) {
      // populate the 1st ring
      for (let i = 0; i < 24; i++) {
        ring.verts.push({
          theta: (i / 24) * Math.PI * 2,
          ring: k,
          index: i,
        })
      }
    } else {
      const lastRingVerts = rings[k - 1].verts
      const splits = threeWay.has(k) ? 3 : 2
      ring.verts.push({ ring: k, index: 0 })
      for (const [i, vert] of lastRingVerts.entries()) {
        for (let j = 1; j < splits; j++) {
          const vertA = vert
          const vertB = ring.verts[ring.verts.length - 1]
          let vertC
          if (i === lastRingVerts.length - 1 && j == splits - 1) {
            vertC = ring.verts[0]
          } else {
            vertC = { ring: k, index: i + 1 }
            ring.verts.push(vertC)
          }
          faces.push([vertA, vertB, vertC])
        }
        const baseTheta =
          lastRingVerts[0].theta - (1 / lastRingVerts.length / 2) * Math.PI * 2
        for (const [j, vert] of ring.verts.entries()) {
          vert.theta = baseTheta + (j / ring.verts.length) * Math.PI * 2
        }
        if (k === 1) {
          const vertA = lastRingVerts[(i + 1) % lastRingVerts.length]
          const vertB = ring.verts[ring.verts.length - 1]
          const vertC = vert
          faces.push([vertA, vertB, vertC])
        }
      }
    }
  }

  return {
    rings,
    faces,
  }
})()
