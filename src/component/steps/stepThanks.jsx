import Thankimg from '../../assets/images/icon-thank-you.svg'
export default function Thank() {

  return (
    <div className='form-container flex align-center'>
      <div className="form-header flex-col justify-center align-center mb" style={{ margin: '4rem auto 0' }}>
        <img src={Thankimg} alt="" style={{ width: 'calc(5rem + 1vw)', height: 'calc(5rem + 1vw)' }} className='mb' />
        <h1>Thank you!</h1>
      </div>
      <p className='accent-text text-center thank-text '>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}