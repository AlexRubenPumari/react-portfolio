export default function Flaps({ currentFlap, changeFlap, flaps, values }) {
  return (
    <>
      <button className='dUnresponsive'></button>
      <ul className='Flaps dResponsive'>
        {flaps.map((flap, index) => (
          <Flap
            current={currentFlap}
            item={flap}
            value={values[index]}
            callback={changeFlap}
          />
        ))}
      </ul>
    </>
  )
}
function Flap({ current, item, value, callback }) {
  return (
    <li
      className={`Flap ${current === value ? 'selected' : ''}`}
      onClick={() => callback(value)}
    >
      { item }
    </li>
  )
}
