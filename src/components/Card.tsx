import { motion } from 'motion/react'

interface CardProps {
  variant?: 'default' | 'primary' | 'surface' | 'gradient'
  size?: 'default' | 'compact' | 'large'
  rounded?: 'default' | 'full' | 'none'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

const Card = ({
  variant = 'default',
  size = 'default',
  rounded = 'default',
  shadow = 'md',
  hover = false,
  children,
  className = '',
  onClick,
  href
}: CardProps) => {
  const variantClasses = {
    default: 'bg-surface border border-line',
    primary: 'bg-primary text-primary-foreground',
    surface: 'bg-surface-base',
    gradient: 'bg-gradient-to-br from-primary/20 to-accent/20 border border-line'
  }

  const sizeClasses = {
    default: 'p-6',
    compact: 'p-4',
    large: 'p-8'
  }

  const roundedClasses = {
    default: 'rounded-2xl',
    full: 'rounded-3xl',
    none: 'rounded-none'
  }

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  }

  const baseClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${shadowClasses[shadow]}
    transition-all duration-200
  `

  const MotionComponent = motion[onClick || href ? 'a' : 'div']

  return (
    <MotionComponent
      className={`${baseClasses} ${className}`}
      href={href}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -4 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      {children}
    </MotionComponent>
  )
}

interface CardHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

const CardHeader = ({ eyebrow, title, description, className = '' }: CardHeaderProps) => {
  return (
    <div className={`mb-4 ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  )
}

interface CardMediaProps {
  src: string
  alt: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  className?: string
}

const CardMedia = ({ src, alt, aspectRatio = 'landscape', className = '' }: CardMediaProps) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[16/9]'
  }

  return (
    <div className={`mb-4 overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

interface CardActionsProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center' | 'right'
}

const CardActions = ({ children, className = '', align = 'left' }: CardActionsProps) => {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  }

  return (
    <div className={`mt-4 flex items-center gap-2 ${alignClasses[align]} ${className}`}>
      {children}
    </div>
  )
}

interface CardBadgeProps {
  children: React.ReactNode
  className?: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const CardBadge = ({ children, className = '', position = 'top-right' }: CardBadgeProps) => {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  }

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
        {children}
      </span>
    </div>
  )
}

Card.Header = CardHeader
Card.Media = CardMedia
Card.Actions = CardActions
Card.Badge = CardBadge

export default Card
