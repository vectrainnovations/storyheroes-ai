import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
    variant?: "default" | "outline";
      size?: "default" | "lg";
      }

      const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
        ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
            const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
                
                    const variantStyles = {
                          default: "bg-purple-600 text-white hover:bg-purple-700",
                                outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                                    };
                                        
                                            const sizeStyles = {
                                                  default: "h-10 px-4 py-2",
                                                        lg: "h-11 px-8"
                                                            };

                                                                if (asChild) {
                                                                      return <>{props.children}</>;
                                                                          }

                                                                              return (
                                                                                    <button
                                                                                            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
                                                                                                    ref={ref}
                                                                                                            {...props}
                                                                                                                  />
                                                                                                                      );
                                                                                                                        }
                                                                                                                        );

                                                                                                                        Button.displayName = "Button";

                                                                                                                        export { Button };