const Header = ({children}:{children:React.ReactNode}) => {
  return (
    <h2 className="text-4xl font-bold text-purple-400">
            {children}
        </h2>
  )
}

export default Header