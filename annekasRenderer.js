// -------------------------------------------------------

/**
 * 
 * @param {UINT8 Array} frequencyArray 
 * @param {canvas context} ctx 
 * @param {number} width 
 * @param {number} height 
 */

 function render(frequencyArray, ctx, width, height) {
	// Clear the canvas
	ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
	ctx.fillRect(0, 0, width, height)
	ctx.fill()

	// calculate the number of lines and the step between each line
	const bars = frequencyArray.length 
	const colorStep = 60 / bars

	ctx.lineWidth = 3

  const halfW = width * 0.5
  const halfH = height * 0.5

  const qx = width * 0.25
  const qy = height * 0.25

	frequencyArray.forEach((f, i) => {

    const w = f / 255 * halfW
    const h = f / 255 * halfH

    const cw = f / 255 * width
    const ch = f / 255 * height

    const x1 = qx - w * 0.5
    const y1 = qy - h * 0.5
    const x2 = (qx * 3) - w * 0.5
    const y2 = (qy * 3) - h * 0.5

    const x3 = halfW - cw * 0.5
    const y3 = halfH - ch * 0.5


    ctx.beginPath()

    ctx.rect(x1, y1, w, h)
    ctx.rect(x2, y1, w, h)
    ctx.rect(x1, y2, w, h)
    ctx.rect(x2, y2, w, h)
    ctx.rect(x3, y3, cw, ch)


    ctx.strokeStyle = `hsla(${colorStep * i}, 100%, 80%, 0.3)`
    ctx.stroke()
	})
}

export default render