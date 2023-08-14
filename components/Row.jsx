import * as gameStyles from '/app/Home.module.css'




export const Row = ({ row, play }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell key={i} value={cell} columnIndex={i} play={play} />
      ))}
    </tr>
  )
}

const Cell = ({ value, columnIndex, play }) => {
  let color = 'whiteCircle'

  if (value === 1) { color = 'redCircle'} 
  else if (value === 2) { color = 'yellowCircle'}

  return (
    <td >
      <span
        className={gameStyles.gameCell}
        onClick={() => {
          play(columnIndex)
        }}
      >
        <div className={gameStyles[color]}></div>
      </span>
    </td>
  )
}

