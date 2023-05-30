// STYLE
import { Label, MultiStepRoot, Step, Steps } from './style'

// TYPE
export type MultiStepProps = {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepRoot>
      <Label>
        Step {currentStep} of {size}
      </Label>
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepRoot>
  )
}

MultiStep.displayName = 'MultiStep'
