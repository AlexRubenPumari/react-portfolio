export default function CirclePattern({
  rows,
  cols,
  className = '',
  strokeWidth,
  width = 1,
  gap,
}) {
  const circles = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      circles.push(
        <div
          key={`${row}-${col}`}
          style={{
            width: `${width}em`,
            aspectRatio: '1/1',
            borderRadius: '50%',
            border: `${strokeWidth}px solid currentColor`,
          }}
        />
      )
    }
  }
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${gap * 0.1}em`,
        width: `${(cols - 1) * (gap * 0.1) + width * cols}em`,
      }}>
      {circles}
    </div>
  )
}
