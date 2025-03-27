export default function Modal({ children, toClose, className }) {
  return (
    <div className='Modal__overlay'>
      <div className='Modal'>
        <button className='CloseButton' onClick={() => toClose()}>
          ×
        </button>
        <div className={className}>{children}</div>
      </div>
    </div>
  )
}
