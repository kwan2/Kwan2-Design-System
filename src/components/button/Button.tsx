import { cva, type RecipeVariantProps } from "../../../styled-system/css"

type ButtonProps = React.PropsWithChildren<RecipeVariantProps<typeof button>>

const button = cva({
  base: {
    px: "8px",
    py: "4px",
    fontWeight: "semibold",
    fontSize: "16px",
    color: "gray.700",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    transition: "all 0.15s ease-in-out",
    _hover: { color: "gray.900" },
  },
  variants: {
    active: {
      true: {
        color: "black",
        borderBottom: "2px solid black",
      },
      false: {
        borderBottom: "2px solid transparent",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const Button = ({ children, active }: ButtonProps) => {
  return <button className={button({ active })}>{children}</button>
}
