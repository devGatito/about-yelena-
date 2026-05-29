import { motion } from 'motion/react'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'mobile'
  onClick?: () => void
}

const Button = ({ 
  href, 
  children, 
  variant = 'secondary', 
  size = 'default',
  onClick 
}: ButtonProps) => {
  const baseClasses = "rounded-full text-sm font-medium transition-colors"
  
  const variantClasses = {
    primary: "bg-(--color-primary) text-(--color-primary-foreground) hover:bg-accent",
    secondary: "text-(--color-foreground) hover:bg-surface-high"
  }
  
  const sizeClasses = {
    default: "px-4 py-2",
    mobile: "px-4 py-3"
  }
  
  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  )
}

export default Button
