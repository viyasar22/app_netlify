

const Footer = () => {
  const today=new Date();
  return (
    <div className='footer'><p>Copyright &copy; {today.getFullYear()}
    </p>
    </div>
  )
}

export default Footer